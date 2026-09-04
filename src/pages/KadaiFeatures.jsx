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
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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

          <button
            className="kadai-back-btn"
            onClick={() => navigate("/kadai")}
          >
            <FiArrowLeft />
            Back to Kadai App
          </button>

          <div className="kadai-features-hero-content">

            <span className="kadai-features-eyebrow">
              KADAI APP FEATURES
            </span>

            <h1>
              Everything You Need
              <span>To Run Your Shop.</span>
            </h1>

            <p>
              From nearby shops and global sellers to inventory,
              orders and tracking, Kadai App brings your complete
              shop experience together in one place.
            </p>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="kadai-features-section">
        <div className="kadai-features-container">

          <div className="kadai-features-heading">
            <div>
              <span>EXPLORE</span>
              <h2>Kadai App Features</h2>
            

            <p>
              Powerful tools designed to make shopping,
              selling and managing products simple.
            </p>
            </div>
          </div>

          <div className="kadai-features-grid">

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

      {/* CTA */}
      <section className="kadai-features-cta">
        <div className="kadai-features-container">

          <div className="kadai-cta-content">

            <span>KADAI APP</span>

            <h2>
              A Smarter Way
              <br />
              To Manage Your Shop.
            </h2>

            <p>
              Explore every feature and discover how Kadai App
              can simplify your shop management experience.
            </p>

            <button
              onClick={() => navigate("/kadai")}
              className="kadai-cta-button"
            >
              Back to Kadai App
              <FiArrowRight />
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}