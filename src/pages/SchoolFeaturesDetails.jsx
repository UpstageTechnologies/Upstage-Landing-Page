import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiGrid,
  FiHome,
  FiBookOpen,
  FiClipboard,
  FiCalendar,
  FiLayers,
  FiClock,
  FiDollarSign,
  FiBarChart2,
  FiFileText,
  FiUser,
  FiUsers,
  FiPackage,
  FiCheck,
  FiBook,
  FiMapPin,
} from "react-icons/fi";

import { useNavigate, useParams } from "react-router-dom";
import "./SchoolFeaturesDetails.css";

const featureData = {
  dashboard: {
    icon: FiGrid,
    eyebrow: "SCHOOL DASHBOARD",
    title: "Everything at a Glance.",
    description:
      "Get a complete overview of your school's daily activities, classrooms, attendance, schedules and important information from one centralized dashboard.",

    points: [
      "School overview",
      "Classroom overview",
      "Attendance summary",
      "Today's activities",
      "Important notifications",
      "Quick access to modules",
    ],

    sections: [
      {
        type: "dashboard",
        title: "A Complete View of Your School",
        text:
          "The school dashboard brings important information together in one place, helping administrators quickly understand what is happening across the institution.",
      },
      {
        type: "dashboard-activity",
        title: "Monitor Daily Activities",
        text:
          "View important statistics, attendance information and recent activities at a glance so your school administration can stay informed throughout the day.",
      },
    ],
  },

  classrooms: {
    icon: FiHome,
    eyebrow: "CLASSROOM MANAGEMENT",
    title: "Organize Every Classroom.",
    description:
      "Manage classrooms, classes, sections, room allocation and classroom information through one organized platform.",

    points: [
      "Classroom management",
      "Class & section allocation",
      "Room management",
      "Classroom capacity",
      "Room availability",
      "Classroom schedules",
    ],

    sections: [
      {
        type: "classrooms",
        title: "Manage Classrooms Easily",
        text:
          "Keep classroom information organized with details about rooms, classes, sections and available capacity in one centralized system.",
      },
      {
        type: "classrooms-allocation",
        title: "Simplify Room Allocation",
        text:
          "Assign classes and sections to suitable classrooms while keeping room availability and classroom schedules easy to manage.",
      },
    ],
  },

  library: {
    icon: FiBookOpen,
    eyebrow: "LIBRARY MANAGEMENT",
    title: "Manage Your Library Smarter.",
    description:
      "Organize books, library records, issue and return activities and keep your school's entire library information in one place.",

    points: [
      "Book management",
      "Book availability",
      "Issue & return",
      "Library records",
      "Due date tracking",
      "Member management",
    ],

    sections: [
      {
        type: "library",
        title: "Keep Your Library Organized",
        text:
          "Maintain a clear record of books, available copies and library resources so staff can quickly find the information they need.",
      },
      {
        type: "library-activity",
        title: "Track Every Book Activity",
        text:
          "Monitor issued books, returned books and due dates to make everyday library operations simple and organized.",
      },
    ],
  },

  attendance: {
    icon: FiClipboard,
    eyebrow: "ATTENDANCE MANAGEMENT",
    title: "Attendance Made Simple.",
    description:
      "Track student and staff attendance accurately and manage daily attendance records from one easy-to-use platform.",

    points: [
      "Student attendance",
      "Staff attendance",
      "Daily attendance",
      "Monthly reports",
      "Attendance history",
      "Attendance summaries",
    ],

    sections: [
      {
        type: "attendance",
        title: "Track Attendance Effortlessly",
        text:
          "Record and manage attendance for students and staff while keeping all attendance information organized and accessible.",
      },
      {
        type: "attendance-trends",
        title: "Understand Attendance Trends",
        text:
          "Use attendance summaries and reports to understand attendance patterns and maintain accurate school records.",
      },
    ],
  },

  timetable: {
    icon: FiClock,
    eyebrow: "TIMETABLE MANAGEMENT",
    title: "Plan Every School Day Better.",
    description:
      "Create and manage class schedules, subject periods and teacher timetables with an organized scheduling system.",

    points: [
      "Class timetable",
      "Teacher timetable",
      "Subject scheduling",
      "Daily schedules",
      "Period management",
      "Academic planning",
    ],

    sections: [
      {
        type: "timetable",
        title: "Create Organized Timetables",
        text:
          "Create structured daily timetables for classes while keeping subjects, periods and classrooms easy to manage.",
      },
      {
        type: "timetable-planning",
        title: "Keep Everyone on Schedule",
        text:
          "Plan teacher schedules and class periods in one place to reduce scheduling conflicts and improve daily organization.",
      },
    ],
  },

  courses: {
    icon: FiLayers,
    eyebrow: "COURSE MANAGEMENT",
    title: "Build a Better Academic Structure.",
    description:
      "Manage courses, subjects, classes and teacher assignments while keeping your school's academic structure organized.",

    points: [
      "Course management",
      "Subject management",
      "Class management",
      "Course assignments",
      "Teacher assignments",
      "Academic structure",
    ],

    sections: [
      {
        type: "courses",
        title: "Organize Courses & Subjects",
        text:
          "Keep courses and subjects organized by class while giving administrators a clear view of the academic structure.",
      },
      {
        type: "courses-assignment",
        title: "Manage Teacher Assignments",
        text:
          "Assign teachers to subjects and classes while keeping academic responsibilities organized and easy to track.",
      },
    ],
  },

  calendar: {
    icon: FiCalendar,
    eyebrow: "SCHOOL CALENDAR",
    title: "Plan Every Important Date.",
    description:
      "Manage school events, holidays, activities, meetings and important academic dates through one centralized calendar.",

    points: [
      "Academic calendar",
      "School events",
      "Holiday management",
      "Important dates",
      "Meetings",
      "Activity planning",
    ],

    sections: [
      {
        type: "calendar",
        title: "One Calendar for Your School",
        text:
          "Bring academic events, holidays, activities and important dates together so everyone can stay aware of the school schedule.",
      },
      {
        type: "calendar-events",
        title: "Never Miss an Important Event",
        text:
          "Plan upcoming events and activities in advance while keeping important school dates easy to view and manage.",
      },
    ],
  },

  accounts: {
    icon: FiDollarSign,
    eyebrow: "ACCOUNTS & INVENTORY",
    title: "Simplify School Administration.",
    description:
      "Manage fee collection, expenses, financial records and inventory through one centralized accounts and inventory system.",

    points: [
      "Fee collection",
      "Payment tracking",
      "Expense management",
      "Inventory management",
      "Stock tracking",
      "Financial records",
    ],

    sections: [
      {
        type: "accounts",
        title: "Manage School Finances",
        text:
          "Keep track of fees, payments and expenses while maintaining clear financial information in one centralized system.",
      },
      {
        type: "inventory",
        title: "Keep Inventory Under Control",
        text:
          "Track school supplies, available stock and inventory movements so administrators can easily monitor what is available and what needs attention.",
      },
    ],
  },
};

function FeaturePreview({ type }) {

  /* DASHBOARD */

  if (type === "dashboard") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>School Overview</small>
            <h4>Dashboard</h4>
          </div>

          <FiGrid className="preview-main-icon" />
        </div>

        <div className="preview-stat-grid">

          <div className="preview-stat">
            <small>Students</small>
            <strong>1,250</strong>
            <span className="preview-positive">+12%</span>
          </div>

          <div className="preview-stat">
            <small>Classes</small>
            <strong>32</strong>
            <span className="preview-positive">Active</span>
          </div>

          <div className="preview-stat">
            <small>Attendance</small>
            <strong>96%</strong>
            <span className="preview-positive">Today</span>
          </div>

        </div>

        <div className="preview-table">

          <div className="preview-table-title">
            <span>Recent Activity</span>
            <small>View all</small>
          </div>

          <div className="preview-row">
            <span>Attendance Updated</span>
            <b>10:30 AM</b>
          </div>

          <div className="preview-row">
            <span>New Classroom Added</span>
            <b>Today</b>
          </div>

          <div className="preview-row">
            <span>Fee Collection Updated</span>
            <b>Today</b>
          </div>

        </div>

      </div>
    );
  }


  /* DASHBOARD ACTIVITY */

  if (type === "dashboard-activity") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Performance</small>
            <h4>School Activity</h4>
          </div>

          <FiBarChart2 className="preview-main-icon" />
        </div>

        <div className="preview-chart">

          <div className="chart-bars">
            <span style={{ height: "45%" }}></span>
            <span style={{ height: "65%" }}></span>
            <span style={{ height: "55%" }}></span>
            <span style={{ height: "80%" }}></span>
            <span style={{ height: "70%" }}></span>
            <span style={{ height: "92%" }}></span>
          </div>

          <div className="chart-labels">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>

        </div>

        <div className="preview-summary">

          <div>
            <small>Overall</small>
            <strong>94.8%</strong>
          </div>

          <div>
            <small>Growth</small>
            <strong className="preview-positive">+8.4%</strong>
          </div>

        </div>

      </div>
    );
  }


  /* CLASSROOMS */

  if (type === "classrooms") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Classroom Management</small>
            <h4>Classroom Overview</h4>
          </div>

          <FiHome className="preview-main-icon" />
        </div>

        <div className="record-grid">

          <div>
            <small>Rooms</small>
            <strong>24</strong>
          </div>

          <div>
            <small>Classes</small>
            <strong>18</strong>
          </div>

          <div>
            <small>Capacity</small>
            <strong>960</strong>
          </div>

        </div>

        <div className="preview-table">

          <div className="preview-table-title">
            <span>Classrooms</span>
            <small>View all</small>
          </div>

          <div className="preview-row">
            <span>Room 201 · Class 10-A</span>
            <b className="status-paid">Active</b>
          </div>

          <div className="preview-row">
            <span>Room 202 · Class 10-B</span>
            <b className="status-paid">Active</b>
          </div>

          <div className="preview-row">
            <span>Lab 01 · Computer</span>
            <b className="status-pending">Available</b>
          </div>

        </div>

      </div>
    );
  }


  /* CLASSROOM ALLOCATION */

  if (type === "classrooms-allocation") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Room Allocation</small>
            <h4>Classroom Planning</h4>
          </div>

          <FiMapPin className="preview-main-icon" />
        </div>

        <div className="assignment-row">

          <div className="assignment-icon">
            <FiHome />
          </div>

          <div>
            <strong>Room 201</strong>
            <span>Class 10-A · 42 Students</span>
          </div>

          <FiCheck className="assignment-check" />

        </div>

        <div className="assignment-row">

          <div className="assignment-icon">
            <FiHome />
          </div>

          <div>
            <strong>Room 202</strong>
            <span>Class 10-B · 39 Students</span>
          </div>

          <FiCheck className="assignment-check" />

        </div>

        <div className="assignment-row">

          <div className="assignment-icon">
            <FiHome />
          </div>

          <div>
            <strong>Lab 01</strong>
            <span>Computer Lab · Available</span>
          </div>

          <FiCheck className="assignment-check" />

        </div>

      </div>
    );
  }


  /* LIBRARY */

  if (type === "library") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Library Management</small>
            <h4>Library Overview</h4>
          </div>

          <FiBookOpen className="preview-main-icon" />
        </div>

        <div className="preview-stat-grid">

          <div className="preview-stat">
            <small>Total Books</small>
            <strong>2,450</strong>
          </div>

          <div className="preview-stat">
            <small>Issued</small>
            <strong>186</strong>
          </div>

          <div className="preview-stat">
            <small>Available</small>
            <strong>2,264</strong>
          </div>

        </div>

        <div className="preview-table">

          <div className="preview-table-title">
            <span>Popular Books</span>
            <small>View all</small>
          </div>

          <div className="preview-row">
            <span>Mathematics - Grade 10</span>
            <b>12 Copies</b>
          </div>

          <div className="preview-row">
            <span>Science Essentials</span>
            <b>8 Copies</b>
          </div>

          <div className="preview-row">
            <span>English Grammar</span>
            <b>15 Copies</b>
          </div>

        </div>

      </div>
    );
  }


  /* LIBRARY ACTIVITY */

  if (type === "library-activity") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Library Activity</small>
            <h4>Issue & Return</h4>
          </div>

          <FiBook className="preview-main-icon" />
        </div>

        <div className="announcement-card">

          <div className="announcement-icon">
            <FiBookOpen />
          </div>

          <div>
            <strong>Arun Kumar</strong>
            <span>Book issued · Mathematics</span>
          </div>

          <small>Today</small>

        </div>

        <div className="announcement-card">

          <div className="announcement-icon">
            <FiCheck />
          </div>

          <div>
            <strong>Priya S</strong>
            <span>Book returned · Science</span>
          </div>

          <small>Today</small>

        </div>

        <div className="announcement-card">

          <div className="announcement-icon">
            <FiClock />
          </div>

          <div>
            <strong>Rahul M</strong>
            <span>Return due · Tomorrow</span>
          </div>

          <small>Due</small>

        </div>

      </div>
    );
  }


  /* ATTENDANCE */

  if (type === "attendance") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Daily Attendance</small>
            <h4>Class 10 - A</h4>
          </div>

          <FiClipboard className="preview-main-icon" />
        </div>

        <div className="attendance-summary">

          <div>
            <strong>42</strong>
            <small>Total</small>
          </div>

          <div className="attendance-present">
            <strong>39</strong>
            <small>Present</small>
          </div>

          <div className="attendance-absent">
            <strong>3</strong>
            <small>Absent</small>
          </div>

        </div>

        <div className="preview-table">

          <div className="preview-row">
            <span>Arun Kumar</span>
            <b className="status-paid">Present</b>
          </div>

          <div className="preview-row">
            <span>Priya S</span>
            <b className="status-paid">Present</b>
          </div>

          <div className="preview-row">
            <span>Rahul M</span>
            <b className="status-absent">Absent</b>
          </div>

        </div>

      </div>
    );
  }


  /* ATTENDANCE TRENDS */

  if (type === "attendance-trends") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Attendance Report</small>
            <h4>Monthly Trends</h4>
          </div>

          <FiBarChart2 className="preview-main-icon" />
        </div>

        <div className="trend-chart">

          <div className="trend-line">
            <span style={{ height: "65%" }}></span>
            <span style={{ height: "80%" }}></span>
            <span style={{ height: "72%" }}></span>
            <span style={{ height: "90%" }}></span>
            <span style={{ height: "85%" }}></span>
            <span style={{ height: "96%" }}></span>
          </div>

        </div>

        <div className="preview-summary">

          <div>
            <small>Average</small>
            <strong>91.6%</strong>
          </div>

          <div>
            <small>Improvement</small>
            <strong className="preview-positive">+6.2%</strong>
          </div>

        </div>

      </div>
    );
  }


  /* TIMETABLE */

  if (type === "timetable") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Class Schedule</small>
            <h4>Monday · Class 10-A</h4>
          </div>

          <FiClock className="preview-main-icon" />
        </div>

        <div className="schedule-list">

          <div>
            <span>09:00</span>
            <strong>Mathematics</strong>
            <small>Room 201</small>
          </div>

          <div>
            <span>10:00</span>
            <strong>Science</strong>
            <small>Lab 02</small>
          </div>

          <div>
            <span>11:30</span>
            <strong>English</strong>
            <small>Room 105</small>
          </div>

          <div>
            <span>01:30</span>
            <strong>Computer</strong>
            <small>Lab 01</small>
          </div>

        </div>

      </div>
    );
  }


  /* TIMETABLE PLANNING */

  if (type === "timetable-planning") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Weekly Planning</small>
            <h4>Teacher Schedule</h4>
          </div>

          <FiCalendar className="preview-main-icon" />
        </div>

        <div className="weekly-grid">

          <div className="week-head">
            <span>Teacher</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
          </div>

          <div className="week-row">
            <span>Meena</span>
            <b>Maths</b>
            <b>Science</b>
            <b>Maths</b>
          </div>

          <div className="week-row">
            <span>David</span>
            <b>English</b>
            <b>English</b>
            <b>History</b>
          </div>

          <div className="week-row">
            <span>Anita</span>
            <b>Science</b>
            <b>Maths</b>
            <b>English</b>
          </div>

        </div>

      </div>
    );
  }


  /* COURSES */

  if (type === "courses") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Course Management</small>
            <h4>Courses & Subjects</h4>
          </div>

          <FiLayers className="preview-main-icon" />
        </div>

        <div className="academic-grid">

          <div>
            <strong>Mathematics</strong>
            <span>Class 10</span>
          </div>

          <div>
            <strong>Science</strong>
            <span>Class 10</span>
          </div>

          <div>
            <strong>English</strong>
            <span>Class 10</span>
          </div>

        </div>

        <div className="subject-list">

          <div>
            <span>Mathematics</span>
            <b>Mr. Kumar</b>
          </div>

          <div>
            <span>Science</span>
            <b>Ms. Meena</b>
          </div>

          <div>
            <span>English</span>
            <b>Mrs. Anita</b>
          </div>

        </div>

      </div>
    );
  }


  /* COURSE ASSIGNMENT */

  if (type === "courses-assignment") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Academic Planning</small>
            <h4>Teacher Assignments</h4>
          </div>

          <FiUsers className="preview-main-icon" />
        </div>

        <div className="assignment-row">

          <div className="assignment-icon">
            <FiBookOpen />
          </div>

          <div>
            <strong>Mathematics</strong>
            <span>Class 10-A · Mr. Kumar</span>
          </div>

          <FiCheck className="assignment-check" />

        </div>

        <div className="assignment-row">

          <div className="assignment-icon">
            <FiBookOpen />
          </div>

          <div>
            <strong>Science</strong>
            <span>Class 10-A · Ms. Meena</span>
          </div>

          <FiCheck className="assignment-check" />

        </div>

        <div className="assignment-row">

          <div className="assignment-icon">
            <FiBookOpen />
          </div>

          <div>
            <strong>English</strong>
            <span>Class 10-B · Mrs. Anita</span>
          </div>

          <FiCheck className="assignment-check" />

        </div>

      </div>
    );
  }


  /* CALENDAR */

  if (type === "calendar") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>School Calendar</small>
            <h4>September 2026</h4>
          </div>

          <FiCalendar className="preview-main-icon" />
        </div>

        <div className="calendar-mini">

          <div className="calendar-head">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>

          <div className="calendar-days">
            <span>1</span>
            <span>2</span>
            <span className="calendar-active">3</span>
            <span>4</span>
            <span>5</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span className="calendar-event">11</span>
            <span>12</span>
          </div>

        </div>

        <div className="calendar-event-row">
          <FiCalendar />
          <div>
            <strong>Parent Meeting</strong>
            <span>Saturday · 10:00 AM</span>
          </div>
        </div>

      </div>
    );
  }


  /* CALENDAR EVENTS */

  if (type === "calendar-events") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Upcoming Events</small>
            <h4>School Activities</h4>
          </div>

          <FiCalendar className="preview-main-icon" />
        </div>

        <div className="announcement-card">

          <div className="announcement-icon">
            <FiCalendar />
          </div>

          <div>
            <strong>Annual Sports Day</strong>
            <span>September 18 · School Ground</span>
          </div>

          <small>18 Sep</small>

        </div>

        <div className="announcement-card">

          <div className="announcement-icon">
            <FiBookOpen />
          </div>

          <div>
            <strong>Quarterly Exams</strong>
            <span>September 22 · Main Block</span>
          </div>

          <small>22 Sep</small>

        </div>

        <div className="announcement-card">

          <div className="announcement-icon">
            <FiUsers />
          </div>

          <div>
            <strong>Parent Meeting</strong>
            <span>September 27 · Auditorium</span>
          </div>

          <small>27 Sep</small>

        </div>

      </div>
    );
  }


  /* ACCOUNTS */

  if (type === "accounts") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>School Finance</small>
            <h4>Financial Overview</h4>
          </div>

          <FiDollarSign className="preview-main-icon" />
        </div>

        <div className="money-card">
          <small>Total Fee Collected</small>
          <strong>₹1,84,500</strong>
          <span>+12.5% this month</span>
        </div>

        <div className="preview-table">

          <div className="preview-row">
            <span>Fee Collection</span>
            <b className="status-paid">₹1.84L</b>
          </div>

          <div className="preview-row">
            <span>Expenses</span>
            <b>₹86K</b>
          </div>

          <div className="preview-row">
            <span>Pending Fees</span>
            <b className="status-pending">₹32K</b>
          </div>

        </div>

      </div>
    );
  }


  /* INVENTORY */

  if (type === "inventory") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Inventory Management</small>
            <h4>Stock Overview</h4>
          </div>

          <FiPackage className="preview-main-icon" />
        </div>

        <div className="record-grid">

          <div>
            <small>Total Items</small>
            <strong>248</strong>
          </div>

          <div>
            <small>In Stock</small>
            <strong>216</strong>
          </div>

          <div>
            <small>Low Stock</small>
            <strong>32</strong>
          </div>

        </div>

        <div className="preview-table">

          <div className="preview-table-title">
            <span>Inventory Items</span>
            <small>View all</small>
          </div>

          <div className="preview-row">
            <span>Notebooks</span>
            <b className="status-paid">120</b>
          </div>

          <div className="preview-row">
            <span>Chairs</span>
            <b className="status-paid">64</b>
          </div>

          <div className="preview-row">
            <span>Whiteboards</span>
            <b className="status-pending">8 Low</b>
          </div>

        </div>

      </div>
    );
  }

  return null;
}

export default function SchoolFeaturesDetails() {

  const navigate = useNavigate();
  const { featureId } = useParams();

  const feature = featureData[featureId];

  if (!feature) {
    return (
      <main className="feature-not-found">

        <h1>Feature Not Found</h1>

        <button
          onClick={() =>
            navigate("/school-management/features")
          }
        >
          Back to Features
        </button>

      </main>
    );
  }

  const Icon = feature.icon;

  return (
    <main className="school-feature-details">

      {/* HERO */}

      <section className="feature-detail-hero">

        <div className="feature-detail-container">

          <button
            className="feature-detail-back"
            onClick={() =>
              navigate("/school-management/features")
            }
          >
            <FiArrowLeft />
            Back to Features
          </button>

          <div className="feature-detail-grid">

            <div className="feature-detail-content">

              <div className="feature-detail-icon">
                <Icon />
              </div>

              <span className="feature-detail-eyebrow">
                {feature.eyebrow}
              </span>

              <h1>
                {feature.title}
              </h1>

              <p className="feature-detail-description">
                {feature.description}
              </p>

              <button
                className="feature-detail-primary"
                onClick={() =>
                  navigate("/school-management/features")
                }
              >
                Explore Other Features
                <FiArrowRight />
              </button>

            </div>


            {/* HERO UI */}

            <div className="feature-detail-visual">

              <div className="feature-ui-card">

                <div className="feature-ui-header">

                  <div className="feature-ui-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>
                    {feature.eyebrow}
                  </span>

                </div>

                <div className="feature-ui-body">

                  <div className="feature-ui-title">

                    <div>
                      <small>Overview</small>

                      <h3>
                        {feature.title}
                      </h3>
                    </div>

                    <div className="feature-ui-icon">
                      <Icon />
                    </div>

                  </div>

                  <div className="feature-ui-stats">

                    <div>
                      <small>Total</small>
                      <strong>1,250</strong>
                    </div>

                    <div>
                      <small>Active</small>
                      <strong>96%</strong>
                    </div>

                    <div>
                      <small>Updated</small>
                      <strong>Today</strong>
                    </div>

                  </div>

                  <div className="feature-ui-lines">
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

      </section>


      {/* KEY FEATURES */}

      <section className="feature-key-section">

        <div className="feature-key-container">

          <div className="feature-section-heading">

            <span>KEY FEATURES</span>

            <h2>
              Everything you need to
              <br />
              manage it better.
            </h2>

          </div>

          <div className="feature-points-grid">

            {feature.points.map((point) => (

              <div
                className="feature-point-card"
                key={point}
              >
                <FiCheckCircle />

                <span>
                  {point}
                </span>
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* INFORMATION */}

      <section className="feature-info-section">

        <div className="feature-info-container">

          {feature.sections.map((section, index) => (

            <div
              className={`feature-info-row ${
                index % 2 !== 0
                  ? "feature-info-reverse"
                  : ""
              }`}
              key={section.title}
            >

              <div className="feature-info-content">

                <span>
                  0{index + 1}
                </span>

                <h2>
                  {section.title}
                </h2>

                <p>
                  {section.text}
                </p>

              </div>

              <div className="feature-info-image">

                <FeaturePreview
                  type={section.type}
                />

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="feature-detail-cta">

        <div>

          <span>
            SCHOOL MANAGEMENT SYSTEM
          </span>

          <h2>
            Explore everything your
            <br />
            school can do.
          </h2>

        </div>

        <button
          onClick={() =>
            navigate("/school-management/features")
          }
        >
          View All Features
          <FiArrowRight />
        </button>

      </section>

    </main>
  );
}