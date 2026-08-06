import { useState, useCallback } from "react";
import Particles from "./components/Particles";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Lesson5 from "./pages/Lesson5";
import Completion from "./pages/Completion";
import "./App.css";

const lessonComponents = { 1: Lesson1, 2: Lesson2, 3: Lesson3, 4: Lesson4, 5: Lesson5 };

function App() {
  const [page, setPage] = useState("landing");
  const [currentLesson, setCurrentLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [pageKey, setPageKey] = useState(0);

  const goHome = useCallback(() => {
    setPage("dashboard");
    setCurrentLesson(null);
    setPageKey((k) => k + 1);
  }, []);

  const startLearning = useCallback(() => {
    setPage("dashboard");
    setPageKey((k) => k + 1);
  }, []);

  const openLesson = useCallback((id) => {
    setCurrentLesson(id);
    setPage("lesson");
    setPageKey((k) => k + 1);
  }, []);

  const completeLesson = useCallback((id) => {
    setCompletedLessons((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      if (next.length === 5) {
        setTimeout(() => setPage("completion"), 300);
      }
      return next;
    });
  }, []);

  const restart = useCallback(() => {
    setCompletedLessons([]);
    setPage("landing");
    setCurrentLesson(null);
    setPageKey((k) => k + 1);
  }, []);

  const LessonComponent = currentLesson ? lessonComponents[currentLesson] : null;

  return (
    <div className="app">
      <Particles />
      <div className="app-content" key={pageKey}>
        {page === "landing" && <Landing onStart={startLearning} />}
        {page === "dashboard" && <Dashboard completedLessons={completedLessons} onLessonSelect={openLesson} />}
        {page === "lesson" && LessonComponent && <LessonComponent onComplete={completeLesson} onBack={goHome} />}
        {page === "completion" && <Completion onRestart={restart} />}
      </div>
      {(page === "dashboard" || page === "lesson") && <Navigation currentLesson={currentLesson} completedLessons={completedLessons} onNavigate={openLesson} />}
    </div>
  );
}

export default App;
