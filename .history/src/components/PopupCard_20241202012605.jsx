import '../App.css';
import { useState } from "react";

const PopupCard = ({ character, onClose }) => {
    return (
        <div className="popup-card">
            <div className="popup-card-content">
                <h2>{character} Info</h2>
                <p>Details about {character}...</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopupCard;
