import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
  let activeStyle = {
    color: "#fff",
    textDecoration: "none",
  };
  let nonActiveStyle = {
    color: "#ffffff99",
    textDecoration: "none",
  };
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
      >
        Home
      </NavLink>
      &nbsp; &nbsp;
      <NavLink
        to="/bitcoin"
        style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
      >
        Chart
      </NavLink>
    </>
  );
}
