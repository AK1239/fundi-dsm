FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY server/ ./server/
COPY .env ./

# Create uploads directory
RUN mkdir -p uploads

# Expose the port the app runs on
EXPOSE 5001

# Command to run the application
CMD ["node", "server/index.js"] 