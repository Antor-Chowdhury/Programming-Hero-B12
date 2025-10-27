import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/anotherLogin"}>Another Login</NavLink>
    </nav>
  );
};

export default Header;
