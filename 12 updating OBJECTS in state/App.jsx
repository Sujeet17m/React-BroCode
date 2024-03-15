import { useState } from "react";

function App() {
  const [car, setCar] = useState({year: 2024, make: "Ford", model: "Raptor"});

  function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}));
  }
  function handleMakeChange(event){
    setCar(c => ({...c, make: event.target.value}));
  }
  function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}));
  }
 
  return (
    <>
      <div>
        <p>
          Your favorite  car is : {car.year} {car.make} {car.model}
        </p>
        <input type="number" name={car.year} value={car.year} onChange={handleYearChange}/><br/>
        <input type="string" name={car.make} value={car.make} onChange={handleMakeChange}/><br/>
        <input type="string" name={car.model} value={car.model} onChange={handleModelChange}/><br/>
      </div>
      
      
    </>
  );
}

export default App
