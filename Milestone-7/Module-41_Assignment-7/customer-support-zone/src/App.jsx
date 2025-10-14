import { Suspense } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import IssueManagement from "./components/IssueManagement/IssueManagement";
import Footer from "./components/Footer/Footer";

// toast import
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";

// Fetching Data
const fetchIssues = async () => {
  const result = await fetch("./data.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<Loading></Loading>}>
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
