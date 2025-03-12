'use client'
// informs react to render the component on the client
import React from 'react';
import { useState } from 'react';

export default function LikeButton() {
    // first item is state value.. 
    // second item is function to update the value -- common to use set 
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        console.log("increment cliccckcing");
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>LIKEE({likes})</button>
}