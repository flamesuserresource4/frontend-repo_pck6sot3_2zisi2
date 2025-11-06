import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#c7d2fe_0%,transparent_40%),radial-gradient(circle_at_80%_30%,#fde68a_0%,transparent_35%),radial-gradient(circle_at_50%_100%,#ddd6fe_0%,transparent_35%)] opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs text-indigo-700 backdrop-blur">
            <Star size={14} />
            Trusted by parents, loved by kids
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] text-slate-900 md:text-6xl">
            Sorbon Education for Mental Arithmetic
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl">
            Build lightning-fast calculation skills through playful practice and a modern take on the classic abacus.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#abacus" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow hover:bg-indigo-700">
              <Rocket size={18} /> Try the Abacus
            </a>
            <a href="#program" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50">
              Explore Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
