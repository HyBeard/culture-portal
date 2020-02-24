import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/writer1/">writer1</Link>
      <Link to="/writer2/">writer2</Link>
    </nav>
  );
};

export default Navigation;
