import axios from "axios";

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Provider endpoints
export const providerService = {
  // Get all providers
  getAllProviders: async () => {
    try {
      const response = await apiClient.get("/providers");
      return response.data;
    } catch (error) {
      console.error("Error fetching all providers:", error);
      throw error;
    }
  },

  // Get providers by category
  getProvidersByCategory: async (category) => {
    try {
      const response = await apiClient.get(`/providers/category/${category}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching providers for category ${category}:`, error);
      throw error;
    }
  },

  // Get provider by ID
  getProviderById: async (id) => {
    try {
      const response = await apiClient.get(`/providers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching provider with ID ${id}:`, error);
      throw error;
    }
  },

  // Upload provider with images
  registerProvider: async (formData) => {
    try {
      const response = await apiClient.post("/providers", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error registering provider:", error);
      throw error;
    }
  },
};

// Review endpoints
export const reviewService = {
  // Get reviews for a provider
  getProviderReviews: async (providerId) => {
    try {
      const response = await apiClient.get(`/reviews/provider/${providerId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching reviews for provider ${providerId}:`, error);
      throw error;
    }
  },

  // Submit a review for a provider
  submitReview: async (reviewData) => {
    try {
      const response = await apiClient.post("/reviews", reviewData);
      return response.data;
    } catch (error) {
      console.error("Error submitting review:", error);
      throw error;
    }
  },
};

export default apiClient;
