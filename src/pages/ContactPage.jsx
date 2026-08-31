import { FiMail, FiMapPin } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import ContactForm from '../components/ContactForm';
import './Contact.css';

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+46 73 902 21 25';
    const message = 'Hello Upstage India, I would like to discuss a project.';
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
                  <p>Sweden Branch Office<br/>
                      +46 73 902 21 25<br/><br/>
                     Canada Branch Office<br/>
                      +1 (905) 226-5800</p>
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
                  <p>upstageindia@gmail.com</p>
                  <a href="mailto:upstagetechnologies@gmail.com" className="contact-method-link">
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
                  <p>
                    India Branch Office (Head Office)<br/>
                    Melagandhi Nagar<br/>
                    Sattur - 626203<br/>
                    Tamil Nadu<br/>
                    India<br/><br/>
                    Sweden Branch Office<br/>
                    Gothenburg<br/><br/>
                    Canada Branch Office<br/>
                    Toronto </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
