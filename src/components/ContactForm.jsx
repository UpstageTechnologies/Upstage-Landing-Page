import { useState } from 'react';
import Button from './Button';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import {db} from '../firebase';
import { FaArrowRight } from "react-icons/fa6";
import '../index.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = validateForm();

  if (Object.keys(newErrors).length === 0) {
    try {
      await addDoc(collection(db, 'contacts'), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        createdAt: serverTimestamp()
      });

      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: 'Website Development',
          message: ''
        });

        setSubmitted(false);
      }, 3000);

    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
    } else {
       setErrors(newErrors);
   }
  };

  if (submitted) {
    return (
      <div className="contact-form-success">
        <div className="success-icon">✓</div>
        <h3>Thank you!</h3>
        <p>We received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
          className={errors.fullName ? 'error' : ''}
        />
        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="service">Service</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option>Website Development</option>
          <option>Mobile App Development</option>
          <option>Website & App Enhancement</option>
          <option>Custom Development</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          rows="5"
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <Button variant="primary" className="submit-btn">
        Send Message <FaArrowRight/>
      </Button>
    </form>
  );
}
