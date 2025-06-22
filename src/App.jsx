import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Loader from "./components/Loader";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Resume from "./pages/Resume";
import TTT from "./pages/tic-tac-toe";
import FlappyBall from "./pages/FlappyBall";
import Games from "./pages/Games";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BugFollower from "./components/BugFollower";
import BubbleDrop from "./components/BubbleDrop";
import Lightning from "./components/Lightning";
import VisualToggles from "./components/VisualToggles";
import JokeButton from "./components/JokeButton";

function App() {
  const [isSingle, setIsSingle] = useState(true);
  const [showBug, setShowBug] = useState(true);
  const [showBubbles, setShowBubbles] = useState(true);
  const [showLightning, setShowLightning] = useState(true);
  const [loading, setLoading] = useState(true);

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

  // Loader simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      // once: true,
    });
  }, [location]); // Re-initialize on route change

  if (loading) return <Loader />;

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
      <JokeButton />

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
                  <Resume />
                  <Contact />
                </>
              }
            />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects isSingle={isSingle} />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/games" element={<Games />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </>
          )}
          <Route path="/tic-tac-toe" element={<TTT />} />
          <Route path="/flappy-ball" element={<FlappyBall />} />
        </Routes>
      </div>

      {showBug && <BugFollower />}
      {showBubbles && <BubbleDrop />}
      {showLightning && <Lightning />}
      <Footer />
    </>
  );
}

export default App;
