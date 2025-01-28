import React from "react";
import { Link } from "react-router-dom";
import denrLogo from "../assets/DOSTlogo.png";
import iso from "../assets/ISO.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-[#0083ff] text-white px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Logo */}
            <img src={denrLogo} alt="DENR Logo" className="w-28 h-28" />

            {/* Center Text */}
            <div className="flex flex-col items-center text-center flex-1 mx-8">
              {/* <span className="text-lg">Republic of the Philippines</span> */}
              <span className="text-3xl font-bold mt-2">
                DEPARTMENT OF SCIENCE AND TECHNOLOGY
              </span>
              <span className="text-lg mt-1">MIMAROPA REGION</span>
            </div>

            {/* Right Logo */}
            <img src={iso} alt="GovPH Logo" className="w-35 h-28" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0083ff] mb-6">
          Welcome to DOST FEEDBACK FORM
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-12">
          Please take a moment to complete this short survey. Your responses
          will remain confidential and are greatly appreciated. We look forward
          to hearing from you
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/home"
            className="px-6 py-3 bg-[#0083ff] text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>

          <Link
            to="/learn-more"
            className="px-6 py-3 border border-[#0083ff] text-[#0083ff] rounded-md hover:bg-blue-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
