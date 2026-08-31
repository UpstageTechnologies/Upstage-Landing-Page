import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import '../index.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section">
            <h3 className="footer-logo">
              <span>Upstage India</span>
            </h3>
            <p className="footer-desc">
              Building digital solutions.<br />
              Supporting business growth.
            </p>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook" className="social-link">
                <FiFacebook size={20} />
              </a>
              <a href="#twitter" aria-label="Twitter" className="social-link">
                <FiTwitter size={20} />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="social-link">
                <FiLinkedin size={20} />
              </a>
              <a href="#instagram" aria-label="Instagram" className="social-link">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/pricing">Packages</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p className="contact-info">
              Email: <a href="mailto:niruban@upstageindia.com">niruban@upstageindia.com</a>
            </p>
            <p className="contact-info">
              Phone: <a href="tel:+91 94424 61428">+91 94424 61428</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {currentYear} Upstage India. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
