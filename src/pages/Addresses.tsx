import { MapPin, Plus, Trash2, Edit2, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Addresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      name: "Alex Thompson",
      street: "123 Fashion Ave, Suite 400",
      city: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      name: "Alex Thompson",
      street: "500 Tech Plaza, Floor 12",
      city: "San Francisco, CA 94105",
      phone: "+1 (555) 987-6543",
      isDefault: false,
    },
  ]);

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 p-6 lg:p-10">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link to="/account" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Address Book</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Manage your shipping and billing addresses.</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          <Plus size={20} /> Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`relative rounded-2xl bg-white dark:bg-slate-900 border p-8 shadow-sm transition-all ${address.isDefault ? 'border-primary ring-1 ring-primary' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}`}
          >
            {address.isDefault && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                <Check size={12} /> Default
              </div>
            )}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                <MapPin size={20} />
              </div>
              <h3 className="font-black text-lg text-slate-900 dark:text-white">{address.type}</h3>
            </div>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <p className="font-bold text-slate-900 dark:text-white">{address.name}</p>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p className="pt-2">{address.phone}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <Edit2 size={16} /> Edit
              </button>
              <button
                onClick={() => handleDelete(address.id)}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-bold text-red-500 hover:text-red-600 transition-colors"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}

        {/* Add New Placeholder */}
        <button className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-8 text-slate-400 hover:border-primary hover:text-primary transition-all group">
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-primary/10 transition-colors">
            <Plus size={32} />
          </div>
          <p className="font-bold">Add New Address</p>
        </button>
      </div>
    </main>
  );
}
