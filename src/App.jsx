import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PageSkeleton from './components/PageSkeleton.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Process from './pages/Process.jsx';
import Pricing from './pages/Pricing.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const id = hash.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 620);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/process" element={<Process />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="page-transition-wrap">
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}
