import React from 'react';

const Navigation = ({ children }) => {
  const [logo, ...nav] = children;

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item navigation__logo">{logo}</li>
        {nav.map((link, index) => {
          const key = `navigation__item: ${index}`;
          return (
            <li key={key} className="navigation__item">
              {link}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
