import { Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">E</span>
            </div>
            <span className="font-display text-xl tracking-tight">Eve's Cafe</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
            Crafting premium morning experiences through ethically sourced beans and artisan bakes.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-brand transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand transition-colors">Terms</a>
          <a href="#" className="hover:text-brand transition-colors">Careers</a>
        </div>

        <div className="text-gray-400 text-sm">
          © 2024 Eve's Coffee & Bakery. Design by NeoStudio.
        </div>
      </div>
    </footer>
  );
}
