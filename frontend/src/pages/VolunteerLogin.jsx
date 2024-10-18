
// import React, { useState } from "react";

// function VolunteerLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic
//     console.log({ email, password });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-blue-600 mb-4">Volunteer Login</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//           />
//         </div>
//         <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Login</button>
//       </form>
//     </div>
//   );
// }

// export default VolunteerLogin;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function VolunteerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Volunteer Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Login</button>
      </form>

      {/* Redirect to Register if no account */}
      <p className="mt-4 text-gray-600">
        Don't have an account?{" "}
        <Link to="/register/volunteer" className="text-blue-600 underline">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default VolunteerLogin;
