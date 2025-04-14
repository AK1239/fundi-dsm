# FundiDSM

FundiDSM is a platform connecting service providers with customers in Dar es Salaam.

## Features

- Service provider registration portal
- Image uploads for showcasing work
- PostgreSQL database with Drizzle ORM
- RESTful API with Express

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or newer)
- npm or yarn
- PostgreSQL database

## Setup Instructions

1. **Clone the repository**

   ```
   git clone <repository-url>
   cd fundi-dsm
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory with the following variables:

   ```
   PORT=5001
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=fundi_dsm
   UPLOAD_PATH=./uploads
   VITE_API_BASE_URL=http://localhost:5001
   ```

   Update the values to match your PostgreSQL configuration.

4. **Set up the database**

   Generate Drizzle migrations (if changes are made to the schema):

   ```
   npm run db:generate
   ```

   Initialize/update the database with migrations:

   ```
   npm run db:migrate
   ```

5. **Start the development server**

   Start the frontend:

   ```
   npm run dev
   ```

   In a separate terminal, start the backend:

   ```
   npm run dev:server
   ```

6. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

- `src/` - Frontend React application
  - `components/` - React components including JoinUsPage
  - `config/` - Configuration files including API endpoints
- `server/` - Backend Express application
  - `db/` - Database configuration and Drizzle schema
    - `migrations/` - SQL migration files for Drizzle
  - `routes/` - API routes for handling providers

## API Endpoints

- **POST /api/providers** - Register a new service provider

## Tech Stack

- React
- Express.js
- PostgreSQL
- Drizzle ORM
- Axios
- TailwindCSS
