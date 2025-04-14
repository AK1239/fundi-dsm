import React, { useState, useEffect } from "react";
import FundiDetail from "./FundiDetail";
import { providerService } from "../services/api";

const FundiList = ({ category, onBack }) => {
  const [selectedFundi, setSelectedFundi] = useState(null);
  const [fundis, setFundis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        const response = await providerService.getProvidersByCategory(category);
        if (response.success) {
          // Map response data to match the frontend expected structure
          const mappedFundis = response.data.map((provider) => ({
            id: provider.id,
            name: provider.name,
            serviceType: provider.serviceType,
            image:
              provider.images && provider.images.length > 0
                ? `${import.meta.env.VITE_API_URL || "http://localhost:5001"}/uploads/${
                    provider.images[0].imagePath
                  }`
                : `https://placehold.co/600x400/3975CD/FFFFFF?text=${encodeURIComponent(
                    provider.name
                  )}`,
            images: provider.images || [],
            rating: typeof provider.rating === "number" ? provider.rating : 4.5,
            reviewCount: provider.reviewCount || 10,
            location: provider.location,
            phoneNumber: provider.phoneNumber,
            instagramLink: provider.instagramLink || "https://www.instagram.com/",
            facebookLink: provider.facebookLink || "https://www.facebook.com/",
            twitterLink: provider.twitterLink || "https://twitter.com/",
            shortDescription: provider.description,
            fullDescription: provider.description,
            servicesProvided: provider.servicesProvided || provider.serviceType,
          }));
          setFundis(mappedFundis);
        } else {
          setError("Failed to fetch providers");
        }
      } catch (err) {
        console.error("Error fetching fundis:", err);
        setError("An error occurred while fetching providers");
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [category]);

  const handleFundiSelect = (fundi) => {
    setSelectedFundi(fundi);
  };

  const handleBackToList = () => {
    setSelectedFundi(null);
  };

  if (selectedFundi) {
    return <FundiDetail fundi={selectedFundi} onBack={handleBackToList} />;
  }

  // Sort fundis by rating (highest first)
  const sortedFundis = [...fundis].sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={onBack}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Categories
            </button>
          </div>
          <div className="text-right">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {fundis.length} fundis available
            </span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
          <p className="mt-4 text-lg text-gray-600">
            Find the best {fundis.length > 0 ? fundis[0]?.serviceType : ""} in Tanzania
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : sortedFundis.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No service providers found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedFundis.map((fundi) => (
              <div
                key={fundi.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
                onClick={() => handleFundiSelect(fundi)}
              >
                <div className="h-48 bg-gray-200 relative">
                  <img src={fundi.image} alt={fundi.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white text-xl font-semibold">{fundi.name}</h3>
                    <p className="text-white text-sm opacity-90">{fundi.serviceType}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <span className="text-lg font-semibold text-gray-800 mr-2">
                        {typeof fundi.rating === "number" ? fundi.rating.toFixed(1) : "0.0"}
                      </span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-5 h-5 ${
                              star <= (typeof fundi.rating === "number" ? fundi.rating : 0)
                                ? "text-yellow-400"
                                : star <=
                                  (typeof fundi.rating === "number" ? fundi.rating : 0) + 0.5
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">({fundi.reviewCount} reviews)</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {fundi.shortDescription}
                  </p>
                  <button
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFundiSelect(fundi);
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FundiList;
