import React, { useState } from "react";
import FundiDetail from "./FundiDetail";

const FundiList = ({ category, onBack }) => {
  const [selectedFundi, setSelectedFundi] = useState(null);

  // Mock data for fundis in each category (in a real app, this would come from an API)
  const fundiData = {
    "Fundi Simu": generateFundis("Fundi Simu", "Phone Technician", 8),
    "Fundi Gari": generateFundis("Fundi Gari", "Car Mechanic", 10),
    "Fundi Kompyuta": generateFundis("Fundi Kompyuta", "Computer Technician", 7),
    "Fundi TV": generateFundis("Fundi TV", "TV Technician", 6),
    "Mshona Nguo": generateFundis("Mshona Nguo", "Tailor", 12),
    "Fundi Saa": generateFundis("Fundi Saa", "Watch Repair", 5),
    "Fundi Maturubai": generateFundis("Fundi Maturubai", "Canopy/Tent Fixer", 4),
    "Fundi Seremala": generateFundis("Fundi Seremala", "Carpenter", 9),
    "Fundi Tiles": generateFundis("Fundi Tiles", "Tile Fixer", 6),
    "Fundi Bomba": generateFundis("Fundi Bomba", "Plumber", 11),
    "Fundi Mpaka Rangi": generateFundis("Fundi Mpaka Rangi", "Painter", 7),
  };

  const fundis = fundiData[category] || [];

  // Sort fundis by rating (highest first)
  const sortedFundis = [...fundis].sort((a, b) => b.rating - a.rating);

  const handleFundiSelect = (fundi) => {
    setSelectedFundi(fundi);
  };

  const handleBackToList = () => {
    setSelectedFundi(null);
  };

  if (selectedFundi) {
    return <FundiDetail fundi={selectedFundi} onBack={handleBackToList} />;
  }

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
            Find the best {fundis[0]?.serviceType} in Tanzania
          </p>
        </div>

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
                      {fundi.rating.toFixed(1)}
                    </span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-5 h-5 ${
                            star <= fundi.rating
                              ? "text-yellow-400"
                              : star <= fundi.rating + 0.5
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
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{fundi.shortDescription}</p>
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
      </div>
    </div>
  );
};

// Helper function to generate mock data
function generateFundis(categoryName, serviceType, count) {
  const locations = [
    "Kinondoni, Dar es Salaam",
    "Ilala, Dar es Salaam",
    "Temeke, Dar es Salaam",
    "Ubungo, Dar es Salaam",
    "Kigamboni, Dar es Salaam",
    "Mwanza",
    "Arusha",
    "Mbeya",
    "Dodoma",
    "Tanga",
  ];

  const services = {
    "Fundi Simu": [
      "Phone Screen Replacement",
      "Battery Replacement",
      "Software Issues",
      "Water Damage Repair",
      "Charging Port Repair",
      "All Phone Issues",
    ],
    "Fundi Gari": [
      "Engine Repair",
      "Brake Service",
      "Suspension Work",
      "Electrical Systems",
      "Tire Service",
      "Full Car Maintenance",
    ],
    "Fundi Kompyuta": [
      "Hardware Repair",
      "Software Installation",
      "Virus Removal",
      "Data Recovery",
      "Network Setup",
      "All Computer Services",
    ],
    "Fundi TV": [
      "Screen Repair",
      "Power Issues",
      "Channel Setup",
      "Speaker Repair",
      "Smart TV Services",
      "All TV Repairs",
    ],
    "Mshona Nguo": [
      "Custom Tailoring",
      "Alterations",
      "Traditional Wear",
      "Western Clothing",
      "Professional Uniforms",
      "All Clothing Services",
    ],
    "Fundi Saa": [
      "Watch Repair",
      "Battery Replacement",
      "Band Replacement",
      "Water Resistance Testing",
      "Vintage Watch Repair",
      "All Watch Services",
    ],
    "Fundi Maturubai": [
      "Tent Setup",
      "Canopy Repair",
      "Custom Tent Making",
      "Event Setup",
      "Waterproofing",
      "All Tent Services",
    ],
    "Fundi Seremala": [
      "Furniture Making",
      "Wood Repair",
      "Cabinet Installation",
      "Doors and Windows",
      "Custom Woodwork",
      "All Carpentry Services",
    ],
    "Fundi Tiles": [
      "Tile Installation",
      "Tile Repair",
      "Bathroom Tiling",
      "Kitchen Tiling",
      "Floor Leveling",
      "All Tile Services",
    ],
    "Fundi Bomba": [
      "Pipe Repair",
      "Toilet Installation",
      "Sink Installation",
      "Drainage Issues",
      "Water Heater Services",
      "All Plumbing Services",
    ],
    "Fundi Mpaka Rangi": [
      "Interior Painting",
      "Exterior Painting",
      "Wall Preparation",
      "Commercial Painting",
      "Special Finishes",
      "All Painting Services",
    ],
  };

  const shortDescriptions = {
    "Fundi Simu": [
      "Experienced phone technician specializing in all smartphone brands.",
      "Fast and reliable phone repair with 5+ years of experience.",
      "Affordable phone repair services with quality parts and warranty.",
      "Expert in both hardware and software issues for all phones.",
      "Mobile repair service - we come to your location.",
    ],
    "Fundi Gari": [
      "Professional mechanic with 10+ years of experience with all car models.",
      "Specialized in Japanese and European car repairs.",
      "Emergency roadside assistance and full garage services.",
      "Fair pricing and transparent car repair diagnostics.",
      "Certified mechanic offering quality service with warranty.",
    ],
    "Fundi Kompyuta": [
      "Computer technician with expertise in both hardware and software.",
      "Virus removal, data recovery, and system optimization specialist.",
      "Business IT support and network solutions provider.",
      "Fast computer repairs with same-day service available.",
      "Affordable computer repair with no hidden fees.",
    ],
  };

  // Generate generic descriptions for categories that don't have specific ones
  const genericDescriptions = [
    `Professional ${serviceType} with years of experience.`,
    `Reliable ${serviceType} offering quality service at fair prices.`,
    `Expert ${serviceType} available for all your needs.`,
    `Trusted local ${serviceType} with excellent customer service.`,
    `Skilled ${serviceType} providing fast and efficient solutions.`,
  ];

  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    // Generate a placeholder image from placehold.co
    const image = `https://placehold.co/600x400/3975CD/FFFFFF?text=${encodeURIComponent(
      categoryName
    )}`;

    // Generate a random rating between 3 and 5
    const rating = Math.random() * 2 + 3;

    // Generate a random number of reviews between 5 and 100
    const reviewCount = Math.floor(Math.random() * 96) + 5;

    // Get category-specific descriptions or fall back to generic ones
    const descriptions = shortDescriptions[categoryName] || genericDescriptions;

    return {
      id,
      name: `${categoryName} ${id}`,
      serviceType,
      location: locations[Math.floor(Math.random() * locations.length)],
      phoneNumber: `+255 ${Math.floor(Math.random() * 900 + 100)} ${Math.floor(
        Math.random() * 900 + 100
      )} ${Math.floor(Math.random() * 900 + 100)}`,
      instagramLink: "https://www.instagram.com/",
      facebookLink: "https://www.facebook.com/",
      twitterLink: "https://twitter.com/",
      image,
      rating,
      reviewCount,
      servicesProvided:
        services[categoryName][Math.floor(Math.random() * services[categoryName].length)],
      shortDescription: descriptions[Math.floor(Math.random() * descriptions.length)],
      fullDescription: `${categoryName} ${id} is a professional ${serviceType} with extensive experience in the field. Specializing in ${
        services[categoryName][Math.floor(Math.random() * services[categoryName].length)]
      }, they provide reliable, high-quality service at competitive prices. With a strong reputation for excellent customer service and attention to detail, they have built a loyal customer base in ${
        locations[Math.floor(Math.random() * locations.length)]
      }.`,
    };
  });
}

export default FundiList;
