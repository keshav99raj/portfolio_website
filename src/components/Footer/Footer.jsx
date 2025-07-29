import { Link } from 'react-scroll';
import './Footer.css';

import React from "react";


const Footer = () => {
  return (
        <footer className="footer">
      <div className="footer-content">
        <a href="https://wa.me/+919950033784" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/keshavraj-singh-094927322/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://github.com/keshav99raj?tab=repositories" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </footer>

  );
};

export default Footer;