import { Link } from "react-router-dom";
import { ShoppingBag, Globe, Mail, Phone, Instagram, Twitter, Facebook, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-2 group">
             <img src="/ags_logo.png" alt="Alliance Solution Group logo" className="h-28 w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform" />
            </Link>
            <p className="text-slate-500 text-sm mb-6 max-w-xs leading-relaxed">
              Définir l'élégance moderne avec une sélection de mode et d'articles de vie haut de gamme depuis 1994.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Boutique</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/collection" className="hover:text-primary transition-colors">Tous les produits</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Nouveautés</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Sélection</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Promotions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Assistance</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Centre d'aide</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Informations de livraison</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Retours</Link></li>
              <li><Link to="/track-order" className="hover:text-primary transition-colors">Suivre une commande</Link></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Rejoignez notre liste pour des nouveautés exclusives et un accès anticipé.</p>
            <div className="flex gap-2">
              <input
                className="flex-1 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary"
                placeholder="Adresse e-mail"
                type="email"
              />
              <button className="px-6 py-2 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 transition-colors">
                Rejoindre
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Alliance Solution Group. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
