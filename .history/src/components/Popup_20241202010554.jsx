import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const PopupCard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [linkToNavigate, setLinkToNavigate] = useState('');

  const handleLinkClick = (url) => {
    setLinkToNavigate(url);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleConfirm = () => {
    window.open(linkToNavigate, "_blank");
    setShowPopup(false);
  };

  return (
    <div className="popup-card-container">
      <div className="movie-info-container">
        <div className="back-btn">
          <Link to="/movies" className='movie-page'>
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24.5" 
