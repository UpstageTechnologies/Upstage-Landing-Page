import { useNavigate } from "react-router-dom";
import {
  FiCalendar,
  FiUsers,
  FiBox,
  FiLayers,
  FiBarChart2,
  FiBell,
  FiShield,
  FiGrid,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";
import image from "../assets/image2.png"

import "./AttendanceInventoryFeatures.css";

const features = [
  {
    id: "dashboard",
    icon: FiGrid,
    title: "Dashboard",
    description:
      "Get a real-time overview of attendance, employees, inventory, stock and important updates.",
    color: "green",
  },
  {
    id: "attendance",
    icon: FiCalendar,
    title: "Attendance Management",
    description:
      "Track check-in, check-out and daily attendance records with accuracy and ease.",
    color: "blue",
  },
  {
    id: "employees",
    icon: FiUsers,
    title: "Employee Management",
    description:
      "Manage employee profiles, work details and records in one organized place.",
    color: "purple",
  },
  {
    id: "inventory",
    icon: FiBox,
    title: "Inventory Management",
    description:
      "Add, update and manage all your products and items effortlessly.",
    color: "orange",
  },
  {
    id: "stock",
    icon: FiLayers,
    title: "Stock Management",
    description:
      "Monitor stock movements, low-stock items, incoming and outgoing stock.",
    color: "teal",
  },
  {
    id: "reports",
    icon: FiBarChart2,
    title: "Reports & Analytics",
    description:
      "Generate insightful reports and analyze data to make smarter decisions.",
    color: "pink",
  },
  {
    id: "notifications",
    icon: FiBell,
    title: "Notifications",
    description:
      "Stay informed with attendance alerts, stock updates and important notifications.",
    color: "yellow",
  },
  {
    id: "access",
    icon: FiShield,
    title: "User & Access Management",
    description:
      "Manage user roles and permissions to keep your important data secure.",
    color: "green",
  },
];

export default function AttendanceInventoryFeatures() {
  const navigate = useNavigate();

  const openFeature = (id) => {
    navigate(`/attendance-inventory/features/${id}`);
  };

  const scrollToFeatures = () => {
    const element = document.querySelector(".ai-features-section");

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="ai-page">

      <section className="ai-hero">

        <div className="ai-hero-bg-circle"></div>
        <div className="ai-hero-dots"></div>

        <div className="ai-hero-container">

          {/* LEFT CONTENT */}
          <div className="ai-hero-content">

            <div className="ai-app-label">
              <span></span>
              ATTENDANCE & INVENTORY APP
            </div>

            <h1>
              Manage better.
              <strong>Work smarter.</strong>
            </h1>

            <div className="ai-heading-line">
              <span></span>
              <i></i>
            </div>

            <p>
              A complete solution to manage attendance, employees,
              inventory, stock and reports — all in one powerful
              platform. Simplify your daily operations and work
              with confidence.
            </p>

            <div className="ai-hero-buttons">

              <button className="ai-play-btn" onClick={scrollToFeatures}>
                 Explore All Features
              </button>
            </div>
          </div>


          {/* RIGHT SIDE IMAGE */}
          <div className="ai-dashboard-image-area">

            <div className="ai-dashboard-image-card">

              <img
                src= {image}
                alt="Attendance and Inventory Dashboard"
              />

            </div>

            <div className="ai-image-decoration decoration-one"></div>

            <div className="ai-image-decoration decoration-two"></div>

          </div>

        </div>
      </section>

      <section className="ai-features-section">

        <div className="ai-section-heading">

          <span>POWERFUL FEATURES</span>

          <h2>
            Everything you need in one place
          </h2>

          <p>
            From daily attendance to inventory tracking,
            our features are designed to save time and
            bring accuracy to your work.
          </p>

          <div className="ai-heading-line center">
            <span></span>
            <i></i>
          </div>

        </div>


        <div className="ai-feature-grid">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className={`ai-feature-card ${feature.color}`}
                onClick={() => openFeature(feature.id)}
              >

                <div className="ai-card-top">

                  <div className="ai-feature-icon">
                    <Icon />
                  </div>

                  <span className="ai-feature-number">
                    0{index + 1}
                  </span>

                </div>


                <div className="ai-card-content">

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.description}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openFeature(feature.id);
                    }}
                  >
                    Explore Feature
                    <FiArrowUpRight />
                  </button>

                </div>

              </article>
            );
          })}

        </div>

      </section>

      <section className="ai-cta">

        <div className="ai-cta-circle circle-one"></div>
        <div className="ai-cta-circle circle-two"></div>

        <div className="ai-cta-container">

          <div className="ai-cta-content">

            <span className="ai-cta-label">
              SIMPLE • SMART • POWERFUL
            </span>

            <h2>
              Simplify attendance.
              <br />
              Manage inventory better.
            </h2>

            <p>
              Bring your daily operations together
              with one easy-to-use platform.
            </p>

            <button
              className="ai-cta-btn"
              onClick={scrollToFeatures}
            >
              Explore Features
              <FiArrowUpRight />
            </button>

          </div>


          <div className="ai-cta-checklist">

            <div>
              <FiCheckCircle />
              <span>Easy attendance tracking</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Smart inventory management</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Real-time reports</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Secure user access</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}