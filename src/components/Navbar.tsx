import { Coffee, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Navbar({ scrolled, setIsMenuOpen }: { scrolled: boolean; setIsMenuOpen: (val: boolean) => void }) {
  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'MENU', href: '/menu' },
    { name: 'EXPERIENCE', href: '/#experience' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-700 pointer-events-none ${
        scrolled ? 'py-4' : 'py-4 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <div className={`flex items-center justify-between w-full bg-white border-2 border-black rounded-full px-8 py-3 transition-all duration-500 ${
          scrolled ? 'shadow-hard-sm backdrop-blur-md bg-white/95' : 'shadow-none'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-hard-sm">
              <Coffee className="w-6 h-6 text-brand" />
            </div>
            <span className="text-lg sm:text-2xl font-display uppercase tracking-[-0.05em] group-hover:text-brand transition-colors block">
              COFI CLUB
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 reveal" style={{ transitionDelay: '0.2s' }}>
            {navLinks.map((link, i) => {
              const isExternal = link.href.includes('#');
              return (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="text-[10px] font-bold tracking-[0.3em] transition-all relative group text-black hover:text-brand reveal"
                  style={{ transitionDelay: `${0.3 + i * 0.05}s` }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all group-hover:w-full" />
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6 reveal" style={{ transitionDelay: '0.3s' }}>
            <a 
              href="tel:+917736038082"
              className="hidden lg:flex items-center gap-3 bg-brand text-black px-6 py-2.5 border-2 border-black rounded-full font-bold text-[10px] tracking-[0.1em] shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all reveal"
              style={{ transitionDelay: '0.4s' }}
            >
              BOOK A TABLE
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 group reveal"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="w-6 h-[2px] bg-black transition-all group-hover:w-4" />
              <div className="w-6 h-[2px] bg-black transition-all" />
              <div className="w-6 h-[2px] bg-black transition-all group-hover:w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
