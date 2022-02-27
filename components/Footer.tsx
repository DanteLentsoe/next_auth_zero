import React from 'react';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <div className="logo" data-testid="footer-logo" />
    <p data-testid="footer-text">
      Developed by <a href="https://dantelentsoe.com">Dante Lentsoe</a>
    </p>
  </footer>
);

export default Footer;
