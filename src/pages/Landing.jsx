import { useState, useEffect } from "react";

function FloatingElement({ children, delay = 0, x = 0, y = 0, size = "md" }) {
  return (
    <div
      className={`floating-el floating-${size}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-illustration">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
        {/* Background glow */}
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4ADE80" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
          <linearGradient id="bubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
          <linearGradient id="mugGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <circle cx="250" cy="250" r="200" fill="url(#glow1)" />

        {/* Open book */}
        <g className="hero-float" style={{ animationDelay: "0s" }}>
          <rect x="140" y="180" width="100" height="130" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
          <rect x="148" y="188" width="84" height="114" rx="4" fill="#0F172A" />
          <line x1="190" y1="200" x2="224" y2="200" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
          <line x1="190" y1="212" x2="218" y2="212" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <line x1="190" y1="224" x2="222" y2="224" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <line x1="190" y1="236" x2="214" y2="236" stroke="#334155" strokeWidth="2" strokeLinecap="round" />

          <rect x="256" y="180" width="100" height="130" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
          <rect x="264" y="188" width="84" height="114" rx="4" fill="#0F172A" />
          <line x1="276" y1="200" x2="340" y2="200" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <line x1="276" y1="212" x2="330" y2="212" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <line x1="276" y1="224" x2="336" y2="224" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <line x1="276" y1="236" x2="326" y2="236" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Speech bubbles */}
        <g className="hero-float" style={{ animationDelay: "1s" }}>
          <rect x="80" y="100" width="120" height="70" rx="20" fill="url(#bubbleGrad)" opacity="0.9" />
          <polygon points="140,170 150,185 160,170" fill="url(#bubbleGrad)" opacity="0.9" />
          <text x="108" y="130" fill="white" fontSize="28" fontWeight="bold">
            Aa
          </text>
          <text x="108" y="155" fill="white" fontSize="12" opacity="0.8">
            Hello!
          </text>
        </g>

        {/* Notebook */}
        <g className="hero-float" style={{ animationDelay: "2s" }}>
          <rect x="310" y="100" width="110" height="140" rx="10" fill="#1E293B" stroke="#4ADE80" strokeWidth="2" />
          <line x1="340" y1="100" x2="340" y2="240" stroke="#334155" strokeWidth="1.5" />
          <circle cx="340" cy="120" r="3" fill="#4ADE80" opacity="0.6" />
          <circle cx="340" cy="145" r="3" fill="#4ADE80" opacity="0.6" />
          <circle cx="340" cy="170" r="3" fill="#4ADE80" opacity="0.6" />
          <line x1="355" y1="130" x2="400" y2="130" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <line x1="355" y1="150" x2="390" y2="150" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <line x1="355" y1="170" x2="395" y2="170" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Coffee mug */}
        <g className="hero-float" style={{ animationDelay: "1.5s" }}>
          <rect x="100" y="320" width="80" height="90" rx="12" fill="url(#mugGrad)" />
          <path d="M180,345 Q210,345 210,370 Q210,395 180,395" stroke="url(#mugGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
          {/* Steam */}
          <path d="M125,315 Q130,300 125,285" stroke="#9CA3AF" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
          <path d="M145,315 Q150,295 145,280" stroke="#9CA3AF" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round" />
          <path d="M160,315 Q165,300 160,285" stroke="#9CA3AF" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" />
        </g>

        {/* ABC letters floating */}
        <g className="hero-float" style={{ animationDelay: "0.5s" }}>
          <text x="60" y="260" fill="#4ADE80" fontSize="36" fontWeight="bold" opacity="0.7">
            A
          </text>
          <text x="400" y="280" fill="#60A5FA" fontSize="28" fontWeight="bold" opacity="0.6">
            B
          </text>
          <text x="380" y="350" fill="#F59E0B" fontSize="32" fontWeight="bold" opacity="0.5">
            C
          </text>
        </g>

        {/* Stars / decorative */}
        <g className="hero-float" style={{ animationDelay: "3s" }}>
          <polygon points="250,80 253,90 263,90 255,96 258,106 250,100 242,106 245,96 237,90 247,90" fill="#4ADE80" opacity="0.6" />
          <circle cx="420" cy="200" r="6" fill="#60A5FA" opacity="0.4" />
          <circle cx="70" cy="380" r="4" fill="#F59E0B" opacity="0.5" />
        </g>

        {/* Lightbulb */}
        <g className="hero-float" style={{ animationDelay: "2.5s" }}>
          <circle cx="250" cy="350" r="30" fill="#FBBF24" opacity="0.15" />
          <path d="M240,335 Q240,315 250,315 Q260,315 260,335" stroke="#FBBF24" strokeWidth="3" fill="none" opacity="0.7" />
          <line x1="245" y1="340" x2="245" y2="345" stroke="#FBBF24" strokeWidth="2" opacity="0.5" />
          <line x1="250" y1="340" x2="250" y2="348" stroke="#FBBF24" strokeWidth="2" opacity="0.5" />
          <line x1="255" y1="340" x2="255" y2="345" stroke="#FBBF24" strokeWidth="2" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Landing({ onStart }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`landing ${visible ? "visible" : ""}`}>
      <div className="landing-gradient" />
      <div className="landing-content">
        <div className="landing-left">
          <div className="badge-row">
            <span className="badge">🎓 Premium Learning</span>
          </div>
          <h1 className="landing-title">
            English
            <br />
            <span className="title-accent">Unlocked</span>
          </h1>
          <p className="landing-subtitle">This lesson teaches five English differences that many learners confuse.</p>
          <p className="landing-desc">A 5-minute lesson to make your English sound more natural</p>
          <button className="cta-button" onClick={onStart}>
            <span>Start Learning</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="landing-stats">
            <div className="stat">
              <span className="stat-num">5</span>
              <span className="stat-label">Lessons</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">5min</span>
              <span className="stat-label">Duration</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Free</span>
            </div>
          </div>
        </div>
        <div className="landing-right">
          <HeroIllustration />
        </div>
      </div>
    </div>
  );
}
