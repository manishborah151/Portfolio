// Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {Sun, Moon, Github,Linkedin, FileUser} from "lucide-react"

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <nav className="navbar">
      <ul className="nav-group left">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>

      <div className="separator" />

      <ul className="nav-group right">
  <li>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <Github size={18} />
    </a>
  </li>
  <li>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <Linkedin size={18} />
    </a>
  </li>
  <li>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
    < FileUser size={18} />
    </a>
  </li>
  <li onClick={toggleTheme} className="theme-toggle" title="Toggle Theme">
    {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
