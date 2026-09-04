import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import school1 from "../assets/school1.png";
import school2 from "../assets/school2.jpeg";
import video2 from "../assets/video2.mp4";
import "./SchoolManagementPage.css";

const slides = [
  {
    type: "image",
    src: school1,
    alt: "School Management",
    duration: 5000,
  },
  {
    type: "image",
    src: school2,
    alt: "School Administration",
    duration: 5000,
  },
  {
    type: "video",
    src: video2,
  },
];

export default function SchoolManagementPage() {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  const videoRef = useRef(null);

  const current = slides[currentSlide];

  useEffect(() => {
    if (current.type !== "image") return;

    const timer = setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );
    }, current.duration);

    return () => clearTimeout(timer);
  }, [currentSlide, current.type, current.duration]);

  useEffect(() => {
    if (
      current.type === "video" &&
      videoRef.current
    ) {
      const video = videoRef.current;

      video.currentTime = 0;
      video.muted = true;

      video.play().catch((error) => {
        console.log(
          "Video autoplay failed:",
          error
        );
      });
    }
  }, [currentSlide, current.type]);

  const handleVideoEnd = () => {
    setCurrentSlide(0);
  };

  const handleExplore = () => {
    navigate("/school-management/features");
  };

  return (
    <main className="school-management-page">
      <section className="school-hero">
        <div className="school-background">

          {current.type === "image" ? (
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              className="school-background-media"
            />
          ) : (
            <video
              ref={videoRef}
              key={current.src}
              src={current.src}
              className="school-background-media"
              muted
              autoPlay
              playsInline
              onEnded={handleVideoEnd}
            />
          )}

        </div>

        <div className="school-background-overlay"></div>

        <div className="school-hero-container">

          <div className="school-hero-content">

            {/* Eyebrow */}

            <span className="school-eyebrow">
              SCHOOL MANAGEMENT SYSTEM
            </span>

            {/* Heading */}

            <h1>
              Smarter School
              <br />
              <span>Management.</span>
            </h1>

            {/* Description */}

            <p>
              A complete school management solution
              designed to simplify administration,
              academics, attendance, accounts and
              communication from one powerful platform.
            </p>

            {/* Buttons */}

            <div className="school-hero-actions">

              <button
                className="school-primary-btn"
                onClick={handleExplore}
              >
                Explore Features
                <FiArrowRight />
              </button>

              <button
                className="school-secondary-btn"
              >
                Download From Playstore
              </button>

            </div>

            {/* Points */}

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

        </div>

        <div className="school-slide-indicators">

          {slides.map((_, index) => (
            <span
              key={index}
              className={
                currentSlide === index
                  ? "active"
                  : ""
              }
            />
          ))}

        </div>

      </section>

    </main>
  );
}