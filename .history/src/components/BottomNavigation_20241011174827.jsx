import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div
        className="flex justify-around items-center h-20" // Increased height here
        style={{
          background: 'rgba(221, 184, 255, 0.8)', 
        }}
      >
        {/* Home Button */}
        <Link to="/" className="flex flex-col items-center text-white">
          <img src="/images/HomeIcon.svg" alt="Home" className="h-8 w-8" /> {/* Adjusted icon size */}
          <span className="text-sm">Home</span>
        </Link>

        {/* Favourites Button */}
        <Link to="/favorites" className="flex flex-col items-center text-white">
          <img src="/images/FavouriteIcon.svg" alt="Favourites" className="h-8 w-8" /> {/* Adjusted icon size */}
          <span className="text-sm">Favourites</span>
        </Link>

        {/* Search Button */}
        <Link to="/movies" className="flex flex-col items-center text-white">
          <img src="/images/MovieIcon.svg" alt="Search" className="h-8 w-8" /> {/* Adjusted icon size */}
          <span className="text-sm">Search</span>
        </Link>

        {/* Profile Button */}
        <Link to="/profile" className="flex flex-col items-center text-white">
          <img src="/images/ProfileIcon.svg" alt="Profile" className="h-8 w-8" /> {/* Adjusted icon size */}
          <span className="text-sm">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
