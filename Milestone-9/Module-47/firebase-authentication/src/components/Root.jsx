import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import App from "../App";
import Header from "./Header";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div>
      {/* <App></App> */}
      <h1>Firebase Authentication With Google</h1>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
