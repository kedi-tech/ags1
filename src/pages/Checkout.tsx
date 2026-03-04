import { useState } from "react";
import { ChevronRight, Lock, CreditCard, Wallet, Verified, Truck, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const tax = cartTotal * 0.08;
  const total = cartTotal + tax;

  const handleCompletePurchase = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      // Redirect after a short delay
      setTimeout(() => {
        navigate("/order-detail");
      }, 2000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="size-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-500 mb-6 animate-bounce">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Order Confirmed!</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs text-center">
          Thank you for your purchase. Your order #ORD-88291 has been placed successfully.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Link to="/order-detail" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-primary/20 transition-all text-center">
            View Order Details
          </Link>
          <Link to="/" className="text-primary font-bold py-2 text-center hover:underline">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/collection" className="text-primary font-bold hover:underline">Go to Shop</Link>
      </main>
    );
  }

  return (
    <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-10 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-8">
        <Link className="text-primary text-sm font-medium" to="/cart">Cart</Link>
        <ChevronRight size={14} className="text-slate-400" />
        <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">Shipping & Payment</span>
        <ChevronRight size={14} className="text-slate-400" />
        <span className="text-slate-400 dark:text-slate-600 text-sm font-medium">Confirmation</span>
      </div>

      {/* Header Info */}
      <div className="mb-10">
        <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight mb-2">Checkout</h1>
        <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Step 2 of 3: Shipping and Payment information</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Forms */}
        <div className="flex-1 space-y-12">
          {/* Shipping Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Shipping Address</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">First Name</span>
                <input className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-slate-100 h-12 px-4 outline-none" placeholder="John" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Last Name</span>
                <input className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-slate-100 h-12 px-4 outline-none" placeholder="Doe" type="text" />
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Street Address</span>
                <input className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-slate-100 h-12 px-4 outline-none" placeholder="123 Shopping Lane" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">City</span>
                <input className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-slate-100 h-12 px-4 outline-none" placeholder="New York" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Zip Code</span>
                <input className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-slate-100 h-12 px-4 outline-none" placeholder="10001" type="text" />
              </label>
            </div>
          </section>

          {/* Payment Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Payment Method</h2>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative border-2 border-primary bg-primary/5 rounded-xl p-4 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <CreditCard className="text-primary" size={20} />
                    <div className="size-5 rounded-full border-4 border-primary bg-white"></div>
                  </div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">Credit Card</p>
                  <p className="text-xs text-slate-500">Visa, Mastercard, Amex</p>
                </div>
                <div className="relative border border-slate-200 dark:border-slate-800 rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <Wallet className="text-slate-400" size={20} />
                    <div className="size-5 rounded-full border border-slate-300 dark:border-slate-600"></div>
                  </div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">PayPal</p>
                  <p className="text-xs text-slate-500">Pay via your account</p>
                </div>
              </div>
              <div className="pt-4 space-y-6">
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Card Number</span>
                  <div className="relative">
                    <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-slate-100 h-12 px-4 pr-12 outline-none" placeholder="0000 0000 0000 0000" type="text" />
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </label>
                <div className="grid grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Expiry Date</span>
                    <input className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-slate-100 h-12 px-4 outline-none" placeholder="MM / YY" type="text" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">CVV</span>
                    <input className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-slate-100 h-12 px-4 outline-none" placeholder="123" type="text" />
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:w-[380px]">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex items-center gap-4">
                    <div className="size-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-tight truncate">{item.name}</p>
                      <p className="text-xs text-slate-500 truncate">{item.variant}</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="border-slate-100 dark:border-slate-800 my-6" />
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Taxes</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-900 dark:text-slate-100 text-lg font-bold pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={handleCompletePurchase}
                disabled={isProcessing}
                className={`w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isProcessing ? (
                  <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <Lock size={18} />
                )}
                {isProcessing ? 'Processing...' : 'Complete Purchase'}
              </button>
              <p className="text-center text-slate-400 text-xs mt-4 flex items-center justify-center gap-1">
                <Verified size={14} /> Secure 256-bit SSL Encrypted Payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
