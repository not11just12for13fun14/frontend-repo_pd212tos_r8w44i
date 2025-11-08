import React from 'react';
import { Github, Twitter, Mail, LineChart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30">
              <LineChart className="h-5 w-5 text-emerald-400" />
            </span>
            <div>
              <p className="font-semibold">Trade Journal</p>
              <p className="text-sm text-slate-400">Bangun kebiasaan baik, tingkatkan performa.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" className="hover:text-white"><Github className="h-5 w-5"/></a>
            <a href="#" className="hover:text-white"><Twitter className="h-5 w-5"/></a>
            <a href="mailto:hello@tradejournal.app" className="hover:text-white"><Mail className="h-5 w-5"/></a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Trade Journal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
