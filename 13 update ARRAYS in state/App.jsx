import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(["Apple","Orange","Bannana"]);

  function handleAddFood(){
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(f => [...f, newFood]);
  }
  function handleRemoveFood(index){
    // an underscore for a element name means we are ignoring the element and reanming the index variable to i
    // foods.filter((element,index) => condition) 
    setFoods(foods.filter((_, i) => i !== index ))
  }
 
  return (
    <>
     <div>
        <h2>List of fod</h2>
        <ul>
          {foods.map((food, index)=> 
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {food} 
            </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>Add Food</button>
     </div>
    </>
  );
}

export default App
