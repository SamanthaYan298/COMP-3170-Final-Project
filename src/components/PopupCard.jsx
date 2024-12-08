// PopupCard.js
import React from 'react';
import '../App.css';

const PopupCard = ({ character, onClose }) => {
    const characterData = {
        Ashitaka: {
            name: "Ashitaka",
            description:
                "A brave and noble prince cursed while protecting his village, Ashitaka journeys west to find a cure. He strives to mediate the conflict between humans and the forest spirits.",
            voiceActors: "Voiced by Yōji Matsuda (Japan) and Billy Crudup (USA).",
            link: "https://en.wikipedia.org/wiki/Princess_Mononoke#Plot",
            image: "https://m.media-amazon.com/images/M/MV5BM2I3NWY2OWUtY2ZkOC00OGE5LWExOGMtNjY0YTM2M2RjMjQyXkEyXkFqcGc@._V1_.jpg",
        },
        Hime: {
            name: "Hime",
            description:
                "Known as Princess Mononoke, San is a fierce warrior raised by wolves. She views humans as enemies but forms a bond with Ashitaka through his sincerity.",
            voiceActors: "Voiced by Yuriko Ishida (Japan) and Claire Danes (USA).",
            link: "https://en.wikipedia.org/wiki/Princess_Mononoke#Characters",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4505aab9-e0fb-45d6-88dd-9f026f3842c5/d4k3023-a75bc414-97de-46e4-84a6-2cd4cacebf5c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1MDVhYWI5LWUwZmItNDVkNi04OGRkLTlmMDI2ZjM4NDJjNVwvZDRrMzAyMy1hNzViYzQxNC05N2RlLTQ2ZTQtODRhNi0yY2Q0Y2FjZWJmNWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._-A0KDfzfGEGp-tQKyReGuPRaNO52vrgNptMrRtBpoU",
        },
        ForestSpirit: {
            name: "Forest Spirit",
            description:
                "The deity of life and death, appearing as a deer-like creature during the day and a glowing giant at night. It holds the power to heal or curse.",
            notableTrait: "Its blood is believed to grant immortality and heal ailments.",
            link: "https://en.wikipedia.org/wiki/Princess_Mononoke#Setting",
            image: "https://preview.redd.it/kdbg0kt07gk91.png?width=922&format=png&auto=webp&s=84dfa4847985f1e9cade06fc751861f2957a6673",
        }
    };

    const charInfo = characterData[character];

    if (!charInfo) {
        return "No Characters Found!";
    }

    return (
        <div className="popup-card">
            <div className="popup-card-content">
                <h2>{charInfo.name}</h2>
                <div className='characters-info'>
                    <img 
                        src={charInfo.image} 
                        alt={charInfo.name} 
                        className="popup-image" 
                    />
                    <p>{charInfo.description}</p>
                    <p>{charInfo.voiceActors || charInfo.notableTrait}</p>
                </div>
                <div className='popup-buttons'>
                    <button 
                        onClick={() => window.open(charInfo.link, "_blank", "noopener,noreferrer")} 
                        className="popup-button"
                    >
                        Learn More
                    </button>

                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default PopupCard;
