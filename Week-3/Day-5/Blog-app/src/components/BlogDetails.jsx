import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/BlogDetails.css';

function BlogDetails() {
  const { id } = useParams();
  const blogPosts = [
     {
    id: 1,
    title: "Getting Started with React",
    summary: "New to React? This post walks you through the basics in a simple way and helps you build your first component without feeling overwhelmed.",
    date: "January 5, 2026",
    content: `React is a JavaScript library that helps you build user interfaces in a clean and organized way.
    Instead of writing everything in one place, React allows you to break your UI into small, reusable components.

    When starting out, concepts like components, props, and state may feel confusing.
    But once you understand how they work together, React becomes very intuitive.
    In this post, I explain these basics in a beginner-friendly manner and guide you
    through building your very first React component step by step.`
  },
  {
    id: 2,
    title: "Why JavaScript Matters So Much",
    summary: "JavaScript can feel confusing at first, but once you understand its importance, everything starts to make sense. This blog explains why it’s worth learning.",
    date: "January 6, 2026",
    content: `JavaScript is what brings websites to life.
    At first, learning it can feel frustrating with all the syntax and errors,
    but over time you realize how powerful it really is.

    JavaScript controls user interactions like button clicks, form validation,
    animations, and data fetching.
    It is used on both the frontend and backend, which makes it one of the most
    important skills for web developers.

    This blog explains why JavaScript is worth investing time in
    and how learning the basics can unlock many opportunities in web development.`
  },
  {
    id: 3,
    title: "How I Started Learning Web Development",
    summary: "From confusion to small wins — this post shares my early days in web development and the lessons that kept me going.",
    date: "January 7, 2026",
    content: `My journey into web development started with a lot of confusion.
    HTML felt easy, CSS was tricky, and JavaScript felt overwhelming.
    There were days when nothing worked and quitting felt tempting.

    But small wins — like fixing a bug or completing a small project —
    kept me motivated.
    In this blog, I share the mistakes I made, what helped me stay consistent,
    and the lessons I learned while starting my web development journey.`
  },
  {
    id: 4,
    title: "Common Mistakes Beginners Make in React",
    summary: "Everyone makes mistakes while learning React. Here are some common ones I faced and how you can avoid them early on.",
    date: "January 8, 2026",
    content: `When learning React, making mistakes is completely normal.
    I made many of them too — from improper state management to incorrect component structure.

    Beginners often struggle with understanding props, state updates,
    and component re-rendering.
    In this post, I talk about some of the most common React mistakes
    and share simple tips to avoid them so your learning journey becomes smoother.`
  }
  ];

 
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  
  if (!blog) {
    return (
      <div className="blog-details-container">
        <div className="blog-details-content">
          <h1 className="error-title">Blog Not Found</h1>
          <p className="error-message">
            Sorry, the blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="back-button">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  
  return (
    <div className="blog-details-container">
      <div className="blog-details-content">
        <Link to="/blog" className="back-button">
          ← Back to Blog
        </Link>
        <h1 className="blog-details-title">{blog.title}</h1>
        <p className="blog-details-date">{blog.date}</p>
        <div className="blog-details-text">
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;