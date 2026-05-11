import { Coffee, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ scrolled, setIsMenuOpen }: { scrolled: boolean; setIsMenuOpen: (val: boolean) => void }) {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-black py-3' : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 group">
          <div className="relative w-8 h-8 mr-1 transition-transform group-hover:rotate-12">
            <Coffee className="text-black w-full h-full fill-brand" />
          </div>
          <div className="text-2xl tracking-tight font-display text-gray-800 flex flex-col leading-none">
            <span className="text-brand text-stroke-[1px] stroke-black" style={{ WebkitTextStroke: '1px black' }}>Eve's</span>
            <span className="-mt-1 text-black">Cafe</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => {
            const isExternal = link.href.includes('#');
            if (isExternal) {
              return (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="transition-all hover:text-brand"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link 
                key={link.name}
                to={link.href} 
                className={`transition-all hover:text-brand ${
                  link.name === 'Home' ? 'px-5 py-2 bg-brand border-2 border-black rounded-full shadow-hard-sm hover:translate-y-[-2px]' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <a 
          href="#" 
          className="hidden md:flex items-center gap-3 bg-brand border-2 border-black rounded-full px-1 pl-1 py-1 pr-6 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 group"
        >
          <div className="bg-white border-2 border-black rounded-full p-1.5 group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
          </div>
          <span className="font-bold text-xs tracking-wide">BOOK A TABLE</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2">
          <MenuIcon className="w-8 h-8 text-black" />
        </button>
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
