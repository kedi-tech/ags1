import { Link } from "react-router-dom";
import { ShoppingBag, Search, ShoppingCart, User, Heart, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import { useCart } from "../context/CartContext";
import { categories } from "../data/categories";
// import agsLogo from "../../assets/c__Users_Ibrahim_D_AppData_Roaming_Cursor_User_workspaceStorage_6945c61f85a84919727bc0189e1ee7a4_images_ags_logo-853db61f-1b57-48c0-a4f6-1f598ade9219.png";

export default function Navbar() {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 shrink-0 group">
            <img
              src="/ags_logo.png"
              alt="Alliance Solution Group logo"
              className="h-28 w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform"
            />
          </Link>

          {/* Search - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm outline-none"
                placeholder="Rechercher des produits haut de gamme..."
                type="text"
              />
            </div>
          </div>

          {/* Nav Links - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link to="/collection" className="hover:text-primary transition-colors whitespace-nowrap">Tous les produits</Link>
            
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/collection?category=${category.name}`} 
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/wishlist" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400">
              <Heart size={20} />
            </Link>
            <Link to="/account" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400">
              <User size={20} />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative text-slate-600 dark:text-slate-400">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="relative w-full mb-6 md:hidden">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Rechercher des produits..."
                  type="text"
                />
              </div>
              <nav className="flex flex-col gap-4 text-lg font-bold">
                <Link onClick={() => setIsMenuOpen(false)} to="/collection" className="hover:text-primary transition-colors">Tous les produits</Link>
                
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    onClick={() => setIsMenuOpen(false)}
                    to={`/collection?category=${category.name}`}
                    className="hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}

                <Link onClick={() => setIsMenuOpen(false)} to="/wishlist" className="hover:text-primary transition-colors">Liste de souhaits</Link>
                <Link onClick={() => setIsMenuOpen(false)} to="/account" className="hover:text-primary transition-colors">Mon compte</Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
