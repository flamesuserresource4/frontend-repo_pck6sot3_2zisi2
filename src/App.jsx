import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Program from './components/Program';
import Abacus from './components/Abacus';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <NavBar />
      <main>
        <Hero />
        <section id="abacus" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold md:text-3xl">Practice on a Dynamic Abacus</h2>
            <div className="text-sm text-slate-600">Click beads to move them. Upper bead = 5, lower beads = 1.</div>
          </div>
          <Abacus rods={9} />
        </section>
        <Program />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Sorbon Education. All rights reserved.
      </footer>
    </div>
  );
}
