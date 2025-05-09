import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";
import providersRoutes from "./routes/providers.js";
import reviewsRoutes from "./routes/reviews.js";
import db from "./db/index.js";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import path from "path";

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Create uploads directory if it doesn't exist
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadPath = process.env.UPLOAD_PATH || join(__dirname, "../uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(uploadPath));

// Routes
app.use("/api/providers", providersRoutes);
app.use("/api/reviews", reviewsRoutes);

// Migration endpoint with secret key protection
app.post("/api/migrate", async (req, res) => {
  const { secret } = req.body;

  // Verify secret key - this should be set in Render env vars
  if (secret !== process.env.MIGRATION_SECRET) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Setup database connection for migration
    const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    const migrationClient = postgres(connectionString, { max: 1 });
    const db = drizzle(migrationClient);

    // Run migrations
    await migrate(db, { migrationsFolder: path.join(__dirname, "db/migrations") });

    await migrationClient.end();

    return res.status(200).json({ message: "Migrations completed successfully" });
  } catch (error) {
    console.error("Migration error:", error);
    return res.status(500).json({ message: "Migration failed", error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : {},
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
