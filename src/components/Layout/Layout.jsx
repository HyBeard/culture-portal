import React from 'react';
import { Link } from 'gatsby';

import Header from '../Header';
import Navigation from '../Navigation';
import LangSwitcher from '../LangSwitcher';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <h1>Writers of Belarus</h1>
        <Navigation>
          <Link to="/">home</Link>
          <Link to="/blog">blog</Link>
          <Link to="/search">search</Link>
        </Navigation>
        <LangSwitcher />
      </Header>
      <main className="main">{children}</main>
      <footer>
        <span>This is a footer</span>
      </footer>
    </>
  );
};

export default Layout;
