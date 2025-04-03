import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 text-center shadow-2xl bg-white rounded-lg">
        <h1 className="text-8xl font-bold text-green-900">404</h1>
        <p className="mt-6 text-2xl text-gray-700">Page Not Found</p>
        <p className="mt-6 text-xl text-gray-500">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-4 text-2xl inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
