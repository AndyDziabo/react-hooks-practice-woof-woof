import React from "react";

function DogBar({ dog, onDogClick }) {
    function handleClick() {
        onDogClick(dog);
    }
    
    return (
        <span onClick={handleClick}>{dog.name}</span>
    ) 
};

export default DogBar;