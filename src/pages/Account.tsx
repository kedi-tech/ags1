import { Hand, Package, User, MapPin, Heart, LogOut, CreditCard, Truck, Stars, History } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPriceGNF } from "../utils/currency";

export default function Account() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 p-6 lg:p-10">
      {/* Welcome Banner */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Hand size={40} />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Welcome back, Alex Thompson</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">You have 2 orders in transit and 5 items in your wishlist.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link to="/order-detail" className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            View Latest Order
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3">
          <nav className="flex flex-col gap-1 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-200 dark:border-slate-800">
            <p className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400">Account Menu</p>
            <Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-4 py-3 text-primary font-semibold" to="/account">
              <Package size={20} /> <span>Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" to="/order-detail">
              <History size={20} /> <span>My Orders</span>
            </Link>
            <Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" to="/profile">
              <User size={20} /> <span>Profile Settings</span>
            </Link>
            <Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" to="/addresses">
              <MapPin size={20} /> <span>Address Book</span>
            </Link>
            <Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" to="/wishlist">
              <Heart size={20} /> <span>Wishlist</span>
            </Link>
            <Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors" to="/track-order">
              <Truck size={20} /> <span>Track Order</span>
            </Link>
            <div className="my-4 border-t border-slate-100 dark:border-slate-800"></div>
            <Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors" to="/login">
              <LogOut size={20} /> <span>Sign Out</span>
            </Link>
          </nav>
        </aside>

        {/* Main Dashboard Content */}
        <div className="lg:col-span-9 flex flex-col gap-8">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Spent</span>
                <CreditCard className="text-primary" size={20} />
              </div>
              <p className="text-2xl font-bold">{formatPriceGNF(1248.5)}</p>
              <p className="text-xs text-green-500 font-medium mt-1">+12% from last month</p>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Orders</span>
                <Truck className="text-primary" size={20} />
              </div>
              <p className="text-2xl font-bold">2</p>
              <p className="text-xs text-slate-400 mt-1">Expected: Friday & Monday</p>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Reward Points</span>
                <Stars className="text-primary" size={20} />
              </div>
              <p className="text-2xl font-bold">450 pts</p>
              <p className="text-xs text-primary font-medium mt-1">Earn 50 more for a coupon</p>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold">Recent Orders</h2>
              <Link className="text-sm font-bold text-primary hover:underline" to="/account">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Order ID</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Total</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-center">Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { id: "#ORD-7721", date: "24 oct. 2023", total: formatPriceGNF(124), status: "En cours de traitement", color: "blue" },
                    { id: "#ORD-7610", date: "15 oct. 2023", total: formatPriceGNF(56.5), status: "En transit", color: "amber" },
                    { id: "#ORD-7505", date: "30 sept. 2023", total: formatPriceGNF(210), status: "Livrée", color: "emerald" },
                  ].map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-5 text-sm font-medium">{order.id}</td>
                      <td className="px-6 py-5 text-sm text-slate-500">{order.date}</td>
                      <td className="px-6 py-5 text-sm font-bold">{order.total}</td>
                      <td className="px-6 py-5">
                        <div className={`mx-auto flex w-max items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${order.color === 'blue' ? 'bg-blue-100 text-blue-600' : order.color === 'amber' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${order.color === 'blue' ? 'bg-blue-600' : order.color === 'amber' ? 'bg-amber-600' : 'bg-emerald-600'}`}></span>
                          {order.status}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <Link to="/order-detail" className="text-primary hover:text-primary/80 text-sm font-bold">Details</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
