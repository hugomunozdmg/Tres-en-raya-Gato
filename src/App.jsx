import "./App.css";
import { useState } from "react";

function App() {
  let [winner, setWinner] = useState();
  let [turno, setTurno] = useState("X");
  let [values, setValues] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);

  function marcar(x, y) {
    let valuesToChange = [...values];
    valuesToChange[x][y] = turno;
    setValues(valuesToChange);
    checkWinner();
  }

  function checkWinner() {
    if (turno == "X") setTurno("O");
    if (turno == "O") setTurno("X");
    setWinner(
        (values[0][0] != " " && values[0][0] == values[0][1] && values[0][0] == values[0][2]) ||
        (values[1][0] != " " && values[1][0] == values[1][1] && values[1][0] == values[1][2]) ||
        (values[2][0] != " " && values[2][0] == values[2][1] && values[2][0] == values[2][2]) ||
        (values[0][0] != " " && values[0][0] == values[1][0] && values[0][0] == values[2][0]) ||
        (values[1][0] != " " && values[1][0] == values[1][1] && values[1][0] == values[2][1]) ||
        (values[0][2] != " " && values[0][2] == values[1][2] && values[0][2] == values[2][2])
    );
  }

  return (
    <div className="App">
      <p>{winner ? `el ganador es ${turno}` : ""}</p>
      <div>
        <button
          onClick={() => {
            marcar(0, 0);
          }}
        >
          {values[0][0]}
        </button>
        <button
          onClick={() => {
            marcar(0, 1);
          }}
        >
          {values[0][1]}
        </button>
        <button
          onClick={() => {
            marcar(0, 2);
          }}
        >
          {values[0][2]}
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            marcar(1, 0);
          }}
        >
          {values[1][0]}
        </button>
        <button
          onClick={() => {
            marcar(1, 1);
          }}
        >
          {values[1][1]}
        </button>
        <button
          onClick={() => {
            marcar(1, 2);
          }}
        >
          {values[1][2]}
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            marcar(2, 0);
          }}
        >
          {values[2][0]}
        </button>
        <button
          onClick={() => {
            marcar(2, 1);
          }}
        >
          {values[2][1]}
        </button>
        <button
          onClick={() => {
            marcar(2, 2);
          }}
        >
          {values[2][2]}
        </button>
      </div>
    </div>
  );
}

export default App;
