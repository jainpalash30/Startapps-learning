import React from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      summary:
        "New to React? This post walks you through the basics in a simple way and helps you build your first component without feeling overwhelmed.",
      date: "January 5, 2026",
    },
    {
      id: 2,
      title: "Why JavaScript Matters So Much",
      summary:
        'JavaScript can feel confusing at first, but once you understand its importance, everything starts to make sense. This blog explains why "it`s" worth learning.',
      date: "January 6, 2026",
    },
    {
      id: 3,
      title: "How I Started Learning Web Development",
      summary:
        "From confusion to small wins — this post shares my early days in web development and the lessons that kept me going.",
      date: "January 7, 2026",
    },
    {
      id: 4,
      title: "Common Mistakes Beginners Make in React",
      summary:
        "Everyone makes mistakes while learning React. Here are some common ones I faced and how you can avoid them early on.",
      date: "January 8, 2026",
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog Posts</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2 className="blog-card-title">{post.title}</h2>
            <p className="blog-card-date">{post.date}</p>
            <p className="blog-card-summary">{post.summary}</p>

            <Link to={`/blog/${post.id}`} className="blog-card-link">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
