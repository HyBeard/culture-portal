import React from 'react';
import { Link } from 'gatsby';

import Header from '../Header';
import Navigation from '../Navigation';
import LangSwitcher from '../LangSwitcher';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <h1>Writers of Belarus</h1>
        <Navigation>
          <Link to="/">home</Link>
          <Link to="ru/search">search</Link>
          <Link to="/team">team</Link>
        </Navigation>
        <LangSwitcher />
      </Header>
      <main className="main">{children}</main>
      <Footer>
        <p>® Портал белорусских писателей 2020</p>
      </Footer>
    </>
  );
};

export default Layout;
