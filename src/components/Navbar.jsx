import React from 'react';
import { LineChart, NotebookPen, Shield, Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30">
              <LineChart className="h-5 w-5 text-emerald-400" />
            </span>
            <span className="text-lg">Trade Journal</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition">Fitur</a>
            <a href="#benefits" className="hover:text-white transition">Manfaat</a>
            <a href="#cta" className="hover:text-white transition">Mulai</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
              <NotebookPen className="h-4 w-4" /> Mulai Jurnal
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white hover:bg-white/10" onClick={() => setOpen(v => !v)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <a href="#features" className="block px-2 py-2 rounded hover:bg-white/10">Fitur</a>
              <a href="#benefits" className="block px-2 py-2 rounded hover:bg-white/10">Manfaat</a>
              <a href="#cta" className="block px-2 py-2 rounded hover:bg-white/10">Mulai</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
