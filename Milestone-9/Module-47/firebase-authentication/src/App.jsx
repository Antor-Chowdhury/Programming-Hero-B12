import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <>
      <h2>Welcome to the Home Page</h2>
      <button>
        <Link to={"/login"}>Go to Login Page</Link>
      </button>
    </>
  );
}

export default App;
