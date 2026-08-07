import { useState, useEffect } from "react";

const words = [
  { very: "Very Hungry", better: "Starving", emoji: "🍽️", color: "#F97316" },
  { very: "Very Big", better: "Huge", emoji: "🏔️", color: "#60A5FA" },
  { very: "Very Happy", better: "Thrilled", emoji: "🎉", color: "#FBBF24" },
  { very: "Very Tired", better: "Exhausted", emoji: "😴", color: "#A78BFA" },
  { very: "Very Small", better: "Tiny", emoji: "🪶", color: "#4ADE80" },
];

export default function Lesson5({ onComplete, onBack, onHome }) {
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
             Main Menu
          </button>
        </div>
        <div className="lesson-progress-bar">
          <div className="lesson-progress-fill" style={{ width: "100%" }} />
        </div>
        <span className="lesson-counter">Lesson 5 of 5</span>
      </div>

      <div className="lesson-content">
        <div className="lesson-title-area">
          <span className="lesson-icon-badge" style={{ background: "linear-gradient(135deg, #78350F, #92400E)" }}>
            ✨
          </span>
          <h1 className="lesson-main-title">
            Better Words Than <span style={{ color: "#FBBF24" }}>"Very"</span>
          </h1>
          <p className="lesson-main-subtitle"></p>
        </div>

        <div className="upgrade-list">
          {words.map((w, i) => (
            <div key={w.very} className="upgrade-card" style={{ animationDelay: `${i * 0.1 + 0.2}s`, "--upgrade-color": w.color }}>
              <div className="upgrade-before">
                <span className="upgrade-emoji">{w.emoji}</span>
                <span className="upgrade-word old">{w.very}</span>
              </div>
              <div className="upgrade-arrow">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 16h16M20 10l6 6-6 6" stroke={w.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="upgrade-after">
                <span className="upgrade-word new" style={{ color: w.color }}>
                  {w.better}
                </span>
                <span className="upgrade-badge" style={{ background: `${w.color}20`, color: w.color }}>
                  ✨ Pro
                </span>
              </div>
            </div>
          ))}
        </div>

       

        <div className="lesson-nav">
          <button
            className="lesson-next-btn"
            onClick={() => {
              onComplete(5);
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
