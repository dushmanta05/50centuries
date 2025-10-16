import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
    padding: "0 20px",
    zIndex: 1000,
    transition: "all 0.3s ease",
    background: scrolled 
      ? "rgba(255, 255, 255, 0.1)" 
      : "transparent",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
    boxShadow: scrolled ? "0 4px 15px rgba(0, 0, 0, 0.05)" : "none",
  };

  const titleStyle = {
    fontSize: "28px",
    color: "#e74c3c",
    fontWeight: "700",
    letterSpacing: "1px",
    textShadow: scrolled ? "none" : "1px 1px 3px rgba(0,0,0,0.2)",
    margin: 0,
    transition: "color 0.3s ease",
  };

  return (
    <nav style={navbarStyle}>
      <h1 style={titleStyle}>VK50</h1>
    </nav>
  );
};

export default Navbar;
