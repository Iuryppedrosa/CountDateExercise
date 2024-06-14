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

  function aumentarValor() {
    setValor((previusValue) => previusValue + 1);
  }

  function diminuirValor() {
    setValor((previusValue) => previusValue - 1);
  }

  return (
    <>
      <div>
        <button onClick={diminuirValor}>-</button>
        <p style={{ display: "inline-block" }}>Step: {valor} </p>
        <button onClick={aumentarValor}>+</button>
      </div>
      <div>
        <Counter valorDeIncremento={valor} />
      </div>
    </>
  );
}

function Counter({ valorDeIncremento }) {
  const [valor, setValor] = useState(1);

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
        <p style={{ display: "inline-block" }}>Count: {valor} </p>
        <button onClick={aumentarValor}>+</button>
      </div>
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
