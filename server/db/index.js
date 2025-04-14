import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";
import * as schema from "./schema.js";

dotenv.config();

// Connection string
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// Create postgres client
const client = postgres(connectionString);

// Create drizzle instance
const db = drizzle(client, { schema });

// Test connection
try {
  console.log("Testing database connection...");
  await client`SELECT 1`;
  console.log("Database connected successfully");
} catch (err) {
  console.error("Error connecting to database:", err);
}

export default db;
