import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Education from "./pages/education";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import TTT from "./pages/tic-tac-toe";
import FlappyBall from "./pages/FlappyBall";
import Games from "./pages/Games";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BugFollower from "./components/BugFollower";
import BubbleDrop from "./components/BubbleDrop";
import Lightning from "./components/Lightning"; // ✅ already imported
import VisualToggles from "./components/VisualToggles"; // ✅ New import

function App() {
  const [isSingle, setIsSingle] = useState(true);
  const [showBug, setShowBug] = useState(true);
  const [showBubbles, setShowBubbles] = useState(true);
  const [showLightning, setShowLightning] = useState(true); // ✅ NEW
  const location = useLocation();
  const navigate = useNavigate();

  const handleModeSwitch = () => {
    const nextMode = !isSingle;
    setIsSingle(nextMode);
    if (nextMode) {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar isSingle={isSingle} />
      <VisualToggles
        isSingle={isSingle}
        setIsSingle={setIsSingle}
        showBug={showBug}
        setShowBug={setShowBug}
        showBubbles={showBubbles}
        setShowBubbles={setShowBubbles}
        showLightning={showLightning}
        setShowLightning={setShowLightning}
        handleModeSwitch={handleModeSwitch}
      />
      {/* Routes */}
      <div>
        <Routes>
          {isSingle ? (
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Projects isSingle={isSingle} />
                  <Education />
                  <Skills />
                  <Games />
                  <Contact />
                </>
              }
            />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/projects"
                element={<Projects isSingle={isSingle} />}
              />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/games" element={<Games />} />
              <Route path="/contact" element={<Contact />} />
            </>
          )}
          <Route path="/tic-tac-toe" element={<TTT />} />
          <Route path="/flappy-ball" element={<FlappyBall />} />
        </Routes>
      </div>
      {/* Visuals */}
      {showBug && <BugFollower />}
      {showBubbles && <BubbleDrop />}
      {showLightning && <Lightning />} {/* ✅ Lightning added */}
      <Footer />
    </>
  );
}

export default App;
