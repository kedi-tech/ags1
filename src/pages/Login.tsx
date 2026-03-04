import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-[480px] bg-white dark:bg-slate-900/50 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight text-center pb-8">Welcome Back</h1>
        
        {/* Tabs */}
        <div className="pb-8">
          <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8">
            <button className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-primary text-slate-900 dark:text-slate-100 pb-3">
              <p className="text-sm font-bold leading-normal">Sign In</p>
            </button>
            <button className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-3 hover:text-primary transition-colors">
              <p className="text-sm font-bold leading-normal">Create Account</p>
            </button>
          </div>
        </div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3 pb-8">
          <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 h-12 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD6-OGVurtqqEW8atNTzL4KvcwTAT34SRApoMcINhc6KXyCnAoXOaBt20DgKnZqcvO3yr8SEYaXcaMDm7Ev1zbnVtC0I9pJsR0p74NnX6E5dl8Jbn10efEBTSaEoxw3q3qukmtgzseKWMEen4ZLuwijuSdsYeJLNqF2kpuVxmfq8Ul9LyEghGRAxk5H4M3bWwpq9nCDPaA1DKOBP49c268vrYsFMPCx4YSjiNQmrrda0rFeEK9T2A49_0vYFVsY6vnF-JqgVKx2uje" />
            <span className="text-slate-700 dark:text-slate-200 font-medium">Continue with Google</span>
          </button>
        </div>

        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          <span className="flex-shrink mx-4 text-slate-400 text-xs uppercase tracking-widest font-bold">Or with email</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
        </div>

        {/* Login Form */}
        <form className="space-y-4 pt-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Email Address</label>
            <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 px-4 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400" placeholder="name@example.com" type="email" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Password</label>
              <a className="text-primary text-xs font-bold hover:underline" href="#">Forgot password?</a>
            </div>
            <div className="relative">
              <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 pl-4 pr-12 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400" placeholder="Enter your password" type={showPassword ? "text" : "password"} />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 py-2">
            <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary w-4 h-4 bg-transparent" id="remember" type="checkbox" />
            <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="remember">Remember me for 30 days</label>
          </div>
          <button className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary/90 shadow-md shadow-primary/20 transition-all" type="submit">
            Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Don't have an account? <a className="text-primary font-bold hover:underline" href="#">Create an account</a>
          </p>
        </div>
      </div>
    </main>
  );
}
