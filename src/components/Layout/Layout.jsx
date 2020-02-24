import React from 'react';
import { Link } from 'gatsby';

import Header from '../Header';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Navigation>
          <Link to="/">home</Link>
          <Link to="/blog">blog</Link>
          <Link to="/writer1/">writer1</Link>
          <Link to="/writer2/">writer2</Link>
        </Navigation>
      </Header>
      <main>{children}</main>
      <footer>
        <span>This is a footer</span>
      </footer>
    </>
  );
};

export default Layout;
