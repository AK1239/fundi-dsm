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
                  onClick={() => setActiveTab("complaints")}
                  className={`py-4 px-6 text-center font-medium cursor-pointer ${
                    activeTab === "complaints"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  Submit a Complaint
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
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
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
