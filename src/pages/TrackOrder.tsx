import { Search, Package, Truck, CheckCircle, Clock, MapPin, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [trackingInfo, setTrackingInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTrackingInfo({
        id: orderId || "#ORD-7721",
        status: "In Transit",
        estimatedDelivery: "Oct 28, 2023",
        currentLocation: "Distribution Center, New York",
        steps: [
          { status: "Order Placed", date: "Oct 24, 2023, 10:30 AM", completed: true },
          { status: "Processing", date: "Oct 24, 2023, 02:15 PM", completed: true },
          { status: "Shipped", date: "Oct 25, 2023, 09:00 AM", completed: true },
          { status: "In Transit", date: "Oct 26, 2023, 11:45 AM", completed: false, current: true },
          { status: "Out for Delivery", date: "Expected Oct 28", completed: false },
          { status: "Delivered", date: "Expected Oct 28", completed: false },
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 p-6 lg:p-10">
      <div className="mb-10 flex items-center gap-4">
        <Link to="/account" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Track Your Order</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Enter your details to see the real-time status of your package.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Tracking Form */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm sticky top-24">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Order ID</label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    required
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g. #ORD-7721"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                    type="email"
                  />
                </div>
              </div>
              <button
                disabled={loading}
                className="w-full bg-primary py-4 rounded-xl text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Search size={18} /> Track Order
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Tracking Results */}
        <div className="lg:col-span-8">
          {trackingInfo ? (
            <div className="space-y-8">
              {/* Summary Card */}
              <div className="rounded-2xl bg-primary p-8 text-white shadow-xl shadow-primary/20 flex flex-col md:flex-row justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm font-bold uppercase tracking-widest">
                    <Truck size={18} /> Status: {trackingInfo.status}
                  </div>
                  <h2 className="text-3xl font-black tracking-tight">Order {trackingInfo.id}</h2>
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin size={16} /> {trackingInfo.currentLocation}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col justify-center border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Estimated Delivery</p>
                  <p className="text-xl font-black">{trackingInfo.estimatedDelivery}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                <h3 className="text-xl font-black mb-8">Shipping Timeline</h3>
                <div className="space-y-0">
                  {trackingInfo.steps.map((step: any, idx: number) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                        <div className={`size-8 rounded-full flex items-center justify-center z-10 ${step.completed ? 'bg-emerald-500 text-white' : step.current ? 'bg-primary text-white animate-pulse' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                          {step.completed ? <CheckCircle size={16} /> : <Clock size={16} />}
                        </div>
                        {idx !== trackingInfo.steps.length - 1 && (
                          <div className={`w-0.5 h-16 ${step.completed ? 'bg-emerald-500' : 'bg-slate-100 dark:bg-slate-800'}`}></div>
                        )}
                      </div>
                      <div className="pb-8">
                        <h4 className={`font-bold ${step.completed ? 'text-slate-900 dark:text-white' : step.current ? 'text-primary' : 'text-slate-400'}`}>
                          {step.status}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-center p-12">
              <div className="size-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-6">
                <Package size={40} />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">No Tracking Info Yet</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                Enter your order ID and email to see the current status of your shipment.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
