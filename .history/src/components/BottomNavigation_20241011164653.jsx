import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/HomeIcon.svg'; 
import favoritesIcon from '../images/FavouriteIcon.svg'; 
import movieIcon from '../images/MovieIcon.svg';
import profileIcon from '../images/ProfileIcon.svg'; 

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[430px] z-50">
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
          <img src={homeIcon} alt="Home" className="h-6 w-6" />
          <span className="text-sm">Home</span>
        </Link>

        {/* Favourites Button with Imported SVG */}
        <Link to="/favorites" className="flex flex-col items-center text-white relative z-10">
          <img src={favoritesIcon} alt="Favourites" className="h-6 w-6" />
          <span className="text-sm">Favourites</span>
        </Link>

        {/* Search Button with Imported SVG */}
        <Link to="/movies" className="flex flex-col items-center text-white relative z-10">
          <img src={movieIcon} alt="Search" className="h-6 w-6" />
          <span className="text-sm">Search</span>
        </Link>

        {/* Profile Button with Imported SVG */}
        <Link to="/profile" className="flex flex-col items-center text-white relative z-10">
          <img src={profileIcon} alt="Profile" className="h-6 w-6" />
          <span className="text-sm">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;