import { Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-32 relative overflow-hidden border-t-4 border-brand">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-12 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-4 group reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
                <Coffee className="w-10 h-10 text-black fill-black" />
              </div>
              <span className="text-4xl font-display font-black tracking-[-0.05em] leading-none uppercase">
                COFI CLUB
              </span>
            </div>
            
            <p className="text-xl text-white/50 max-w-sm leading-relaxed font-medium reveal" style={{ transitionDelay: '0.3s' }}>
              We design premium coffee experiences through ethically sourced beans and industrial craftsmanship.
            </p>

            <div className="flex gap-4 reveal" style={{ transitionDelay: '0.4s' }}>
              <a href="https://instagram.com/savourstreet.cafe" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] border-2 border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all reveal" style={{ transitionDelay: '0.5s' }}>
                INSTAGRAM
              </a>
              <a href="mailto:cafesavourstreet@gmail.com" className="text-[10px] font-bold tracking-[0.2em] border-2 border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all reveal" style={{ transitionDelay: '0.6s' }}>
                EMAIL
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="space-y-6 reveal" style={{ transitionDelay: '0.4s' }}>
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">NAVIGATE</span>
              <ul className="space-y-4">
                <li><a href="/" className="text-lg font-bold hover:text-brand transition-colors">HOME</a></li>
                <li><a href="/menu" className="text-lg font-bold hover:text-brand transition-colors">MENU</a></li>
                <li><a href="/#about" className="text-lg font-bold hover:text-brand transition-colors">ABOUT</a></li>
                <li><a href="/#contact" className="text-lg font-bold hover:text-brand transition-colors">CONTACT</a></li>
              </ul>
            </div>

            <div className="space-y-6 reveal" style={{ transitionDelay: '0.5s' }}>
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">DISCOVER</span>
              <ul className="space-y-4">
                <li><a href="#" className="text-lg font-bold hover:text-brand transition-colors">EXPERIENCE</a></li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1 reveal" style={{ transitionDelay: '0.6s' }}>
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">NEWSLETTER</span>
              <div className="space-y-4">
                <div className="flex bg-white/5 border-2 border-white/10 rounded-xl p-1">
                   <input type="text" placeholder="EMAIL" className="bg-transparent border-none focus:outline-none px-4 py-2 text-xs font-bold w-full" />
                   <button className="bg-brand text-black px-4 py-2 rounded-lg font-bold text-[10px]">JOIN</button>
                </div>
                <p className="text-[10px] text-white/30 font-medium">Join our circle for exclusive access to new roasts and events.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-12 border-t-2 border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 reveal" style={{ transitionDelay: '0.8s' }}>
          <div className="flex items-center gap-4 text-white/20 font-mono text-[10px] font-bold uppercase tracking-widest">
            <span>© 2026 COFI CLUB</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>ALL RIGHTS RESERVED</span>
          </div>
          
          <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.3em] text-white/40">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>

      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
         <h4 className="font-display text-[30vw] leading-none font-black text-center text-brand/20 uppercase tracking-tighter">COFI CLUB</h4>
      </div>
    </footer>
  );
}
