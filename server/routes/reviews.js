import express from "express";
import db from "../db/index.js";
import { reviews, providers } from "../db/schema.js";
import { eq, desc } from "drizzle-orm";

const router = express.Router();

// GET all reviews for a specific provider
router.get("/provider/:providerId", async (req, res) => {
  try {
    const { providerId } = req.params;

    // Validate that provider exists
    const [provider] = await db
      .select()
      .from(providers)
      .where(eq(providers.id, parseInt(providerId)));

    if (!provider) {
      return res.status(404).json({
        success: false,
        message: "Provider not found",
      });
    }

    // Get reviews for this provider, newest first
    const providerReviews = await db
      .select()
      .from(reviews)
      .where(eq(reviews.providerId, parseInt(providerId)))
      .orderBy(desc(reviews.date));

    res.status(200).json({
      success: true,
      data: providerReviews,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  try {
    const { providerId, name, rating, comment } = req.body;

    // Validate required fields
    if (!providerId || !name || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Validate rating is between 1-5
    const ratingValue = parseInt(rating);
    if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    // Validate that provider exists
    const [provider] = await db
      .select()
      .from(providers)
      .where(eq(providers.id, parseInt(providerId)));

    if (!provider) {
      return res.status(404).json({
        success: false,
        message: "Provider not found",
      });
    }

    // Insert the review
    const [newReview] = await db
      .insert(reviews)
      .values({
        providerId: parseInt(providerId),
        name,
        rating: ratingValue,
        comment,
        date: new Date(),
      })
      .returning();

    // Get all reviews for this provider
    const allReviews = await db
      .select()
      .from(reviews)
      .where(eq(reviews.providerId, parseInt(providerId)));

    // Calculate average rating and count manually
    const totalReviews = allReviews.length;
    const averageRating =
      totalReviews > 0
        ? allReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
        : 0;

    // Update the provider's rating and review count
    await db
      .update(providers)
      .set({
        rating: averageRating,
        reviewCount: totalReviews,
        updatedAt: new Date(),
      })
      .where(eq(providers.id, parseInt(providerId)));

    res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      data: newReview,
    });
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit review",
      error: error.message,
    });
  }
});

export default router;
