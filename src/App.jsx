import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';
import TopOfPage from "./components/TopOfPage";


function App() {
  return (
    <div className="overflow-x-hidden text-neutral-900"
    style={{
              backgroundImage:
                "linear-gradient(129deg,rgba(220, 214, 252, 1) 0%, rgb(99, 172, 255) 100%)",
                
            }}
    >
      <BrowserRouter>
        <Navbar />
        {/** Relativly unused right now */}
        <TopOfPage />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 * useful things from Pranava
 * npm install
 * react-router-dom
 * react-icons
 * framer-motion
 * tailwindcss
 * @tailwindcss/vite
 * 
 * 
 * 
 * vercel to publish
 * https://www.creative-tim.com
 */