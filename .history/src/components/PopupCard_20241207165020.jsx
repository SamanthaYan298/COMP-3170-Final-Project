// PopupCard.js
import React from 'react';
import '../App.css';

const PopupCard = ({ character, onClose }) => {
    return (
        <div className="popup-card">
            <div className="popup-card-content">
                <h2>{character} Information</h2>
                <p>Details about {character}...</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopupCard;
