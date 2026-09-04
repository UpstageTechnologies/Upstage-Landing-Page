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
  FiArrowRight,
} from "react-icons/fi";
import "./AttendanceInventoryFeatures.css";

const features = [
  {
    id: "dashboard",
    icon: FiGrid,
    title: "Dashboard",
    description:
      "Get a clear overview of attendance, employees, inventory and stock from one powerful dashboard.",
  },
  {
    id: "attendance",
    icon: FiCalendar,
    title: "Attendance Management",
    description:
      "Track employee attendance, check-in, check-out and daily attendance records easily.",
  },
  {
    id: "employees",
    icon: FiUsers,
    title: "Employee Management",
    description:
      "Manage employee information, records and work details in one organized place.",
  },
  {
    id: "inventory",
    icon: FiBox,
    title: "Inventory Management",
    description:
      "Manage products, items and inventory information with real-time stock visibility.",
  },
  {
    id: "stock",
    icon: FiLayers,
    title: "Stock Management",
    description:
      "Track stock movements, low-stock items, incoming stock and outgoing stock efficiently.",
  },
  {
    id: "reports",
    icon: FiBarChart2,
    title: "Reports & Analytics",
    description:
      "Generate useful attendance and inventory reports to understand your business better.",
  },
  {
    id: "notifications",
    icon: FiBell,
    title: "Notifications",
    description:
      "Stay updated with attendance alerts, stock updates and important system notifications.",
  },
  {
    id: "access",
    icon: FiShield,
    title: "User & Access Management",
    description:
      "Control user access and keep important attendance and inventory data secure.",
  },
];

export default function AttendanceInventoryFeatures() {
  const navigate = useNavigate();

  return (
    <main className="attendance-features-page">

      <section className="attendance-features-hero">
        <div className="attendance-features-hero-container">

          <span className="attendance-features-eyebrow">
            ATTENDANCE & INVENTORY APP
          </span>

          <h1>
            Everything you need to
            <span>manage with ease.</span>
          </h1>

          <p>
            Powerful attendance and inventory features designed
            to simplify daily operations, improve accuracy and
            give you complete control.
          </p>

        </div>
      </section>

      <section className="attendance-features-section">

        <div className="attendance-features-container">

          <div className="attendance-features-heading">
            <div>
              <span>POWERFUL FEATURES</span>

              <h2>
                One app.
                <br />
                Complete control.
              </h2>
            

            <p>
              Manage your employees, attendance, inventory and
              stock from a single, simple and reliable platform.
            </p>
            </div>
          </div>

          <div className="attendance-features-grid">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="attendance-feature-card"
                  key={feature.id}
                  onClick={() =>
                    navigate(
                      `/attendance-inventory/features/${feature.id}`
                    )
                  }
                >

                  <div className="attendance-feature-icon">
                    <Icon />
                  </div>

                  <div className="attendance-feature-card-content">

                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>

                    <button
                      className="attendance-feature-link"
                      onClick={(e) => {
                        e.stopPropagation();

                        navigate(
                          `/attendance-inventory/features/${feature.id}`
                        );
                      }}
                    >
                      Explore Feature
                      <FiArrowRight />
                    </button>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      <section className="attendance-features-cta">

        <div className="attendance-features-cta-container">

          <div>
            <span>READY TO GET STARTED?</span>

            <h2>
              Simplify attendance.
              <br />
              Manage inventory better.
            </h2>
          </div>

          <button
            onClick={() =>
              navigate("/attendance-inventory")
            }
          >
            Back to App
            <FiArrowRight />
          </button>

        </div>

      </section>

    </main>
  );
}