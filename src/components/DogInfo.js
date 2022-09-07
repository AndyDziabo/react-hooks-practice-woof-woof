import React from "react";

function DogInfo({ dog, onIsGood }) {
    function handleIsGoodClick(){
        onIsGood(dog);
    }

    return(
        <div>
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
            <button onClick={handleIsGoodClick}>{dog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
    )
};

export default DogInfo;