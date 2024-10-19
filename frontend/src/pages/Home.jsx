

import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link"; // HashLink for smooth scrolling
import img from "../assets/homepage_bg.jpg"; // Import your background image

function HomePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-white fixed top-0 z-50 p-4 shadow-md flex justify-between items-center">
        <div className="font-bold text-2xl text-blue-600">SCAN</div>
        <div className="flex space-x-4">
          <Link to="/#" className="hover:text-blue-600">Home</Link>
          <Link to="#about" className="hover:text-blue-600">About</Link>
          <Link to="#contact" className="hover:text-blue-600">Contact</Link>

          {/* Login Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="hover:text-blue-600">
              Login
            </button>

            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg"
              >
                <Link
                  to="/login/caregivers-senior"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Caregivers/Senior
                </Link>
                <Link
                  to="/login/volunteer"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Volunteer
                </Link>
                <Link
                  to="/login/admin"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Admin
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Background Image Section */}
      <div
        className="relative min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
          <h1 className="text-5xl font-bold">Welcome to SCAN</h1>
          <p className="mt-4 text-lg max-w-xl text-center">
            Senior Citizen Assistance Network is here to help seniors with personalized caregiving solutions.
          </p>
        </div>
      </div>

      {/* Translucent About Section */}
      <div
        id="about"
        className="py-16 bg-white/60 backdrop-blur-sm text-center"
      >
        <h2 className="text-4xl font-bold text-blue-700">About Us</h2>
        <p className="mt-4 text-gray-800 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque
          ligula at turpis lacinia, at efficitur enim vulputate. Curabitur blandit
          elit nec velit facilisis, sit amet commodo lectus elementum. Phasellus
          nec justo vel felis laoreet placerat.
        </p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-800 text-white py-16 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-4 max-w-4xl mx-auto">
          Feel free to reach out to us at: email@example.com | Phone: +123456789
        </p>
      </div>
    </div>
  );
}

export default HomePage;
