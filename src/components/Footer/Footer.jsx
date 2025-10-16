import React from "react";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #2c3e50, #34495e)",
    flexDirection: "column",
    padding: "15px",
  };

  const linksContainerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "5px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#ecf0f1",
    fontWeight: "500",
    fontSize: "16px",
    padding: "8px 15px",
    borderRadius: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    transition: "all 0.3s ease",
  };

  const copyrightStyle = {
    color: "white",
    margin: "10px 0",
    textAlign: "center",
    fontSize: "14px",
  };

  // Hover effect is handled inline in the JSX

  return (
    <div style={footerStyle}>
      <div style={linksContainerStyle}>
        <a 
          href="https://www.dushmanta.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)"}
        >
          Portfolio
        </a>
        <a 
          href="https://github.com/dushmanta-behera/50centuries" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)"}
        >
          GitHub
        </a>
      </div>
      <p style={copyrightStyle}>
        Developed by Dushmanta
      </p>
    </div>
  );
};

export default Footer;
