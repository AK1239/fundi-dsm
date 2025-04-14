import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import db from "../db/index.js";
import { providers, providerImages } from "../db/schema.js";
import { eq } from "drizzle-orm";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadPath = process.env.UPLOAD_PATH || join(dirname(dirname(__dirname)), "uploads");

// Configure storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Filter for accepting only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// GET all providers with their images
router.get("/", async (req, res) => {
  try {
    // Get all providers
    const allProviders = await db.select().from(providers);

    // For each provider, get their images
    const providersWithImages = await Promise.all(
      allProviders.map(async (provider) => {
        const images = await db
          .select()
          .from(providerImages)
          .where(eq(providerImages.providerId, provider.id));

        return {
          ...provider,
          images: images.map((img) => ({
            id: img.id,
            imagePath: img.imagePath,
          })),
          // Adding these fields for compatibility with the frontend
          rating: 4.5, // Default rating, you could add a ratings table later
          reviewCount: 10, // Default review count
        };
      })
    );

    res.status(200).json({
      success: true,
      data: providersWithImages,
    });
  } catch (error) {
    console.error("Error fetching providers:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch providers",
      error: error.message,
    });
  }
});

// GET providers by service type (category)
router.get("/category/:serviceType", async (req, res) => {
  try {
    const { serviceType } = req.params;

    // Get providers by service type
    const categoryProviders = await db
      .select()
      .from(providers)
      .where(eq(providers.serviceType, serviceType));

    // For each provider, get their images
    const providersWithImages = await Promise.all(
      categoryProviders.map(async (provider) => {
        const images = await db
          .select()
          .from(providerImages)
          .where(eq(providerImages.providerId, provider.id));

        return {
          ...provider,
          images: images.map((img) => ({
            id: img.id,
            imagePath: img.imagePath,
          })),
          // Adding these fields for compatibility with the frontend
          rating: 4.5, // Default rating, you could add a ratings table later
          reviewCount: 10, // Default review count
        };
      })
    );

    res.status(200).json({
      success: true,
      data: providersWithImages,
    });
  } catch (error) {
    console.error("Error fetching providers by category:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch providers by category",
      error: error.message,
    });
  }
});

// GET a single provider by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Get provider by ID
    const [provider] = await db
      .select()
      .from(providers)
      .where(eq(providers.id, parseInt(id)));

    if (!provider) {
      return res.status(404).json({
        success: false,
        message: "Provider not found",
      });
    }

    // Get provider images
    const images = await db
      .select()
      .from(providerImages)
      .where(eq(providerImages.providerId, provider.id));

    const providerWithImages = {
      ...provider,
      images: images.map((img) => ({
        id: img.id,
        imagePath: img.imagePath,
      })),
      // Adding these fields for compatibility with the frontend
      rating: 4.5, // Default rating, you could add a ratings table later
      reviewCount: 10, // Default review count
    };

    res.status(200).json({
      success: true,
      data: providerWithImages,
    });
  } catch (error) {
    console.error("Error fetching provider:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch provider",
      error: error.message,
    });
  }
});

// Route to register a new provider
router.post("/", upload.array("images", 5), async (req, res) => {
  try {
    const {
      name,
      phoneNumber,
      email,
      location,
      serviceType,
      experience,
      description,
      facebookLink,
      instagramLink,
      twitterLink,
      whatsappNumber,
    } = req.body;

    // Insert provider into database using Drizzle ORM
    const [newProvider] = await db
      .insert(providers)
      .values({
        name,
        phoneNumber,
        email: email || null,
        location,
        serviceType,
        experience,
        description,
        facebookLink: facebookLink || null,
        instagramLink: instagramLink || null,
        twitterLink: twitterLink || null,
        whatsappNumber: whatsappNumber || null,
      })
      .returning({ id: providers.id });

    // Insert images if they exist
    if (req.files && req.files.length > 0) {
      const imageInserts = req.files.map((file) => ({
        providerId: newProvider.id,
        imagePath: file.filename,
      }));

      await db.insert(providerImages).values(imageInserts);
    }

    res.status(201).json({
      success: true,
      message: "Provider registered successfully",
      providerId: newProvider.id,
    });
  } catch (error) {
    // Delete uploaded files in case of error
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        try {
          fs.unlinkSync(file.path);
        } catch (err) {
          console.error("Error deleting file:", err);
        }
      }
    }

    console.error("Error registering provider:", error);
    res.status(500).json({
      success: false,
      message: "Failed to register provider",
      error: error.message,
    });
  }
});

export default router;
