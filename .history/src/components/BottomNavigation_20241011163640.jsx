import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[430px] z-50">
      <div
        className="flex justify-around items-center h-16"
        style={{
          background: 'rgba(221, 184, 255, 0.8)', // Base color at 80% opacity
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Home Button */}
        <Link to="/" className="flex flex-col items-center text-white relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7m-9-5v18"
            />
          </svg>
          <span className="text-sm">Home</span>
        </Link>

        {/* Favourites Button */}
        <Link to="/" className="flex flex-col items-center text-white relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7m-9-5v18"
            />
          </svg>
          <span className="text-sm">Home</span>
        </Link>

        {/* Search Button */}
        <Link to="/movies" className="flex flex-col items-center text-white relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4a4 4 0 014 4v1h2v-1a6 6 0 00-12 0v1h2v-1a4 4 0 014-4z"
            />
          </svg>
          <span className="text-sm">Search</span>
        </Link>

        {/* Profile Button */}
        <Link to="/profile" className="flex flex-col items-center text-white relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A10.001 10.001 0 0112 4a10.001 10.001 0 016.879 13.804m-6.879-9.804v4m0 4h.01"
            />
          </svg>
          <span className="text-sm">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
