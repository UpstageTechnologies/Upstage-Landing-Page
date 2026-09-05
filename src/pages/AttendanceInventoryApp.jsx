import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AttendanceInventoryApp.css";
import images from "../assets/images.jpeg";
import image2 from "../assets/image2.png";
import video3 from "../assets/video3.mp4";
import { BiLogoPlayStore } from "react-icons/bi";


const slides = [
  {
    type: "image",
    src: image2,
    alt: "Attendance Management",
    duration: 5000,
  },
  {
    type: "image",
    src: images,
    alt: "Inventory Management",
    duration: 5000,
  },
  {
    type: "video",
    src: video3,
  },
];

export default function AttendanceInventoryApp() {
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
  }, [
    currentSlide,
    current.type,
    current.duration,
  ]);

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

  return (
    <main className="attendance-page">

      <section className="attendance-hero">

        <div className="attendance-background">

          {current.type === "image" ? (
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              className="attendance-background-media"
            />
          ) : (
            <video
              ref={videoRef}
              key={current.src}
              src={current.src}
              className="attendance-background-media"
              muted
              autoPlay
              playsInline
              onEnded={handleVideoEnd}
            />
          )}

        </div>

        <div className="attendance-overlay"></div>

        <div className="attendance-hero-container">

          <div className="attendance-hero-content">

            <span className="attendance-eyebrow">
              ATTENDANCE & INVENTORY APP
            </span>

            <h1>
              Smarter Attendance.
              <span>Better Inventory.</span>
            </h1>

            <p>
              Manage attendance, staff records,
              inventory and stock information with
              one simple and powerful application.
            </p>

            <div className="attendance-hero-actions">

            <button
              className="attendance-primary-btn"
              onClick={() =>
                navigate(
                  "/attendance-inventory/features"
                )
              }
            >
              Explore Features
              <span>→</span>
            </button>

            <button
              className="primary-btn"
            >
              Download From <BiLogoPlayStore className="playstore-icon" />
            </button>

            </div>

          </div>

        </div>

        <div className="attendance-slide-indicators">

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