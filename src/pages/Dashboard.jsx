import { useState, useEffect } from "react";

const lessons = [
  {
    id: 1,
    icon: "🏠",
    title: "Home vs House",
    subtitle: "Building or belonging?",
    color: "#4ADE80",
    gradient: "linear-gradient(135deg, #065F46, #064E3B)",
  },
  {
    id: 2,
    icon: "👀",
    title: "Look vs See vs Watch",
    subtitle: "Spot the difference",
    color: "#60A5FA",
    gradient: "linear-gradient(135deg, #1E3A5F, #1E40AF)",
  },
  {
    id: 3,
    icon: "🎧",
    title: "Hear vs Listen",
    subtitle: "Sound or attention?",
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, #1E3A5F, #1E40AF)",
  },
  {
    id: 4,
    icon: "💬",
    title: "Say vs Tell",
    subtitle: "Words or information?",
    color: "#2DD4BF",
    gradient: "linear-gradient(135deg, #134E4A, #115E59)",
  },
  {
    id: 5,
    icon: "✨",
    title: 'Better Words Than "Very"',
    subtitle: "Upgrade your vocab",
    color: "#FBBF24",
    gradient: "linear-gradient(135deg, #78350F, #92400E)",
  },
];

function LessonCard({ lesson, index, onClick, isCompleted }) {
  return (
    <div
      className={`lesson-card ${isCompleted ? "completed" : ""}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        "--card-color": lesson.color,
        "--card-gradient": lesson.gradient,
      }}
      onClick={() => onClick(lesson.id)}
    >
      <div className="card-glow" />
      <div className="card-content">
        <div className="card-left-accent" style={{ background: lesson.color }} />
        <div className="card-body">
          <div className="card-header">
            <div className="card-icon-wrap">
              <span className="card-emoji">{lesson.icon}</span>
            </div>
            <div className="card-text">
              <h3 className="card-title">{lesson.title}</h3>
              <p className="card-subtitle">{lesson.subtitle}</p>
            </div>
          </div>
          <div className="card-arrow" style={{ color: lesson.color }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard({ completedLessons, onLessonSelect }) {
  const [visible, setVisible] = useState(false);
  const progress = completedLessons.length;
  const total = 5;

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`dashboard ${visible ? "visible" : ""}`}>
      <div className="dashboard-header">
        <div className="dashboard-top">
          <div>
            <h2 className="dashboard-title">Choose Your Next Lesson</h2>
          </div>
          <div className="dashboard-badge">
            <span>
              {progress}/{total} Completed
            </span>
          </div>
        </div>
      </div>
      <div className="lessons-grid">
        {lessons.map((lesson, i) => (
          <LessonCard key={lesson.id} lesson={lesson} index={i} onClick={onLessonSelect} isCompleted={completedLessons.includes(lesson.id)} />
        ))}
      </div>
    </div>
  );
}
