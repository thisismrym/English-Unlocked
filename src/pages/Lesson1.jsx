import { useState, useEffect } from "react";
import houseImg from "../assets/images/lesson1/house.jpg";
import homeImg from "../assets/images/lesson1/home.jpg";

export default function Lesson1({ onComplete, onBack, onHome }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`lesson-page ${visible ? "visible" : ""}`}>
      <div className="lesson-header">
        <div className="lesson-header-actions">
          <button className="back-btn" onClick={onBack}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10H5M10 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
          <button className="back-btn home-btn" onClick={onHome}>
            🧭 Main Menu
          </button>
        </div>
        <div className="lesson-progress-bar">
          <div className="lesson-progress-fill" style={{ width: "100%" }} />
        </div>
        <span className="lesson-counter">Lesson 1 of 5</span>
      </div>

      <div className="lesson-content">
        <div className="lesson-title-area">
          <span className="lesson-icon-badge" style={{ background: "linear-gradient(135deg,#065F46,#064E3B)" }}>
            🏠
          </span>
          <h1 className="lesson-main-title">
            <span style={{ color: "#9CA3AF" }}>House</span> vs <span style={{ color: "var(--accent)" }}>Home</span>
          </h1>
          <p className="lesson-main-subtitle"></p>
        </div>

        <div className="comparison-cards">
          <div className="comparison-card" style={{ animationDelay: "0.2s" }}>
            <div className="comp-card-visual" style={{ background: "linear-gradient(135deg, rgba(107,114,128,0.2), rgba(75,85,99,0.2))" }}>
              <div className="lesson-img-frame">
                <img src={houseImg} alt="House" className="lesson-img" />
              </div>
            </div>
            <h2 className="comp-card-title">House</h2>

            <div className="comp-card-example">
              <span className="example-label">Example</span>
              <p className="example-text">
                "This is my <strong>house</strong>."
              </p>
            </div>
          </div>

          <div className="vs-divider">
            <span>VS</span>
          </div>

          <div className="comparison-card accent" style={{ animationDelay: "0.4s" }}>
            <div className="comp-card-visual" style={{ background: "linear-gradient(135deg, rgba(74,222,128,0.15), rgba(34,197,94,0.15))" }}>
              <div className="lesson-img-frame">
                <img src={homeImg} alt="Home" className="lesson-img" />
              </div>
            </div>
            <h2 className="comp-card-title" style={{ color: "var(--accent)" }}>
              Home
            </h2>

            <div className="comp-card-example accent">
              <span className="example-label">Example</span>
              <p className="example-text">
                "When I am with my family, I feel at <strong>home</strong>."
              </p>
            </div>
          </div>
        </div>

        <div className="tip-box">
          <div className="tip-icon">💡</div>
          <div className="tip-content">
            <h3>Remember</h3>
            <p>
              <strong>House</strong> = the physical place. &nbsp;·&nbsp; <strong>Home</strong> = the feeling inside the building.
            </p>
          </div>
        </div>

        <div className="lesson-nav">
          <button
            className="lesson-next-btn"
            onClick={() => {
              onComplete(1);
              onBack();
            }}
          >
            Complete & Continue
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
