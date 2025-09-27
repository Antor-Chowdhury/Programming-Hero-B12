import Counter from "./Counter";
import Batsman from "./Batsman";
import Bowler from "./Bowler";
import Users from "./Users";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

import "./App.css";
import { Suspense } from "react";

function App() {
  function handleClick() {
    alert("I am Clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  const handleAddClick6 = (num) => {
    const newNum = num + 10;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Bowler></Bowler>
      <Batsman></Batsman>
      <Counter></Counter>

      {/* <button onclick="handleClick()">Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>

      <button
        onClick={function handleClick2() {
          alert("Clicked 2");
        }}
      >
        Click Me 2
      </button>

      <button onClick={handleClick3}>Click Me 3</button>

      {/* using direct arrow function in onClick */}
      <button
        onClick={() => {
          alert("Clicked 4");
        }}
      >
        Click Me 4
      </button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>

      <button
        onClick={() => {
          handleAddClick6(10);
        }}
      >
        6th Click
      </button>
    </>
  );
}

export default App;
