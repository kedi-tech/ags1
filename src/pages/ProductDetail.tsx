import React, { useState, MouseEvent } from "react";
import { Star, StarHalf, ShoppingCart, Heart, Truck, ShieldCheck, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Midnight Black");
  const [isAdded, setIsAdded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center', transform: 'scale(1)' });
  const [isHovering, setIsHovering] = useState(false);

  const product = {
    id: Number(id) || 101,
    name: "Urban Tech Waterproof Bomber",
    price: 149.0,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEtsKsAmvzZ_7H6tvXPvnBCcr3segP5dmP7Y0Q4RR172O1gxfwTpM5CBn-0NqZEdUL70qVGI2OXQNkeCUdPK9zE-CFPRtfQBPeB8842M5susxthZLKw5BTxzxX2TYrvgx5e6kP_G1mpl7QeLeTo4rSECrWOe8__Zh0jtK0c2fvDQipKGdliRD3ohjYrLwPLkQ0xtDEo1JwRI6KVVszBk5upxH-ZX4JZIOTUGtepqurnetSG9ug_TctRB3R-cCp8Rr7j3rGYyZQLseb",
      "https://picsum.photos/seed/jacket2/800/1000",
      "https://picsum.photos/seed/jacket3/800/1000",
      "https://picsum.photos/seed/jacket4/800/1000",
    ],
    category: "Outerwear"
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)',
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setZoomStyle({ transformOrigin: 'center', transform: 'scale(1)' });
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      variant: `${selectedColor} | ${selectedSize}`
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category
      });
    }
  };

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
        <Link className="hover:text-primary" to="/">Home</Link>
        <ChevronRight size={14} />
        <Link className="hover:text-primary" to="/collection">{product.category}</Link>
        <ChevronRight size={14} />
        <span className="text-slate-900 dark:text-slate-100 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 h-fit">
          <div className="col-span-2 space-y-4">
            {product.images.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setActiveImageIndex(i)}
                className={`aspect-square rounded-lg overflow-hidden border transition-all ${activeImageIndex === i ? 'border-2 border-primary' : 'border-slate-200 dark:border-slate-800 hover:border-slate-400'} cursor-pointer`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div 
            className="col-span-10 aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-zoom-in relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-200 ease-out"
              src={product.images[activeImageIndex]}
              alt="Main Product"
              style={isHovering ? zoomStyle : {}}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">New Arrival</span>
            <h1 className="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex text-primary">
                {[...Array(4)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                <StarHalf size={18} fill="currentColor" />
              </div>
              <span className="text-slate-500 text-sm">4.8 (124 reviews)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">${product.price.toFixed(2)}</span>
            <span className="text-xl text-slate-400 line-through">$199.00</span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Engineered for the modern nomad. This breathable, water-resistant bomber features reinforced stitching, a modular pocket system, and temperature-regulating lining. Perfect for transition seasons.
          </p>

          <div className="space-y-4">
            <div>
              <span className="text-sm font-bold uppercase tracking-wide">Color: {selectedColor}</span>
              <div className="flex gap-3 mt-2">
                {[
                  { name: "Midnight Black", class: "bg-slate-900" },
                  { name: "Storm Grey", class: "bg-slate-600" },
                  { name: "Navy Blue", class: "bg-blue-900" }
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.class} ring-offset-2 dark:ring-offset-background-dark transition-all ${selectedColor === color.name ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-slate-400'}`}
                  ></button>
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold uppercase tracking-wide">Select Size</span>
                <button className="text-xs text-primary font-medium hover:underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 border rounded-lg text-sm font-medium transition-colors ${selectedSize === size ? 'border-2 border-primary text-primary font-bold' : 'border-slate-200 dark:border-slate-800 hover:border-primary hover:text-primary'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={handleAddToCart}
              className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg ${isAdded ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-primary hover:bg-primary/90 text-white shadow-primary/20'}`}
            >
              {isAdded ? (
                <>Added to Cart!</>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Add to Cart
                </>
              )}
            </button>
            <button
              onClick={handleWishlist}
              className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${inWishlist ? 'bg-red-50 text-red-500 dark:bg-red-950/30' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'}`}
            >
              <Heart size={20} fill={inWishlist ? "currentColor" : "none"} />
              {inWishlist ? "Saved to Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-6 space-y-3">
            <div className="flex gap-3 text-sm">
              <Truck className="text-primary" size={20} />
              <div>
                <p className="font-bold">Free Shipping</p>
                <p className="text-slate-500">Orders over $100. Delivered in 3-5 days.</p>
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <ShieldCheck className="text-primary" size={20} />
              <div>
                <p className="font-bold">Lifetime Warranty</p>
                <p className="text-slate-500">Full replacement for manufacturing defects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
