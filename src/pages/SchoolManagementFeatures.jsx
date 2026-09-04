import {
  FiGrid,
  FiHome,
  FiBookOpen,
  FiClipboard,
  FiCalendar,
  FiLayers,
  FiClock,
  FiDollarSign,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import "./SchoolManagementFeatures.css";

const features = [
  {
    id: "dashboard",
    icon: FiGrid,
    title: "Dashboard",
    description:
      "Get a complete overview of your school's daily activities, attendance, classrooms, schedules and important information from one place.",
  },

  {
    id: "classrooms",
    icon: FiHome,
    title: "Classrooms",
    description:
      "Organize classrooms, classes and sections while keeping classroom information structured and easy to manage.",
  },

  {
    id: "library",
    icon: FiBookOpen,
    title: "Library",
    description:
      "Manage books, library records, issue and return activities and keep your school's library information organized.",
  },

  {
    id: "attendance",
    icon: FiClipboard,
    title: "Attendance",
    description:
      "Track attendance across your school with organized daily records for students, staff and other school activities.",
  },

  {
    id: "timetable",
    icon: FiClock,
    title: "Timetable",
    description:
      "Create and manage class schedules, subject periods and daily timetables to keep your school organized.",
  },

  {
    id: "courses",
    icon: FiLayers,
    title: "Courses",
    description:
      "Manage courses, subjects and academic information while keeping your school's learning structure organized.",
  },

  {
    id: "calendar",
    icon: FiCalendar,
    title: "Calendar",
    description:
      "Plan school events, holidays, activities and important dates with a centralized school calendar.",
  },

  {
    id: "accounts",
    icon: FiDollarSign,
    title: "Accounts & Inventory",
    description:
      "Manage expenses, inventory, fee collection and important financial records through one centralized system.",
  },
];

export default function SchoolManagementFeatures() {
  const navigate = useNavigate();

  return (
    <main className="school-features-page">
      <section className="school-features-header">

        <button
          className="school-back-btn"
          onClick={() => navigate("/school-management")}
        >
          <FiArrowLeft />
          Back
        </button>

        <span className="school-features-eyebrow">
          SCHOOL MANAGEMENT
        </span>

        <h1>
          Everything Your School
          <br />
          <span>Needs in One Place</span>
        </h1>

        <p>
          Powerful tools designed to simplify school administration,
          organize daily operations and manage your entire institution
          from one centralized platform.
        </p>

      </section>

      <section className="school-features-section">

        <div className="school-features-grid">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                className="school-feature-card"
                key={feature.id}
              >

                <div className="school-feature-top">

                  <span className="school-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="school-feature-icon">
                    <Icon />
                  </div>

                </div>


                <h2>
                  {feature.title}
                </h2>


                <p>
                  {feature.description}
                </p>


                <button
                  className="school-feature-link"
                  onClick={() =>
                    navigate(
                      `/school-management/features/${feature.id}`
                    )
                  }
                >
                  Explore
                  <FiArrowRight />
                </button>

              </div>
            );

          })}

        </div>

      </section>

      <section className="school-features-cta">

        <div>

          <span>
            SCHOOL MANAGEMENT SYSTEM
          </span>

          <h2>
            Manage your entire school
            <br />
            with confidence.
          </h2>

          <p>
            Bring classrooms, attendance, academics,
            scheduling and administration together
            in one powerful platform.
          </p>

        </div>


        <button
          onClick={() => navigate("/school-management")}
        >
          Back to Product
          <FiArrowRight />
        </button>

      </section>

    </main>
  );
}