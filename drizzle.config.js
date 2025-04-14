/** @type { import("drizzle-kit").Config } */
module.exports = {
  schema: "./server/db/schema.js",
  out: "./server/db/migrations",
  driver: "pg",
  dbCredentials: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "fundi_dsm",
  },
};
