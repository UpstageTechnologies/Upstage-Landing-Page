import { useNavigate, useParams } from "react-router-dom";
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
  FiCheck,
  FiSearch,
  FiBox,
  FiUser,
  FiNavigation,
} from "react-icons/fi";

import "./KadaiFeaturesDetails.css";

const featureData = {
  "local-shop": {
    icon: FiMapPin,
    eyebrow: "LOCAL SHOP",
    title: "Find Nearby Shops Easily.",
    description:
      "Discover nearby shops and products based on your location. Kadai App makes it simple for customers to find products available from shops around them.",
    points: [
      "Discover shops available near your location",
      "View products from nearby sellers",
      "Find relevant shops using location information",
      "Browse local products without complicated searching",
    ],
  },

  "global-shop": {
    icon: FiGlobe,
    eyebrow: "GLOBAL SHOP",
    title: "Shop Beyond Your Local Area.",
    description:
      "Global Shop allows sellers to make products available beyond their local customers with separate global inventory and purchasing rules.",
    points: [
      "Explore products from sellers across locations",
      "Separate local and global shopping experiences",
      "Support bulk and wholesale purchasing",
      "Allow sellers to configure global product availability",
    ],
  },

  products: {
    icon: FiPackage,
    eyebrow: "PRODUCT MANAGEMENT",
    title: "Keep Every Product Organized.",
    description:
      "Manage product information in a clean and structured way so customers can easily discover products from different shops.",
    points: [
      "Organize product information",
      "Manage product pricing and availability",
      "Display products clearly to customers",
      "Connect products with seller inventory",
    ],
  },

  inventory: {
    icon: FiArchive,
    eyebrow: "INVENTORY",
    title: "Manage Local & Global Inventory.",
    description:
      "Maintain separate inventory information for local and global shopping. Sellers can control which products are available in each marketplace.",
    points: [
      "Maintain seller-specific inventory",
      "Separate local and global inventory",
      "Control product availability",
      "Fetch inventory based on the selected shop",
    ],
  },

  cart: {
    icon: FiShoppingCart,
    eyebrow: "ADD TO CART",
    title: "Build Your Cart Before Ordering.",
    description:
      "Customers can select products, adjust quantities and review their items before placing an order.",
    points: [
      "Add products to cart",
      "Increase or decrease quantities",
      "Review selected products",
      "Prepare orders before checkout",
    ],
  },

  orders: {
    icon: FiShoppingBag,
    eyebrow: "ORDERS",
    title: "Manage Every Order in One Place.",
    description:
      "The Orders screen gives customers and sellers a clear view of order information, order status and order actions.",
    points: [
      "View placed orders",
      "Manage order information",
      "Accept and process orders",
      "Keep order activity organized",
    ],
  },

  tracking: {
    icon: FiTruck,
    eyebrow: "ORDER TRACKING",
    title: "Track Orders From Start to Delivery.",
    description:
      "Track orders using tracking information and keep customers informed about the progress of their purchases.",
    points: [
      "Store tracking information",
      "View order tracking details",
      "Monitor order progress",
      "Keep delivery information organized",
    ],
  },

  notifications: {
    icon: FiBell,
    eyebrow: "NOTIFICATIONS",
    title: "Keep Customers Updated.",
    description:
      "Send important updates when customers place orders and when sellers accept or update those orders.",
    points: [
      "Notify customers about new orders",
      "Provide order status updates",
      "Keep customers informed",
      "Create a connected shopping experience",
    ],
  },

  location: {
    icon: FiNavigation,
    eyebrow: "LOCATION BASED SHOPS",
    title: "Discover Shops Using Location.",
    description:
      "Use latitude and longitude information to identify relevant shops and display nearby stores to customers.",
    points: [
      "Use latitude and longitude data",
      "Find shops matching a customer's location",
      "Display nearby stores",
      "Create location-based shop discovery",
    ],
  },
};

function FeaturePreview({ type }) {
  switch (type) {
    case "local-shop":
      return (
        <div className="kadai-preview">
          <div className="preview-topbar">
            <span>Nearby Shops</span>
            <FiMapPin />
          </div>

          <div className="location-search">
            <FiSearch />
            <span>Search near your location...</span>
          </div>

          <div className="shop-list">
            <div className="shop-item">
              <div className="shop-avatar">
                <FiShoppingBag />
              </div>

              <div>
                <strong>Raj Store</strong>
                <small>1.2 km away</small>
              </div>

              <FiArrowRight />
            </div>

            <div className="shop-item">
              <div className="shop-avatar">
                <FiShoppingBag />
              </div>

              <div>
                <strong>Fresh Mart</strong>
                <small>2.4 km away</small>
              </div>

              <FiArrowRight />
            </div>

            <div className="shop-item">
              <div className="shop-avatar">
                <FiShoppingBag />
              </div>

              <div>
                <strong>City Store</strong>
                <small>3.1 km away</small>
              </div>

              <FiArrowRight />
            </div>
          </div>
        </div>
      );

    case "global-shop":
      return (
        <div className="kadai-preview">
          <div className="preview-topbar">
            <span>Global Shop</span>
            <FiGlobe />
          </div>

          <div className="global-product">
            <div className="product-image">
              <FiPackage />
            </div>

            <div className="product-info">
              <strong>Premium Shirt</strong>
              <small>Global Seller</small>

              <div className="price-row">
                <b>₹420</b>
                <span>Wholesale</span>
              </div>
            </div>
          </div>

          <div className="bulk-row">
            <span>Minimum quantity</span>
            <strong>10 units</strong>
          </div>

          <button className="preview-button">
            View Global Product
          </button>
        </div>
      );

    case "products":
      return (
        <div className="kadai-preview">
          <div className="preview-topbar">
            <span>Products</span>
            <FiPackage />
          </div>

          <div className="product-grid">
            <div className="mini-product">
              <div className="mini-product-image">
                <FiBox />
              </div>
              <strong>Shirt</strong>
              <small>₹499</small>
            </div>

            <div className="mini-product">
              <div className="mini-product-image">
                <FiBox />
              </div>
              <strong>Jeans</strong>
              <small>₹899</small>
            </div>

            <div className="mini-product">
              <div className="mini-product-image">
                <FiBox />
              </div>
              <strong>Shoes</strong>
              <small>₹1,299</small>
            </div>

            <div className="mini-product">
              <div className="mini-product-image">
                <FiBox />
              </div>
              <strong>Bag</strong>
              <small>₹699</small>
            </div>
          </div>
        </div>
      );

    case "inventory":
      return (
        <div className="kadai-preview">
          <div className="preview-topbar">
            <span>Inventory</span>
            <FiArchive />
          </div>

          <div className="inventory-tabs">
            <span className="active">Local</span>
            <span>Global</span>
          </div>

          <div className="inventory-row">
            <div>
              <strong>Milk Packet</strong>
              <small>Local Inventory</small>
            </div>
            <b>120</b>
          </div>

          <div className="inventory-row">
            <div>
              <strong>Shirts</strong>
              <small>Global Inventory</small>
            </div>
            <b>450</b>
          </div>

          <div className="inventory-row">
            <div>
              <strong>Rice Bag</strong>
              <small>Local Inventory</small>
            </div>
            <b>80</b>
          </div>
        </div>
      );

    case "cart":
      return (
        <div className="kadai-preview">
          <div className="preview-topbar">
            <span>My Cart</span>
            <FiShoppingCart />
          </div>

          <div className="cart-item">
            <div className="cart-image">
              <FiPackage />
            </div>

            <div className="cart-info">
              <strong>Premium Shirt</strong>
              <small>₹499 * 2</small>
            </div>

            <b>₹998</b>
          </div>

          <div className="cart-item">
            <div className="cart-image">
              <FiPackage />
            </div>

            <div className="cart-info">
              <strong>Casual Shoes</strong>
              <small>₹1,299 × 1</small>
            </div>

            <b>₹1,299</b>
          </div>

          <div className="cart-total">
            <span>Total</span>
            <strong>₹2,297</strong>
          </div>

          <button className="preview-button">
            Proceed to Order
          </button>
        </div>
      );

    case "orders":
      return (
        <div className="kadai-preview">
          <div className="preview-topbar">
            <span>Orders</span>
            <FiShoppingBag />
          </div>

          <div className="order-item">
            <div>
              <strong>#ORD-1024</strong>
              <small>3 Products</small>
            </div>

            <span className="status accepted">
              Accepted
            </span>
          </div>

          <div className="order-item">
            <div>
              <strong>#ORD-1023</strong>
              <small>2 Products</small>
            </div>

            <span className="status pending">
              Pending
            </span>
          </div>

          <div className="order-item">
            <div>
              <strong>#ORD-1022</strong>
              <small>5 Products</small>
            </div>

            <span className="status completed">
              Completed
            </span>
          </div>
        </div>
      );

    case "tracking":
      return (
        <div className="kadai-preview">
          <div className="preview-topbar">
            <span>Order Tracking</span>
            <FiTruck />
          </div>

          <div className="tracking-id">
            <small>Tracking ID</small>
            <strong>TRK-28491</strong>
          </div>

          <div className="tracking-line">
            <div className="tracking-step active">
              <span />
              <div>
                <strong>Order Accepted</strong>
                <small>10:30 AM</small>
              </div>
            </div>

            <div className="tracking-step active">
              <span />
              <div>
                <strong>Order Processing</strong>
                <small>11:15 AM</small>
              </div>
            </div>

            <div className="tracking-step">
              <span />
              <div>
                <strong>Out for Delivery</strong>
                <small>Waiting</small>
              </div>
            </div>
          </div>
        </div>
      );

    case "notifications":
      return (
        <div className="kadai-preview">
          <div className="preview-topbar">
            <span>Notifications</span>
            <FiBell />
          </div>

          <div className="notification-item unread">
            <div className="notification-icon">
              <FiShoppingBag />
            </div>

            <div>
              <strong>Order Placed</strong>
              <small>Your order has been placed successfully.</small>
            </div>
          </div>

          <div className="notification-item">
            <div className="notification-icon">
              <FiCheck />
            </div>

            <div>
              <strong>Order Accepted</strong>
              <small>Your seller accepted the order.</small>
            </div>
          </div>

          <div className="notification-item">
            <div className="notification-icon">
              <FiTruck />
            </div>

            <div>
              <strong>Order Update</strong>
              <small>Your order is being processed.</small>
            </div>
          </div>
        </div>
      );

    case "location":
      return (
        <div className="kadai-preview location-preview">
          <div className="map-background">
            <div className="map-grid" />

            <div className="map-pin pin-one">
              <FiMapPin />
            </div>

            <div className="map-pin pin-two">
              <FiMapPin />
            </div>

            <div className="map-pin pin-three">
              <FiMapPin />
            </div>

            <div className="user-location">
              <FiUser />
            </div>
          </div>

          <div className="location-card">
            <strong>Shops near you</strong>
            <span>12 shops found</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function KadaiFeaturesDetails() {
  const navigate = useNavigate();
  const { featureId } = useParams();

  const feature = featureData[featureId];

  if (!feature) {
    return (
      <main className="kadai-detail-page">
        <div className="kadai-detail-not-found">
          <h1>Feature Not Found</h1>

          <button
            onClick={() => navigate("/kadai/features")}
          >
            Back to Features
          </button>
        </div>
      </main>
    );
  }

  const Icon = feature.icon;

  return (
    <main className="kadai-detail-page">

      {/* HERO */}
      <section className="kadai-detail-hero">
        <div className="kadai-detail-container">

          <button
            className="kadai-detail-back"
            onClick={() =>
              navigate("/kadai-app/features")
            }
          >
            <FiArrowLeft />
            Back to Features
          </button>

          <div className="kadai-detail-hero-grid">

            <div className="kadai-detail-hero-content">

              <div className="kadai-detail-icon">
                <Icon />
              </div>

              <span className="kadai-detail-eyebrow">
                {feature.eyebrow}
              </span>

              <h1>{feature.title}</h1>

              <p>{feature.description}</p>

              <button
                className="kadai-detail-primary"
                onClick={() =>
                  navigate("/kadai-app/features")
                }
              >
                Explore Other Features
                <FiArrowRight />
              </button>

            </div>

            <div className="kadai-detail-hero-preview">
              <FeaturePreview type={featureId} />
            </div>

          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="kadai-detail-info">
        <div className="kadai-detail-container">

          <div className="kadai-detail-info-grid">

            <div className="kadai-detail-info-title">
              <span>FEATURE DETAILS</span>

              <h2>
                Built to make
                <br />
                shop management easier.
              </h2>
            </div>

            <div className="kadai-detail-info-content">

              <p>
                Kadai App brings the important parts of
                shopping and shop management into one
                connected experience.
              </p>

              <div className="kadai-detail-points">
                {feature.points.map((point) => (
                  <div
                    className="kadai-detail-point"
                    key={point}
                  >
                    <span>
                      <FiCheck />
                    </span>

                    <p>{point}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="kadai-detail-cta">
        <div className="kadai-detail-container">

          <div className="kadai-detail-cta-content">

            <span>KADAI APP</span>

            <h2>
              Explore the complete
              <br />
              Kadai experience.
            </h2>

            <p>
              Discover all the features designed to connect
              customers, sellers, products, inventory and orders.
            </p>

            <button
              onClick={() =>
                navigate("/kadai/features")
              }
            >
              View All Features
              <FiArrowRight />
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}