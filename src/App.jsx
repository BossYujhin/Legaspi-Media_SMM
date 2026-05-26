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


function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function useSectionParallax() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    let frameId = 0;
    let targets = [];

    const collectTargets = () => {
      targets = Array.from(
        document.querySelectorAll('.hero-section, .page-hero, .section, .cta-section')
      );
      targets.forEach((target) => target.classList.add('scroll-parallax-section'));
    };

    const updateSections = () => {
      if (!targets.length) collectTargets();

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distance = viewportCenter - elementCenter;
        const isHero = target.classList.contains('hero-section');
        const isPageHero = target.classList.contains('page-hero');
        const maxLift = isHero ? 88 : isPageHero ? 64 : 46;
        const layerY = clamp(distance * 0.12, -maxLift, maxLift);
        const contentY = clamp(distance * -0.026, -18, 18);
        const gridY = clamp(layerY * 0.34, -28, 28);

        target.style.setProperty('--section-parallax-y', `${layerY.toFixed(2)}px`);
        target.style.setProperty('--section-content-y', `${contentY.toFixed(2)}px`);
        target.style.setProperty('--section-grid-y', `${gridY.toFixed(2)}px`);
      });

      frameId = 0;
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateSections);
    };

    collectTargets();
    updateSections();

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    const main = document.querySelector('.page-transition-wrap') || document.body;
    const observer = new MutationObserver(() => {
      collectTargets();
      requestUpdate();
    });
    observer.observe(main, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

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
  useSectionParallax();

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
