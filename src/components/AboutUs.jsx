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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Local Handyman Service You Can Trust
            </h1>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Birth of Fundi DSM Website
                </h2>
                <p className="text-gray-700 mb-4">
                  It all started with a simple observation: people were increasingly turning to the
                  internet for solutions to their everyday problems. From finding recipes to booking
                  flights, the digital world had become a go-to resource. And yet, when it came to
                  finding reliable, skilled professionals for home repairs or odd jobs, the online
                  landscape was still fragmented.
                </p>
                <p className="text-gray-700 mb-4">
                  I envisioned a platform that would connect homeowners/businesses with qualified
                  repairmen and handymen in their local area. A place where people could easily find
                  trusted professionals who could handle everything from fixing leaky faucets to
                  installing shelves.
                </p>
                <p className="text-gray-700">
                  The idea for the FundiDSM website was born out of a desire to create a more
                  convenient and efficient way for people to get their repairs done.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Go-To Handyman Hub</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Goals and visions why we are doing this
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Goal 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Simplify the Search Process
                </h3>
                <p className="text-gray-700">
                  We make it easy to find qualified professionals for any home repair or maintenance
                  task. No more endless searching or unreliable referrals.
                </p>
              </div>

              {/* Goal 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Build Trust</h3>
                <p className="text-gray-700">
                  Our platform helps you find verified professionals you can trust, with transparent
                  reviews and ratings from other customers in your community.
                </p>
              </div>

              {/* Goal 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Offer Convenience</h3>
                <p className="text-gray-700">
                  We provide a seamless experience from search to service, making it easy to find,
                  contact, and hire skilled professionals for all your repair needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem We're Solving */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Problem Are We Solving?</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                We are solving the problem of finding reliable and skilled handymen for repairs and
                maintenance.
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
                <h3 className="text-2xl font-semibold mb-6">Our Commitment</h3>
                <p className="text-white mb-6">
                  We're committed to providing you with a seamless and hassle-free experience. Our
                  team is always available to assist you with any questions or concerns. We strive
                  to ensure that you find the perfect handyman for your project and that you're
                  completely satisfied with the results.
                </p>
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
                    <span>Reliable service providers vetted for quality</span>
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
                    <span>Responsive customer support</span>
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
                    <span>Transparency in all our processes</span>
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
                href="/"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors"
              >
                Find a Fundi
              </a>
              <a
                href="/join"
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
