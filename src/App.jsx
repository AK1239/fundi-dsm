import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoryGrid from "./components/CategoryGrid";
import FundiList from "./components/FundiList";
import AboutUs from "./components/AboutUs";
import FAQPage from "./components/FAQPage";
import JoinUsPage from "./components/JoinUsPage";
import ServicesPage from "./components/ServicesPage";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    // When user selects a category, reset the search query
    setSearchQuery("");
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const HomePage = () => (
    <>
      {selectedCategory ? (
        <FundiList category={selectedCategory} onBack={handleBackToCategories} />
      ) : (
        <>
          <HeroSection onSearch={handleSearch} />
          <CategoryGrid searchQuery={searchQuery} onCategorySelect={handleCategorySelect} />
        </>
      )}
    </>
  );

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <HomePage />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/join" element={<JoinUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
