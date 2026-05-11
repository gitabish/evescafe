/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X
} from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';

// ScrollToTop component to reset scroll on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar scrolled={scrolled} setIsMenuOpen={setIsMenuOpen} />

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-mint z-[60] flex flex-col items-center justify-center gap-8 p-8"
            >
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2"
              >
                <X className="w-8 h-8 text-black" />
              </button>
              {navLinks.map((link) => {
                const isExternal = link.href.includes('#');
                if (isExternal) {
                  return (
                    <a 
                      key={link.name}
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-display hover:text-brand transition-colors"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link 
                    key={link.name}
                    to={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-display hover:text-brand transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a 
                href="/#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-brand border-2 border-black rounded-full font-bold shadow-hard hover:shadow-none translate-x-[2px] translate-y-[2px]"
              >
                BOOK A TABLE
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
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
