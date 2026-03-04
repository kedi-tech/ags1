import { Link } from "react-router-dom";
import { ShoppingBag, Globe, Mail, Phone, Instagram, Twitter, Facebook, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Leaf size={16} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tighter uppercase text-slate-900 dark:text-white">Alliance</span>
                <span className="text-[8px] font-bold tracking-[0.15em] uppercase text-primary">Solution Group</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm mb-6 max-w-xs leading-relaxed">
              Defining modern elegance through curated high-end fashion and lifestyle essentials since 1994.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Shop</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/collection" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Featured</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/track-order" className="hover:text-primary transition-colors">Track Order</Link></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Join our list for exclusive drops and early access.</p>
            <div className="flex gap-2">
              <input
                className="flex-1 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary"
                placeholder="Email address"
                type="email"
              />
              <button className="px-6 py-2 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 Alliance Solution Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
