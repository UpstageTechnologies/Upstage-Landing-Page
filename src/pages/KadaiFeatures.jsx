import {
  FiMapPin,
  FiGlobe,
  FiPackage,
  FiArchive,
  FiShoppingCart,
  FiShoppingBag,
  FiTruck,
  FiBell,
  FiArrowLeft,
  FiArrowRight,
  FiPlay,
  FiCheck,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import kadai from "../assets/kadai.jpeg";
import kadai2 from "../assets/kadai2.jpeg";
import "./KadaiFeatures.css";

const features = [
  {
    id: "local-shop",
    icon: FiMapPin,
    title: "Local Shop",
    description:
      "Discover nearby shops and products based on your location and shop availability.",
  },
  {
    id: "global-shop",
    icon: FiGlobe,
    title: "Global Shop",
    description:
      "Explore products from sellers across different locations with global purchasing options.",
  },
  {
    id: "products",
    icon: FiPackage,
    title: "Product Management",
    description:
      "Organize and manage products with clear product information, pricing and availability.",
  },
  {
    id: "inventory",
    icon: FiArchive,
    title: "Inventory",
    description:
      "Manage local and global inventory separately and fetch seller-specific inventory data.",
  },
  {
    id: "cart",
    icon: FiShoppingCart,
    title: "Add to Cart",
    description:
      "Add products to your cart and manage quantities before placing an order.",
  },
  {
    id: "orders",
    icon: FiShoppingBag,
    title: "Orders",
    description:
      "Manage placed orders, order details and order acceptance from one organized screen.",
  },
  {
    id: "tracking",
    icon: FiTruck,
    title: "Order Tracking",
    description:
      "Track orders using tracking information and monitor the progress of each order.",
  },
  {
    id: "notifications",
    icon: FiBell,
    title: "Notifications",
    description:
      "Keep customers updated with order placed, accepted and status notifications.",
  },
  {
    id: "location",
    icon: FiMapPin,
    title: "Location Based Shops",
    description:
      "Find relevant nearby shops using location coordinates such as latitude and longitude.",
  },
];

export default function KadaiFeatures() {
  const navigate = useNavigate();

  return (
    <main className="kadai-features-page">

      {/* HERO */}
      <section className="kadai-features-hero">
        <div className="kadai-features-container">

          <button className="kadai-back-btn" onClick={() => navigate("/kadai")}>
            <FiArrowLeft />
            Back to Kadai App
          </button>

          <div className="kadai-features-hero-layout">
            <div className="kadai-features-hero-content">
              <span className="kadai-features-eyebrow">KADAI APP FEATURES</span>

              <h1>
                Every Feature
                <span>Built Around You.</span>
              </h1>

              <p>
                Discover shops, manage products, follow every order and make
                everyday shopping feel wonderfully simple with Kadai.
              </p>

              <div className="kadai-hero-actions">
                <button
                  className="kadai-hero-primary"
                  onClick={() => document.querySelector(".kadai-features-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore All Features <FiArrowRight />
                </button>
              </div>

              <div className="kadai-trust-row">
                <div><strong>10K+</strong><span>Active Shops</span></div>
                <div><strong>50K+</strong><span>Happy Users</span></div>
                <div><strong>1M+</strong><span>Orders</span></div>
              </div>
            </div>

            <div className="kadai-hero-visual">
              <div className="kadai-hero-dots"></div>
              <div className="kadai-hero-orbit kadai-hero-orbit-one"><FiMapPin /></div>
              <div className="kadai-hero-orbit kadai-hero-orbit-two"><FiShoppingCart /></div>
              <div className="kadai-hero-photo-frame">
                <img src={kadai} alt="A welcoming Kadai local shop" />
                <div className="kadai-store-sign">KADAI <small>shop, made simple</small></div>
              </div>
              <div className="kadai-hero-note"><FiPackage /><span>Everything in one place</span></div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="kadai-features-section">
        <div className="kadai-features-container">

          <div className="kadai-features-heading">
            <div>
              <span>THE KADAI JOURNEY</span>
              <h2>Everything You Can Do <em>With Kadai.</em></h2>
            </div>
            <p>
              Powerful tools, a simple interface and complete control for
              shop owners and customers.
            </p>
          </div>

          <div className="kadai-features-grid">
            <div className="kadai-journey-line"></div>

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.id}
                  className="kadai-feature-card"
                  onClick={() =>
                    navigate(
                      `/kadai/features/${feature.id}`
                    )
                  }
                >

                  <div className="kadai-feature-card-top">
                    <span className="kadai-feature-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="kadai-feature-icon">
                      <Icon />
                    </div>
                  </div>

                  <div className="kadai-feature-card-content">

                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>

                    <span className="kadai-feature-link">
                      Explore Feature
                      <FiArrowRight />
                    </span>

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      <section className="kadai-story-section">
        <div className="kadai-features-container kadai-story-layout">
          <div className="kadai-story-copy">
            <span className="kadai-section-kicker">WHY KADAI</span>
            <h2>More Than<br /><em>Just Shopping.</em></h2>
            <p>
              Kadai brings the warmth of a neighbourhood shop together with
              the reach and confidence of a modern marketplace.
            </p>
            <div className="kadai-story-stats">
              <div><strong>10K+</strong><span>Happy Users</span></div>
              <div><strong>500+</strong><span>Active Shops</span></div>
              <div><strong>4.8</strong><span>Average Rating <FiStar /></span></div>
              <div><strong>1M+</strong><span>Orders</span></div>
            </div>
          </div>
          <div className="kadai-story-visual">
            <img src={kadai2} alt="A colourful local market powered by Kadai" />
            <div className="kadai-story-badge">Local <span>•</span> Global <span>•</span> Together</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kadai-features-cta">
        <div className="kadai-features-container">
          <div className="kadai-cta-layout">
            <div className="kadai-cta-content">
              <span>KADAI APP</span>
              <h2>Your Shop,<br /><em>Limitless Growth.</em></h2>
              <p>
                Explore every feature and see how Kadai App helps you manage,
                grow and succeed.
              </p>
              <button onClick={() => navigate("/kadai")} className="kadai-cta-button">
                Back to Kadai App <FiArrowRight />
              </button>
              <div className="kadai-benefits">
                <span><FiCheck /> Secure &amp; Reliable</span>
                <span><FiCheck /> Fast &amp; Smooth</span>
                <span><FiCheck /> 24/7 Support</span>
                <span><FiCheck /> Business Growth</span>
              </div>
            </div>
            <div className="kadai-cta-visual">
              <div className="kadai-cta-glow"></div>
              <img src={kadai} alt="Kadai shop storefront" />
              <div className="kadai-analytics-chip"><FiTrendingUp /><strong>+24.8%</strong><small>shop growth</small></div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}