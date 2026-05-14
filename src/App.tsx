/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { 
  Menu, 
  X
} from 'lucide-react';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';

// ScrollToTop component to reset scroll on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure layout is complete and IntersectionObservers are primed
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
}

// ScrollReveal initialization component
function InitReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { 
        threshold: 0.1
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <ScrollToTop />
      <InitReveal />
      <div className="min-h-screen flex flex-col">
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-brand z-[100] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      <Navbar scrolled={scrolled} setIsMenuOpen={setIsMenuOpen} />
        
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-0 bg-white z-[60] p-10 flex flex-col justify-between md:hidden overflow-hidden"
            >
              <div className="flex justify-between items-center">
                <span className="font-display text-2xl uppercase font-bold tracking-[-0.05em]">COFI CLUB</span>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-brand transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link, idx) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
                      key={link.name}
                    >
                      <Link 
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-5xl sm:text-6xl font-display font-black tracking-[-0.05em] hover:text-brand transition-colors uppercase leading-none block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="border-t-2 border-black pt-10 mt-12">
                <p className="text-[10px] font-bold font-mono tracking-widest text-gray-400 mb-6 uppercase">LOCATION / KERALA</p>
                <div className="flex flex-col gap-4">
                   <a href="#" className="font-bold text-lg hover:text-brand transition-colors">INSTAGRAM</a>
                   <a href="#" className="font-bold text-lg hover:text-brand transition-colors">MAPS</a>
                </div>
              </div>

              {/* Background large text */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] select-none pointer-events-none">
                 <h4 className="font-display text-[40vw] leading-none font-black text-center">COFI CLUB</h4>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
