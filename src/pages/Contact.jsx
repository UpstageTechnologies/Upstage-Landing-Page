import { FiMail, FiMapPin } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import ContactForm from '../components/ContactForm';
import './Contact.css';

export default function Contact() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+1234567890'; // Placeholder phone number
    const message = 'Hello Upstage Technologies, I would like to discuss a project.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="contact">
      <div className="contact-container">
        <div className="contact-content">
          {/* Left Section - Contact Info */}
          <div className="contact-info-section">
            <h1>Let's Build Something Great Together!</h1>
            <p className="contact-intro">
              Have a project in mind? Tell us what you need and our team will help turn your vision into a digital solution.
            </p>

            {/* Contact Methods */}
            <div className="contact-methods">
              {/* WhatsApp */}
              <div className="contact-method">
                <div className="contact-method-icon whatsapp-icon">
                  <SiWhatsapp size={24} />
                </div>
                <div className="contact-method-content">
                  <h4>WhatsApp</h4>
                  <p>+1 (234) 567-890</p>
                  <button 
                    className="contact-method-btn"
                    onClick={handleWhatsAppClick}
                  >
                    Message on WhatsApp
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="contact-method">
                <div className="contact-method-icon email-icon">
                  <FiMail size={24} />
                </div>
                <div className="contact-method-content">
                  <h4>Email</h4>
                  <p>info@upstage.com</p>
                  <a href="mailto:info@upstage.com" className="contact-method-link">
                    Send Email
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-method">
                <div className="contact-method-icon location-icon">
                  <FiMapPin size={24} />
                </div>
                <div className="contact-method-content">
                  <h4>Location</h4>
                  <p>123 Tech Street<br />Business City, BC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
