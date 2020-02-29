import React from 'react';

const Header = ({ children }) => {
  const [header, nav, switchLang] = children;
  return (
    <header className="header">
      <div className="header__main">
        {header}
        {nav}
      </div>
      <div className="header__select-lang">{switchLang}</div>
    </header>
  );
};

export default Header;
