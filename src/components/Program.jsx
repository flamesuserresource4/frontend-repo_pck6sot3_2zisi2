import React from 'react';
import { Brain, CheckCircle2 } from 'lucide-react';

const curriculum = [
  {
    title: 'Foundations',
    points: ['Finger math basics', 'Abacus orientation', 'One- and two-digit sums'],
  },
  {
    title: 'Speed & Accuracy',
    points: ['Number sense drills', 'Carry & borrow mastery', 'Timed challenges'],
  },
  {
    title: 'Visualization',
    points: ['Mental abacus', 'Pattern recognition', 'Multi-step problems'],
  },
];

export default function Program() {
  return (
    <section id="program" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-center gap-3">
        <div className="rounded-lg bg-indigo-600/10 p-2 text-indigo-700">
          <Brain />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">A clear path to mental math confidence</h2>
          <p className="text-slate-600">Step-by-step modules designed for ages 6–14.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {curriculum.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">{item.title}</h3>
            <ul className="space-y-2 text-slate-600">
              {item.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 text-emerald-600" size={18} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
