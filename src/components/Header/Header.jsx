import React from 'react';
import styles from './Header.module.scss';

const Header = ({ children }) => {
  const [header, nav, switchLang] = children;
  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        {header}
        {nav}
      </div>
      <div className={styles.headerAside}>{switchLang}</div>
    </header>
  );
};

export default Header;
