import React from 'react';
import { BarChart3, NotebookPen, CalendarCheck2, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: NotebookPen,
    title: 'Entri Jurnal Super Cepat',
    desc: 'Catat buy/sell, pair, strategi, R:R, emosi, hingga screenshot chart dalam hitungan detik.'
  },
  {
    icon: BarChart3,
    title: 'Analitik Performa Mendalam',
    desc: 'Lihat win rate, expectancy, drawdown, best setup, dan insight yang bisa langsung dieksekusi.'
  },
  {
    icon: CalendarCheck2,
    title: 'Rencana & Review Mingguan',
    desc: 'Susun trading plan, checklist pra-market, dan review mingguan untuk jaga disiplin.'
  },
  {
    icon: ShieldCheck,
    title: 'Keamanan & Sinkronisasi',
    desc: 'Data Anda terenkripsi dan tersinkron di semua perangkat sehingga selalu aman.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Semua yang Anda butuhkan untuk jurnal trading modern</h2>
          <p className="mt-3 text-slate-300">Fokus pada proses, bukan sekadar hasil. Kami bantu Anda membangun keunggulan jangka panjang.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition group">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30 mb-4 group-hover:scale-110 transition">
                <f.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
