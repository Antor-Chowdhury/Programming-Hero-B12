import React from "react";
import { Outlet } from "react-router";
import App from "../App";
import Header from "./Header";

const Root = () => {
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
