import {
  FiGrid,
  FiDollarSign,
  FiUsers,
  FiUserCheck,
  FiClipboard,
  FiBookOpen,
  FiCalendar,
  FiBarChart2,
  FiBell,
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
      "Get a complete overview of your school's daily activities, students, staff, attendance and important updates.",
  },
  {
    id: "accounts",
    icon: FiDollarSign,
    title: "Accounts",
    description:
      "Manage student fees, payments, expenses, invoices and financial records efficiently from one place.",
  },
  {
    id: "students",
    icon: FiUsers,
    title: "Student Management",
    description:
      "Maintain student profiles, admission details, academic records, documents and other important information.",
  },
  {
    id: "staff",
    icon: FiUserCheck,
    title: "Staff Management",
    description:
      "Manage teachers and staff profiles, departments, responsibilities and other staff-related information.",
  },
  {
    id: "attendance",
    icon: FiClipboard,
    title: "Attendance",
    description:
      "Track student and staff attendance easily with accurate daily attendance records and reports.",
  },
  {
    id: "academics",
    icon: FiBookOpen,
    title: "Academic Management",
    description:
      "Manage classes, sections, subjects, academic activities and other essential academic information.",
  },
  {
    id: "timetable",
    icon: FiCalendar,
    title: "Timetable",
    description:
      "Create and manage class schedules, teacher schedules and daily timetables with ease.",
  },
  {
    id: "exams",
    icon: FiBarChart2,
    title: "Exams & Results",
    description:
      "Manage examinations, marks, grades and results while keeping student performance records organized.",
  },
  {
    id: "communication",
    icon: FiBell,
    title: "Communication",
    description:
      "Share announcements, notices and important updates with students, parents and staff.",
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
          improve productivity and manage your entire institution
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
                key={feature.title}
              >

                <div className="school-feature-top">

                  <span className="school-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="school-feature-icon">
                    <Icon />
                  </div>

                </div>

                <h2>{feature.title}</h2>

                <p>{feature.description}</p>

                <button className="school-feature-link" onClick={() => navigate(`/school-management/features/${feature.id}`)}>
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
            Bring administration, academics, attendance and
            communication together in one powerful platform.
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