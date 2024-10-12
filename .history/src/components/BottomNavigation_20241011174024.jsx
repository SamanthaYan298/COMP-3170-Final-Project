import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className="flex justify-around items-center h-16"
        style={{
          background: 'rgba(221, 184, 255, 0.8)', 
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Home Button */}
        <Link to="/" className="flex flex-col items-center text-white relative z-10">
          <img src="/images/HomeIcon.svg" alt="Home" className="h-6 w-6" />
          <span className="text-sm">Home</span>
        </Link>

        {/* Favourites Button */}
        <Link to="/favorites" className="flex flex-col items-center text-white relative z-10">
          <img src="/images/FavouriteIcon.svg" alt="Favourites" className="h-6 w-6" />
          <span className="text-sm">Favourites</span>
        </Link>

        {/* Search Button */}
        <Link to="/movies" className="flex flex-col items-center text-white relative z-10">
          <img src="/images/MovieIcon.svg" alt="Search" className="h-6 w-6" />
          <span className="text-sm">Search</span>
        </Link>

        {/* Profile Button */}
        <Link to="/profile" className="flex flex-col items-center text-white relative z-10">
          <img src="/images/ProfileIcon.svg" alt="Profile" className="h-6 w-6" />
          <span className="text-sm">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
