import { Link } from 'react-router-dom';
import { FiAward, FiCode, FiHeadphones, FiSmile } from 'react-icons/fi';
import picture from '../assets/picture.jpeg';
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
              <Button variant="primary">Start Now →</Button>
              <Button variant="secondary">Explore Services</Button>
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

      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlights-container">
          <div className="highlight-item">
            <div className="highlight-icon">
              <FiCode size={28} />
            </div>
            <h4>Modern Solutions</h4>
            <p>Built with the latest technologies.</p>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">
              <FiAward size={28} />
            </div>
            <h4>Custom Development</h4>
            <p>Solutions tailored to your business needs.</p>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">
              <FiHeadphones size={28} />
            </div>
            <h4>24/7 Support</h4>
            <p>We are always here to support you.</p>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">
              <FiSmile size={28} />
            </div>
            <h4>Client Satisfaction</h4>
            <p>Your success is our priority.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
