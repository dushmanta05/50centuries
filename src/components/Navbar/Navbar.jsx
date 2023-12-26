import React from "react";
import "./style.css";
import logo from "../../assets/image/vk.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="nav-img" />
      <h1>50Centuries</h1>
    </nav>
  );
};

export default Navbar;
