import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <Navbar></Navbar>
        <main className="flex-1">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
