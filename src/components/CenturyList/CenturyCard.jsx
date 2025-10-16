import React from "react";

const CenturyCard = ({ data }) => {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
  };

  const cardStyleHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
  };

  const imgDivStyle = {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  };

  const imgStyle = {
    width: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.3s ease",
  };

  const idBadgeStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#e74c3c",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.4em",
    padding: "8px 16px",
    borderRadius: "20px",
    minWidth: "60px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    zIndex: "1",
  };

  const textStyle = {
    padding: "20px",
    lineHeight: "1.6",
    color: "#444",
    margin: 0,
  };

  return (
    <div style={cardStyle} onMouseEnter={(e) => {
      Object.assign(e.target.style, cardStyleHover);
      const img = e.target.querySelector('img');
      if (img) img.style.transform = "scale(1.05)";
    }} onMouseLeave={(e) => {
      e.target.style.transform = "";
      e.target.style.boxShadow = "";
      const img = e.target.querySelector('img');
      if (img) img.style.transform = "";
    }}>
      <div style={imgDivStyle}>
        <img src={data.img} alt={data.alt} style={imgStyle} />
        <div style={idBadgeStyle}>#{data.id}</div>
      </div>
      <p style={textStyle}>{data.text}</p>
    </div>
  );
};

export default CenturyCard;
