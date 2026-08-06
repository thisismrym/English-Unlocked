export default function Navigation({ currentLesson, completedLessons, onNavigate }) {
  const lessons = [
    { id: 1, icon: "🏠", label: "Home vs House" },
    { id: 2, icon: "👀", label: "Look vs See vs Watch" },
    { id: 3, icon: "🎧", label: "Hear vs Listen" },
    { id: 4, icon: "💬", label: "Say vs Tell" },
    { id: 5, icon: "✨", label: "Better Words" },
  ];

  return (
    <nav className="bottom-nav">
      <div className="nav-inner">
        {lessons.map((lesson) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const isCurrent = currentLesson === lesson.id;
          return (
            <button
              key={lesson.id}
              className={`nav-item ${isCurrent ? "current" : ""} ${isCompleted ? "completed" : ""}`}
              onClick={() => onNavigate(lesson.id)}
              title={lesson.label}
            >
              <span className="nav-icon">{isCompleted ? "✓" : lesson.icon}</span>
              <span className="nav-label">{lesson.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
