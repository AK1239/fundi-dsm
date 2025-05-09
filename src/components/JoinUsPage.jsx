import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { providerService } from "../services/api";
import toast, { Toaster } from "react-hot-toast";

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
    serviceType: "",
    experience: "",
    description: "",
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
    whatsappNumber: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const serviceTypes = [
    "Fundi Umeme",
    "Fundi Bomba",
    "Fundi Seremala",
    "Fundi Magari",
    "Fundi Rangi",
    "Fundi Bustani",
    "Fundi Kompyuta",
    "Fundi AC",
    "Fundi Ujenzi",
    "Fundi Chuma",
    "Mshona Nguo",
    "Fundi Tiles",
    "Fundi Dish/Antenna",
    "Fundi Simu",
    "Fundi TV",
    "Fundi Network/Telecommunication",
    "Fundi Vigae/Paving Blocks",
    "Fundi Maturubai/Tent",
    "Fundi Saa/Watch Repair",
    "Nyingine",
  ];

  const locations = ["Kinondoni", "Ilala", "Temeke", "Ubungo", "Kigamboni", "Sehemu Nyingine"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      // Limit to 5 images
      const selectedFiles = filesArray.slice(0, 5);

      setSelectedImages(selectedFiles);

      // Create preview URLs
      const newPreviewImages = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviewImages((prevImages) => {
        // Revoke previous object URLs to avoid memory leaks
        prevImages.forEach((url) => URL.revokeObjectURL(url));
        return newPreviewImages;
      });
    }
  };

  const removeImage = (index) => {
    const newPreviewImages = [...previewImages];
    const newSelectedImages = [...selectedImages];

    // Revoke the URL
    URL.revokeObjectURL(newPreviewImages[index]);

    // Remove from arrays
    newPreviewImages.splice(index, 1);
    newSelectedImages.splice(index, 1);

    setPreviewImages(newPreviewImages);
    setSelectedImages(newSelectedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Show loading toast
    const loadingToast = toast.loading("Inawasilisha fomu...");

    try {
      // Create FormData object to handle file uploads
      const formDataToSend = new FormData();

      // Add all form fields
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Add image files
      selectedImages.forEach((image) => {
        formDataToSend.append("images", image);
      });

      // Send data to the backend using our providerService
      const response = await providerService.registerProvider(formDataToSend);

      // Show success toast
      toast.success("Asante kwa kujisajili! Karibu nasi.", {
        duration: 5000,
        icon: "👍",
        style: {
          background: "#10B981",
          color: "#FFFFFF",
        },
      });

      // Reset form after submission
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        location: "",
        serviceType: "",
        experience: "",
        description: "",
        facebookLink: "",
        instagramLink: "",
        twitterLink: "",
        whatsappNumber: "",
      });

      setSelectedImages([]);
      setPreviewImages([]);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error toast
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Kuna tatizo limetokea wakati wa kuwasilisha fomu.",
        {
          duration: 5000,
          icon: "❌",
          style: {
            background: "#EF4444",
            color: "#FFFFFF",
          },
        }
      );
    } finally {
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-12">
        {/* Add Toaster component to render toast notifications */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            // Default options for all toasts
            className: "",
            style: {
              padding: "16px",
              borderRadius: "8px",
              fontWeight: "500",
            },
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-8 rounded-xl mb-12 shadow-md">
            <h1 className="text-4xl font-bold mb-4">Jiunge na FundiDSM</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Unganisha na wateja wanaotafuta huduma zako na kukuza biashara yako kupitia FundiDSM
            </p>
          </section>

          {/* Benefits Section */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kwa Nini Ujiunge na FundiDSM?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fikia Wateja Wengi</h3>
                  <p className="text-gray-600">
                    Unganisha na mtandao mkubwa wa wateja wanaotafuta huduma zako mjini Dar es
                    Salaam.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Jenga Sifa Nzuri</h3>
                  <p className="text-gray-600">
                    Kusanya maoni na tathmini kutoka kwa wateja walioridhika ili kuonyesha ubora wa
                    kazi yako.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongeza Mapato</h3>
                  <p className="text-gray-600">
                    Ongeza mapato yako kwa kupata wateja wa kudumu kupitia jukwaa letu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Registration Form */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Jiandikishe kama Mtoa Huduma
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Taarifa za Msingi</h3>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Jina Kamili *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Namba ya Simu *
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Barua Pepe
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Eneo katika Dar es Salaam *
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Chagua eneo</option>
                          {locations.map((location) => (
                            <option key={location} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Service Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Taarifa za Huduma</h3>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="serviceType"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Aina ya Huduma *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Chagua aina ya huduma</option>
                          {serviceTypes.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="experience"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Uzoefu (Miaka) *
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Chagua uzoefu</option>
                          <option value="Chini ya mwaka 1">Chini ya mwaka 1</option>
                          <option value="Miaka 1-3">Miaka 1-3</option>
                          <option value="Miaka 3-5">Miaka 3-5</option>
                          <option value="Miaka 5-10">Miaka 5-10</option>
                          <option value="Zaidi ya miaka 10">Zaidi ya miaka 10</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Maelezo ya Huduma Zako *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows="4"
                          value={formData.description}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Eleza ujuzi wako, sifa na huduma unazotoa..."
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Images */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Pakia Picha za Kazi Zako
                  </h3>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pakia hadi picha 5 (si lazima)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {previewImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                      {previewImages.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image}
                            alt={`Picha ${index}`}
                            className="h-40 w-full object-cover rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 cursor-pointer"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Mitandao ya Kijamii (Si Lazima)
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="facebookLink"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Akaunti ya Facebook
                      </label>
                      <input
                        type="url"
                        id="facebookLink"
                        name="facebookLink"
                        value={formData.facebookLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://facebook.com/jina.lako"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="instagramLink"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Akaunti ya Instagram
                      </label>
                      <input
                        type="url"
                        id="instagramLink"
                        name="instagramLink"
                        value={formData.instagramLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://instagram.com/jina.lako"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="twitterLink"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Akaunti ya Twitter
                      </label>
                      <input
                        type="url"
                        id="twitterLink"
                        name="twitterLink"
                        value={formData.twitterLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://twitter.com/jina.lako"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="whatsappNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Namba ya WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="whatsappNumber"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+255..."
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    Ninakubali{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Sheria na Masharti
                    </a>{" "}
                    na
                    <a href="#" className="text-blue-600 hover:underline">
                      {" "}
                      Sera ya Faragha
                    </a>
                    . Nathibitisha kuwa taarifa nilizotoa ni sahihi.
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className={`w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors cursor-pointer ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Inawasilisha..." : "Wasilisha Maombi"}
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hadithi za Mafanikio</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Ushuhuda"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">John Mbwambo</h4>
                      <p className="text-gray-600 text-sm">Fundi Umeme, Kinondoni</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "Tangu kujiunga na FundiDSM, biashara yangu imekua kwa asilimia 70. Napata
                    wateja wa kawaida na kujenga sifa kubwa kupitia maoni mazuri."
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Ushuhuda"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">Grace Mwakasege</h4>
                      <p className="text-gray-600 text-sm">Msafishaji Nyumba, Ilala</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "FundiDSM imeniwezesha kupata wateja wanaothamini huduma zangu. Jukwaa hili ni
                    rahisi kutumia na limensaidia kuanzisha biashara yangu ya usafi."
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/67.jpg"
                      alt="Ushuhuda"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">Emanuel Kiswaga</h4>
                      <p className="text-gray-600 text-sm">Fundi Bomba, Temeke</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "Nilikuwa nikisumbuka kupata kazi za kudumu, lakini baada ya kujiunga na
                    FundiDSM, nina wateja wengi kuliko ninavyoweza kushughulikia. Imebadilisha
                    biashara yangu kabisa."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default JoinUsPage;
