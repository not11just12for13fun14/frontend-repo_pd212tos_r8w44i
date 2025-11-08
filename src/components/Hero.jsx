import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Spline scene="https://prod.spline.design/8YJVQm0kqj8yQ-lO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Finansial • Jurnaling • Trading
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Catat, evaluasi, dan tingkatkan performa trading Anda
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Platform jurnaling trading berbahasa Indonesia untuk mencatat setiap transaksi,
              menganalisis strategi, dan menjaga disiplin finansial Anda. Didesain untuk trader
              retail hingga profesional.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
                Mulai Gratis
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
                Lihat Fitur
              </a>
            </div>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 text-sm">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Entri jurnal cepat & rapi</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Analitik performa otomatis</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Dukungan multi-asset</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Sinkronisasi lintas perangkat</li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">Ringkasan Mingguan</p>
                  <span className="text-xs text-emerald-300">+7.8%</span>
                </div>
                <div className="h-32 rounded-lg bg-gradient-to-tr from-emerald-500/20 via-emerald-400/10 to-transparent ring-1 ring-white/10" />
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-slate-400">Win Rate</p>
                    <p className="text-xl font-semibold text-white">62%</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Avg R:R</p>
                    <p className="text-xl font-semibold text-white">1:2.4</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Trades</p>
                    <p className="text-xl font-semibold text-white">18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
