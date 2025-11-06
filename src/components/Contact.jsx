import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will reach out soon.');
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Get in touch</h2>
        <p className="text-slate-600">Ask about schedules, fees, and placement. We’re happy to help.</p>
      </div>
      <form onSubmit={onSubmit} className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-slate-700">Parent name</label>
            <input required type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-slate-700">Email</label>
            <input required type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-slate-700">Child age</label>
            <input required type="number" min="4" max="16" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-slate-700">Message</label>
            <textarea rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-emerald-700">{status}</div>
          <button type="submit" className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">Send</button>
        </div>
      </form>
    </section>
  );
}
