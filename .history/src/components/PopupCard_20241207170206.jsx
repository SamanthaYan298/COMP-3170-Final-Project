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
            link: "https://en.wikipedia.org/wiki/Princess_Mononoke#Plot"
        },
        Hime: {
            name: "Hime",
            description:
                "Known as Princess Mononoke, San is a fierce warrior raised by wolves. She views humans as enemies but forms a bond with Ashitaka through his sincerity.",
            voiceActors: "Voiced by Yuriko Ishida (Japan) and Claire Danes (USA).",
            link: "https://en.wikipedia.org/wiki/Princess_Mononoke#Characters"
        },
        ForestSpirit: {
            name: "Forest Spirit",
            description:
                "The deity of life and death, appearing as a deer-like creature during the day and a glowing giant at night. It holds the power to heal or curse.",
            notableTrait: "Its blood is believed to grant immortality and heal ailments.",
            link: "https://en.wikipedia.org/wiki/Princess_Mononoke#Setting"
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
                <div className='charaters-info'>
                    <p>{charInfo.description}</p>
                    <p>{charInfo.voiceActors || charInfo.notableTrait}</p>
                </div>
                <a href={charInfo.link} target="_blank" rel="noopener noreferrer">
                    Learn more about {charInfo.name}
                </a>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopupCard;
