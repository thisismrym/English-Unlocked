import { useState, useEffect } from "react";
import sayImg from "../assets/images/lesson4/say.webp";
import tellImg from "../assets/images/lesson4/tell.webp";

export default function Lesson4({ onComplete, onBack, onHome }) {
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
        <span className="lesson-counter">Lesson 4 of 5</span>
      </div>

      <div className="lesson-content">
        <div className="lesson-title-area">
          <span className="lesson-icon-badge" style={{ background: "linear-gradient(135deg, #134E4A, #115E59)" }}>
            💬
          </span>
          <h1 className="lesson-main-title">
            <span style={{ color: "#60A5FA" }}>Say</span> vs <span style={{ color: "#A78BFA" }}>Tell</span>
          </h1>
          <p className="lesson-main-subtitle"></p>
        </div>

        <div className="comparison-cards">
          <div className="comparison-card" style={{ animationDelay: "0.2s" }}>
            <div className="comp-card-visual" style={{ background: "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(59,130,246,0.2))" }}>
              <div className="lesson-img-frame">
                <img src={sayImg} alt="Say" className="lesson-img" />
              </div>
            </div>
            <h2 className="comp-card-title" style={{ color: "#60A5FA" }}>
              Say
            </h2>

            <div className="comp-card-example">
              <span className="example-label">Example</span>
              <p className="example-text">
                "She <strong>says</strong> hello."
              </p>
            </div>
          </div>

          <div className="vs-divider">
            <span>VS</span>
          </div>

          <div className="comparison-card accent" style={{ animationDelay: "0.4s" }}>
            <div className="comp-card-visual" style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(139,92,246,0.15))" }}>
              <div className="lesson-img-frame">
                <img src={tellImg} alt="Tell" className="lesson-img" />
              </div>
            </div>
            <h2 className="comp-card-title" style={{ color: "#A78BFA" }}>
              Tell
            </h2>
            <div className="comp-card-example accent">
              <span className="example-label">Example</span>
              <p className="example-text">
                "She <strong>tells</strong> me a story."
              </p>
            </div>
          </div>
        </div>

        <div className="tip-box">
          <div className="tip-icon">💡</div>
          <div className="tip-content">
            <h3>Remember</h3>
            <p>
              <strong>Say</strong> = You say something &nbsp; &nbsp;&nbsp;&nbsp; <strong>Tell</strong> = You tell someone something.
            </p>
          </div>
        </div>

        <div className="lesson-nav">
          <button
            className="lesson-next-btn"
            onClick={() => {
              onComplete(4);
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
