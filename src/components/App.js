import React, {useEffect, useState} from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState('');
  const [filter, setFilter] =useState(false);


  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(res => res.json())
      .then(data => setDogs(data));
  }, [selectedDog]);

  function handleDogClick(dog) {
    setSelectedDog(dog);
  }

  function handleIsGood(dog){
    const updateDog = {
      isGoodDog: !dog.isGoodDog,
    };
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateDog),
    })
      .then(res => res.json())
      .then(data => setSelectedDog(data));
  }

  function handleFilter() {
    setFilter(!filter);
  }

  const dogsToDisplay = dogs.filter((dog) => {
    if(filter === false) return true;

    return dog.isGoodDog === true;
  });


  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilter}>Filter good dogs: {filter ? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
        {dogsToDisplay.map((dog) => <DogBar key={dog.id} dog={dog} onDogClick={handleDogClick} />)}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {selectedDog ? <DogInfo dog={selectedDog} onIsGood={handleIsGood} /> : null }
        </div>
      </div>
    </div>
  );
}

export default App;
