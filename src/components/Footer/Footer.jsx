import { GithubLogoIcon, LinkedinLogoIcon, TwitterLogoIcon } from "@phosphor-icons/react";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #2c3e50, #34495e)",
    flexDirection: "column",
    padding: "20px",
  };

  const copyrightStyle = {
    color: "white",
    margin: "15px 0",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "500",
  };

  const socialContainerStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "10px",
  };

  const socialLinkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    borderRadius: "50%",
    padding: "8px",
  };

  const handleSocialMouseEnter = (e) => {
    e.target.style.transform = "scale(1.2)";
    e.target.style.opacity = "0.8";
  };

  const handleSocialMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.opacity = "1";
  };

  return (
    <div style={footerStyle}>
      <p style={copyrightStyle}>
        Developed by <a href="https://www.dushmanta.dev" style={{ color: "#ecf0f1", textDecoration: "underline" }}>Dushmanta</a>
      </p>
      <div style={socialContainerStyle}>
        <a
          href="https://x.com/dushmanta05"
          target="_blank"
          rel="noopener noreferrer"
          style={socialLinkStyle}
          onMouseEnter={handleSocialMouseEnter}
          onMouseLeave={handleSocialMouseLeave}
        >
          <TwitterLogoIcon size={24} color="white" weight="fill" />
        </a>
        <a
          href="https://github.com/dushmanta05"
          target="_blank"
          rel="noopener noreferrer"
          style={socialLinkStyle}
          onMouseEnter={handleSocialMouseEnter}
          onMouseLeave={handleSocialMouseLeave}
        >
          <GithubLogoIcon size={24} color="white" weight="fill" />
        </a>
        <a
          href="https://linkedin.com/in/dushmanta05"
          target="_blank"
          rel="noopener noreferrer"
          style={socialLinkStyle}
          onMouseEnter={handleSocialMouseEnter}
          onMouseLeave={handleSocialMouseLeave}
        >
          <LinkedinLogoIcon size={24} color="white" weight="fill" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
