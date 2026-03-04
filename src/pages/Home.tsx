import { ArrowRight, ShoppingCart, Check, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    category: "Limited Edition",
    price: 450.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhqVcMHZSbhg28xkCyf51gwgE-T9WxLC9fjeTJG0UvsIMaoUfbuSNslcvDP6X5v77HrqJy6jvujsOU9sv_E8NwSS7Dqd0d03P5-3XWc7PLlcFbSLVa0jWVGvV4dNG2TCGY3Kekp7JzYtLdzJKy_UE3MJLUyMTmlHfqcodQqM1azhYzVeSaCy-cu6L7JYpnDzcGU-08O7tkyKA9lmsdmIzcEvS_6qM-k208jzzfhYt2135XeG4uqHYvH1lDzRVLXB3Mulmr6N0CIqK-",
  },
  {
    id: 2,
    name: "Cashmere Overcoat",
    category: "New Arrival",
    price: 890.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkeRBmK9PbSUMJaOJsRURaU0OkocM5nBsDItZ9R4YF64UgLhkb3D4XZ9hxftzg3yBUCWNPn210qsNkhcisaXUNIUMNas8o9PXdJUDqeHETv7dVLvHDolMUXyJ8BD6MS6SPfDqiLrDfNGLEIQpuwzrw8W9pEMj2FaPF7UzPxUc5dytnT7h780sgjsg_WZioDHqMRXOIvJTzfQ4yHpqTp024yxy5MuGEXOLRckqaqj6mYA4SOqBX8CelwypKfitF4XIe0jXMrKgSiJEp",
  },
  {
    id: 3,
    name: "Chelsea Boots",
    category: "Handcrafted",
    price: 320.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkrqXTHOy6WqwzWsuYZewW8SjrgvwP3jd7iamwdGLTAMSiO4bXdumk7mdlGqM__7OG1w1U2SCz-tkB3N1zEwWNrqweliKILv8vGNVVeOQJQvUsmT47VPuM8gW8IDE6Il3Rf5VmsRK9-Xrtrr48TmtiH3tVlB_tsUNVcvXStbZwy_ZOgDmoA07SlM_d_TZkzdFi-QB5SgQ5HLzP94Xd2QA6_2Pg9jIYKSCF06mY4mumm9IuPLgBYzwPQV_dtTMy1mxVew6wrpZcgk3q",
  },
  {
    id: 4,
    name: "Structured Handbag",
    category: "Best Seller",
    price: 550.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuOxoj4l2g39MkuRtjD9U50gGwtWcMjcKwKg0Bau_zGmUmM7Bpt1pie_SezB_ZOFeEWx5nffKk3GpQhh2BidIPMhReQBARY8fsBMyXC1MQ8B7Q0XtxMLArfAQ2nnA0CwNw2q0Jaofn8ygTZ_er0e9m0vsmIllcioyflPLmJ3uYQi7AwWeS9Czapx0L2Ayb3gi9HOCMQMTWYCkoYv_ZRdtNl5H4H7ExFMfKt1MGtYOJngtGGQ4sYpo5FKj0judCIdLeAoM1H4HSGRm3",
  },
];

export default function Home() {
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      variant: "Standard"
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleWishlist = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 to-transparent z-10"></div>
          <img
            alt="Hero"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl space-y-6">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase rounded">
              Nouvelle collection 2024
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
              Sublimez votre style au quotidien
            </h2>
            <p className="text-lg text-slate-200 font-light max-w-md">
              Découvrez notre sélection de pièces haut de gamme conçues pour les connaisseurs modernes.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                to="/collection"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-primary/30 transition-all"
              >
                Découvrir la collection
              </Link>
              <Link
                to="/collection"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-8 rounded-lg border border-white/20 transition-all text-center"
              >
                Voir le lookbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold tracking-tight">Nouveautés</h3>
            <p className="text-slate-500 dark:text-slate-400">Les dernières pièces ajoutées à notre collection emblématique.</p>
          </div>
          <Link to="/collection" className="text-primary font-bold flex items-center gap-1 group">
            Tout voir <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer block hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 rounded-xl p-2 -m-2">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 mb-4">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={(e) => handleAddToCart(e, product)}
                  className={`absolute bottom-4 right-4 p-3 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all ${addedId === product.id ? 'bg-emerald-500 text-white opacity-100 translate-y-0' : 'bg-white text-slate-900 hover:bg-primary hover:text-white'}`}
                >
                  {addedId === product.id ? <Check size={20} /> : <ShoppingCart size={20} />}
                </button>
                <button 
                  onClick={(e) => handleWishlist(e, product)}
                  className={`absolute top-4 right-4 p-2 rounded-full shadow-lg opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all ${isInWishlist(product.id) ? 'bg-red-500 text-white opacity-100 translate-y-0' : 'bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white'}`}
                >
                  <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                </button>
              </div>
              <h4 className="font-bold text-lg">{product.name}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{product.category}</p>
              <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative rounded-2xl overflow-hidden h-[400px] bg-primary flex items-center">
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP-irUoUN_6aAhXdQPMyMlvSRwYO0exSF-QB7V3rDf1AIvmQgNeOCmkPugF0xJCxQjocSP_3XDhGY7pDctRfx5z0NseyTIm5JtWjF-1acXJULlnAeWQKVhVhKiXt3H0RzMKrERCV9_t7by0iQvKIPW5K6uO_4D8ce4DkeZ-xGOr3-M36iRwIDxZ7QocZt-5RYyomYvbG46w3qnetAF3OWnCgW58ZjnznGnR16cXDGd4Y_NHEpQ7iAuTY-y-KvDfyEuxqQUsMG6d2Ee"
              alt="Promotion"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 px-12 lg:w-1/2 space-y-6">
            <h3 className="text-4xl font-black text-white leading-tight">Summer Essentials Sale</h3>
            <p className="text-slate-100 text-lg max-w-sm">
              Enjoy up to 30% off on our exclusive seasonal collection. Valid for a limited time only.
            </p>
            <Link to="/collection" className="bg-white text-primary font-black py-4 px-10 rounded-lg hover:bg-slate-100 transition-colors uppercase tracking-widest text-sm inline-block">
              Explore Sale
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
