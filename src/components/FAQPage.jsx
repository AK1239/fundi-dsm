import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("faq");

  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    // For Users
    {
      id: 1,
      question: "How do I find a fundi?",
      answer: "You can browse the directory by category (e.g., electrician, plumber, mechanic).",
      userType: "user",
    },
    {
      id: 2,
      question: "How can I contact a repairman or handyman?",
      answer:
        "Each listing on our website includes the phone number and, in some cases, an email address of the repairman or handyman. You can contact them directly to discuss your needs and schedule an appointment.",
      userType: "user",
    },
    {
      id: 3,
      question: "What should I do if I have a problem with a repairman I found on your site?",
      answer:
        "If you encounter any issues with a repairman or handyman, please contact us immediately. We take customer feedback seriously and will investigate the matter to ensure that our listings maintain a high standard of service.",
      userType: "user",
    },
    {
      id: 4,
      question: "Is there a fee to use your website?",
      answer:
        "No, our website is completely free to use. You can search for and contact repairmen and handymen without any charges.",
      userType: "user",
    },
    {
      id: 5,
      question: "Can I leave a review for a repairman or handyman?",
      answer:
        "Yes, we encourage our users to leave reviews. This helps other customers make informed decisions and allows us to maintain the quality of our listings.",
      userType: "user",
    },
    {
      id: 6,
      question: "What types of services can I find on your website?",
      answer:
        "Our website features a wide range of services, including plumbing, electrical work, carpentry, painting, and general handyman services and much more.",
      userType: "user",
    },
    {
      id: 7,
      question: "How quickly can I expect a response from a repairman?",
      answer:
        "Response times may vary depending on the repairman's availability and workload. However, most professionals strive to respond within 24 hours. If you do not receive a response, we recommend following up with them directly.",
      userType: "user",
    },

    // For Fundis
    {
      id: 8,
      question: "How do I get listed in the directory?",
      answer: "Go to the registration page and register with our website.",
      userType: "fundi",
    },
    {
      id: 9,
      question: "Is there a fee to be listed in the directory?",
      answer: "No, it's for free.",
      userType: "fundi",
    },
    {
      id: 10,
      question: "What information should I include in my profile?",
      answer:
        "You should include detailed information about your skills, services offered, years of experience, areas you serve, contact details, and any relevant qualifications or certifications. High-quality photos of your work can also be beneficial.",
      userType: "fundi",
    },
    {
      id: 11,
      question: "How will I be contacted by potential clients?",
      answer:
        "Users will typically contact you directly using the contact information you provide in your profile.",
      userType: "fundi",
    },
    {
      id: 12,
      question: "Can I update my profile information?",
      answer: "Yes, just email us and give us your changes and we will update for you.",
      userType: "fundi",
    },
    {
      id: 13,
      question: "What if I receive inappropriate inquiries?",
      answer:
        "Please report any inappropriate or spam inquiries to us at fundidsm@gmail.com. We are committed to maintaining a professional and respectful environment.",
      userType: "fundi",
    },
  ];

  const dosAndDonts = {
    users: {
      dos: [
        "Provide clear and detailed descriptions of your repair needs",
        "Ask for quotes from multiple fundis to compare prices and services",
        "Check the fundi's profile for reviews and ratings",
        "Discuss and agree on the price and scope of work before the fundi starts",
        "Communicate clearly and respectfully with the fundi",
        "Provide feedback and reviews after the service is completed",
        "Prioritize safety and security when allowing a fundi into your home or premises",
      ],
      donts: [
        "Share sensitive personal information publicly on the directory",
        "Make unreasonable demands or expect services outside of the agreed scope without additional payment",
        "Engage in disrespectful or abusive behavior towards fundis",
        "Pay the full amount upfront unless it's a small, standard service or you have a strong prior relationship with the fundi",
        "Hesitate to ask for identification or proof of qualifications if you have concerns",
      ],
    },
    fundis: {
      dos: [
        "Create a detailed and accurate profile highlighting your skills, experience, and services offered",
        "Respond to inquiries promptly and professionally",
        "Provide clear and transparent pricing or quotes",
        "Be punctual and reliable for appointments",
        "Communicate clearly with users about the progress of the work",
        "Maintain a professional and ethical demeanor",
        "Request feedback from satisfied clients to build your reputation",
      ],
      donts: [
        "Provide false or misleading information in your profile",
        "Overcharge or inflate prices unfairly",
        "Engage in unprofessional or unethical behavior",
        "Pressure users into unnecessary repairs or services",
        "Share user's personal information without their consent",
        "Discriminate against users based on their background or any other protected characteristic",
      ],
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-8 rounded-xl mb-12 shadow-md">
            <h1 className="text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Find answers to common questions, and learn about our terms and best practices
            </p>
          </section>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="border-b border-gray-200">
              <nav className="flex flex-wrap">
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`py-4 px-6 text-center font-medium cursor-pointer ${
                    activeTab === "faq"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  Frequently Asked Questions
                </button>
                <button
                  onClick={() => setActiveTab("terms")}
                  className={`py-4 px-6 text-center font-medium cursor-pointer ${
                    activeTab === "terms"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  Terms & Conditions
                </button>

                <button
                  onClick={() => setActiveTab("dosdonts")}
                  className={`py-4 px-6 text-center font-medium cursor-pointer ${
                    activeTab === "dosdonts"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  Do's & Don'ts
                </button>
                <button
                  onClick={() => setActiveTab("help")}
                  className={`py-4 px-6 text-center font-medium cursor-pointer ${
                    activeTab === "help"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  Help
                </button>
              </nav>
            </div>

            <div className="p-8">
              {/* FAQ Content */}
              {activeTab === "faq" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>

                  {/* For Users */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Users</h3>
                  <div className="space-y-6 mb-10">
                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        How do I find a fundi?
                      </h4>
                      <p className="text-gray-700">
                        You can browse the directory by category (e.g., electrician, plumber,
                        mechanic).
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        How can I contact a repairman or handyman?
                      </h4>
                      <p className="text-gray-700">
                        Each listing on our website includes the phone number and, in some cases, an
                        email address of the repairman or handyman. You can contact them directly to
                        discuss your needs and schedule an appointment.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        What should I do if I have a problem with a repairman I found on your site?
                      </h4>
                      <p className="text-gray-700">
                        If you encounter any issues with a repairman or handyman, please contact us
                        immediately. We take customer feedback seriously and will investigate the
                        matter to ensure that our listings maintain a high standard of service.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Is there a fee to use your website?
                      </h4>
                      <p className="text-gray-700">
                        No, our website is completely free to use. You can search for and contact
                        repairmen and handymen without any charges.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Can I leave a review for a repairman or handyman?
                      </h4>
                      <p className="text-gray-700">
                        Yes, we encourage our users to leave reviews. This helps other customers
                        make informed decisions and allows us to maintain the quality of our
                        listings.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        What types of services can I find on your website?
                      </h4>
                      <p className="text-gray-700">
                        Our website features a wide range of services, including plumbing,
                        electrical work, carpentry, painting, and general handyman services and much
                        more.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6 last:border-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        How quickly can I expect a response from a repairman?
                      </h4>
                      <p className="text-gray-700">
                        Response times may vary depending on the repairman's availability and
                        workload. However, most professionals strive to respond within 24 hours. If
                        you do not receive a response, we recommend following up with them directly.
                      </p>
                    </div>
                  </div>

                  {/* For Fundis */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Fundis</h3>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        How do I get listed in the directory?
                      </h4>
                      <p className="text-gray-700">
                        Go to the registration page and register with our website.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Is there a fee to be listed in the directory?
                      </h4>
                      <p className="text-gray-700">No, it's for free.</p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        What information should I include in my profile?
                      </h4>
                      <p className="text-gray-700">
                        You should include detailed information about your skills, services offered,
                        years of experience, areas you serve, contact details, and any relevant
                        qualifications or certifications. High-quality photos of your work can also
                        be beneficial.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        How will I be contacted by potential clients?
                      </h4>
                      <p className="text-gray-700">
                        Users will typically contact you directly using the contact information you
                        provide in your profile.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Can I update my profile information?
                      </h4>
                      <p className="text-gray-700">
                        Yes, just email us and give us your changes and we will update for you.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6 last:border-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        What if I receive inappropriate inquiries?
                      </h4>
                      <p className="text-gray-700">
                        Please report any inappropriate or spam inquiries to us at
                        fundidsm@gmail.com. We are committed to maintaining a professional and
                        respectful environment.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Terms & Conditions Content */}
              {activeTab === "terms" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>

                  <div className="space-y-6 text-gray-700">
                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        1. Acceptance of Terms
                      </h3>
                      <p>
                        By accessing or using this fundi directory (the "Service"), you agree to be
                        bound by these Terms and Conditions ("Terms"). If you do not agree to these
                        Terms, please do not use the Service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        2. Description of Service
                      </h3>
                      <p>
                        This directory provides a platform for users to find and connect with
                        various fundis (repairmen, technicians, mechanics, etc.). We do not directly
                        employ or endorse any specific fundi listed on the Service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        3. User Responsibilities
                      </h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          Users are responsible for verifying the credentials, skills of any fundi
                          they engage through the Service.
                        </li>
                        <li>
                          Users are responsible for negotiating and agreeing on the terms of
                          service, pricing, and payment directly with the fundi.
                        </li>
                        <li>
                          Users agree to provide accurate and truthful information when contacting
                          fundis through the Service.
                        </li>
                        <li>Users will use the Service in a lawful and respectful manner.</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        4. Fundi Responsibilities
                      </h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          Fundis are responsible for the accuracy and completeness of their profile
                          information, including their skills, services offered, and contact
                          details.
                        </li>
                        <li>
                          Fundis agree to respond to inquiries from users in a timely and
                          professional manner.
                        </li>
                        <li>
                          Fundis are responsible for obtaining any necessary licenses, permits, and
                          insurance required to perform their services.
                        </li>
                        <li>
                          Fundis will conduct themselves professionally and ethically when
                          interacting with users contacted through the Service.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        5. Limitation of Liability
                      </h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          We provide the Service on an "as is" and "as available" basis. We make no
                          warranties or representations, express or implied, regarding the quality,
                          reliability, or suitability of the fundis listed on the Service.
                        </li>
                        <li>
                          We are not responsible for any disputes, damages, losses, or injuries
                          arising from interactions or agreements between users and fundis. Any
                          agreement entered into is solely between the user and the fundi.
                        </li>
                        <li>
                          To the maximum extent permitted by law, we shall not be liable for any
                          indirect, incidental, special, consequential, or punitive damages arising
                          out of or relating to your use of the Service.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        6. Intellectual Property
                      </h3>
                      <p>
                        The content and design of this directory are owned by us and are protected
                        by copyright and other intellectual property laws. You may not reproduce,
                        modify, distribute, or display any part of the Service without our prior
                        written consent.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Termination</h3>
                      <p>
                        We reserve the right to suspend or terminate access to the Service for any
                        user or fundi who violates these Terms or engages in conduct that we deem
                        harmful to the Service or its users.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Governing Law</h3>
                      <p>
                        These Terms shall be governed by and construed in accordance with the laws
                        of Tanzania. Any disputes arising under or in connection with these Terms
                        shall be subject to the exclusive jurisdiction of the courts of Tanzania.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        9. Modifications to Terms
                      </h3>
                      <p>
                        We reserve the right to modify these Terms at any time without prior notice.
                        Any changes will be effective immediately upon posting on the Service. Your
                        continued use of the Service after the posting of revised Terms constitutes
                        your acceptance of the changes.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">10. Contact Us</h3>
                      <p>
                        If you have any questions about these Terms, please contact us at
                        fundidsm@gmail.com
                      </p>
                    </section>
                  </div>
                </div>
              )}

              {/* Do's and Don'ts */}
              {activeTab === "dosdonts" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Do's and Don'ts</h2>

                  <p className="text-gray-700 mb-6">
                    This section provides a quick and easy-to-understand list of recommended actions
                    and prohibited behaviors for both users and fundis.
                  </p>

                  {/* For Users */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      For Users (Those Seeking Fundis)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Do's */}
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                          <svg
                            className="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Do's
                        </h4>
                        <ul className="space-y-3">
                          {dosAndDonts.users.dos.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
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
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Don'ts */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                          <svg
                            className="h-6 w-6 mr-2"
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
                          Don'ts
                        </h4>
                        <ul className="space-y-3">
                          {dosAndDonts.users.donts.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* For Fundis */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      For Fundis (The Repair Professionals)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Do's */}
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                          <svg
                            className="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Do's
                        </h4>
                        <ul className="space-y-3">
                          {dosAndDonts.fundis.dos.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
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
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Don'ts */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                          <svg
                            className="h-6 w-6 mr-2"
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
                          Don'ts
                        </h4>
                        <ul className="space-y-3">
                          {dosAndDonts.fundis.donts.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Working Together</h3>
                    <p className="text-gray-700">
                      Following these guidelines helps create a positive experience for both users
                      and fundis. Clear communication, mutual respect, and professional conduct are
                      key to successful service delivery.
                    </p>
                  </div>
                </div>
              )}

              {/* Help Section */}
              {activeTab === "help" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Help Guide</h2>

                  <div className="space-y-10">
                    {/* Things to Avoid */}
                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Things to Avoid When Hiring a Handyman
                      </h3>
                      <p className="text-gray-700 mb-6">
                        Here's a list of things to avoid when hiring a handyman to ensure a smooth
                        and positive experience:
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            Before Hiring:
                          </h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                              <span className="font-medium">Unclear Communication:</span> Avoid
                              vague or unclear descriptions of the work needed. Be specific about
                              the tasks and provide details.
                            </li>
                            <li>
                              <span className="font-medium">Unrealistic Expectations:</span> Set
                              realistic expectations regarding the timeline and cost. Avoid
                              expecting miracles or unrealistic turnaround times.
                            </li>
                            <li>
                              <span className="font-medium">Hiring Based Solely on Price.</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            During the Job:
                          </h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                              <span className="font-medium">Lack of Supervision:</span> Don't leave
                              the handyman unsupervised, especially if they're working in your home.
                              Maintain regular communication and check on their progress.
                            </li>
                            <li>
                              <span className="font-medium">Unclear Payments:</span> Avoid paying
                              upfront for the entire job. Make payments in stages as work is
                              completed to protect your interests.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            After the Job:
                          </h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                              <span className="font-medium">Unresolved Issues:</span> Don't accept
                              incomplete or unsatisfactory work. Address any problems or issues
                              promptly and communicate your concerns clearly.
                            </li>
                            <li>
                              <span className="font-medium">Lack of Follow-Up.</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-gray-700 mt-4">
                        By avoiding these common pitfalls, you can increase your chances of a
                        successful and hassle-free experience when hiring a handyman.
                      </p>
                    </section>

                    {/* Precautions and Tips */}
                    <section className="mt-10 pt-10 border-t border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Precautions and Tips for Hiring a Handyman
                      </h3>
                      <p className="text-gray-700 mb-6 italic">
                        Disclaimer: While we strive to provide helpful information, we cannot be
                        held responsible for any interactions or outcomes arising from your use of
                        this information. It's essential to exercise due diligence and make informed
                        decisions when hiring a handyman.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                          <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                            <svg
                              className="h-6 w-6 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            What to Do:
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
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
                              <span className="text-gray-700">
                                <span className="font-medium">Get Multiple Quotes:</span> Compare
                                prices and services from different handymen.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
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
                              <span className="text-gray-700">
                                <span className="font-medium">Clear Communication:</span> Discuss
                                the project in detail, including scope of work, timeline, and
                                payment terms.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
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
                              <span className="text-gray-700">
                                <span className="font-medium">Progress Updates:</span> Stay in touch
                                with the handyman and monitor progress.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
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
                              <span className="text-gray-700">
                                <span className="font-medium">Pay in Stages:</span> Avoid paying the
                                entire amount upfront. Consider progress payments.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
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
                              <span className="text-gray-700">
                                <span className="font-medium">Inspect Work:</span> Carefully inspect
                                the completed work before final payment.
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                          <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                            <svg
                              className="h-6 w-6 mr-2"
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
                            What Not to Do:
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-gray-700">
                                <span className="font-medium">Hire Based on Price Alone:</span>{" "}
                                Consider factors like experience, reputation.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-gray-700">
                                <span className="font-medium">Pay Cash Upfront:</span> Avoid paying
                                large sums of money before work is completed.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-gray-700">
                                <span className="font-medium">Leave Handyman Unattended:</span>{" "}
                                Supervise the work, especially if you're not familiar with the
                                tasks.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-gray-700">
                                <span className="font-medium">Ignore Red Flags.</span>
                              </span>
                            </li>
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-gray-700">
                                <span className="font-medium">Accept Unfinished Work:</span> Ensure
                                the job is completed to your satisfaction before final payment.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <svg
                                className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-gray-700">
                                <span className="font-medium">Disregard Safety:</span> Always
                                prioritize safety and follow local regulations.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-gray-700 font-medium">
                          Remember: Your safety and satisfaction are paramount. By following these
                          guidelines, you can increase your chances of a positive experience when
                          hiring a handyman.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
