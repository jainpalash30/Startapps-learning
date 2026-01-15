import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <div className="about-text">
          <p>
            This blog is a personal space where ideas turn into words and
            experiences turn into stories. "It`s" created for people who love
            learning, exploring new perspectives, and growing a little every
            day.
          </p>
          <p>
            Here, "you`ll" find content around technology, career journeys,
            self-growth, and everyday life written in a simple, honest, and
            human way. The goal is not to impress, but to connect and provide
            value through real thoughts and practical insights.
          </p>
          <p>
            Whether "you`re" here to learn something new or just enjoy a good
            read, this blog is made for you. Thanks for being part of the
            journey 🤍
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
