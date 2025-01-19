import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Call from './components/Call/Call';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  return (
    
    <Router>
      
      <Hero
      />
      <AboutMe />
      <Education />
      <Call />
      {/* Routes for different components */}
      <Routes>
        
        {/* <Route path="/33" element={<Hero />} /> */}
        <Route path="/about" element={<AboutMe />} />

        <Route path="/education" element={<Education />} />
        <Route path="/call" element={<Call />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        {/* صفحة تفاصيل المشروع تعرض فقط التفاصيل مع مكونات المشروع */}
        <Route path="/ProjectDetail/:id" element={<ProjectDetail />} />
      </Routes>
      <Portfolio />

      <Contact />

      {/* Footer appears on every page */}
      <Footer />
    </Router>
  );
}

export default App;
