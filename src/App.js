import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Service from './pages/service';
import Errorpage from './pages/errorpage';
import Contact from './pages/contact';
import Footer from './pages/components/footer';
import Navbar from './pages/components/navbar';
import About from './pages/about';
import Coachbus from './pages/coachbus';
import MediumCoach from './pages/mediumcoach';
import MiniCoach from './pages/MiniCoach';
import TransitSprinter from './pages/TransitSprinter';
import Schollbus from './pages/schollbus';
import Hummerlimousinecar from './pages/hummerlimousinecar';
import Form from './pages/form';

// CSS
import './css/style.css';
import './css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css/animate.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "react-toastify/dist/ReactToastify.css";
import 'flatpickr/dist/themes/material_orange.css';



import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <>
        {/* Spinner Start */}
        {loading && (
          <div
            id="spinner"
            className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
            style={{ zIndex: 1050 }}
          >
            <div
              className="spinner-border text-primary"
              style={{ width: '3rem', height: '3rem' }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {/* Spinner End */}

        {!loading && (
          <>

            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Errorpage />} />
              <Route path="/about" element={<About />} />
              <Route path="/fleet/coachbus" element={<Coachbus />} />
              <Route path="/fleet/mediumcoach" element={<MediumCoach />} />
              <Route path="/fleet/minicoach" element={<MiniCoach />} />
              <Route path="/fleet/transitsprinter" element={<TransitSprinter />} />
              <Route path="/fleet/hummerlimousinecar" element={<Hummerlimousinecar />} />
              <Route path="/fleet/schollbus" element={<Schollbus />} />
              <Route path="/form" element={<Form />} />
            </Routes>
            <Footer />
          </>
        )}
      </>
    </Router>
  );
}

export default App;




