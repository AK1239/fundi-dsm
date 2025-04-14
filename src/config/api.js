// API configuration with environment variables

// Get the base URL from environment or default to localhost
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";

// API endpoints
export const API_ENDPOINTS = {
  PROVIDERS: `${API_BASE_URL}/api/providers`,
};

export default API_BASE_URL;
