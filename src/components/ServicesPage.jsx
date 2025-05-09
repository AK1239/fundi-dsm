import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Pay per use (Only for businesses/enterprises)
          </h2>
          <p className="text-gray-700 mb-6">
            We provide and supply fundis to businesses and companies. This service is not for free.
          </p>
          <p className="text-gray-700 mb-6">
            Email us through{" "}
            <a href="mailto:fundidsm@gmail.com" className="text-blue-600 hover:underline">
              fundidsm@gmail.com
            </a>{" "}
            everytime you need a fundi or book one through our booking system.
          </p>

          <a
            href="https://take.app/fundidsm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors mb-10"
          >
            Book a Fundi
          </a>

          <h3 className="text-xl font-semibold mb-4">How it works</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                1
              </div>
              <p className="text-gray-700">
                Book a service through our email or book and pay through{" "}
                <a
                  href="https://take.app/fundidsm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://take.app/fundidsm
                </a>
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                2
              </div>
              <p className="text-gray-700">We receive your booking and find for you a fundi</p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                3
              </div>
              <p className="text-gray-700">
                Fundi arrives at your location and inspects the problem
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                4
              </div>
              <p className="text-gray-700">
                After inspecting, you come to an agreement with fundi on labour and equipment
                charges and work starts
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                5
              </div>
              <p className="text-gray-700">Fundi gets the job done</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <p className="text-gray-700 font-medium">
              Note: Fundi cost and equipment charges are different and will be charged by the fundi.
              The 30,000tshs that we charge is for our own FundiDSM expenses.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
