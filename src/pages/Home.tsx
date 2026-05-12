import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  ArrowUpRight, 
  Coffee, 
  Utensils, 
  Leaf, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  { name: "Aarav Gupta", text: "The Purpleccino is unlike anything I've ever tasted! The color is stunning and the flavor is so unique. Definitely my new favorite spot.", stars: 5 },
  { name: "Sanya Malhotra", text: "Love the neo-brutalist vibe here. It's the perfect place to work or play board games. Their Nitro Coffee is a must-try!", stars: 5 },
  { name: "Vikram Singh", text: "The Green Apple Mojito is super refreshing. Also, the chicken momos were surprisingly good for a cafe. Great experience all around.", stars: 4 },
];

export default function Home() {
  const { scrollY } = useScroll();
  const ySpring = useSpring(scrollY, { stiffness: 60, damping: 25, restDelta: 0.001 });
  const yParallax = useTransform(ySpring, [0, 500], [0, -50]);
  const yBadge = useTransform(ySpring, [0, 500], [0, -80]);
  const rotateParallax = useTransform(ySpring, [0, 500], [12, 20]);

  return (
    <div className="overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden pt-32 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 w-full pt-10 md:pt-0">
          {/* Left: Text Content */}
          <div className="text-left reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-8 reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="w-10 h-[2px] bg-black" />
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/50">
                ESTABLISHED 2021
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-[clamp(4rem,10vw,8.5rem)] mb-8 tracking-[-0.05em] leading-[0.8] font-bold uppercase overflow-hidden reveal" style={{ transitionDelay: '0.3s' }}>
              <motion.span 
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
                className="block"
              >
                KYNORAH
              </motion.span>
              <motion.span 
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                className="block text-stroke-3 text-white"
                style={{ WebkitTextStroke: '3px black' }}
              >
                EXPERIENCE
              </motion.span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-12 font-medium leading-relaxed tracking-tight reveal" style={{ transitionDelay: '0.4s' }}>
              A place to belong. A sanctuary for coffee lovers, gamers, and music souls. Experience premium brews, immersive gaming vibes, and chill pulses.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 reveal" style={{ transitionDelay: '0.5s' }}>
              <motion.a 
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+917736038082"
                className="group relative flex items-center justify-center gap-4 bg-black text-white rounded-px px-10 py-5 transition-all duration-300 shadow-hard-lg"
              >
                <span className="font-bold text-lg tracking-tight">BOOK A TABLE</span>
                <div className="bg-brand rounded-full w-8 h-8 flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </motion.a>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link 
                  to="/menu"
                  className="flex items-center justify-center h-full gap-4 bg-white border-2 border-black rounded-px px-10 py-5 shadow-hard-lg font-bold text-lg text-black hover:bg-mint transition-colors"
                >
                  BROWSE MENU
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-16 flex items-center gap-8 border-t border-black/10 pt-8 reveal" style={{ transitionDelay: '0.6s' }}>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-black/40 tracking-widest mb-1">LOCATION</span>
                <span className="text-sm font-bold">KUMARAPURAM, AXIS BANK</span>
              </div>
              <div className="w-[1px] h-10 bg-black/10" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-black/40 tracking-widest mb-1">RATING</span>
                <span className="text-sm font-bold">4.4 ★ (659 REVIEWS)</span>
              </div>
            </div>
          </div>

          {/* Right: Floating 3D Isometric Cafe Illustration */}
          <div className="relative flex justify-center items-center h-[500px] md:h-[700px] reveal" style={{ transitionDelay: '0.3s' }}>
            {/* Parallax Container */}
            <motion.div 
              style={{ y: yParallax }}
              className="relative w-full max-w-lg z-20 group perspective-1000"
            >
              {/* Separate Animation Layer to avoid transform conflicts */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [-1, 1, -1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative will-change-transform"
              >
                {/* Double Bezel Structure */}
                <div className="relative p-2 bg-black rounded-[2.5rem] shadow-hard-lg transition-transform duration-700 group-hover:scale-[1.03]">
                  <div className="relative rounded-[2rem] overflow-hidden border-2 border-black bg-brand/5">
                    <img 
                      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
                      alt="Kynorah" 
                      className="w-full h-auto aspect-[4/5] object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand/5 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent pointer-events-none opacity-50" />
                  </div>
                </div>

                {/* Logo Badge - Floating independently */}
                <motion.div 
                  style={{ y: yBadge, rotate: rotateParallax }}
                  className="absolute -top-10 -right-10 bg-brand text-black px-10 py-5 rounded-full font-display text-4xl border-2 border-black shadow-hard-lg z-40"
                >
                  KYNORAH
                </motion.div>
                
                {/* Micro Metadata labels */}
                <div className="absolute -bottom-6 -left-6 bg-white border-2 border-black px-4 py-2 font-mono text-[10px] font-bold shadow-hard-sm z-30">
                  CAFE-ISO-3D
                </div>
              </motion.div>

              {/* Decorative Geometric Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -left-24 w-48 h-48 border border-brand/20 rounded-full pointer-events-none"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[0.5px] border-black/5 rounded-full pointer-events-none scale-90" />
            </motion.div>

            {/* Background cinematic text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
               <h4 className="font-display text-[30vw] text-black leading-none font-black translate-y-20">KYNORAH</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery / About */}
      <section id="about" className="py-32 bg-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto">
            {/* Main Item 1: The Story */}
            <div className="md:col-span-4 md:row-span-2 h-[500px] bg-black border-2 border-black rounded-[2rem] relative overflow-hidden group shadow-hard-lg reveal" style={{ transitionDelay: '0.1s' }}>
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-1000 scale-105 group-hover:scale-100"
                alt="Coffee Pouring"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-12 left-12 z-10 text-white">
                <span className="bg-brand text-black font-bold uppercase tracking-[0.2em] text-[10px] px-4 py-1.5 rounded-full mb-6 inline-block">OUR STORY</span>
                <h3 className="text-4xl md:text-6xl font-display mb-4 leading-none tracking-[-0.05em]">BREWED WITH <br />PASSION</h3>
                <p className="text-white/60 max-w-sm font-medium text-lg leading-relaxed tracking-tight">Since 2021, we've been on a mission to bring rare single-origin roasts to your morning ritual.</p>
              </div>
            </div>

            {/* Main Item 2: The Space */}
            <div className="md:col-span-2 md:row-span-2 h-[500px] bg-mint border-2 border-black rounded-[2rem] relative overflow-hidden group shadow-hard-lg reveal" style={{ transitionDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100"
                alt="Cafe Sanctuary"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-12 left-10 z-10">
                <h3 className="text-4xl font-display mb-2 tracking-[-0.05em]">THE SPACE</h3>
                <p className="text-black/60 text-xs font-bold uppercase tracking-[0.25em]">Your sanctuary for focus</p>
              </div>
            </div>

            {/* Small Item 1: Origin */}
            <div className="md:col-span-2 bg-brand-light border-2 border-black rounded-[2rem] p-10 flex flex-col justify-between shadow-hard transition-all duration-500 hover:bg-brand group hover:-translate-y-2 reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="bg-white border-2 border-black rounded-full w-14 h-14 flex items-center justify-center mb-8 shadow-hard-sm">
                <Leaf className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-white transition-colors">ETHICAL ORIGIN</h4>
                <p className="text-sm text-black/60 font-medium leading-relaxed group-hover:text-white/80 transition-colors">Direct relationships with sustainable farmers across 12 countries.</p>
              </div>
            </div>

            {/* Small Item 2: Pastries */}
            <div className="md:col-span-2 bg-white border-2 border-black rounded-[2rem] p-10 flex flex-col justify-between shadow-hard transition-all duration-500 group hover:-translate-y-2 hover:bg-black reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="bg-mint border-2 border-black rounded-full w-14 h-14 flex items-center justify-center mb-8 shadow-hard-sm">
                <Utensils className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-white transition-colors">ARTISAN BAKES</h4>
                <p className="text-sm text-black/50 font-medium leading-relaxed group-hover:text-white/60 transition-colors">Baked fresh every 4 hours using organic local ingredients.</p>
              </div>
            </div>

            {/* Small Item 3: Community */}
            <div className="md:col-span-2 bg-brand border-2 border-black rounded-[2rem] p-10 flex flex-col justify-between shadow-hard transition-all duration-500 group hover:-translate-y-2 reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="bg-white border-2 border-black rounded-full w-14 h-14 flex items-center justify-center mb-8 shadow-hard-sm">
                 <Star className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">COMMUNITY HUB</h4>
                <p className="text-sm text-white/70 font-medium leading-relaxed">Local artist showcases and weekend workshops monthly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Delivery Teaser */}
      <section className="py-24 bg-white border-t-2 border-black overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.4em] mb-12 block">AVAILABLE FOR DELIVERY VIA</span>
          <div className="flex flex-wrap justify-center gap-16 grayscale opacity-30 hover:opacity-100 transition-all duration-700 items-center">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl border-2 border-black bg-[#fc8019] flex items-center justify-center shadow-hard-sm transition-transform group-hover:scale-110">
                 <span className="text-white font-black text-2xl">S</span>
              </div>
              <span className="text-5xl font-black tracking-tighter">Swiggy</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl border-2 border-black bg-[#cb202d] flex items-center justify-center shadow-hard-sm transition-transform group-hover:scale-110">
                 <span className="text-white font-black text-2xl">Z</span>
              </div>
              <span className="text-5xl font-black tracking-tighter">Zomato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Features Section */}
      <section id="experience" className="py-32 bg-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[2px] bg-brand" />
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand">THE DAILY CHAPTER</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display tracking-tight mb-8 leading-[0.85] uppercase">
                BEYOND THE <span className="text-brand">BREW</span>
              </h2>
              <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-xl">
                We designed a backdrop for your morning rituals, mid-day breakthroughs, and weekend reunions.
              </p>
            </div>
            <div className="pb-4">
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center"
               >
                 <ArrowUpRight className="w-5 h-5 rotate-90" />
               </motion.div>
            </div>
          </div>
            <div className="industrial-grid rounded-[2rem] overflow-hidden shadow-hard-lg reveal">
              {[
                { title: 'Free Wi-Fi', desc: 'High-speed internet for remote work lovers.' },
                { title: 'Pet Friendly', desc: 'Bring your furry friends along for a treat.' },
                { title: 'Local Events', desc: 'Live music and workshops every weekend.' }
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="p-16 transition-colors group relative overflow-hidden reveal"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">{feature.title}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>      {/* Chill & Play Section */}
      <section className="py-32 bg-brand border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border-4 border-black rounded-[3rem] p-10 md:p-20 shadow-hard-lg relative overflow-hidden group reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                <span className="bg-mint text-black border-2 border-black px-4 py-2 rounded-full font-bold text-[10px] tracking-[0.2em] mb-8 inline-block shadow-hard-sm uppercase reveal" style={{ transitionDelay: '0.3s' }}>THE CHILL ZONE</span>
                <h2 className="text-6xl md:text-8xl font-display tracking-tight mb-8 leading-[0.85] uppercase reveal" style={{ transitionDelay: '0.4s' }}>
                  DON'T JUST <br /><span className="bg-brand text-white px-4 inline-block -rotate-1">WAIT.</span> <br />CHILL.
                </h2>
                <p className="text-xl md:text-2xl font-medium mb-12 text-gray-500 leading-relaxed reveal" style={{ transitionDelay: '0.5s' }}>
                  Grab a board game, dive into a bestseller, or challenge a friend while we craft your coffee.
                </p>
                <div className="flex flex-wrap gap-3 reveal" style={{ transitionDelay: '0.6s' }}>
                  {["Snake & Ladder", "Ludo", "Puzzles", "Cubes", "Foosball", "Books"].map((item, i) => (
                    <span key={item} className="bg-mint/40 px-5 py-2.5 border-2 border-black rounded-xl font-bold text-xs shadow-hard-sm hover:-translate-y-1 transition-transform cursor-default reveal" style={{ transitionDelay: `${0.6 + i * 0.05}s` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-6 reveal" style={{ transitionDelay: '0.4s' }}>
                 {/* Double Bezel for Game Cards */}
                 <div className="p-1.5 bg-black rounded-[2rem] shadow-hard transition-transform duration-500 group-hover:rotate-2 reveal" style={{ transitionDelay: '0.5s' }}>
                   <div className="aspect-[3/4] bg-mint rounded-[calc(2rem-0.375rem)] flex flex-col items-center justify-center p-8 group/card">
                      <div className="text-7xl mb-6 group-hover/card:scale-110 group-hover/card:rotate-12 transition-transform duration-500">🎲</div>
                      <span className="font-display text-2xl uppercase tracking-tighter">PLAY</span>
                   </div>
                 </div>
                 <div className="p-1.5 bg-black rounded-[2rem] shadow-hard transition-transform duration-500 group-hover:-rotate-2 translate-y-8 reveal" style={{ transitionDelay: '0.6s' }}>
                   <div className="aspect-[3/4] bg-brand-light rounded-[calc(2rem-0.375rem)] flex flex-col items-center justify-center p-8 group/card">
                      <div className="text-7xl mb-6 group-hover/card:scale-110 group-hover/card:-rotate-12 transition-transform duration-500">📚</div>
                      <span className="font-display text-2xl uppercase tracking-tighter">READ</span>
                   </div>
                 </div>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/20 -translate-y-1/2 translate-x-1/2 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand/30 transition-colors duration-1000" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center mb-20 reveal">
            <span className="text-brand font-mono text-xs font-bold tracking-[0.5em] mb-4 uppercase reveal" style={{ transitionDelay: '0.1s' }}>TESTIMONIALS</span>
              <h2 className="text-6xl md:text-8xl font-display tracking-tight uppercase leading-none reveal" style={{ transitionDelay: '0.2s' }}>
                VOICES OF <span className="text-brand">KYNORAH</span>
              </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-black p-10 rounded-[2.5rem] shadow-hard-lg relative group overflow-hidden reveal"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.stars ? 'fill-brand text-brand' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>
                <p className="text-xl font-medium mb-10 text-left leading-relaxed text-gray-700 tracking-tight">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg tap-feedback"
                  >
                    {review.name[0]}
                  </motion.div>
                  <div className="flex flex-col items-start leading-none">
                    <span className="font-bold text-black uppercase tracking-tight text-lg">{review.name}</span>
                    <span className="text-[10px] font-bold text-brand uppercase tracking-[0.3em] mt-1">GUEST</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-mint/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-mint border-t-2 border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-left mb-24 max-w-3xl reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-6 reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="w-8 h-[2px] bg-black" />
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/60">CONNECT</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display mb-8 tracking-tight uppercase leading-[0.85] reveal" style={{ transitionDelay: '0.3s' }}>SAY <span className="text-brand">HELLO</span> <br />TO THE TEAM</h2>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed reveal" style={{ transitionDelay: '0.4s' }}>Questions about our menu or want to book a table? Our doors (and inbox) are always open.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start reveal" style={{ transitionDelay: '0.3s' }}>
            {/* Contact Form */}
            <div className="bg-white border-2 border-black rounded-[2.5rem] p-10 md:p-12 shadow-hard-lg relative group reveal" style={{ transitionDelay: '0.4s' }}>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3 reveal" style={{ transitionDelay: '0.5s' }}>
                    <label className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-mint/5 border-b-2 border-black px-0 py-4 focus:bg-white focus:outline-none focus:px-4 transition-all font-bold placeholder:text-black/40" />
                  </div>
                  <div className="space-y-3 reveal" style={{ transitionDelay: '0.6s' }}>
                    <label className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">Email Address</label>
                    <input type="email" placeholder="hello@example.com" className="w-full bg-mint/5 border-b-2 border-black px-0 py-4 focus:bg-white focus:outline-none focus:px-4 transition-all font-bold placeholder:text-black/40" />
                  </div>
                </div>
                <div className="space-y-3 reveal" style={{ transitionDelay: '0.7s' }}>
                  <label className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">Subject</label>
                  <input type="text" placeholder="Inquiry" className="w-full bg-mint/5 border-b-2 border-black px-0 py-4 focus:bg-white focus:outline-none focus:px-4 transition-all font-bold placeholder:text-black/40" />
                </div>
                <div className="space-y-3 reveal" style={{ transitionDelay: '0.8s' }}>
                  <label className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">Your Message</label>
                  <textarea rows={4} placeholder="What's on your mind?" className="w-full bg-mint/5 border-b-2 border-black px-0 py-4 focus:bg-white focus:outline-none focus:px-4 transition-all font-bold placeholder:text-black/40 resize-none" />
                </div>
                <button className="group w-full bg-black text-white rounded-xl py-6 font-bold text-lg shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-4 reveal" style={{ transitionDelay: '0.9s' }}>
                  SEND MESSAGE
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info & Map Details */}
            <div className="space-y-10 reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="industrial-grid rounded-[2rem] overflow-hidden shadow-hard-lg reveal" style={{ transitionDelay: '0.6s' }}>
                <div className="p-10 flex items-start gap-8 group reveal" style={{ transitionDelay: '0.7s' }}>
                  <div className="bg-brand-light p-5 border-2 border-black rounded-2xl shadow-hard-sm transition-transform group-hover:-rotate-6">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">VISIT US</h3>
                    <a 
                      href="https://maps.app.goo.gl/sMpuXuBgKLnPi3Ne7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 font-medium hover:text-brand transition-colors text-lg leading-snug block"
                    >
                      Kumarapuram, near Axis Bank <br /> Kerala
                    </a>
                  </div>
                </div>
                
                <div className="p-10 flex items-start gap-8 group reveal" style={{ transitionDelay: '0.8s' }}>
                  <div className="bg-brand-light p-5 border-2 border-black rounded-2xl shadow-hard-sm transition-transform group-hover:rotate-6">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">OPENING HOURS</h3>
                    <p className="text-gray-500 font-medium text-lg">Mon - Sun: 08:00 - 22:00</p>
                  </div>
                </div>

                <div className="p-10 flex items-start gap-8 group reveal" style={{ transitionDelay: '0.9s' }}>
                  <div className="bg-brand-light p-5 border-2 border-black rounded-2xl shadow-hard-sm transition-transform group-hover:-rotate-6">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">ONLINE PRESENCE</h3>
                    <div className="flex flex-col gap-2">
                       <a href="tel:+917736038082" className="text-gray-500 font-bold hover:text-brand transition-colors text-xl tracking-tight">+91 77360 38082</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-center reveal" style={{ transitionDelay: '1s' }}>
                <span className="text-[10px] font-bold text-black/30 font-mono uppercase tracking-[0.25em]">SOCIALLY ACTIVE</span>
                <a href="https://instagram.com/savourstreet.cafe" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-hard group">
                  <Instagram className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
