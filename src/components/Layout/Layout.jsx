import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>{children}</main>
      <footer>
        <span>This is a footer</span>
      </footer>
    </>
  );
};

export default Layout;
