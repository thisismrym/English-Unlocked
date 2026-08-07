import { useState, useEffect } from "react";
import lookImg from "../assets/images/lesson2/look.webp";
import seeImg from "../assets/images/lesson2/see.webp";
import watchImg from "../assets/images/lesson2/watch.webp";

const verbs = [
  {
    word: "Look",
    icon: "🔍",
    color: "#60A5FA",
    gradient: "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(59,130,246,0.2))",
    border: "rgba(96,165,250,0.3)",

    usage: "Look + at",
    example: 'she Looks at that beautiful sunset!"',
    image: lookImg,
  },
  {
    word: "See",
    icon: "👁️",
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(139,92,246,0.2))",
    border: "rgba(167,139,250,0.3)",

    usage: "Something happens naturally",
    example: '"I can see the mountains from here."',
    image: seeImg,
  },
  {
    word: "Watch",
    icon: "🎬",
    color: "#F472B6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.2), rgba(236,72,153,0.2))",
    border: "rgba(244,114,182,0.3)",

    usage: "Watch + direct object",
    example: '"We watch a movie.."',
    image: watchImg,
  },
];

export default function Lesson2({ onComplete, onBack, onHome }) {
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
        <span className="lesson-counter">Lesson 2 of 5</span>
      </div>

      <div className="lesson-content">
        <div className="lesson-title-area">
          <span className="lesson-icon-badge" style={{ background: "linear-gradient(135deg, #1E3A5F, #1E40AF)" }}>
            👀
          </span>
          <h1 className="lesson-main-title">
            <span style={{ color: "#60A5FA" }}>Look</span> vs <span style={{ color: "#A78BFA" }}>See</span> vs <span style={{ color: "#F472B6" }}>Watch</span>
          </h1>
          <p className="lesson-main-subtitle"></p>
        </div>

        <div className="three-cards-grid">
          {verbs.map((verb, i) => (
            <div
              key={verb.word}
              className="verb-card"
              style={{
                animationDelay: `${i * 0.15 + 0.2}s`,
                borderColor: verb.border,
              }}
            >
              <div className="verb-card-visual" style={{ background: verb.gradient }}>
                <div className="lesson-img-frame">
                  <img src={verb.image} alt={verb.word} className="lesson-img" />
                </div>
              </div>
              <h2 className="verb-card-title" style={{ color: verb.color }}>
                {verb.word}
              </h2>
              <p className="verb-card-def">{verb.definition}</p>
              <div className="verb-card-usage" style={{ background: verb.gradient, borderColor: verb.border }}>
                <span style={{ color: verb.color }}>{verb.usage}</span>
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
            <h3>Quick Rule</h3>
            <p>
              <strong>Look</strong> = You choose to use your eyes. <strong>See</strong> = it happens naturally · <strong>Watch</strong> = You look at something for a period of
              time.
            </p>
          </div>
        </div>

        <div className="lesson-nav">
          <button
            className="lesson-next-btn"
            onClick={() => {
              onComplete(2);
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
