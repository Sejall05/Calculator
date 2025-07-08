// src/App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString()); 
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
          <button key={n} onClick={() => handleClick(n.toString())}>
            {n}
          </button>
        ))}
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
