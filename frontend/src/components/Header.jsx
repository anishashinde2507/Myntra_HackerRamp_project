// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Myntra Hackathon</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/style-match" className="nav-link">Style Match</Link>
        <Link to="/cloth-fit" className="nav-link">Cloth Fit</Link>
      </nav>
    </header>
  );
};

export default Header;
