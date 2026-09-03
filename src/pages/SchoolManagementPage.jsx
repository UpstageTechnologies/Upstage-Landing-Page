import { FiArrowRight, FiCheckCircle, FiGrid } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./SchoolManagementPage.css";

export default function SchoolManagementPage() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/school-management/features");
  };

  return (
    <main className="school-management-page">
      <section className="school-hero">
        <div className="school-hero-container">

          <div className="school-hero-content">

            <span className="school-eyebrow">
              SCHOOL MANAGEMENT SYSTEM
            </span>

            <h1>
              Smarter School
              <br />
              <span>Management.</span>
            </h1>

            <p>
              A complete school management solution designed to simplify
              administration, academics, attendance, accounts and
              communication from one powerful platform.
            </p>

            <div className="school-hero-actions">

              <button
                className="school-primary-btn"
                onClick={handleExplore}
              >
                Explore Features
                <FiArrowRight />
              </button>

              <button className="school-secondary-btn">
                Get Started
              </button>

            </div>

            <div className="school-hero-points">

              <span>
                <FiCheckCircle />
                Easy to Manage
              </span>

              <span>
                <FiCheckCircle />
                Centralized System
              </span>

              <span>
                <FiCheckCircle />
                Built for Schools
              </span>

            </div>

          </div>

          <div className="school-hero-visual">

            <div className="school-dashboard-window">

              <div className="school-window-header">

                <div className="school-window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="window-title">
                  School Dashboard
                </span>

                <FiGrid />

              </div>

              <div className="school-dashboard-body">

                <div className="school-dashboard-welcome">

                  <div>
                    <small>Welcome back</small>
                    <h3>School Overview</h3>
                  </div>

                  <div className="school-dashboard-date">
                    Today
                  </div>

                </div>


                {/* Stats */}
                <div className="school-stat-grid">

                  <div className="school-stat-card">
                    <span>Students</span>
                    <strong>1,250</strong>
                    <small>Active students</small>
                  </div>

                  <div className="school-stat-card">
                    <span>Teachers</span>
                    <strong>120</strong>
                    <small>Teaching staff</small>
                  </div>

                  <div className="school-stat-card">
                    <span>Attendance</span>
                    <strong>96%</strong>
                    <small>Today's attendance</small>
                  </div>

                </div>


                {/* Chart */}
                <div className="school-chart-card">

                  <div className="school-chart-header">
                    <span>Attendance Overview</span>
                    <small>This Week</small>
                  </div>

                  <div className="school-chart">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}