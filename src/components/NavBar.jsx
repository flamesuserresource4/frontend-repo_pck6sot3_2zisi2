import React from 'react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600"></div>
          <span className="font-semibold tracking-tight text-slate-900">Sorbon</span>
        </a>
        <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
          <a href="#program" className="hover:text-indigo-700">Program</a>
          <a href="#abacus" className="hover:text-indigo-700">Abacus</a>
          <a href="#contact" className="hover:text-indigo-700">Contact</a>
        </nav>
        <a href="#contact" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700">Enroll</a>
      </div>
    </header>
  );
}
