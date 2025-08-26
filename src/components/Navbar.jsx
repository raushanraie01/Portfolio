import React from "react";

const Navbar = () => (
  <nav
    style={{
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 20,
      background: "rgba(18,20,39,0.85)",
      color: "white",
      boxShadow: "0 2px 16px rgba(0,0,0,0.09)",
      display: "flex",
      justifyContent: "space-between",
      padding: "0.75rem 2rem",
      fontFamily: "Inter",
    }}
  >
    <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>DevPortfolio</div>
    <div>
      <a href="#hero" style={navLinkStyle}>
        Home
      </a>
      <a href="#about" style={navLinkStyle}>
        About
      </a>
      <a href="#projects" style={navLinkStyle}>
        Projects
      </a>
      <a href="#skills" style={navLinkStyle}>
        Skills
      </a>
      <a href="#contact" style={navLinkStyle}>
        Contact
      </a>
    </div>
  </nav>
);

const navLinkStyle = {
  color: "white",
  marginLeft: "1.5rem",
  textDecoration: "none",
  fontWeight: 500,
};

export default Navbar;
