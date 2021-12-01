import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbar__title navbar__item">Logo</div>
        <div className="navbar__item">Home</div>
        <div className="navbar__item">About</div>
        <div className="navbar__item">Contact</div>
      </header>
    );
  }
}

export default Navbar;
