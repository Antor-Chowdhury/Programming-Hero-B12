import "./App.css";

function App() {
  return (
    <>
      <h1>React Core concepts</h1>
      <Student name="Antor" dept="CSE"></Student>
      <Student name="Brain" dept="EEE"></Student>
      <Person></Person>
      <Developer name="Antor" tech="JavaScript"></Developer>
      <Developer name="Durjoy" tech="Python"></Developer>
    </>
  );
}

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Dept: {props.dept}</p>
    </div>
  );
}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
        marginBottom: "10px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Person() {
  const age = 25;
  const name = "Antor";

  const personStyle = {
    color: "cyan",
    textAlign: "center",
    fontSize: "20px",
    border: "2px solid pink",
    borderRadius: "20px",
    padding: "20px",
  };

  return (
    <p id="" title="tooltip" style={personStyle}>
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
