// src/Flashcard.js
import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ front, back }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`card ${flipped ? 'flip' : ''}`} onClick={handleFlip}>
            <div className="front">{front}</div>
            <div className="back">{back}</div>
        </div>
    );
};

export default Flashcard;
