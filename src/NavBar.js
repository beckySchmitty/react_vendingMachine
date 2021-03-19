import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/candy">
        Candy
      </NavLink>
      <NavLink exact to="/cookie">
        Cookie
      </NavLink>
      <NavLink exact to="/chip">
        Chip
      </NavLink>
    </nav>
  );
}

export default NavBar;
