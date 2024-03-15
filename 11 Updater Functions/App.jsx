import { useState } from "react";

function App() {
  const [count, setCount] = useState();
  
  function increment(){
    // these updates are batched together and processed at the same time on the current state
    setCount(count +1);
    setCount(count +1);
    setCount(count +1);
    setCount(count +1);
    // count will = 1 after the batch update
    
    // forces an update
    setCount(c => c +1);
    setCount(c => c +1);
    setCount(c => c +1);
    // count will equal 3 as an update is performed for each function execution =>
    // typically a new variable name is used in this case the first letter of the original variable

    // function update shuld be used where poddable to harden your code.

  }
 
  return (
    <>
      
      
    </>
  )
}

export default App
