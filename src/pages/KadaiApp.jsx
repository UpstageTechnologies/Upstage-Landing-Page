import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./KadaiApp.css";
import kadai from "../assets/kadai.jpeg";
import kadai2 from "../assets/kadai2.jpeg";
import video from "../assets/video.mp4";

const slides = [
  {
    type: "image",
    src: kadai,
    alt: "Kadai App",
    duration: 5000,
  },
  {
    type: "image",
    src: kadai2,
    alt: "Kadai App Products",
    duration: 5000,
  },
  {
    type: "video",
    src: video,
  },
];

export default function KadaiApp() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const current = slides[currentSlide];

  // Image slides
  useEffect(() => {
    if (current.type !== "image") return;

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, current.duration);

    return () => clearTimeout(timer);
  }, [currentSlide, current.type, current.duration]);

  // Start video from beginning
  useEffect(() => {
    if (current.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;

      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide, current.type]);

  // Video finished → first image
  const handleVideoEnd = () => {
    setCurrentSlide(0);
  };

  return (
    <main className="kadai-page">
      <section className="kadai-hero">

        {/* BACKGROUND MEDIA */}
        <div className="kadai-background">
          {current.type === "image" ? (
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              className="kadai-background-media"
            />
          ) : (
            <video
              ref={videoRef}
              key={current.src}
              src={current.src}
              className="kadai-background-media"
              muted
              autoPlay
              playsInline
              onEnded={handleVideoEnd}
            />
          )}
        </div>

        {/* DARK / LIGHT OVERLAY */}
        <div className="kadai-overlay"></div>

        {/* CONTENT ON TOP */}
        <div className="kadai-hero-container">
          <div className="kadai-hero-content">

            <span className="kadai-eyebrow">
              KADAI APP
            </span>

            <h1>
              Everything Your
              <span>Shop Needs.</span>
            </h1>

            <p>
              Manage your products, inventory, orders and
              customers with a simple and powerful shop
              management experience.
            </p>

            <div className="kadai-hero-actions">

            <button
              className="kadai-primary-btn"
              onClick={() => navigate("/kadai/features")}
            >
              Explore Features
              <span>→</span>
            </button>

            <button
              className="kadai-primary-btn"
            >
              Download From Playstore
            </button>

            </div>

          </div>
        </div>

        {/* SLIDE INDICATORS */}
        <div className="kadai-slide-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={
                currentSlide === index ? "active" : ""
              }
            />
          ))}
        </div>

      </section>
    </main>
  );
}