import { useState } from "react"
function App() {
  let [Count, getCount] = useState(1);

  let Incriment = () => {
    Count = Count + 1;
    getCount(Count);
  }
  let Decriment = () => {
    if (Count <=1) {
      Count = Count;
    }else{
    Count = Count - 1;
    getCount(Count);
    }
  }
  let Reset = () => {
  
    Count = 1;
    getCount(Count);
  }


  return (
    < >
      <h1>Count :{Count}</h1>
      <button onClick={Incriment}>Increse:{Count}</button>
      <button onClick={Decriment}>Decrease:{Count}</button>
      <button onClick={Reset}>Reset:{Count} </button>
    </>
  )
}

export default App
