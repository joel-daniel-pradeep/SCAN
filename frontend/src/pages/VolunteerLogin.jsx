
import React from 'react';
import { Link } from 'react-router-dom';
import loginBg from '../assets/loginregister.jpg';

const VolunteerLogin = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

      <nav className="w-full bg-white fixed top-0 z-50 p-4 shadow-md flex justify-between items-center">
        <div className="font-bold text-2xl text-blue-600">
          <Link to="/#">SCAN</Link>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-white pt-24">
        <h1 className="text-4xl font-bold mb-8">Volunteer Login</h1>

        <form className="bg-white/60 p-8 rounded-lg shadow-md backdrop-blur-md w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-lg text-gray-900 placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-lg text-gray-900 placeholder-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-white">
            Don't have an account?{' '}
            <Link to="/register/volunteer" className="text-blue-400 underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerLogin;
