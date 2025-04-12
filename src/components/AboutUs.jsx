import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Makombe",
      role: "Business Owner",
      image: "https://placehold.co/300x300/4287f5/FFFFFF?text=John+M",
      content:
        "FundiDSM has transformed how I find repair services for my shop. Previously, I would waste days trying to find reliable technicians, but now I can connect with verified fundis instantly. The quality of service has been exceptional.",
    },
    {
      id: 2,
      name: "Sarah Mwanza",
      role: "Homeowner",
      image: "https://placehold.co/300x300/f542b7/FFFFFF?text=Sarah+M",
      content:
        "As a busy professional, I don't have time to search for reliable service providers. FundiDSM has made it incredibly easy to find qualified fundis for various home repairs. The ratings system ensures I always get the best service.",
    },
    {
      id: 3,
      name: "David Kalunga",
      role: "Property Manager",
      image: "https://placehold.co/300x300/42f56c/FFFFFF?text=David+K",
      content:
        "Managing multiple properties requires reliable maintenance services. FundiDSM has become an essential tool for my business. The wide range of professionals available and the ease of connecting with them has saved me countless hours.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About FundiDSM</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Connecting communities with skilled professionals across Tanzania
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img
                  src="https://placehold.co/800x600/3975CD/FFFFFF?text=Our+Story"
                  alt="Our Story"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  FundiDSM was founded in 2023 with a simple yet powerful vision: to bridge the gap
                  between skilled technicians and the people who need their services in Tanzania.
                </p>
                <p className="text-gray-700 mb-4">
                  We recognized that while Tanzania has thousands of highly skilled fundis
                  (technicians), finding the right professional for specific needs was often
                  challenging, time-consuming, and based on unreliable word-of-mouth
                  recommendations.
                </p>
                <p className="text-gray-700">
                  Our platform was created to solve this problem by providing a centralized, trusted
                  marketplace where customers can easily find, evaluate, and connect with verified
                  service providers across a wide range of categories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to transform how services are discovered and delivered
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To empower Tanzanian communities by connecting them with skilled professionals
                  through a transparent, efficient, and trusted platform that enhances access to
                  quality services while creating economic opportunities for local fundis.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To become the premier platform for service discovery in East Africa, where every
                  individual and business can easily find and engage with trusted professionals for
                  all their needs, driving economic growth and improving quality of life across
                  communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Integrity</h3>
                <p className="text-gray-700">
                  We verify our service providers and foster a community built on trust,
                  transparency, and honest feedback.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Empowerment</h3>
                <p className="text-gray-700">
                  We're committed to creating economic opportunities for local professionals and
                  improving access to essential services.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Service</h3>
                <p className="text-gray-700">
                  We strive for excellence by promoting skilled professionals and enabling a rating
                  system that rewards quality service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem We're Solving */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Problem We're Solving</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Addressing the disconnect between skilled professionals and those in need of their
                services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6">For Customers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-200 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Difficulty finding reliable service providers when needed</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-200 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Lack of transparency about service quality and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-200 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Time wasted searching through unreliable referrals</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-200 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Uncertainty about service provider credibility and skills</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">For Service Providers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-200 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Limited visibility to potential customers in their area</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-200 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Challenges in establishing credibility and trust</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-200 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Difficulty in growing their client base beyond word-of-mouth</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-200 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Inconsistent workflow and income opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from people who have found the perfect fundi through our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">{testimonial.content}</p>
                    <div className="mt-6 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the FundiDSM Community</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Whether you're looking for professional services or you're a skilled technician ready
              to grow your business, FundiDSM is here for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors"
              >
                Find a Fundi
              </a>
              <a
                href="#"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Join as a Fundi
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
