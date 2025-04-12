import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const [complaintName, setComplaintName] = useState("");
  const [complaintEmail, setComplaintEmail] = useState("");
  const [complaintSubject, setComplaintSubject] = useState("");
  const [complaintMessage, setComplaintMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log({ complaintName, complaintEmail, complaintSubject, complaintMessage });
    setSubmitted(true);
    // Reset form after submission
    setComplaintName("");
    setComplaintEmail("");
    setComplaintSubject("");
    setComplaintMessage("");
    // Reset submission status after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const faqs = [
    {
      id: 1,
      question: "How do I find a service provider on FundiDSM?",
      answer:
        "You can search for service providers by category, location, or specific skills. Browse through our directory, view profiles, ratings, and reviews to find the right professional for your needs.",
    },
    {
      id: 2,
      question: "How do I know if a fundi is reliable?",
      answer:
        "All fundis on our platform are verified and rated by previous customers. You can check their reviews, ratings, qualification details, and work history to assess their reliability before contacting them.",
    },
    {
      id: 3,
      question: "What are the fees for using FundiDSM?",
      answer:
        "Using FundiDSM to find and contact service providers is completely free for customers. Service providers pay a small subscription fee to be listed on our platform.",
    },
    {
      id: 4,
      question: "How do I join as a service provider?",
      answer:
        "To join as a service provider, click on the 'Join as a Fundi' button, complete the registration form, verify your identity, and submit your qualifications and experience for review.",
    },
    {
      id: 5,
      question: "Can I book a service provider directly through the platform?",
      answer:
        "Currently, FundiDSM facilitates connection between customers and service providers. You can contact professionals directly through the contact information provided on their profiles.",
    },
    {
      id: 6,
      question: "What areas does FundiDSM cover?",
      answer:
        "We currently operate in Dar es Salaam, with plans to expand to other major cities in Tanzania soon.",
    },
    {
      id: 7,
      question: "How can I leave a review for a service provider?",
      answer:
        "After receiving service, you can visit the provider's profile and submit your review and rating to help other customers make informed decisions.",
    },
    {
      id: 8,
      question: "Is there a guarantee on the services provided?",
      answer:
        "While FundiDSM vets all service providers, we don't directly guarantee their work. However, our rating system encourages quality service, and we take customer complaints seriously to maintain high standards on our platform.",
    },
  ];

  const dosAndDonts = {
    dos: [
      "Verify the identity of the service provider before allowing them to work in your home or business",
      "Clearly communicate your requirements and expectations",
      "Agree on pricing and scope of work before the service begins",
      "Request a written quote or contract for significant jobs",
      "Be present or have someone you trust present during the service",
      "Inspect completed work before making final payment",
      "Leave honest and constructive feedback",
    ],
    donts: [
      "Don't make full payment upfront before work is completed",
      "Don't share sensitive personal information unnecessarily",
      "Don't allow unauthorized access to sensitive areas of your home or business",
      "Don't accept work that doesn't meet the agreed standards",
      "Don't skip checking reviews and ratings before hiring",
      "Don't communicate outside our platform until you've established trust",
      "Don't ignore safety concerns during service provision",
    ],
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
              Find answers to common questions, submit complaints, and learn about our terms and
              best practices
            </p>
          </section>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`py-4 px-6 text-center font-medium ${
                    activeTab === "faq"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  Frequently Asked Questions
                </button>
                <button
                  onClick={() => setActiveTab("terms")}
                  className={`py-4 px-6 text-center font-medium ${
                    activeTab === "terms"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={() => setActiveTab("complaints")}
                  className={`py-4 px-6 text-center font-medium ${
                    activeTab === "complaints"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  Submit a Complaint
                </button>
                <button
                  onClick={() => setActiveTab("dosdonts")}
                  className={`py-4 px-6 text-center font-medium ${
                    activeTab === "dosdonts"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  Do's & Don'ts
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
                  <div className="space-y-6">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
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
                        By accessing and using the FundiDSM platform, you agree to be bound by these
                        Terms and Conditions, our Privacy Policy, and any other terms referenced
                        herein. If you do not agree to these terms, please do not use our services.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        2. Platform Description
                      </h3>
                      <p>
                        FundiDSM is a platform that connects service seekers with skilled service
                        providers ("Fundis") in Tanzania. We do not employ service providers, nor
                        are we responsible for the work performed by them. Our role is limited to
                        facilitating connections between users.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">3. User Accounts</h3>
                      <p>
                        To access certain features of the platform, you must register and create an
                        account. You are responsible for maintaining the confidentiality of your
                        account information and for all activities that occur under your account.
                        You agree to provide accurate and complete information during registration
                        and to update your information to keep it accurate and current.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        4. Service Provider Terms
                      </h3>
                      <p>
                        Service providers listed on FundiDSM are independent contractors. By listing
                        on our platform, service providers agree to provide accurate information
                        about their skills, qualifications, and services. Service providers are
                        responsible for the quality of their work and for resolving any disputes
                        with customers.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        5. Customer Terms
                      </h3>
                      <p>
                        Customers using FundiDSM to find service providers agree to provide accurate
                        information when requesting services. Customers are responsible for
                        verifying the identity and qualifications of service providers before
                        engaging their services. Payment and service agreements are made directly
                        between customers and service providers, without involvement from FundiDSM.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        6. Reviews and Ratings
                      </h3>
                      <p>
                        Users may submit reviews and ratings of service providers. These should be
                        honest, accurate, and based on personal experience. FundiDSM reserves the
                        right to remove reviews that contain offensive language, are fraudulent, or
                        violate our community guidelines.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        7. Limitation of Liability
                      </h3>
                      <p>
                        FundiDSM is not liable for any disputes, damages, or issues arising from
                        interactions between customers and service providers. We do not guarantee
                        the quality of services provided by Fundis listed on our platform. Use of
                        any service provider's services is at the customer's own risk.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        8. Modifications to Terms
                      </h3>
                      <p>
                        FundiDSM reserves the right to modify these Terms and Conditions at any
                        time. Changes will be effective immediately upon posting on the platform.
                        Continued use of the platform after changes constitutes acceptance of the
                        modified terms.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Governing Law</h3>
                      <p>
                        These Terms and Conditions are governed by the laws of Tanzania. Any
                        disputes arising from these terms will be subject to the exclusive
                        jurisdiction of the courts of Tanzania.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        10. Contact Information
                      </h3>
                      <p>
                        For questions about these Terms and Conditions, please contact us at
                        info@fundidsm.com or through the contact form on our website.
                      </p>
                    </section>
                  </div>
                </div>
              )}

              {/* Complaints Form */}
              {activeTab === "complaints" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit a Complaint</h2>

                  <p className="text-gray-700 mb-6">
                    If you've experienced issues with a service provider or have concerns about our
                    platform, please fill out the form below. We take all complaints seriously and
                    will respond within 48 hours.
                  </p>

                  {submitted ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                      <p>
                        Thank you for your feedback. We will review your complaint and get back to
                        you shortly.
                      </p>
                    </div>
                  ) : null}

                  <form onSubmit={handleComplaintSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={complaintName}
                        onChange={(e) => setComplaintName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={complaintEmail}
                        onChange={(e) => setComplaintEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={complaintSubject}
                        onChange={(e) => setComplaintSubject(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Complaint
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        value={complaintMessage}
                        onChange={(e) => setComplaintMessage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Submit Complaint
                      </button>
                    </div>
                  </form>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Other Ways to Contact Us
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg
                          className="h-6 w-6 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-gray-700">Email: support@fundidsm.com</span>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="h-6 w-6 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="text-gray-700">Phone: +255 123 456 789</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Do's and Don'ts */}
              {activeTab === "dosdonts" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Do's and Don'ts</h2>

                  <p className="text-gray-700 mb-6">
                    For the best experience and to ensure your safety when using FundiDSM, please
                    follow these guidelines when engaging with service providers.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Do's */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
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
                      </h3>
                      <ul className="space-y-3">
                        {dosAndDonts.dos.map((item, index) => (
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
                      <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
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
                      </h3>
                      <ul className="space-y-3">
                        {dosAndDonts.donts.map((item, index) => (
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

                  <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Safety First</h3>
                    <p className="text-gray-700">
                      While we verify our service providers, we recommend always prioritizing your
                      safety. If something doesn't feel right, trust your instincts. Report any
                      suspicious behavior or safety concerns immediately through our complaint form
                      or by contacting our support team.
                    </p>
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
