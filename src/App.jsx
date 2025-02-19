import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("Value Added");
    setCounter(counter + 1);
  };
  const removeValue = () => {
    console.log("Value Remove");
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1> Counter: {counter}</h1>
      <button onClick={addValue}>Add Value </button>
      <button onClick={removeValue}>Remove Value </button>
    </div>
  );
}

export default App;
