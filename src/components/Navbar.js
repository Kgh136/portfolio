import React from 'react';
import { NavLink } from "react-router-dom";
 
const Navbar = () => {
  return (
    <header>
      <nav className="sidebar">
        <ul>
          <NavLink className="button" to="/">
            Home
          </NavLink>
          <ul>
          <NavLink className="button" to="/profile">
            Profile
            </NavLink>
            </ul>
        </ul>
      </nav>

    </header>
  );
};
 
export default Navbar;