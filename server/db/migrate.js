import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Connection string for PostgreSQL (without database name)
const connectionStringWithoutDB = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

// Connection string for the target database
const connectionString = `${connectionStringWithoutDB}/${process.env.DB_NAME}`;

async function setupDatabase() {
  console.log("Checking if database exists...");

  const pgClient = postgres(connectionStringWithoutDB);

  try {
    // Check if database exists
    const dbExists = await pgClient`
      SELECT 1 FROM pg_database WHERE datname = ${process.env.DB_NAME}
    `;

    // Create database if it doesn't exist
    if (dbExists.length === 0) {
      console.log(`Creating database ${process.env.DB_NAME}...`);
      await pgClient`CREATE DATABASE ${process.env.DB_NAME}`;
      console.log("Database created successfully.");
    } else {
      console.log(`Database ${process.env.DB_NAME} already exists.`);
    }
  } catch (error) {
    console.error("Error creating database:", error);
    throw error;
  } finally {
    await pgClient.end();
  }

  // Run migrations on the target database
  console.log("Running migrations...");
  const migrationClient = postgres(connectionString, { max: 1 });

  try {
    const db = drizzle(migrationClient);

    // Run migrations
    await migrate(db, { migrationsFolder: path.join(__dirname, "migrations") });

    console.log("Migrations completed successfully.");
  } catch (error) {
    console.error("Error running migrations:", error);
    throw error;
  } finally {
    await migrationClient.end();
  }
}

setupDatabase()
  .then(() => {
    console.log("Database setup completed successfully.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Database setup failed:", error);
    process.exit(1);
  });
