// Footer.js
import React from "react";
import "../styles/Footer.css"; // Asegúrate de crear el archivo CSS correspondiente
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/lucianolupo95/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/lucianolupo95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://wa.me/+34641585218"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
