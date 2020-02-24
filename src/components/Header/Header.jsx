import React from 'react';
import styles from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <h1>This is a header with Navigation component</h1>
      {children}
    </header>
  );
};

export default Header;
