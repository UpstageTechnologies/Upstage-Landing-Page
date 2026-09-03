import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiGrid,
  FiDollarSign,
  FiUsers,
  FiUserCheck,
  FiClipboard,
  FiBookOpen,
  FiCalendar,
  FiBarChart2,
  FiBell,
  FiCheck,
  FiClock,
  FiFileText,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

import { useNavigate, useParams } from "react-router-dom";
import "./SchoolFeaturesDetails.css";

const featureData = {

  dashboard: {
    icon: FiGrid,
    eyebrow: "SCHOOL DASHBOARD",
    title: "Everything at a Glance.",
    description:
      "Get a complete overview of your school's daily activities, students, staff, attendance and important information from one centralized dashboard.",

    points: [
      "Student overview",
      "Staff overview",
      "Attendance summary",
      "Fee and payment summary",
      "Recent activities",
      "Important notifications",
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
        title: "Make Better Decisions",
        text:
          "View important statistics, activities and reports at a glance so your school administration can make informed decisions quickly.",
      },
    ],
  },

  accounts: {
    icon: FiDollarSign,
    eyebrow: "SCHOOL ACCOUNTS",
    title: "Simplify Your School Finances.",
    description:
      "Manage fees, payments, expenses, receipts and financial records efficiently with a centralized accounts management system.",

    points: [
      "Fee collection",
      "Payment tracking",
      "Expense management",
      "Receipt management",
      "Due fee tracking",
      "Financial reports",
    ],

    sections: [
      {
        type: "accounts",
        title: "Manage Fees Easily",
        text:
          "Keep track of student fees, payments and pending dues without relying on multiple systems or manual records.",
      },
      {
        type: "accounts-records",
        title: "Clear Financial Records",
        text:
          "Maintain organized financial information and generate useful reports for better visibility into your school's finances.",
      },
    ],
  },

  attendance: {
    icon: FiClipboard,
    eyebrow: "ATTENDANCE MANAGEMENT",
    title: "Attendance Made Simple.",
    description:
      "Track student and staff attendance accurately and manage attendance records from one easy-to-use platform.",

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
          "Use attendance reports and summaries to understand attendance patterns and maintain accurate school records.",
      },
    ],
  },

  students: {
    icon: FiUsers,
    eyebrow: "STUDENT MANAGEMENT",
    title: "Manage Every Student in One Place.",
    description:
      "Maintain student profiles, admission information, academic records, documents and other important details through one centralized system.",

    points: [
      "Student profiles",
      "Admissions",
      "Class & section",
      "Student documents",
      "Academic history",
      "Student records",
    ],

    sections: [
      {
        type: "students",
        title: "Complete Student Profiles",
        text:
          "Keep important student information organized and easily accessible whenever administrators or staff need it.",
      },
      {
        type: "students-admin",
        title: "Simplified Student Administration",
        text:
          "Reduce manual work by keeping admission, academic and student information together in one centralized platform.",
      },
    ],
  },

  staff: {
    icon: FiUserCheck,
    eyebrow: "STAFF MANAGEMENT",
    title: "Manage Your School Staff Efficiently.",
    description:
      "Organize teacher and staff information, departments, responsibilities and other important staff records in one place.",

    points: [
      "Staff profiles",
      "Teacher management",
      "Department management",
      "Staff records",
      "Responsibilities",
      "Staff information",
    ],

    sections: [
      {
        type: "staff",
        title: "Centralized Staff Information",
        text:
          "Keep teacher and staff information organized so administrators can quickly access the details they need.",
      },
      {
        type: "staff-admin",
        title: "Better Staff Administration",
        text:
          "Simplify staff-related administration with a centralized system designed for educational institutions.",
      },
    ],
  },

  academics: {
    icon: FiBookOpen,
    eyebrow: "ACADEMIC MANAGEMENT",
    title: "Build a Better Academic Workflow.",
    description:
      "Manage classes, sections, subjects and academic activities from one organized academic management platform.",

    points: [
      "Class management",
      "Section management",
      "Subject management",
      "Academic activities",
      "Academic records",
      "Teacher assignments",
    ],

    sections: [
      {
        type: "academics",
        title: "Organize Academic Information",
        text:
          "Keep classes, sections and subjects organized while giving administrators a clear view of academic activities.",
      },
      {
        type: "academics-admin",
        title: "Simplify Academic Administration",
        text:
          "Bring important academic information together to reduce administrative effort and improve organization.",
      },
    ],
  },

  timetable: {
    icon: FiCalendar,
    eyebrow: "TIMETABLE MANAGEMENT",
    title: "Plan Every School Day Better.",
    description:
      "Create and manage class schedules, teacher schedules and daily timetables with an organized scheduling system.",

    points: [
      "Class timetable",
      "Teacher timetable",
      "Subject scheduling",
      "Daily schedules",
      "Schedule management",
      "Academic planning",
    ],

    sections: [
      {
        type: "timetable",
        title: "Organized Scheduling",
        text:
          "Create structured timetables for classes and teachers while keeping daily schedules easy to manage.",
      },
      {
        type: "timetable-planning",
        title: "Keep Everyone on Schedule",
        text:
          "Make school scheduling easier by organizing subjects, classes and teacher schedules in one place.",
      },
    ],
  },

  exams: {
    icon: FiBarChart2,
    eyebrow: "EXAMS & RESULTS",
    title: "Manage Exams and Results with Ease.",
    description:
      "Organize examinations, marks, grades and student results while keeping academic performance records structured.",

    points: [
      "Exam management",
      "Marks entry",
      "Grade management",
      "Result management",
      "Performance records",
      "Exam reports",
    ],

    sections: [
      {
        type: "exams",
        title: "Simplify Examination Management",
        text:
          "Manage examinations and marks in an organized way while reducing the effort required for manual record keeping.",
      },
      {
        type: "exams-performance",
        title: "Understand Student Performance",
        text:
          "Keep student results and performance information organized for better academic tracking.",
      },
    ],
  },

  communication: {
    icon: FiBell,
    eyebrow: "SCHOOL COMMUNICATION",
    title: "Keep Everyone Connected.",
    description:
      "Share announcements, notices and important updates with students, parents and staff through a centralized communication system.",

    points: [
      "School announcements",
      "Important notices",
      "Parent communication",
      "Staff communication",
      "Updates",
      "Notifications",
    ],

    sections: [
      {
        type: "communication",
        title: "One Place for Important Updates",
        text:
          "Keep students, parents and staff informed by managing important school announcements and updates from one platform.",
      },
      {
        type: "communication-connect",
        title: "Improve School Communication",
        text:
          "Make communication more organized and accessible so important information reaches the right people.",
      },
    ],
  },
};

function FeaturePreview({ type }) {

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
            <small>Teachers</small>
            <strong>120</strong>
            <span className="preview-positive">+4%</span>
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
            <span>New Admission</span>
            <b>Today</b>
          </div>

          <div className="preview-row">
            <span>Fee Payment</span>
            <b>Today</b>
          </div>

          <div className="preview-row">
            <span>Attendance Updated</span>
            <b>10:30 AM</b>
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

  if (type === "accounts") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Finance</small>
            <h4>Fee Collection</h4>
          </div>

          <FiDollarSign className="preview-main-icon" />
        </div>

        <div className="money-card">
          <small>Total Collected</small>
          <strong>₹1,84,500</strong>
          <span>+12.5% this month</span>
        </div>

        <div className="preview-table">

          <div className="preview-table-title">
            <span>Recent Payments</span>
            <small>View all</small>
          </div>

          <div className="preview-row">
            <span>Arun Kumar</span>
            <b className="status-paid">Paid ₹15,000</b>
          </div>

          <div className="preview-row">
            <span>Priya S</span>
            <b className="status-paid">Paid ₹12,000</b>
          </div>

          <div className="preview-row">
            <span>Rahul M</span>
            <b className="status-pending">Pending</b>
          </div>

        </div>

      </div>
    );
  }


  /* ACCOUNTS RECORDS */

  if (type === "accounts-records") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Financial Records</small>
            <h4>Monthly Summary</h4>
          </div>

          <FiFileText className="preview-main-icon" />
        </div>

        <div className="record-grid">

          <div>
            <small>Income</small>
            <strong>₹2.45L</strong>
          </div>

          <div>
            <small>Expenses</small>
            <strong>₹86K</strong>
          </div>

          <div>
            <small>Balance</small>
            <strong>₹1.59L</strong>
          </div>

        </div>

        <div className="mini-progress">
          <div>
            <span>Fee Collection</span>
            <b>84%</b>
          </div>

          <div className="progress-track">
            <span style={{ width: "84%" }}></span>
          </div>
        </div>

        <div className="mini-progress">
          <div>
            <span>Expense Tracking</span>
            <b>67%</b>
          </div>

          <div className="progress-track">
            <span style={{ width: "67%" }}></span>
          </div>
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


  /* STUDENTS */

  if (type === "students") {
    return (
      <div className="preview-box">

        <div className="profile-header">
          <div className="profile-avatar">
            <FiUser />
          </div>

          <div>
            <small>Student Profile</small>
            <h4>Arun Kumar</h4>
            <span>Class 10 - A</span>
          </div>

          <span className="profile-active">Active</span>
        </div>

        <div className="profile-details">

          <div>
            <small>Admission ID</small>
            <strong>STU-2024-001</strong>
          </div>

          <div>
            <small>Roll Number</small>
            <strong>24</strong>
          </div>

          <div>
            <small>Attendance</small>
            <strong>96%</strong>
          </div>

          <div>
            <small>Performance</small>
            <strong>A+</strong>
          </div>

        </div>

        <div className="profile-tabs">
          <span className="active-tab">Overview</span>
          <span>Academic</span>
          <span>Documents</span>
        </div>

      </div>
    );
  }


  /* STUDENT ADMIN */

  if (type === "students-admin") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Student Management</small>
            <h4>All Students</h4>
          </div>

          <FiUsers className="preview-main-icon" />
        </div>

        <div className="search-preview">
          Search students...
          <span>⌕</span>
        </div>

        <div className="preview-table">

          <div className="preview-row">
            <span>Arun Kumar · 10-A</span>
            <b className="status-paid">Active</b>
          </div>

          <div className="preview-row">
            <span>Priya S · 10-B</span>
            <b className="status-paid">Active</b>
          </div>

          <div className="preview-row">
            <span>Rahul M · 9-A</span>
            <b className="status-pending">Pending</b>
          </div>

        </div>

      </div>
    );
  }


  /* STAFF */

  if (type === "staff") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Staff Profile</small>
            <h4>Teacher Information</h4>
          </div>

          <FiUserCheck className="preview-main-icon" />
        </div>

        <div className="staff-profile">

          <div className="staff-avatar">
            <FiUserCheck />
          </div>

          <div>
            <strong>Meena Krishnan</strong>
            <span>Mathematics Teacher</span>
            <small>Department · Mathematics</small>
          </div>

          <span className="profile-active">Active</span>

        </div>

        <div className="staff-info-grid">

          <div>
            <small>Experience</small>
            <strong>8 Years</strong>
          </div>

          <div>
            <small>Classes</small>
            <strong>8 - 10</strong>
          </div>

          <div>
            <small>Attendance</small>
            <strong>98%</strong>
          </div>

        </div>

      </div>
    );
  }


  /* STAFF ADMIN */

  if (type === "staff-admin") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Staff Management</small>
            <h4>Staff Directory</h4>
          </div>

          <FiUsers className="preview-main-icon" />
        </div>

        <div className="preview-table">

          <div className="preview-table-title">
            <span>Staff Member</span>
            <small>Department</small>
          </div>

          <div className="preview-row">
            <span>Meena Krishnan</span>
            <b>Maths</b>
          </div>

          <div className="preview-row">
            <span>David Joseph</span>
            <b>Science</b>
          </div>

          <div className="preview-row">
            <span>Anita Raj</span>
            <b>English</b>
          </div>

        </div>

      </div>
    );
  }


  /* ACADEMICS */

  if (type === "academics") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Academic Management</small>
            <h4>Classes & Subjects</h4>
          </div>

          <FiBookOpen className="preview-main-icon" />
        </div>

        <div className="academic-grid">

          <div>
            <strong>10-A</strong>
            <span>42 Students</span>
          </div>

          <div>
            <strong>10-B</strong>
            <span>39 Students</span>
          </div>

          <div>
            <strong>9-A</strong>
            <span>41 Students</span>
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


  /* ACADEMICS ADMIN */

  if (type === "academics-admin") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Academic Planning</small>
            <h4>Subject Assignments</h4>
          </div>

          <FiBookOpen className="preview-main-icon" />
        </div>

        <div className="assignment-row">
          <div className="assignment-icon">
            <FiBookOpen />
          </div>

          <div>
            <strong>Mathematics</strong>
            <span>Class 10-A · 10-B</span>
          </div>

          <FiCheck className="assignment-check" />
        </div>

        <div className="assignment-row">
          <div className="assignment-icon">
            <FiBookOpen />
          </div>

          <div>
            <strong>Science</strong>
            <span>Class 9-A · 10-A</span>
          </div>

          <FiCheck className="assignment-check" />
        </div>

        <div className="assignment-row">
          <div className="assignment-icon">
            <FiBookOpen />
          </div>

          <div>
            <strong>English</strong>
            <span>Class 8-A · 9-A</span>
          </div>

          <FiCheck className="assignment-check" />
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

          <FiCalendar className="preview-main-icon" />
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

          <FiClock className="preview-main-icon" />
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


  /* EXAMS */

  if (type === "exams") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Examination</small>
            <h4>Marks Entry</h4>
          </div>

          <FiClipboard className="preview-main-icon" />
        </div>

        <div className="marks-table">

          <div className="marks-head">
            <span>Student</span>
            <span>Maths</span>
            <span>Science</span>
            <span>Total</span>
          </div>

          <div className="marks-row">
            <span>Arun</span>
            <b>92</b>
            <b>88</b>
            <strong>180</strong>
          </div>

          <div className="marks-row">
            <span>Priya</span>
            <b>86</b>
            <b>91</b>
            <strong>177</strong>
          </div>

          <div className="marks-row">
            <span>Rahul</span>
            <b>78</b>
            <b>84</b>
            <strong>162</strong>
          </div>

        </div>

      </div>
    );
  }


  /* EXAM PERFORMANCE */

  if (type === "exams-performance") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Result Analysis</small>
            <h4>Student Performance</h4>
          </div>

          <FiBarChart2 className="preview-main-icon" />
        </div>

        <div className="performance-card">
          <div>
            <span>Class Average</span>
            <strong>84.6%</strong>
          </div>

          <div className="performance-bar">
            <span style={{ width: "84%" }}></span>
          </div>
        </div>

        <div className="performance-list">

          <div>
            <span>A Grade</span>
            <b>18 Students</b>
          </div>

          <div>
            <span>B Grade</span>
            <b>16 Students</b>
          </div>

          <div>
            <span>C Grade</span>
            <b>8 Students</b>
          </div>

        </div>

      </div>
    );
  }


  /* COMMUNICATION */

  if (type === "communication") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>School Communication</small>
            <h4>Announcements</h4>
          </div>

          <FiBell className="preview-main-icon" />
        </div>

        <div className="announcement-card">

          <div className="announcement-icon">
            <FiBell />
          </div>

          <div>
            <strong>Parent Meeting</strong>
            <span>Meeting scheduled for Saturday</span>
          </div>

          <small>Today</small>

        </div>

        <div className="announcement-card">

          <div className="announcement-icon">
            <FiMessageSquare />
          </div>

          <div>
            <strong>School Notice</strong>
            <span>Holiday announcement</span>
          </div>

          <small>Yesterday</small>

        </div>

        <div className="announcement-card">

          <div className="announcement-icon">
            <FiBell />
          </div>

          <div>
            <strong>Staff Update</strong>
            <span>New timetable published</span>
          </div>

          <small>2 days</small>

        </div>

      </div>
    );
  }


  /* COMMUNICATION CONNECT */

  if (type === "communication-connect") {
    return (
      <div className="preview-box">

        <div className="preview-top">
          <div>
            <small>Communication</small>
            <h4>Message Center</h4>
          </div>

          <FiMessageSquare className="preview-main-icon" />
        </div>

        <div className="message-item">
          <div className="message-avatar">
            P
          </div>

          <div>
            <strong>Parents Group</strong>
            <span>45 recipients</span>
          </div>

          <FiArrowRight />
        </div>

        <div className="message-item">
          <div className="message-avatar">
            S
          </div>

          <div>
            <strong>School Staff</strong>
            <span>120 recipients</span>
          </div>

          <FiArrowRight />
        </div>

        <div className="message-item">
          <div className="message-avatar">
            A
          </div>

          <div>
            <strong>All Students</strong>
            <span>1,250 recipients</span>
          </div>

          <FiArrowRight />
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