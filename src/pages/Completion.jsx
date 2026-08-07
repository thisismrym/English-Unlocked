import { useState, useEffect, useRef } from "react";

function Confetti() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#4ADE80", "#FBBF24", "#60A5FA", "#F472B6", "#A78BFA", "#F97316", "#EF4444"];
    const pieces = [];

    for (let i = 0; i < 100; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
      });
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let allDone = true;

      pieces.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;
        if (p.y < canvas.height + 20) allDone = false;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (!allDone) animId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 100,
      }}
    />
  );
}

function TrophySVG() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="trophy-svg">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <radialGradient id="trophyGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="80" fill="url(#trophyGlow)" />

      {/* Trophy cup */}
      <path d="M65,55 L65,95 Q65,120 100,125 Q135,120 135,95 L135,55 Z" fill="url(#goldGrad)" stroke="#D97706" strokeWidth="2" />

      {/* Left handle */}
      <path d="M65,65 Q40,65 40,85 Q40,105 65,100" stroke="url(#goldGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* Right handle */}
      <path d="M135,65 Q160,65 160,85 Q160,105 135,100" stroke="url(#goldGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* Trophy base */}
      <rect x="85" y="125" width="30" height="15" rx="2" fill="url(#goldGrad)" stroke="#D97706" strokeWidth="1.5" />
      <rect x="70" y="140" width="60" height="12" rx="4" fill="url(#goldGrad)" stroke="#D97706" strokeWidth="1.5" />

      {/* Star on trophy */}
      <polygon points="100,70 103,80 113,80 105,86 108,96 100,90 92,96 95,86 87,80 97,80" fill="url(#goldGrad2)" />

      {/* Sparkles */}
      <circle cx="45" cy="50" r="3" fill="#FBBF24" opacity="0.7" className="sparkle" />
      <circle cx="155" cy="45" r="2.5" fill="#FBBF24" opacity="0.6" className="sparkle" style={{ animationDelay: "0.5s" }} />
      <circle cx="35" cy="100" r="2" fill="#FBBF24" opacity="0.5" className="sparkle" style={{ animationDelay: "1s" }} />
      <circle cx="165" cy="105" r="2.5" fill="#FBBF24" opacity="0.6" className="sparkle" style={{ animationDelay: "1.5s" }} />
      <circle cx="55" cy="145" r="2" fill="#FBBF24" opacity="0.4" className="sparkle" style={{ animationDelay: "0.7s" }} />
      <circle cx="145" cy="150" r="2" fill="#FBBF24" opacity="0.5" className="sparkle" style={{ animationDelay: "1.2s" }} />
    </svg>
  );
}

export default function Completion({ onRestart, onHome }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`completion-page ${visible ? "visible" : ""}`}>
      <Confetti />
      <div className="completion-content">
        <div className="trophy-container">
          <TrophySVG />
        </div>
        <h1 className="completion-title">🎉 Congratulations!</h1>

        <div className="completion-badges">
          <div className="completion-badge" style={{ animationDelay: "0.3s" }}>
            🏠
          </div>
          <div className="completion-badge" style={{ animationDelay: "0.4s" }}>
            👀
          </div>
          <div className="completion-badge" style={{ animationDelay: "0.5s" }}>
            🎧
          </div>
          <div className="completion-badge" style={{ animationDelay: "0.6s" }}>
            💬
          </div>
          <div className="completion-badge" style={{ animationDelay: "0.7s" }}>
            ✨
          </div>
        </div>
        <div className="completion-actions" style={{ marginTop: "2rem" }}>
          <button className="cta-button" onClick={onRestart}>
            <span>Learn Again</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 10a7 7 0 0113-3.5M17 10a7 7 0 01-13 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 3v4h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 17v-4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="back-btn home-btn" onClick={onHome}>
            🧭 Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}
