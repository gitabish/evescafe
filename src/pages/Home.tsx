import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowUpRight, 
  Coffee, 
  Utensils, 
  Leaf, 
  Clock, 
  MapPin, 
  Mail, 
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
  const yParallax = useTransform(scrollY, [0, 500], [0, -50]);
  const yBadge = useTransform(scrollY, [0, 500], [0, -80]);
  const rotateParallax = useTransform(scrollY, [0, 500], [12, 20]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <span className="inline-block px-4 py-1 bg-brand-light border-2 border-black rounded-full text-xs font-bold mb-6 shadow-hard-sm">
              WELCOME TO 
            </span>
            <h1 className="font-display text-5xl md:text-8xl mb-6 tracking-tighter leading-[0.9]">
              THE <span className="text-brand">EVE'S</span> <br />COFFEE
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 font-medium">
              A sanctuary for coffee lovers, gamers, and music souls. Experience premium brews, immersive gaming vibes, chill beats, and a space where every sip feels like an escape.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="flex items-center justify-center gap-4 bg-black text-white rounded-xl px-10 py-5 shadow-hard font-bold text-lg"
              >
                BOOK A TABLE
                <ArrowUpRight className="w-5 h-5 text-brand" />
              </motion.a>
              <Link 
                to="/menu"
                className="flex items-center justify-center gap-4 bg-white border-2 border-black rounded-xl px-10 py-5 shadow-hard font-bold text-lg text-black hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                BROWSE MENU
              </Link>
            </div>
          </motion.div>

          {/* Right: Floating 3D Isometric Cafe Illustration */}
          <div className="relative flex justify-center items-center h-[500px] md:h-[600px]">
            {/* The Illustration Container */}
            <motion.div 
              style={{ y: yParallax }}
              className="relative w-full max-w-lg z-20 group"
            >
              {/* Floating Animation Layer */}
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Main Cafe Building Image */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-black shadow-[20px_20px_0px_0px_#28D156] transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
                    alt="Eve's Coffee" 
                    className="w-full h-auto object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent pointer-events-none" />
                </div>

                {/* Logo Badge */}
                <motion.div 
                  style={{ y: yBadge, rotate: rotateParallax }}
                  className="absolute -top-6 -right-6 bg-brand text-white px-8 py-3 rounded-full font-display text-4xl border-2 border-black shadow-hard animate-pulse-subtle z-40"
                >
                  EVE'S COFFEE
                </motion.div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -left-12 w-20 h-20 border-2 border-brand-light rounded-full opacity-20 bg-mint"
              />
            </motion.div>

            {/* Background cinematic text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
               <h4 className="font-display text-[25vw] text-black leading-none">3D</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery / About */}
      <section id="about" className="py-24 bg-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-auto">
            
            {/* Main Item 1: The Story */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-4 md:row-span-2 h-[450px] bg-black border-2 border-black rounded-3xl relative overflow-hidden group shadow-hard"
            >
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 scale-105 group-hover:scale-100"
                alt="Coffee Pouring"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 z-10 text-white">
                <span className="bg-brand text-black font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-4 inline-block">Our Story</span>
                <h3 className="text-4xl md:text-5xl font-display mb-2 drop-shadow-lg">Brewed with <br />Uncompromising Passion</h3>
                <p className="text-white/80 max-w-sm font-medium">Since 2012, we've been on a mission to bring rare single-origin roasts to your morning ritual.</p>
              </div>
            </motion.div>

            {/* Main Item 2: The Space */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-2 h-[450px] bg-mint border-2 border-black rounded-3xl relative overflow-hidden group shadow-hard"
            >
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0"
                alt="Cafe Sanctuary"
              />
              <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-3xl font-display mb-2">The Sanctuary</h3>
                <p className="text-gray-800 text-sm font-bold uppercase tracking-tighter">Your space for connection</p>
              </div>
            </motion.div>

            {/* Small Item 1: Origin */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-brand-light border-2 border-black rounded-3xl p-8 flex flex-col justify-between shadow-hard transition-colors hover:bg-brand"
            >
              <div className="bg-white border-2 border-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Ethical Sourcing</h4>
                <p className="text-sm text-gray-700 font-medium">Direct relationships with sustainable farmers across 12 countries.</p>
              </div>
            </motion.div>

            {/* Small Item 2: Pastries */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white border-2 border-black rounded-3xl p-8 flex flex-col justify-between shadow-hard"
            >
              <div className="bg-mint border-2 border-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Handmade Bakery</h4>
                <p className="text-sm text-gray-600 font-medium">Baked fresh every 4 hours using organic local ingredients.</p>
              </div>
            </motion.div>

            {/* Small Item 3: Community */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-brand border-2 border-black rounded-3xl p-8 flex flex-col justify-between shadow-hard"
            >
              <div className="bg-white border-2 border-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                 <Star className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Community First</h4>
                <p className="text-sm text-white/80 font-medium">Local artist showcases and weekend workshops monthly.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners / Delivery Teaser */}
      <section className="py-16 bg-white border-t-2 border-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10 block">Available for delivery via</span>
          <div className="flex flex-wrap justify-center gap-16 grayscale opacity-40 hover:opacity-100 transition-opacity duration-300 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl border-2 border-black bg-[#fc8019] flex items-center justify-center shadow-hard-sm">
                 <span className="text-white font-black text-xl">S</span>
              </div>
              <span className="text-4xl font-black tracking-tighter">Swiggy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl border-2 border-black bg-[#cb202d] flex items-center justify-center shadow-hard-sm">
                 <span className="text-white font-black text-xl">Z</span>
              </div>
              <span className="text-4xl font-black tracking-tighter">Zomato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Features Section */}
      <section id="experience" className="py-24 bg-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <span className="inline-block px-4 py-1 bg-mint border-2 border-black rounded-full text-xs font-bold mb-6 shadow-hard-sm uppercase tracking-tighter">
              The Daily Chapter
            </span>
            <h2 className="text-5xl md:text-7xl font-display tracking-tighter mb-6 leading-[0.9]">
              BEYOND THE <span className="text-brand">BREW</span>: <br />YOUR STORY STARTS HERE
            </h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              We didn't just build a cafe; we designed a backdrop for your morning rituals, 
              mid-day breakthroughs, and weekend reunions. Every corner is crafted with 
              intention, waiting for you to fill it with conversation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border-2 border-black rounded-3xl overflow-hidden shadow-hard">
            {[
              { title: 'Free Wi-Fi', desc: 'High-speed internet for remote work lovers.', icon: '01' },
              { title: 'Pet Friendly', desc: 'Bring your furry friends along for a treat.', icon: '02' },
              { title: 'Local Events', desc: 'Live music and workshops every weekend.', icon: '03' }
            ].map((feature, idx) => (
              <div key={idx} className={`p-12 border-black ${idx !== 2 ? 'md:border-r-2 border-b-2 md:border-b-0' : ''} hover:bg-mint transition-colors group`}>
                <span className="font-display text-5xl text-brand group-hover:text-black transition-colors block mb-4">{feature.icon}</span>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chill & Play Section */}
      <section className="py-24 bg-brand border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border-4 border-black rounded-[2rem] p-8 md:p-16 shadow-[16px_16px_0px_0px_#000] relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-mint text-black border-2 border-black px-4 py-1 rounded-full font-bold text-xs mb-6 inline-block">THE CHILL ZONE</span>
                <h2 className="text-5xl md:text-7xl font-display tracking-tighter mb-6 leading-none">
                  DON'T JUST <br /><span className="bg-brand text-white px-2">WAIT.</span> CHILL.
                </h2>
                <p className="text-xl md:text-2xl font-bold mb-8 tracking-tight leading-tight">
                  You don't have to wait till the order finishes! Grab a board game, dive into a bestseller, or challenge a friend to a quick match while we craft your coffee.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Snake & Ladder", "Ludo", "Puzzles", "Cubes", "Foosball", "Books"].map((item) => (
                    <span key={item} className="bg-mint/30 px-4 py-2 border-2 border-black rounded-lg font-bold text-sm shadow-hard-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-4">
                 <div className="aspect-[4/5] bg-mint border-2 border-black rounded-2xl flex flex-col items-center justify-center p-6 group hover:rotate-3 transition-transform shadow-hard-sm">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🎲</div>
                    <span className="font-display text-xl">PLAY</span>
                 </div>
                 <div className="aspect-[4/5] bg-brand-light border-2 border-black rounded-2xl flex flex-col items-center justify-center p-6 group hover:-rotate-3 transition-transform shadow-hard-sm">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                    <span className="font-display text-xl">READ</span>
                 </div>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/20 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-display tracking-tighter mb-16 text-center">WHAT PEOPLE SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-black p-8 rounded-3xl shadow-hard relative group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand text-black" />
                  ))}
                </div>
                <p className="text-lg font-medium italic mb-8">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-mint border-2 border-black rounded-full flex items-center justify-center font-bold">
                    {review.name[0]}
                  </div>
                  <span className="font-bold text-brand uppercase tracking-tighter">{review.name}</span>
                </div>
                <div className="absolute top-4 right-4 text-black/5 font-display text-6xl group-hover:text-brand/10 transition-colors">"</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-mint border-t-2 border-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display mb-6 tracking-tight">GET IN TOUCH</h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">Questions about our menu or want to book a table? Fill out the form below or visit us directly.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white border-2 border-black rounded-3xl p-8 md:p-10 shadow-hard">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-tighter">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-mint/10 border-2 border-black rounded-xl px-4 py-3 focus:bg-white focus:outline-none transition-colors font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-tighter">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-mint/10 border-2 border-black rounded-xl px-4 py-3 focus:bg-white focus:outline-none transition-colors font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-tighter">Subject</label>
                  <input type="text" placeholder="Inquiry about catering" className="w-full bg-mint/10 border-2 border-black rounded-xl px-4 py-3 focus:bg-white focus:outline-none transition-colors font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-tighter">Your Message</label>
                  <textarea rows={4} placeholder="Tell us more..." className="w-full bg-mint/10 border-2 border-black rounded-xl px-4 py-3 focus:bg-white focus:outline-none transition-colors font-medium" />
                </div>
                <button className="w-full bg-brand text-white border-2 border-black rounded-xl py-4 font-bold text-lg shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info & Map Details */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-hard flex items-start gap-6">
                  <div className="bg-brand-light p-4 border border-black rounded-xl">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Our Location</h3>
                    <a 
                      href="https://maps.app.goo.gl/sMpuXuBgKLnPi3Ne7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 font-medium hover:text-brand transition-colors"
                    >
                      Pulikkada Junction, Kelamangalam - Alappuzha Rd, Kidangamparamp, Alappuzha, Kerala 688013
                    </a>
                  </div>
                </div>
                
                <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-hard flex items-start gap-6">
                  <div className="bg-brand-light p-4 border border-black rounded-xl">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Opening Hours</h3>
                    <p className="text-gray-500 font-medium">Mon - Sun: 08:00 - 22:00</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-hard flex items-start gap-6">
                  <div className="bg-brand-light p-4 border border-black rounded-xl">
                    <Mail className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Online Presence</h3>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:hello@evescoffee.com" className="text-gray-500 font-bold hover:text-brand transition-colors"></a>
                      <a href="tel:09645263333" className="text-gray-500 font-bold hover:text-brand transition-colors">09645263333</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-hard-sm">
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
