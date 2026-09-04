import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiUsers,
  FiClock,
  FiBox,
  FiLayers,
  FiTruck,
  FiBarChart2,
  FiBell,
  FiShield,
  FiGrid,
} from "react-icons/fi";
import "./AttendanceInventoryFeaturesDetails.css";

const featureData = {
  dashboard: {
    icon: FiGrid,
    eyebrow: "DASHBOARD",
    title: "Everything at a glance.",
    description:
      "Get a complete overview of attendance, employees, inventory and stock from one simple and powerful dashboard.",
    points: [
      "View important information in one place",
      "Monitor attendance and inventory summaries",
      "Track low-stock items quickly",
      "Get real-time operational insights",
    ],
  },

  attendance: {
    icon: FiCalendar,
    eyebrow: "ATTENDANCE MANAGEMENT",
    title: "Track attendance with ease.",
    description:
      "Record and manage employee attendance, check-ins and check-outs with a simple and organized system.",
    points: [
      "Daily attendance tracking",
      "Check-in and check-out records",
      "Attendance history",
      "Present, absent and leave status",
    ],
  },

  employees: {
    icon: FiUsers,
    eyebrow: "EMPLOYEE MANAGEMENT",
    title: "Manage your employees better.",
    description:
      "Keep employee information organized and easily accessible from a centralized employee management system.",
    points: [
      "Employee profiles",
      "Employee information management",
      "Attendance history",
      "Easy employee record access",
    ],
  },

  leave: {
    icon: FiClock,
    eyebrow: "LEAVE MANAGEMENT",
    title: "Make leave management simple.",
    description:
      "Manage employee leave requests, leave records and availability in one organized system.",
    points: [
      "Leave request management",
      "Leave history",
      "Leave status tracking",
      "Employee availability overview",
    ],
  },

  inventory: {
    icon: FiBox,
    eyebrow: "INVENTORY MANAGEMENT",
    title: "Know what you have.",
    description:
      "Manage products and inventory efficiently with clear stock information and organized item records.",
    points: [
      "Product and item management",
      "Inventory overview",
      "Item quantity tracking",
      "Low-stock identification",
    ],
  },

  stock: {
    icon: FiLayers,
    eyebrow: "STOCK MANAGEMENT",
    title: "Stay in control of your stock.",
    description:
      "Track stock movements and maintain accurate information about incoming, available and outgoing items.",
    points: [
      "Stock-in management",
      "Stock-out management",
      "Available stock tracking",
      "Low-stock alerts",
    ],
  },

  supplier: {
    icon: FiTruck,
    eyebrow: "SUPPLIER MANAGEMENT",
    title: "Manage suppliers effortlessly.",
    description:
      "Keep supplier information organized and make inventory purchasing easier with centralized supplier records.",
    points: [
      "Supplier profiles",
      "Supplier contact information",
      "Purchase tracking",
      "Supplier history",
    ],
  },

  reports: {
    icon: FiBarChart2,
    eyebrow: "REPORTS & ANALYTICS",
    title: "Turn data into useful insights.",
    description:
      "Understand attendance and inventory performance through clear reports and useful analytics.",
    points: [
      "Attendance reports",
      "Inventory reports",
      "Stock movement reports",
      "Business performance insights",
    ],
  },

  notifications: {
    icon: FiBell,
    eyebrow: "NOTIFICATIONS",
    title: "Never miss an important update.",
    description:
      "Receive important notifications about attendance, inventory, stock and other system activities.",
    points: [
      "Attendance notifications",
      "Low-stock notifications",
      "System updates",
      "Important activity alerts",
    ],
  },

  access: {
    icon: FiShield,
    eyebrow: "USER & ACCESS MANAGEMENT",
    title: "Keep your data protected.",
    description:
      "Manage users and control access to important attendance and inventory information.",
    points: [
      "User management",
      "Role-based access",
      "Secure data access",
      "Controlled system permissions",
    ],
  },
};

export default function AttendanceInventoryFeatureDetails() {
  const navigate = useNavigate();
  const { featureId } = useParams();

  const feature = featureData[featureId];

  if (!feature) {
    return (
      <main className="attendance-detail-page">
        <section className="attendance-detail-not-found">
          <h1>Feature Not Found</h1>

          <p>
            The feature you are looking for does not exist.
          </p>

          <button
            onClick={() =>
              navigate("/attendance-inventory/features")
            }
          >
            Back to Features
          </button>
        </section>
      </main>
    );
  }

  const Icon = feature.icon;

  return (
    <main className="attendance-detail-page">
      <section className="attendance-detail-hero">

        <div className="attendance-detail-hero-container">

          <button
            className="attendance-detail-back"
            onClick={() =>
              navigate("/attendance-inventory/features")
            }
          >
            <FiArrowLeft />
            Back to Features
          </button>

          <div className="attendance-detail-hero-grid">

            <div className="attendance-detail-content">

              <div className="attendance-detail-icon">
                <Icon />
              </div>

              <span className="attendance-detail-eyebrow">
                {feature.eyebrow}
              </span>

              <h1>
                {feature.title}
              </h1>

              <p>
                {feature.description}
              </p>

              <button
                className="attendance-detail-primary-btn"
                onClick={() =>
                  navigate("/attendance-inventory/features")
                }
              >
                Explore All Features
                <FiArrowRight />
              </button>

            </div>

            <div className="attendance-detail-preview">

              <div className="preview-header">

                <div className="preview-logo">
                  <Icon />
                  <span>A&I App</span>
                </div>

                <div className="preview-user"></div>

              </div>

              <div className="preview-body">

                <div className="preview-sidebar">

                  <div className="preview-sidebar-item active">
                    <FiGrid />
                    Dashboard
                  </div>

                  <div className="preview-sidebar-item">
                    <FiCalendar />
                    Attendance
                  </div>

                  <div className="preview-sidebar-item">
                    <FiUsers />
                    Employees
                  </div>

                  <div className="preview-sidebar-item">
                    <FiBox />
                    Inventory
                  </div>

                  <div className="preview-sidebar-item">
                    <FiBarChart2 />
                    Reports
                  </div>

                </div>

                <div className="preview-main">

                  <h3>{feature.eyebrow}</h3>

                  <div className="preview-cards">

                    <div className="preview-card">
                      <span>Today</span>
                      <strong>96</strong>
                      <small>Present</small>
                    </div>

                    <div className="preview-card">
                      <span>Total Items</span>
                      <strong>342</strong>
                      <small>Inventory</small>
                    </div>

                    <div className="preview-card">
                      <span>Low Stock</span>
                      <strong>24</strong>
                      <small>Items</small>
                    </div>

                  </div>

                  <div className="preview-chart">

                    <div className="chart-title">
                      Overview
                    </div>

                    <div className="chart-bars">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="attendance-detail-overview">

        <div className="attendance-detail-container">

          <div className="attendance-detail-section-heading">

            <span>FEATURE OVERVIEW</span>

            <h2>
              Everything you need,
              <br />
              in one place.
            </h2>

          </div>

          <div className="attendance-detail-points">

            {feature.points.map((point, index) => (

              <div
                className="attendance-detail-point"
                key={index}
              >

                <div className="point-number">
                  0{index + 1}
                </div>

                <div>
                  <h3>{point}</h3>

                  <p>
                    Designed to make your daily
                    operations simpler, faster and
                    more organized.
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="attendance-detail-cta">

        <div className="attendance-detail-cta-container">

          <div>

            <span>ATTENDANCE & INVENTORY APP</span>

            <h2>
              Make everyday management
              <br />
              simpler and smarter.
            </h2>

          </div>

          <button
            onClick={() =>
              navigate("/attendance-inventory/features")
            }
          >
            View All Features
            <FiArrowRight />
          </button>

        </div>

      </section>

    </main>
  );
}