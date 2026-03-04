import { Trash2, ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "motion/react";
import { formatPriceGNF } from "../utils/currency";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  const handleMoveToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
    removeFromWishlist(item.id);
  };

  if (wishlist.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center p-6 py-20 text-center">
        <div className="mb-6 rounded-full bg-slate-100 dark:bg-slate-800 p-8 text-slate-400">
          <Heart size={64} />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Your wishlist is empty</h1>
        <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-md">
          Save items you love to your wishlist and they'll appear here for easy access later.
        </p>
        <Link
          to="/collection"
          className="mt-8 flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
        >
          Explore Collection <ArrowRight size={20} />
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 p-6 lg:p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">My Wishlist</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">You have {wishlist.length} items saved in your wishlist.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {wishlist.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            key={item.id}
            className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-900/90 rounded-full text-red-500 shadow-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                title="Remove from wishlist"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="flex flex-col p-5">
              <div className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                {item.category || "Premium"}
              </div>
              <Link to={`/product/${item.id}`} className="mb-2 text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
                {item.name}
              </Link>
              <div className="mb-6 text-xl font-black text-slate-900 dark:text-white">
                {formatPriceGNF(item.price)}
              </div>
              <button
                onClick={() => handleMoveToCart(item)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-4 py-3 text-sm font-bold text-white dark:text-slate-900 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all"
              >
                <ShoppingCart size={18} /> Move to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
