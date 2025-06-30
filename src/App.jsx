// App.jsx - Romantic 3D Love Site with Smooth Fill Transition
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LetterPage from "./LetterPage";

const letters = [..."HARLEEN", " ", ..."KAUR"];

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/letter/:letter/:index" element={<LetterPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

function SmoothFillTransition({ trigger, onComplete }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [trigger, onComplete]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 50, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "100px",
        height: "100px",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: "radial-gradient(circle, #ff99cc, #ff3366)",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}

function Home() {
  const [clickedLetter, setClickedLetter] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleClick = (letter, index) => {
    setClickedLetter({ letter, index });
    setTransitioning(true);
  };

  const handleTransitionComplete = () => {
    const { letter, index } = clickedLetter;
    navigate(`/letter/${letter}/${index}`);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: transitioning ? 0.4 : 1 }}
      transition={{ duration: 0.6 }}
      style={{ ...styles.container, position: "relative", overflow: "hidden" }}
    >
      <SmoothFillTransition
        trigger={transitioning}
        onComplete={handleTransitionComplete}
      />
      <FloatingHeartsAndFlowers dense={true} />
      <h1 style={styles.title3D}>
        hyy harleen..my honeybunch sugarplum cuppycakkeee !
      </h1>
      <p style={styles.welcomeMessage}>
        Hey love,<br />
        This little corner of the internet is just for you — a space filled
        with LOVE with every letter of your name and every memory that made us{" "}
        <em>US</em>. As you float through each word,I have expressed myself in
        some beautiful words that I hope you like it and feel the same warmth,
        laughter, and love you’ve given me. This isn't just a website...it's a
        Love Letter, made out across stars, petals, and pixels. here explore
        the letters of your name by tapping and explore the adventure yourself
        loveyaaa!!
      </p>
      <div style={styles.letterRow}>
        {letters.map((letter, idx) => {
          if (letter === " ") {
            return <div key={idx} style={{ width: "30px" }} />;
          }
          return (
            <motion.div
              key={idx}
              whileHover={{ rotateX: 15, rotateY: 15, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleClick(letter, idx)}
              style={styles.letterCard3D}
            >
              {letter}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function FloatingHeartsAndFlowers({ dense = false }) {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random();
      const left = Math.random() * 100;
      const size = dense ? 20 + Math.random() * 40 : 30 + Math.random() * 30;
      const duration = 5 + Math.random() * 3;
      const types = ["❤️", "🌹", "🌻"];
      const type = types[Math.floor(Math.random() * types.length)];
      setElements((prev) => [...prev, { id, left, size, duration, type }]);
      setTimeout(() => {
        setElements((prev) => prev.filter((e) => e.id !== id));
      }, duration * 1000);
    }, dense ? 120 : 400);
    return () => clearInterval(interval);
  }, [dense]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: "100vh", opacity: 1 }}
          animate={{ y: "-10vh", opacity: 0 }}
          transition={{ duration: el.duration, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: `${el.left}%`,
            fontSize: `${el.size}px`,
            zIndex: 0,
            filter: "blur(0.4px)",
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        >
          {el.type}
        </motion.div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      {/* 🎵 Local background song (autoplay & loop) */}
      <audio
        src="/unforgettable.mp3"
        autoPlay
        loop
        controls={false}
        style={{ display: "none" }}
      />
      <AnimatedRoutes />
    </Router>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #fff0f5, #ffe4e1, #f3e5f5)",
    minHeight: "100vh",
    minWidth: "100vw",
    padding: "40px",
    textAlign: "center",
    margin: 0,
    boxSizing: "border-box",
  },
  title3D: {
    fontSize: "3rem",
    marginBottom: "30px",
    color: "#b4005c",
    fontWeight: "bold",
    textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
    transform: "perspective(500px) rotateX(5deg)",
  },
  welcomeMessage: {
    fontSize: "1.1rem",
    maxWidth: "700px",
    margin: "20px auto 40px",
    color: "#80002a",
    lineHeight: "1.8",
    textAlign: "center",
    padding: "0 10px",
    fontFamily: "'Segoe UI', cursive",
    background: "rgba(255, 255, 255, 0.4)",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    backdropFilter: "blur(4px)",
  },
  letterRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    zIndex: 1,
    position: "relative",
  },
  letterCard3D: {
    fontSize: "1.6rem",
    padding: "14px 22px",
    border: "2px solid #b4005c",
    borderRadius: "12px",
    background: "white",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    transformStyle: "preserve-3d",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    color: "#b4005c",
  },
};
