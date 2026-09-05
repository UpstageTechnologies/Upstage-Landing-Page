import { useNavigate } from 'react-router-dom'
import './POSPage.css'
import { BiLogoPlayStore } from 'react-icons/bi'
export default function POSPage() {
  const navigate = useNavigate()

  return (
    <div className="pos-page">
      <section className="pos-section">
        <div className="pos-container">
          <div className="pos-content">
            <span className="pos-eyebrow">POS Solutions</span>
            <h1 className="pos-title">Powerful POS Solutions for Smarter Business</h1>
            <p className="pos-subtitle">
              Upstage India provides modern POS solutions that help businesses manage sales, inventory, payments and business operations efficiently. Streamline your workflow and grow your business.
            </p>
            <div className="pos-download-btn">
            <button className="pos-button pos-cta" onClick={() => navigate('/inventorypage')}>
              Explore POS Services
            </button>
            <button className="pos-primary-button pos-cta" onClick={() => window.location.href="https://play.google.com/store/apps/details?id=com.myshopapp"}>
              Download From <BiLogoPlayStore />
            </button>
            </div>
          </div>
          <div className="pos-visual">
            <div className="pos-mockup-hero">
              <div className="mockup-screen">
                <div className="screen-bar">📊 POS Dashboard</div>
                <div className="screen-content">
                  <div className="screen-item">Orders</div>
                  <div className="screen-item">Sales</div>
                  <div className="screen-item">Inventory</div>
                  <div className="screen-item">Reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <div className="benefit-card">
            <div className="benefit-icon">✓</div>
            <h3 className="benefit-title">Better Accuracy</h3>
            <p className="benefit-text">Real-time tracking ensures your inventory and sales data is always accurate.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📊</div>
            <h3 className="benefit-title">Greater Insight</h3>
            <p className="benefit-text">Access powerful analytics to understand your business performance.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⏱️</div>
            <h3 className="benefit-title">Time Saving</h3>
            <p className="benefit-text">Automate operations and focus on growing your business.</p>
          </div>
        </div>
      </section>

      {/* Inventory Introduction */}
      <section className="inventory-intro-section">
        <div className="inventory-intro-container">
          <div className="inventory-intro-content">
            <h2 className="section-title">Keep Track of Inventory for your Business</h2>
            <p className="section-description">
              Manage your entire product inventory with real-time visibility. From stock tracking to product management, our POS system gives you complete control over your inventory.
            </p>
            <ul className="feature-list">
              <li>Real-time stock tracking</li>
              <li>Product categorization</li>
              <li>Low-stock alerts</li>
              <li>Multi-location support</li>
            </ul>
          </div>
          <div className="inventory-intro-visual">
            <div className="inventory-mockup">
              <div className="mockup-header">Inventory Management</div>
              <div className="inventory-list">
                <div className="inventory-item">
                  <span className="item-name">Wireless Headphones</span>
                  <span className="item-qty">245</span>
                  <span className="item-status in-stock">In Stock</span>
                </div>
                <div className="inventory-item">
                  <span className="item-name">USB-C Cable</span>
                  <span className="item-qty">12</span>
                  <span className="item-status low-stock">Low</span>
                </div>
                <div className="inventory-item">
                  <span className="item-name">Phone Case</span>
                  <span className="item-qty">523</span>
                  <span className="item-status in-stock">In Stock</span>
                </div>
                <div className="inventory-item">
                  <span className="item-name">Screen Protector</span>
                  <span className="item-qty">0</span>
                  <span className="item-status out-stock">Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POS Features Section */}
      <section className="pos-features-section">
        <div className="pos-features-container">
          <h2 className="section-title centered">Complete POS Solution</h2>
          <p className="section-description centered">
            Everything you need to manage your business operations efficiently.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3 className="feature-heading">Sales & Transactions</h3>
              <p className="feature-text">Fast, reliable payment processing for all transaction types.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📦</div>
              <h3 className="feature-heading">Product Management</h3>
              <p className="feature-text">Organize and manage your entire product catalog.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3 className="feature-heading">Analytics & Reports</h3>
              <p className="feature-text">Gain insights into your business performance.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⏰</div>
              <h3 className="feature-heading">Faster Operations</h3>
              <p className="feature-text">Save time with streamlined business processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Want to purchase an app with Upstage India?</h2>
          <p className="cta-description">
            Get started with a modern POS solution designed for your business.
          </p>
          <button className="cta-button large" onClick={()=>navigate("/inventorypage")}>Get Started</button>
        </div>
      </section>
    </div>
  )
}
