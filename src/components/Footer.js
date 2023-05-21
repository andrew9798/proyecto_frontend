import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-4">
        <div className="d-flex justify-content-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;