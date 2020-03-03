import React from 'react';

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <div className="content-wrap">{children}</div>
    </footer>
  );
};

export default Footer;
