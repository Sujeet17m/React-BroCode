import List from './List.jsx';

function App() {
  const fruits = [{id:1, name:"Apple", calories: 95},
                  {id:2,name:"Orange", calories: 45},
                  {id:3,name:"Bannana", calories: 105},
                  {id:4,name:"Coconut", calories: 159},
                  {id:5,name:"Pineapple", calories: 37}];
  
  const vegies = [{id:6, name:"Potato", calories: 110},
                  {id:7,name:"Celery", calories: 15},
                  {id:8,name:"Carrots", calories: 25},
                  {id:9,name:"Corn", calories: 63},
                  {id:10,name:"Brocoli", calories: 50}];
  
  const candys = [];
  
  return (
    <>
      <List foods={fruits} catagory="Fruit"/>
      <List foods={fruits} catagory="Fruit" method="highCal"/>
      <List foods={fruits} method="lowCal"/>
      <List foods={fruits} catagory="Fruit" method="byCal"/>
      <List foods={vegies} catagory="Vegetables" method="byCal"/>
      <List foods={candys} catagory="Candys"/>
      
    </>
  )
}

export default App
