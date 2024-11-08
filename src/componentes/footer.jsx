import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>BLOG-DEV</h2>
        </div>
        <div className="footer-links">
          <a href="#about">Sobre Nosotros</a>
          <a href="#contact">Contacto</a>
          <a href="#privacy">Política de Privacidad</a>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BLOG-DEV. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;