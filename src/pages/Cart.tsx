import { ChevronRight, Trash2, Heart, Minus, Plus, ShieldCheck, Truck, ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, addToWishlist } = useCart();
  
  const tax = cartTotal * 0.08;
  const total = cartTotal + tax;

  if (cart.length === 0) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="size-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-6">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Votre panier est vide</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs text-center">
          Il semble que vous n'ayez pas encore ajouté d'article à votre panier. Parcourez notre collection pour trouver ce qui vous plaît.
        </p>
        <Link to="/collection" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-primary/20 transition-all">
          Commencer vos achats
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-1 flex justify-center py-10 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row max-w-[1200px] flex-1 gap-8">
        {/* Left Column: Cart Items */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                <Link className="hover:text-primary transition-colors" to="/">Accueil</Link>
                <ChevronRight size={14} />
                <span className="text-slate-900 dark:text-slate-100 font-medium">Panier</span>
              </div>
              <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">Votre panier</h1>
              <p className="text-slate-500 dark:text-slate-400">Vous avez {cart.length} article(s) dans votre panier</p>
            </div>
            <Link to="/collection" className="hidden md:flex items-center gap-2 text-slate-500 hover:text-primary font-bold transition-colors mb-2">
              <ArrowLeft size={18} /> Continuer vos achats
            </Link>
          </div>

          <div className="flex flex-col gap-1 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
            {cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex flex-col md:flex-row gap-4 p-6 border-b border-slate-100 dark:border-slate-800 last:border-0">
                <div className="flex items-start gap-4 flex-1">
                  <div className="aspect-square rounded-lg size-24 shrink-0 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-1 flex-col justify-start">
                    <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">{item.name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{item.variant}</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="flex items-center gap-1 text-slate-500 hover:text-red-500 text-sm font-medium transition-colors"
                      >
                        <Trash2 size={16} /> Supprimer
                      </button>
                      <button 
                        onClick={() => {
                          addToWishlist({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image
                          });
                          removeFromCart(item.id, item.variant);
                        }}
                        className="flex items-center gap-1 text-slate-500 hover:text-primary text-sm font-medium transition-colors"
                      >
                        <Heart size={16} /> Enregistrer pour plus tard
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-end md:items-end gap-4 min-w-[120px]">
                  <div className="flex items-center gap-1 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                      className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <input 
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) {
                          updateQuantity(item.id, val, item.variant);
                        }
                      }}
                      className="w-10 text-center bg-transparent border-none focus:ring-0 font-bold text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                      className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer text-primary"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all" to="/collection">
              <ArrowLeft size={18} /> Continuer vos achats
            </Link>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="w-full lg:w-[380px] flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-6">Récapitulatif de la commande</h2>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span>Sous-total ({cart.length} article(s))</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span>Livraison estimée</span>
                <span className="text-green-600 dark:text-green-400 font-medium uppercase text-xs tracking-wider">Offerte</span>
              </div>
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span>Taxes estimées</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-slate-900 dark:text-slate-100 text-lg font-bold">Total</span>
                <span className="text-primary text-2xl font-black">${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Code promo</label>
              <div className="flex gap-2">
                <input className="flex-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary text-sm px-4 outline-none" placeholder="Saisir le code" type="text" />
                <button className="px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">Appliquer</button>
              </div>
            </div>
            <Link to="/checkout" className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
              Passer au paiement <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/collection" className="w-full mt-4 flex items-center justify-center gap-2 text-slate-500 hover:text-primary font-bold transition-colors">
              <ArrowLeft size={18} /> Continuer vos achats
            </Link>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-500 text-xs">
                <ShieldCheck size={16} className="text-slate-400" /> <span>Paiement sécurisé et chiffré</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-xs">
                <Truck size={16} className="text-slate-400" /> <span>Livraison rapide dans toutes les régions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
