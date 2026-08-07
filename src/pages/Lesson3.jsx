import { useState, useEffect } from "react";
import hearImg from "../assets/images/lesson3/hear.webp";
import listenImg from "../assets/images/lesson3/listen.webp";

const verbs = [
  {
    word: "Hear",
    color: "#60A5FA",
    gradient: "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(59,130,246,0.2))",
    border: "rgba(96,165,250,0.3)",

    usage: "Hear + something",
    example: '"I can hear someone talking."',
    image: hearImg,
  },
  {
    word: "Listen",
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(139,92,246,0.2))",
    border: "rgba(167,139,250,0.3)",

    usage: "Listen + to + something",
    example: '"You listen to your teacher."',
    image: listenImg,
  },
];

export default function Lesson3({ onComplete, onBack, onHome }) {
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
        <span className="lesson-counter">Lesson 3 of 5</span>
      </div>

      <div className="lesson-content">
        <div className="lesson-title-area">
          <span className="lesson-icon-badge" style={{ background: "linear-gradient(135deg, #1E3A5F, #1E40AF)" }}>
            👂
          </span>
          <h1 className="lesson-main-title">
            <span style={{ color: "#60A5FA" }}>Hear</span> vs <span style={{ color: "#A78BFA" }}>Listen</span>
          </h1>
          <p className="lesson-main-subtitle"></p>
        </div>

        <div className="four-cards-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {verbs.map((verb, i) => (
            <div
              key={verb.word}
              className="talk-card"
              style={{
                animationDelay: `${i * 0.12 + 0.2}s`,
                borderColor: verb.border,
              }}
            >
              <div className="lesson-img-frame">
                <img src={verb.image} alt={verb.word} className="lesson-img" />
              </div>
              <h3 className="talk-card-word" style={{ color: verb.color }}>
                {verb.word}
              </h3>
              <p className="talk-card-def">{verb.definition}</p>
              <div className="talk-card-usage" style={{ background: verb.gradient, borderColor: verb.border }}>
                <span style={{ color: verb.color, fontSize: "0.8rem", fontWeight: 600 }}>{verb.usage}</span>
              </div>
              <div className="comp-card-example">
                <span className="example-label">Example</span>
                <p className="example-text">{verb.example}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="tip-box" style={{ borderColor: "rgba(96,165,250,0.3)" }}>
          <div className="tip-icon">💡</div>
          <div className="tip-content">
            <h3>Remember</h3>
            <p>
              <strong>Hear</strong> = Sound comes to you. · <strong>Listen</strong> = You pay attention to the sound
            </p>
          </div>
        </div>

        <div className="lesson-nav">
          <button
            className="lesson-next-btn"
            onClick={() => {
              onComplete(3);
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
