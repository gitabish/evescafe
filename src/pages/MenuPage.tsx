import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Star } from 'lucide-react';

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
    <div className="pt-32 pb-24 bg-mint min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl text-left">
            <h1 className="text-6xl md:text-8xl font-display tracking-tighter mb-4">OUR MENU</h1>
            <p className="text-xl text-gray-600 font-medium">Explore our curated selection of specialty brews and unique treats.</p>
          </div>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 border-2 border-black rounded-full font-bold transition-all ${
                  activeCategory === cat ? 'bg-brand text-white shadow-hard-sm -translate-y-1' : 'bg-white hover:bg-brand/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div 
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border-2 border-black p-6 shadow-hard group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-brand-light p-2 border border-black rounded-lg group-hover:rotate-6 transition-transform">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <span className="font-display text-lg text-brand">{item.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 tracking-tight">{item.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Highlights Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-display mb-10 tracking-tight flex items-center gap-4">
            <Star className="text-brand fill-brand" /> HIGHLIGHTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white border-2 border-black rounded-xl p-4 shadow-hard-sm font-bold text-xs uppercase tracking-tight flex items-center justify-center text-center">
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
