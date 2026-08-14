import { Link } from 'react-router-dom';
import { FiAward, FiCode, FiHeadphones, FiSmile } from 'react-icons/fi';
import picture from '../assets/picture.jpeg';
import { FaArrowRight } from "react-icons/fa6";
import Button from '../components/Button';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-label">DIGITAL SOLUTIONS FOR MODERN BUSINESSES</span>
            <h1 className="hero-title">
              Build Your Vision.<br />
              <span className="hero-highlight">Grow Your Business.</span>
            </h1>
            <p className="hero-description">
              We create modern websites, mobile applications, and customized digital solutions that help businesses grow in the digital world.
            </p>
            <div className="hero-buttons">
              <Button variant="primary">Our Products <FaArrowRight /></Button>
              <Link to="/services">
              <Button variant="secondary">Explore Services</Button>
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-placeholder">
              <img 
                src={picture}
                alt="picture"
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="hero-decoration hero-decoration-1"></div>
          <div className="hero-decoration hero-decoration-2"></div>
        </div>
      </section>
    </main>
  );
}
