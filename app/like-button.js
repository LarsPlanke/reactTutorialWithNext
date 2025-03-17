'use client'
import React from 'react';
import { useState } from 'react';

export function ColorButton() {
    const [blueIntensity, setBlueIntensity] = useState(255);
    const [redIntensity, setRedIntensity] = useState(0);
    const [isBluePhase, setIsBluePhase] = useState(true);

    function handleColorClick() {
        if (isBluePhase) {
            const newBlue = Math.max(blueIntensity - 5, 0);
            setBlueIntensity(newBlue);
            if (newBlue === 0) {
                setIsBluePhase(false);
                setRedIntensity(255);
            }
        } else {
            const newRed = Math.max(redIntensity - 5, 0);
            setRedIntensity(newRed);
            if (newRed === 0) {
                setIsBluePhase(true);
                setBlueIntensity(255);
            }
        }
    }

    const backgroundColor = isBluePhase 
        ? `rgb(0, 0, ${blueIntensity})`
        : `rgb(${redIntensity}, 0, 0)`;
    
    const intensity = isBluePhase ? blueIntensity : redIntensity;
    const colorName = isBluePhase ? 'Blue' : 'Red';

    return (
        <button 
            onClick={handleColorClick}
            style={{ 
                backgroundColor,
                color: intensity < 128 ? 'white' : 'black',
                padding: '10px 20px', 
                margin: '10px',
                transition: 'background-color 0.3s ease'
            }}
        >
            {colorName} Intensity: {intensity}
        </button>
    );
}

export default function LikeButton() {
    // first item is state value.. 
    // second item is function to update the value -- common to use set 
    const [likes] = React.useState(0);

    function handleClick() {
        console.log("increment cliccckcing");

    }

    return <button onClick={handleClick}>LIKEE({likes})</button>
}