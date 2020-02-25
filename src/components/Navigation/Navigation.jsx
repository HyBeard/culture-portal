import React from 'react';

const Navigation = ({ children }) => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {children.map((link, index) => {
          const key = `navigation-item: ${index}`;
          return (
            <li key={key} className="navigation-item">
              {link}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
