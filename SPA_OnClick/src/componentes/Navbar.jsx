import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div >
        <img className="navbar-logo" src="https://res.cloudinary.com/dae25mckx/image/upload/v1726266018/Transparente_rpw3ov.png" alt="logo" />
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#nosotros">Nosotros</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
