import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Education from './pages/education';
import Contact from './pages/contact';
import Skills from './pages/skills';
import TTT from "./pages/tic-tac-toe";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/tic-tac-toe" element={<TTT />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
