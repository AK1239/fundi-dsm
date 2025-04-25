import React, { useState } from "react";

const HeroSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="absolute inset-0 z-0 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What are you looking for today?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Find the perfect technician or repair professional in Tanzania for any service you need.
          </p>

          <form onSubmit={handleSearch} className="w-full max-w-2xl">
            <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a service or technician..."
                className="flex-grow px-6 py-4 focus:outline-none border-0"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium transition-colors cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>

          <div className="mt-8 text-sm text-gray-500">
            <p>Popular searches: Plumber, Electrician, Phone Repair, Carpenter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
