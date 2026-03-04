import { Link } from "react-router-dom";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { categories } from "../data/categories";

export default function Categories() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <Link className="hover:text-primary transition-colors" to="/">Home</Link>
        <ChevronRight size={14} />
        <span className="font-medium text-slate-900 dark:text-white">Categories</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Browse by Category
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Discover our specialized collections curated for quality, performance, and style.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/collection?category=${category.name}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500"
          >
            {/* Image Container */}
            <div className="aspect-[16/9] overflow-hidden relative">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Icon Overlay */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-lg shadow-lg">
                  <category.icon className="text-primary" size={24} />
                </div>
                <span className="text-white font-bold text-lg drop-shadow-md">{category.name}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  {category.count} Products
                </span>
                <div className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  View Collection <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* View All Card */}
        <Link 
          to="/collection"
          className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 p-12 text-center"
        >
          <div className="size-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
            <LayoutGrid className="text-primary" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Explore All</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
            View our entire catalog of premium products across all categories.
          </p>
          <div className="bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary/20 group-hover:bg-primary/90 transition-all">
            Shop Full Collection
          </div>
        </Link>
      </div>
    </div>
  );
}
