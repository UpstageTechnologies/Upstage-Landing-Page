import './InventoryPage.css'

export default function InventoryPage() {
  return (
    <div className="inventory-page">
      {/* Hero Section */}
      <section className="inventory-hero-section">
        <div className="inventory-hero-container">
          <h1 className="inventory-title">Keep Track of Inventory for your Business</h1>
          <p className="inventory-subtitle">
            Manage your entire product inventory with real-time visibility and complete control.
          </p>
        </div>
      </section>

      {/* Inventory Management Content */}
      <section className="inventory-content-section">
        <div className="inventory-content-container">
          <div className="inventory-content-left">
            <h2 className="section-title">Inventory Management Made Simple</h2>
            <p className="section-description">
              Our POS system provides complete visibility into your inventory. Track stock levels in real-time, set automatic low-stock alerts, and manage products across multiple locations.
            </p>
            <ul className="inventory-features">
              <li>
                <span className="check">✓</span>
                <span>Real-time stock tracking across all locations</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Product and category management</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Automatic low-stock alerts</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Stock adjustments and reconciliation</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Detailed inventory reports</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Multi-location inventory sync</span>
              </li>
            </ul>
          </div>
          <div className="inventory-content-right">
            <div className="inventory-visual">
              <div className="dashboard-mockup">
                <div className="dashboard-header">Dashboard</div>
                <div className="dashboard-metrics">
                  <div className="metric">
                    <div className="metric-value">2,456</div>
                    <div className="metric-label">Total Items</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">156</div>
                    <div className="metric-label">Low Stock</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">45</div>
                    <div className="metric-label">Out of Stock</div>
                  </div>
                </div>
                <div className="dashboard-chart">
                  <div className="chart-label">Stock Levels</div>
                  <svg viewBox="0 0 300 80" preserveAspectRatio="none" className="chart-svg">
                    <polyline points="0,60 30,40 60,45 90,25 120,35 150,15 180,30 210,20 240,40 270,35 300,50" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POS Features Section */}
      <section className="pos-operations-section">
        <div className="operations-container">
          <h2 className="section-title centered">Complete Business Operations</h2>
          <p className="section-description centered">
            Manage all aspects of your business from one platform.
          </p>
          <div className="operations-grid">
            <div className="operation-card">
              <div className="op-icon">💳</div>
              <h3 className="op-title">Payment Processing</h3>
              <p className="op-description">Secure payment gateway integration with multiple payment methods.</p>
            </div>
            <div className="operation-card">
              <div className="op-icon">🛒</div>
              <h3 className="op-title">Order Management</h3>
              <p className="op-description">Create, track, and manage customer orders efficiently.</p>
            </div>
            <div className="operation-card">
              <div className="op-icon">👥</div>
              <h3 className="op-title">Customer Management</h3>
              <p className="op-description">Build customer profiles and track purchase history.</p>
            </div>
            <div className="operation-card">
              <div className="op-icon">📈</div>
              <h3 className="op-title">Sales Reports</h3>
              <p className="op-description">Comprehensive analytics and detailed business reporting.</p>
            </div>
            <div className="operation-card">
              <div className="op-icon">📊</div>
              <h3 className="op-title">Business Insights</h3>
              <p className="op-description">Real-time dashboards and performance metrics.</p>
            </div>
            <div className="operation-card">
              <div className="op-icon">🔒</div>
              <h3 className="op-title">Security</h3>
              <p className="op-description">Industry-standard security and compliance standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="section-title">Why Choose Upstage India POS?</h2>
          <div className="why-choose-content">
            <div className="why-item">
              <div className="why-number">1</div>
              <h3 className="why-title">Easy to Use</h3>
              <p className="why-text">Intuitive interface designed for businesses of all sizes.</p>
            </div>
            <div className="why-item">
              <div className="why-number">2</div>
              <h3 className="why-title">Reliable & Fast</h3>
              <p className="why-text">Cloud-based solution with 99.9% uptime guarantee.</p>
            </div>
            <div className="why-item">
              <div className="why-number">3</div>
              <h3 className="why-title">Scalable</h3>
              <p className="why-text">Grows with your business from startup to enterprise.</p>
            </div>
            <div className="why-item">
              <div className="why-number">4</div>
              <h3 className="why-title">Expert Support</h3>
              <p className="why-text">24/7 customer support and regular system updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section inventory-cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-description">
            Get started with Upstage India's POS solution today.
          </p>
          <button className="cta-button large" onClick={() => window.location.href = 'tel:+91 94424 61428'}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}
