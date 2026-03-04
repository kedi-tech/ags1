import { MapPin, Mail, Phone, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight sm:text-5xl mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Have a question about an order or a specific product? We're here to help you 24/7. Choose your preferred way to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col gap-10">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Get in Touch</h2>
              
              <div className="flex gap-5 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:scale-[1.01]">
                <div className="flex-shrink-0 size-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Visit Our Office</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">123 Commerce Way, Tech City, ST 12345, United States</p>
                  <a className="text-primary text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:underline" href="#">
                    Get Directions <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:scale-[1.01]">
                <div className="flex-shrink-0 size-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Email Us</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">support@ags.com</p>
                  <p className="text-slate-500 text-xs mt-1">Typical response time: Under 2 hours</p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:scale-[1.01]">
                <div className="flex-shrink-0 size-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Call Us</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">+1 (555) 000-1234</p>
                  <p className="text-slate-500 text-xs mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Name</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Return / Exchange</option>
                  <option>Wholesale</option>
                  <option>Technical Issue</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" placeholder="How can we help you today?" rows={5}></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20" type="submit">
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
