import { useState, useEffect } from "react";
import { Filter, ChevronRight, ShoppingCart, Heart, Star, Check, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Essential White Watch",
    category: "Timepieces",
    price: 89.0,
    rating: 4.5,
    reviews: 128,
    tag: "Best Seller",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHCARk52ftQc9KMEEtYIcOpzziaanGk3HAyB8ySJadkvYZ6-IxU7ujaPRZZpFqQS-nYQ7_kZ1dBt8hhGgS9sxvFR1Z6cJO534cfqbO0aqJjICiVS4BFa8_B9t57qICwNVvj8AWHq5W1HKmmX2bU0SV_okslZ7ms8W-PtIKGHwnQe6bkp76_5gAYp9ceUEVDsvqixsoUbBqc8ijFDxldPymw-p7WT2_7ULyDKY0aKSBweiNpqC4UwseBGE4ajB41dHBQbkG3Fgcn2qV",
  },
  {
    id: 2,
    name: "Noise-Cancelling Headphones",
    category: "Audio",
    price: 299.0,
    rating: 5.0,
    reviews: 2400,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAjRAaYXOQhZlac24fCIR8jiRED-HNY8gPnFcNP_2Rb3ldn_F6KZ4wTW2gEITOi01g6iS_xLfNMpUgY1nyT6d8Gz0OH6n-xXhj_hWb6iL-6iesOPYXlzbsDkrN-fc7ZAyM3YpxPW75XMMDJAHGfOqrUdifdtmRYXZj9JdjVY9J_pbILzdv50hkMDvV4_60bLZoBEkU6jforG8Q8drXpLPA7qVE3FPfgjLaeJZdmCzA0heoBqRG_b04HA0ba2oGO9mK7pUSSLhgI-I3",
  },
  {
    id: 3,
    name: "UltraBoost Runner X",
    category: "Footwear",
    price: 144.0,
    oldPrice: 180.0,
    rating: 4.2,
    reviews: 856,
    tag: "Sale 20%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHkZRBK9ZOQ5VjOoGDtKh2kb5OJgQM2Bc4tiUxcyXCcgvD3SyGIUV2rVrY9QgN0phH6RvtEIGS66P8px784JaXpO7jEz9RtYWLjPS3Wn3uuH1vfC7u2vMCPBdsIzDb60450oIlIsfL6DZExSbZUIGbNVQO8iSUJosbraUZDvaHk664RspbNET_opcGAgi_2_5MWyEdoziVqctSeX6-Zms_EuZaPHcwVvJjvO_Wn_W85mATjE_9UHtbwi3XtLcE19V2STLhSZE-APZr",
  },
  {
    id: 4,
    name: "Vintage Instant Camera",
    category: "Photography",
    price: 120.0,
    rating: 3.5,
    reviews: 42,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs3rLOOVlyUS8lsDLbEwI7lugBK3nK5GyAuKxAwvs_EtzZFkRr1hm_b52BpSeC5wmBoCVpUZx7oOrKxUnL7RPfY8WQflTr43fsIvCwS8p0LEpK6OvYPxxpsjllY3yhOD6kwYk7QEIaEXEWq-XOZFE-KnjT2rbFv5rvIDIYYz0mGHtuv4zXU2x3X3ziDWGxmCV8QarI0LNFkyrmFN1D0N_co4IFekavcYQs0T7tKdWNhp0TJpzlzUoTeZVxrBGySgNhaxPOATUgz591",
  },
  {
    id: 5,
    name: "Bamboo Travel Mug",
    category: "Lifestyle",
    price: 24.0,
    rating: 5.0,
    reviews: 550,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXI0FiLk9bszX_j2NF3MFXby0Y6e2PUJ1EPgB0WtQcpzzk6niMV-bpShXL-8D2V7QKRSy7Nllv8fKwlM8Wb1DrmpMRSKyIRKncH3dRVVE59JbyEqdrDe1D_o_HGPvDpCfernTCWtTuoimI1AU-zj3mmQQUytOOEVDnpzWau3ZviLUafdsZZ08VE3pMWEeO8IbzDvOyNYjfv7D3_mmEkjcHwSqz6ufTFZESBZU39BqaT3vLeauMhlARsRkwjF0wTB3stk5krSBKquKV",
  },
  {
    id: 6,
    name: "Classic Canvas High-Tops",
    category: "Footwear",
    price: 65.0,
    rating: 4.8,
    reviews: 1200,
    tag: "New",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ibJ218jw2DVHdU4lHTVqWz8cdJB1B8QWNu2s_JwK4r-1oKcV8vGZDvRH9NAryH2Ekwg0XRnz7McGmxsdrQkQsW6lCmunVARUDPOBtdOIfSoMSAW65mXQyHnIZG3pXaBRPz3TyK39DyZbLuLndcnXgodv7q-XN4A52tJpXNlIRFlNC7gKyRSYbPlhXVrSd_217_ZKtYp4TKAjRjIFrYvXppLe2_9HibHpjfUzbUiRWf8mpoZrG38jgU4sl5ZiDjdjeBx-25_DcOLh",
  },
];

export default function Collection() {
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [addedId, setAddedId] = useState<number | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("Meilleures ventes");

  // Sync with URL params on mount
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  // Get unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));

  const priceRanges = [
    { label: "Moins de 50 $", min: 0, max: 50 },
    { label: "50 $ - 100 $", min: 50, max: 100 },
    { label: "100 $ - 200 $", min: 100, max: 200 },
    { label: "200 $ et plus", min: 200, max: Infinity },
  ];

  const handleAddToCart = (product: any) => {
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

  const handleWishlist = (product: any) => {
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

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const togglePriceRange = (rangeLabel: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(rangeLabel) ? prev.filter(r => r !== rangeLabel) : [...prev, rangeLabel]
    );
  };

  // Filtering Logic
  const filteredProducts = products.filter(product => {
    // Category Filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }

    // Price Filter
    if (selectedPriceRanges.length > 0) {
      const matchesPrice = selectedPriceRanges.some(rangeLabel => {
        const range = priceRanges.find(r => r.label === rangeLabel);
        if (!range) return false;
        return product.price >= range.min && product.price < range.max;
      });
      if (!matchesPrice) return false;
    }

    // Rating Filter
    if (minRating !== null && product.rating < minRating) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === "Prix : du plus bas au plus élevé") return a.price - b.price;
    if (sortBy === "Prix : du plus élevé au plus bas") return b.price - a.price;
    if (sortBy === "Note : de la plus haute à la plus basse") return b.rating - a.rating;
    if (sortBy === "Note : de la plus basse à la plus haute") return a.rating - b.rating;
    if (sortBy === "Nouveautés") return b.id - a.id;
    return 0; // Default: Best Selling (original order)
  });

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <Link className="hover:text-primary" to="/">Accueil</Link>
        <ChevronRight size={14} />
        <span className="font-medium text-slate-900 dark:text-white">Tous les produits</span>
      </nav>

      {/* Page Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Notre collection</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Découvrez notre sélection de produits de haute qualité.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <Filter size={16} />
            Filtres
          </button>
          <label className="flex items-center gap-3">
            <span className="text-sm font-medium whitespace-nowrap">Trier par :</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-2 pl-4 pr-10 text-sm focus:border-primary focus:ring-primary outline-none"
            >
              <option>Meilleures ventes</option>
              <option>Nouveautés</option>
              <option>Prix : du plus bas au plus élevé</option>
              <option>Prix : du plus élevé au plus bas</option>
              <option>Note : de la plus haute à la plus basse</option>
              <option>Note : de la plus basse à la plus haute</option>
            </select>
          </label>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Mobile Filters Overlay */}
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)} />
            <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white dark:bg-slate-900 p-6 shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">Filtres</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                  <X size={20} />
                </button>
              </div>
              <FilterSidebar 
                categories={categories}
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                priceRanges={priceRanges}
                selectedPriceRanges={selectedPriceRanges}
                togglePriceRange={togglePriceRange}
                minRating={minRating}
                setMinRating={setMinRating}
                clearAll={() => {
                  setSelectedCategories([]);
                  setSelectedPriceRanges([]);
                  setMinRating(null);
                  setSearchParams({});
                }}
              />
            </div>
          </div>
        )}

        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar 
            categories={categories}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            priceRanges={priceRanges}
            selectedPriceRanges={selectedPriceRanges}
            togglePriceRange={togglePriceRange}
            minRating={minRating}
            setMinRating={setMinRating}
            clearAll={() => {
              setSelectedCategories([]);
              setSelectedPriceRanges([]);
              setMinRating(null);
              setSearchParams({});
            }}
          />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="h-20 w-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                <Filter size={40} className="text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Aucun produit trouvé</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Essayez d'ajuster vos filtres pour trouver ce que vous recherchez.</p>
              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedPriceRanges([]);
                  setMinRating(null);
                }}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Réinitialiser tous les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
              <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-square w-full overflow-hidden bg-slate-100 relative">
                  <img
                    className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                  />
                  <button 
                    onClick={() => handleWishlist(product)}
                    className={`absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-full shadow-lg transition-colors ${isInWishlist(product.id) ? 'bg-red-500 text-white' : 'bg-white/80 backdrop-blur text-slate-900 hover:bg-primary hover:text-white'}`}
                  >
                    <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                  </button>
                  {product.tag && (
                    <div className="absolute bottom-4 left-4">
                      <span className={`rounded px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white ${product.tag.includes('Sale') ? 'bg-red-500' : 'bg-primary'}`}>
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{product.category}</p>
                  <Link to={`/product/${product.id}`} className="text-base font-bold text-slate-900 dark:text-white mb-2 hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">({product.reviews})</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-primary">${product.price.toFixed(2)}</span>
                      {product.oldPrice && <span className="text-xs text-slate-400 line-through">${product.oldPrice.toFixed(2)}</span>}
                    </div>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className={`rounded-lg p-2 transition-all ${addedId === product.id ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-primary hover:bg-primary hover:text-white'}`}
                    >
                      {addedId === product.id ? <Check size={20} /> : <ShoppingCart size={20} />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);
}

function FilterSidebar({ 
  categories, 
  selectedCategories, 
  toggleCategory, 
  priceRanges, 
  selectedPriceRanges, 
  togglePriceRange, 
  minRating, 
  setMinRating, 
  clearAll 
}: any) {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Filter size={20} />
            Filtres
          </h3>
          {(selectedCategories.length > 0 || selectedPriceRanges.length > 0 || minRating !== null) && (
            <button 
              onClick={clearAll}
              className="text-xs font-bold text-primary hover:underline"
            >
              Tout effacer
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-6">
          <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Catégories</h4>
          <div className="space-y-3">
            {categories.map((category: string) => (
              <label key={category} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  className="rounded border-slate-300 text-primary focus:ring-primary" 
                  type="checkbox" 
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span className={`text-sm transition-colors ${selectedCategories.includes(category) ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-400 group-hover:text-primary'}`}>
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-6">
          <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Tranche de prix</h4>
          <div className="space-y-3">
            {priceRanges.map((range: any) => (
              <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  className="rounded border-slate-300 text-primary focus:ring-primary" 
                  type="checkbox" 
                  checked={selectedPriceRanges.includes(range.label)}
                  onChange={() => togglePriceRange(range.label)}
                />
                <span className={`text-sm transition-colors ${selectedPriceRanges.includes(range.label) ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-400 group-hover:text-primary'}`}>
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-6">
          <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Note minimale</h4>
          <div className="space-y-3">
            {[4, 3, 2].map((rating) => (
              <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  className="rounded-full border-slate-300 text-primary focus:ring-primary" 
                  type="radio" 
                  name={`rating-${categories.length}`} // unique name for radio group
                  checked={minRating === rating}
                  onChange={() => setMinRating(rating)}
                />
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className={`text-sm transition-colors ${minRating === rating ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-400 group-hover:text-primary'}`}>
                    et plus
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
