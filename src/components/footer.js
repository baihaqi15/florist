import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="containernav">
        <NavLink to="/home" className="navbar">
          Home
        </NavLink>
        <NavLink to="/plants" className="navbar">
          Plants
        </NavLink>
        <NavLink to="/search" className="navbar">
          Explore
        </NavLink>
        <NavLink to="/about" className="navbar">
          About
        </NavLink>
      </div>
    </div>
  );
}
