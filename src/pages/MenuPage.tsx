import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Star, ArrowUpRight } from 'lucide-react';

const menuData = [
  // Hot Drinks
  { name: "Espresso", desc: "Concentrated Coffee shots", price: "₹60.00", category: "Hot Drinks" },
  { name: "Lungo", desc: "Diluted shot of expresso", price: "₹80.00", category: "Hot Drinks" },
  { name: "Affagato", desc: "Espresso with scoop of Vanilla Icecream", price: "₹90.00", category: "Hot Drinks" },
  { name: "Americano", desc: "Black coffee", price: "₹70.00", category: "Hot Drinks" },
  { name: "Cappucino", desc: "Perfect Blend of arabica and robusta beans", price: "₹80.00", category: "Hot Drinks" },
  { name: "Irish Cappucino", desc: "Flavoured Cappucino", price: "₹100.00", category: "Hot Drinks" },
  { name: "Vanilla Cappucino", desc: "Flavoured Cappucino", price: "₹100.00", category: "Hot Drinks" },
  { name: "Roasted Hazelnut Cappucino", desc: "Flavoured Cappucino", price: "₹100.00", category: "Hot Drinks" },
  { name: "Cinnamon Cappuccino", desc: "Flavoured Cappucino", price: "₹100.00", category: "Hot Drinks" },
  { name: "Cafe Mocha", desc: "Chocolate flavoured cappucino", price: "₹100.00", category: "Hot Drinks" },
  { name: "Hot chocolate", desc: "Hot chocolate Milk", price: "₹80.00", category: "Hot Drinks" },
  { name: "Cafe latte", desc: "Coffee with less froth and more milk.", price: "₹100.00", category: "Hot Drinks" },
  { name: "Cafe latte Flavoured", desc: "Flavour: Irish/Vanilla/Roasted hazelnut/Cinnamon/Chocolate", price: "₹120.00", category: "Hot Drinks" },
  { name: "Matcha Latte", desc: "Best cermonial grade Japanese matcha served with milk", price: "₹130.00", category: "Hot Drinks" },
  { name: "Matcha Tea", desc: "Best cermonial grade japanese matcha served as green tea.", price: "₹110.00", category: "Hot Drinks" },
  { name: "Caramel Macchiato", desc: "Cappucino loaded with caramel sauce", price: "₹110.00", category: "Hot Drinks" },
  { name: "Red velvet Latte", desc: "Vegetation based natural red color coffee with tint of vanilla flavour", price: "₹120.00", category: "Hot Drinks" },
  { name: "Charcoal Latte", desc: "Activated charcoal based latte. (Black in color)", price: "₹110.00", category: "Hot Drinks" },
  { name: "Purpleccino", desc: "Root based vegetation flavoured coffee with natural purple color.", price: "₹120.00", category: "Hot Drinks" },
  { name: "Turkish coffee", desc: "Arabica coffee Dark roasted", price: "₹60.00", category: "Hot Drinks" },
  // Iced Tea
  { name: "Lemon iced tea", desc: "Lemon flavoured ice tea", price: "₹100.00", category: "Iced Tea" },
  { name: "Peach iced tea", desc: "Peach flavored ice tea", price: "₹100.00", category: "Iced Tea" },
  { name: "Strawberry Iced tea", desc: "Strawberry flavoured ice tea", price: "₹100.00", category: "Iced Tea" },
  { name: "Cranberry Iced Tea", desc: "Cranberry flavoured ice tea", price: "₹100.00", category: "Iced Tea" },
  { name: "Cucumber Iced tea", desc: "Cucumber flavoured ice tea", price: "₹100.00", category: "Iced Tea" },
  // Mojito
  { name: "Classic mint mojito", desc: "Classic Mojito", price: "₹110.00", category: "Mojito" },
  { name: "Cool blue mojito", desc: "Blue curacao based mojito", price: "₹110.00", category: "Mojito" },
  { name: "Green apple mojito", desc: "Green apple flavoured mojito", price: "₹110.00", category: "Mojito" },
  { name: "Raspberry mojito", desc: "Raspberry flavoured mojito", price: "₹110.00", category: "Mojito" },
];

const highlights = [
  "Cappuccino and Hot Chocolate",
  "Sandwiches",
  "Brownie with Ice Cream",
  "Nachos",
  "Cold Cappuccino",
  "Black Milk Shake",
  "Chiken and Veg Momos",
  "Purple Cappuccino",
  "Chocolate Milk Shake",
  "Red Wine Sangria",
  "Espresso Shot",
  "Apple Walnut Cake",
  "Iced Coffee",
  "Cafe Latte",
  "Nitro Coffee",
  "Veg Sandwich"
];

const categories = ["All", "Hot Drinks", "Iced Tea", "Mojito"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <div className="pt-40 md:pt-32 pb-40 bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 reveal">
          <div className="max-w-2xl text-left reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-6 reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="w-8 h-[2px] bg-black" />
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/50">CURATED SELECTION</span>
            </div>
            <h1 className="text-6xl md:text-[clamp(4rem,10vw,8rem)] font-display tracking-[-0.05em] mb-8 leading-[0.8] uppercase reveal" style={{ transitionDelay: '0.3s' }}>
              THE <span className="text-brand">MENU</span>
            </h1>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed tracking-tight reveal" style={{ transitionDelay: '0.4s' }}>
              Explore our laboratory of specialty brews, handmade bakery items, and unique treats.
            </p>
          </div>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 pb-4 reveal" style={{ transitionDelay: '0.5s' }}>
            {categories.map((cat, i) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 border-2 border-black rounded-full font-bold text-sm tracking-tight transition-all duration-300 reveal ${
                  activeCategory === cat 
                    ? 'bg-black text-white shadow-hard-sm -translate-y-1' 
                    : 'bg-white hover:bg-brand/10 hover:shadow-hard-sm hover:-translate-y-0.5'
                }`}
                style={{ transitionDelay: `${0.6 + i * 0.05}s` }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.map((item, idx) => (
            <div 
              key={item.name}
              className="bg-white rounded-[2rem] border-2 border-black p-8 shadow-hard transition-all duration-500 group hover:-translate-y-2 hover:shadow-hard-lg reveal"
              style={{ transitionDelay: `${(idx % 8) * 0.05}s` }}
            >
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-mint p-3 border-2 border-black rounded-xl shadow-hard-sm transition-transform hover:rotate-12">
                    <Coffee className="w-6 h-6 text-brand" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-display text-xl text-black tracking-tight">{item.price}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-brand transition-colors uppercase leading-[0.9]">{item.name}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed tracking-tight">{item.desc}</p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold font-mono tracking-widest">{item.category.toUpperCase()}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </div>
            ))}
        </div>

        {/* Highlights Section */}
        <div className="mt-40 p-1 bg-black rounded-[2.5rem] shadow-hard-lg overflow-hidden">
          <div className="bg-mint p-12 md:p-20 rounded-[calc(2.5rem-0.25rem)] reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="max-w-xl">
                <h3 className="text-4xl md:text-6xl font-display mb-6 tracking-[-0.05em] flex items-center gap-6 uppercase reveal" style={{ transitionDelay: '0.3s' }}>
                  <Star className="text-brand fill-brand w-10 h-10" /> TOP PICKS
                </h3>
                <p className="text-xl text-gray-600 font-medium tracking-tight reveal" style={{ transitionDelay: '0.4s' }}>The most celebrated items from our kitchen, voted by our community.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {highlights.map((h, i) => (
                <div 
                  key={i} 
                  className="bg-white border-2 border-black rounded-2xl p-4 md:p-6 shadow-hard-sm group min-h-[80px] flex items-center overflow-hidden transition-all hover:scale-105 hover:rotate-1 reveal"
                  style={{ transitionDelay: `${0.5 + (i % 8) * 0.05}s` }}
                >
                  <span className="font-bold text-[10px] md:text-sm uppercase tracking-tight leading-tight block group-hover:text-brand transition-colors break-words w-full">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
