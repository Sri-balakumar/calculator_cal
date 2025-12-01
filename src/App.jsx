import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      const result = Function('"use strict"; return (' + input + ')')();
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator-container">
        <h2>Calculator</h2>
        <input
          type="text"
          value={input}
          readOnly
          placeholder="0"
          className="calc-input"
        />

        <div className="buttons">
          <button onClick={clear} className="btn-clear">C</button>
          <button onClick={deleteLast} className="btn-delete">←</button>
          <button onClick={() => handleClick("/")} className="btn-operator">÷</button>
          <button onClick={() => handleClick("*")} className="btn-operator">×</button>

          <button onClick={() => handleClick("7")} className="btn-number">7</button>
          <button onClick={() => handleClick("8")} className="btn-number">8</button>
          <button onClick={() => handleClick("9")} className="btn-number">9</button>
          <button onClick={() => handleClick("-")} className="btn-operator">−</button>

          <button onClick={() => handleClick("4")} className="btn-number">4</button>
          <button onClick={() => handleClick("5")} className="btn-number">5</button>
          <button onClick={() => handleClick("6")} className="btn-number">6</button>
          <button onClick={() => handleClick("+")} className="btn-operator">+</button>

          <button onClick={() => handleClick("1")} className="btn-number">1</button>
          <button onClick={() => handleClick("2")} className="btn-number">2</button>
          <button onClick={() => handleClick("3")} className="btn-number">3</button>
          <button onClick={calculate} className="btn-equal">=</button>
          
          <button onClick={() => handleClick("0")} className="btn-zero">0</button>
          <button onClick={() => handleClick(".")} className="btn-number">.</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;