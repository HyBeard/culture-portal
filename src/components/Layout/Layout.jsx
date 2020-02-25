import React from 'react';
import { Link } from 'gatsby';

import Header from '../Header';
import Navigation from '../Navigation';
import Masterpieces from '../Masterpieces';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <h1>Writers of Belarus</h1>
        <Navigation>
          <Link to="/">home</Link>
          <Link to="/blog">blog</Link>
          <Link to="/writer1/">writer1</Link>
          <Link to="/writer2/">writer2</Link>
        </Navigation>
        <div className="future-button-switch" />
      </Header>
      <main>
        <Masterpieces
          data={[
            { title: 'sometitle1', date: 'date1' },
            { title: 'sometitle2', date: 'date2' },
            { title: 'sometitle3', date: 'date3' },
          ]}
        >
          <h3>masterpieces</h3>
          <span>works</span>
          <span>date</span>
        </Masterpieces>
        {children}
      </main>
      <footer>
        <span>This is a footer</span>
      </footer>
    </>
  );
};

export default Layout;
