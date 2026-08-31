import {
  FiUsers,
  FiCode,
  FiUserCheck,
  FiSettings,
  FiCloud,
  FiHeadphones,
  FiFileText,
  FiLayers,
  FiClipboard,
  FiZap,
  FiDatabase,
  FiShield,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiDollarSign,
} from "react-icons/fi";

import "./Consultancy.css";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

const resourceExpertise = [
  {
    icon: FiCode,
    title: "ABAP",
    subtitle: "Developers",
  },
  {
    icon: FiUserCheck,
    title: "SAP Technical",
    subtitle: "Consultants",
  },
  {
    icon: FiSettings,
    title: "SAP Integration",
    subtitle: "Specialists",
  },
  {
    icon: FiClipboard,
    title: "SAP Functional",
    subtitle: "Consultants",
  },
  {
    icon: FiCloud,
    title: "SAP S/4HANA",
    subtitle: "Specialists",
  },
  {
    icon: FiHeadphones,
    title: "SAP Support",
    subtitle: "Engineers",
  },
];

const abapServices = [
  "Custom ABAP Development",
  "Reports & ALV",
  "Smart Forms / Adobe Forms",
  "BAdIs & Enhancements",
  "User Exits",
  "RFC / BAPI Development",
  "IDoc & Interface Development",
  "OData Services",
  "CDS Views & AMDP",
  "Performance Optimization",
  "SAP Fiori / UI5 Integration",
  "S/4HANA Custom Development",
  "Legacy Code Modernization",
  "S/4HANA Conversions",
  "Testing & Support",
];

const engagementModels = [
  {
    icon: FiUserCheck,
    title: "Dedicated Resources",
    description:
      "Extend your team with dedicated SAP professionals for long-term development needs.",
  },
  {
    icon: FiUsers,
    title: "Staff Augmentation",
    description:
      "Add specialized SAP expertise to your existing team on a flexible basis.",
  },
  {
    icon: FiLayers,
    title: "Project Teams",
    description:
      "End-to-end SAP project delivery with a team of experienced SAP professionals.",
  },
  {
    icon: FiSettings,
    title: "Consulting",
    description:
      "Leverage our consulting expertise for architecture, optimization and technical guidance.",
  },
];

const whyChooseUs = [
  {
    icon: FiUsers,
    title: "Experienced SAP Professionals",
    description:
      "Skilled experts with deep domain and technology experience.",
  },
  {
    icon: FiClock,
    title: "Faster Onboarding",
    description:
      "Quick resource deployment to meet your project timelines.",
  },
  {
    icon: FiTrendingUp,
    title: "Flexible Engagements",
    description:
      "Scale your team up or down based on your business needs.",
  },
  {
    icon: FiDollarSign,
    title: "Cost Efficient",
    description:
      "Access top SAP talent without the overhead of permanent hiring.",
  },
  {
    icon: FiShield,
    title: "Quality & Reliability",
    description:
      "We are committed to delivering quality, security and long-term value.",
  },
];

export default function Consultancy() {
  const [showAbapServices,setShowAbapServices] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="sap-page">
      <section className="sap-hero">
        <div className="sap-hero-content">
          <span className="sap-badge">SAP CONSULTING</span>

          <h1>
            SAP Consulting Services
          </h1>

          <p>
            Empower your business with experienced SAP professionals,
            technical expertise and flexible engagement models designed
            around your business needs.
          </p>

          <button className="sap-primary-btn"
            onClick={()=>navigate("/contactpage")}
          >
            Talk to Our SAP Experts
            <span>→</span>
          </button>
        </div>
      </section>

      <section className="sap-section help-section">

        <div className="section-heading">
          <h2>How We Can Help</h2>
          <div className="heading-line"></div>
        </div>

        <div className="help-grid">

          <div className="help-card">
            <div className="help-icon">
              <FiUsers />
            </div>

            <div>
              <h3>SAP Consulting</h3>

              <p>
                Architecture, implementation support, system integration,
                migrations and technical consulting to drive your SAP success.
              </p>

              <a href="#expertise">
                Explore Consulting <span>→</span>
              </a>
            </div>
          </div>


          <div className="help-card">
            <div className="help-icon">
              <FiCode />
            </div>

            <div>
              <h3>ABAP Development</h3>

              <p>
                Custom ABAP development, enhancements, interfaces,
                reports, forms and performance optimization across
                ECC and S/4HANA environments.
              </p>

              <a href="#abap">
                Explore ABAP Services <span>→</span>
              </a>
            </div>
          </div>


          <div className="help-card">
            <div className="help-icon">
              <FiUserCheck />
            </div>

            <div>
              <h3>SAP Resources</h3>

              <p>
                Access highly skilled SAP professionals through dedicated,
                project-based and staff-augmentation models.
              </p>

              <a href="#engagement">
                Explore SAP Resources <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <section
        className="resource-section"
        id="expertise"
      >

        <div className="section-heading">
          <h2>Our SAP Resource Expertise</h2>
          <p>
            We help you quickly access experienced professionals across:
          </p>
        </div>

        <div className="expertise-grid">

          {resourceExpertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="expertise-item" key={index}>
                <div className="expertise-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>
                <span>{item.subtitle}</span>
              </div>
            );
          })}

        </div>
      </section>

      <section
        className={`sap-section abap-section ${
        showAbapServices ? "abap-active" : ""
      }`}
      id="abap"
      >
      <div className="section-heading">
        <h2>ABAP Development Services</h2>
      <div className="heading-line"></div>
      </div>

      <div className="abap-layout">
      <div className="abap-content">

        <p>
          End-to-end ABAP development capabilities to build,
          extend and modernize your SAP environment.
        </p>

      <button
        className="explore-btn"
        onClick={() => setShowAbapServices(!showAbapServices)}
      >
        <span>
        {showAbapServices? "HIDE": "Explore ABAP Services"}
        </span>
      </button>

    </div>

    {/* ABAP SERVICES */}
    <div className="abap-grid">

      {abapServices.map((service, index) => (
        <div className="abap-card" key={index}>

          <div className="abap-card-icon">
            <FiFileText />
          </div>

          <span>{service}</span>

        </div>
      ))}

       </div>

      </div>
      </section>

      <section
        className="engagement-section"
        id="engagement"
      >

        <div className="section-heading dark-heading">
          <h2>Engagement Models</h2>
          <div className="heading-line"></div>
        </div>

        <div className="engagement-grid">

          {engagementModels.map((model, index) => {
            const Icon = model.icon;

            return (
              <div
                className="engagement-card"
                key={index}
              >

                <div className="engagement-icon">
                  <Icon />
                </div>

                <h3>{model.title}</h3>

                <p>
                  {model.description}
                </p>

              </div>
            );
          })}

        </div>
      </section>

      <section className="sap-section why-section">

        <div className="section-heading">
          <h2>Why Upstage India?</h2>
          <div className="heading-line"></div>
        </div>

        <div className="why-grid">

          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="why-card" key={index}>

                <div className="why-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>
      </section>

      <section className="sap-cta">

        <div>
          <h2>Ready to strengthen your SAP team?</h2>

          <p>
            Connect with our SAP experts and find the right
            expertise for your next project.
          </p>
        </div>

        <button className="sap-primary-btn" onClick={()=> navigate("/contact")}>
          Contact Us
          <span>→</span>
        </button>

      </section>

    </div>
  );
}