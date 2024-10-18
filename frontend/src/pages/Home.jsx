
// import React, { useState } from "react";

// function Home() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="Home">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-blue-600 text-white shadow-md">
//         <div className="container mx-auto flex justify-between items-center p-4">
//           <div className="text-2xl font-bold">SCAN</div>
//           <ul className="flex space-x-6">
//             <li><a href="#home" className="hover:text-gray-300">Home</a></li>
//             <li><a href="#about" className="hover:text-gray-300">About</a></li>
//             <li className="relative">
//               <button 
//                 onClick={toggleDropdown} 
//                 className="hover:text-gray-300"
//               >
//                 Login
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
//                   <a href="/login/caregivers-senior" className="block px-4 py-2 hover:bg-gray-200">Caregivers/Senior</a>
//                   <a href="/login/volunteer" className="block px-4 py-2 hover:bg-gray-200">Volunteer</a>
//                   <a href="/login/admin" className="block px-4 py-2 hover:bg-gray-200">Admin</a>
//                 </div>
//               )}
//             </li>
//             <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Main Section */}
//       <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100">
//         <h1 className="text-5xl font-bold text-blue-600">SCAN</h1>
//         <p className="text-lg text-gray-700 mt-4">
//           Senior Citizen Assistance Network - Connecting seniors, caregivers, and volunteers.
//         </p>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="py-16 bg-white text-center">
//         <h2 className="text-4xl font-semibold text-blue-600">About Us</h2>
//         <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-gray-100 text-center">
//         <h2 className="text-4xl font-semibold text-blue-600">Contact Us</h2>
//         <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nulla non orci vestibulum tempor. 
//           You can contact us at <strong>contact@scan.org</strong>.
//         </p>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white text-center p-4">
//         <p>&copy; 2024 SCAN. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;
import React, { useState } from "react";

function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="Home">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">SCAN</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li className="relative">
              <button 
                onClick={toggleDropdown} 
                className="hover:text-gray-300"
              >
                Login
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                  <a href="/login/caregivers-senior" className="block px-4 py-2 hover:bg-gray-200">Caregivers/Senior</a>
                  <a href="/login/volunteer" className="block px-4 py-2 hover:bg-gray-200">Volunteer</a>
                  <a href="/login/admin" className="block px-4 py-2 hover:bg-gray-200">Admin</a>
                </div>
              )}
            </li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-5xl font-bold text-blue-600">SCAN</h1>
        <p className="text-lg text-gray-700 mt-4">
          Senior Citizen Assistance Network - Connecting seniors, caregivers, and volunteers.
        </p>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white text-center">
        <h2 className="text-4xl font-semibold text-blue-600">About Us</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold text-blue-600">Contact Us</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nulla non orci vestibulum tempor. 
          You can contact us at <strong>contact@scan.org</strong>.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2024 SCAN. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
