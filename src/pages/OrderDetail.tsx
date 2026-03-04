import { ChevronRight, Download, CheckCircle, Truck, Package, MapPin, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPriceGNF } from "../utils/currency";

export default function OrderDetail() {
  return (
    <main className="flex flex-1 justify-center py-8">
      <div className="layout-content-container flex flex-col max-w-[1024px] flex-1 px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <Link className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary" to="/">Home</Link>
          <ChevronRight size={14} className="text-slate-400" />
          <Link className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary" to="/account">My Orders</Link>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">Order #ORD-88291</span>
        </div>

        {/* Header Info */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">Order Details</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Order #ORD-88291 • Placed on October 24, 2023</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
            <Download size={18} />
            <span>Download Invoice</span>
          </button>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
            <Truck className="text-primary" size={20} />
            Tracking Status
          </h3>
          <div className="relative flex justify-between">
            <div className="absolute top-5 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -z-0"></div>
            <div className="absolute top-5 left-0 w-3/4 h-1 bg-primary -z-0"></div>
            
            {[
              { label: "Created", time: "Oct 24, 10:00 AM", icon: <CheckCircle size={20} />, active: true },
              { label: "Confirmed", time: "Oct 24, 11:30 AM", icon: <CheckCircle size={20} />, active: true },
              { label: "Shipped", time: "Oct 25, 02:00 PM", icon: <Truck size={20} />, active: true },
              { label: "Delivered", time: "Estimated Oct 27", icon: <Package size={20} />, active: false },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center group">
                <div className={`size-10 rounded-full flex items-center justify-center mb-3 shadow-lg ring-4 ring-white dark:ring-slate-900 ${step.active ? 'bg-primary text-white shadow-primary/30' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                  {step.icon}
                </div>
                <span className={`text-sm font-bold ${step.active ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400'}`}>{step.label}</span>
                <span className="text-xs text-slate-500">{step.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold">Items in this Order (3)</h3>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { name: "Nike Air Zoom Pegasus 38", price: 120.0, variant: "Crimson Red | US 10", img: "https://picsum.photos/seed/nike/200/200" },
                  { name: "Minimalist Quartz Watch", price: 85.0, variant: "Silver/White | 40mm", img: "https://picsum.photos/seed/watch/200/200" },
                  { name: "Wireless Headphones", price: 299.0, variant: "Phantom Black", img: "https://picsum.photos/seed/headphones/200/200" },
                ].map((item, i) => (
                  <div key={i} className="p-6 flex gap-4">
                    <div className="size-24 rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden">
                      <img className="w-full h-full object-cover" src={item.img} alt={item.name} referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.name}</h4>
                        <span className="font-bold text-slate-900 dark:text-slate-100">{formatPriceGNF(item.price)}</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">{item.variant}</p>
                      <p className="text-sm text-slate-500 mt-1">Qty: 1</p>
                      <button className="text-primary text-sm font-medium mt-3 hover:underline">Write a Review</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-primary" size={20} />
                Shipping Address
              </h3>
              <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <p className="font-bold text-slate-900 dark:text-slate-100">Alex Thompson</p>
                <p>1234 Emerald Avenue, Suite 405</p>
                <p>San Francisco, CA 94105</p>
                <p>United States</p>
                <p className="pt-2">+1 (555) 012-3456</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <CreditCard className="text-primary" size={20} />
                Payment Method
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-7 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center border border-slate-200 dark:border-slate-700">
                  <CreditCard className="text-primary" size={16} />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-900 dark:text-slate-100">Visa ending in 4242</p>
                  <p className="text-slate-500">Exp: 08/26</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
