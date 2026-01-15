import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to MyBlog!</h1>
        <p className="home-description">
          Welcome to our blog a simple space where real thoughts, stories, and ideas are shared.

          Here, "you`ll" find easy-to-read blogs on technology, careers, and everyday experiences, written in a genuine and relatable way. No overthinking, no heavy words — just honest content meant to inform, inspire, and connect.

          Read, explore, and enjoy the journey with us. 🌱
        </p>
        <div className="home-buttons">
          <Link to="/blog" className="home-button">
            Read Blog Posts
          </Link>
          <Link to="/about" className="home-button secondary">
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;