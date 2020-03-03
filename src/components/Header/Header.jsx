import React from 'react';

const Header = ({ children }) => {
  const [nav, switchLang] = children;

  return (
    <header className="header">
      <div className="content-wrap">
        <div className="header__main">
          <div className="header__nav"> {nav}</div>
          <div className="header__select-lang">{switchLang}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
