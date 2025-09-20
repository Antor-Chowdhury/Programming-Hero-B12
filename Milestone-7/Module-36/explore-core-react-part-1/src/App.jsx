import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Pet></Pet>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
    </>
  );
}

function Person() {
  const age = 25;
  const name = "Antor";
  return (
    <p>
      I am {name} & my age is {age}
    </p>
  );
}

function Pet() {
  return <p>Dog</p>;
}

function Hobby() {
  return <h3>Still trying to find it.</h3>;
}

function Sports() {
  return (
    <div>
      <h2>Playing Cricket</h2>
      <p>Playing and Losing</p>
    </div>
  );
}

export default App;
