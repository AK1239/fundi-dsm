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
              Je, wewe ni fundi/msaidizi wa matengenezo na unataka kujiunga nasi?
            </p>
          </section>

          {/* Introduction Section */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kuwa Fundi Maarufu wa Matengenezo
              </h2>
              <p className="text-gray-700 mb-6">
                Je, wewe ni fundi mwenye ujuzi na unayetegemewa katika Dar-es-salaam? Unatafuta
                kupanua wigo wa wateja wako na kupewa mapendekezo kwa wateja wanaohitaji huduma
                zako? Jiunge na mtandao wetu unaoongezeka wa wataalam wanaoaminika!
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Jinsi Inavyofanya Kazi:</h3>
              <p className="text-gray-700 mb-6">
                Jisajili hapa chini ili uongezwe kwenye orodha yetu.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Faida za Kujiunga:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>
                  <span className="font-medium">Kuonekana zaidi:</span> Taarifa zako za mawasiliano
                  zitashirikishwa na wateja wanaoweza kuhitaji huduma zako.
                </li>
                <li>
                  <span className="font-medium">Kuimarisha sifa:</span> Kuwa sehemu ya mtandao wetu
                  unaopendekezwa kunaweza kuimarisha sifa yako ya kitaaluma.
                </li>
                <li>
                  <span className="font-medium">Fursa za mtandao:</span> Unganisha na wataalam
                  wengine wenye ujuzi katika nyanja yako.
                </li>
              </ul>
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
