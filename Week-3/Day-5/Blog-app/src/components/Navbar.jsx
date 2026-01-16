import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyBlog
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            >
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/blog" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;