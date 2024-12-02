import React, { useState } from 'react';

const PopupCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup}>Watch on IMDb</button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>Confirm your action</h3>
            <button onClick={togglePopup}>Cancel</button>
            <a href="https://www.imdb.com/title/tt0119698/" target="_blank" rel="noopener noreferrer">
              Go to IMDb
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupCard;
