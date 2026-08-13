import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Button from '../components/Button';
import './Login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Authentication will be implemented later
  };

  return (
    <main className="login">
      <div className="login-container">
        <div className="login-card">
          {/* Logo */}
          <Link to="/" className="login-logo">
            <span className="logo-icon">↑</span>
            <span>Upstage</span>
          </Link>

          {/* Heading */}
          <h1>Welcome Back</h1>
          <p className="login-subtitle">Sign in to your account to continue</p>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <a href="#forgot" className="forgot-password">
              Forgot Password?
            </a>

            {/* Login Button */}
            <Button variant="primary" className="full-width">
              Login
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="signup-prompt">
            Don't have an account? <Link to="#signup" className="signup-link">Create Account</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
