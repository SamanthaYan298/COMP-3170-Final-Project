import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <div className="bottom-nav"> 
      <div
        className="flex justify-around items-center h-16 nav-container"
        style={{
          background: 'rgba(221, 184, 255, 0.8)',
        }}
      >
        {/* Home Button */}
        <Link to="/" className="flex flex-col items-center text-white">
          <img src="/images/HomeIcon.svg" alt="Home" className="h-8 w-8" />
          <span className="text-sm"></span>
        </Link>

        {/* Favourites Button */}
        <Link to="/favorites" className="flex flex-col items-center text-white">
          <img src="/images/FavouriteIcon.svg" alt="Favourites" className="h-8 w-8" />
          <span className="text-sm"></span>
        </Link>

        {/* Search Button */}
        <Link to="/movies" className="flex flex-col items-center text-white">
          <img src="/images/MovieIcon.svg" alt="Search" className="h-8 w-8" />
          <span className="text-sm"></span>
        </Link>

        {/* Profile Button */}
        <Link to="/" className="flex flex-col items-center text-white">
          <img src="/images/ProfileIcon.svg" alt="Profile" className="h-8 w-8" />
          <span className="text-sm"></span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
