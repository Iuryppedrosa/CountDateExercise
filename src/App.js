import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Step />
    </>
  );
}

function Step() {
  const [valor, setValor] = useState(1);

  return (
    <>
      <div>
        <input
          style={{ display: "inline-block" }}
          type="range"
          min={1}
          max={10}
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        ></input>

        <p style={{ display: "inline-block" }}>{valor} </p>
      </div>
      <div>
        <Counter valorDeIncremento={valor} />
      </div>
    </>
  );
}

function Counter({ valorDeIncremento }) {
  const [valor, setValor] = useState(1);

  function handleReset() {
    setValor(0);
  }

  function aumentarValor() {
    setValor(() => valorDeIncremento + valor);
  }

  function diminuirValor() {
    setValor(() => valor - valorDeIncremento);
  }

  return (
    <div>
      <div>
        <button onClick={diminuirValor}>-</button>
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        ></input>
        <button onClick={aumentarValor}>+</button>
      </div>
      <button onClick={handleReset}>Reset</button>
      <p>
        <DateCounter valor={valor} />
      </p>
    </div>
  );
}

function DateCounter({ valor }) {
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + valor);

  return (
    <p>
      <span>
        {valor === 0
          ? "Today is "
          : valor > 0
            ? `${valor} days from today is `
            : `${valor} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </p>
  );
}
