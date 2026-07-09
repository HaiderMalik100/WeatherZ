import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="simple-footer">
      <p>© {new Date().getFullYear()} WeatherZ. All rights reserved.</p>
    </footer>
  );
};

export default Footer;