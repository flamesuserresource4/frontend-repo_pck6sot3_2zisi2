import React, { useEffect, useMemo, useRef, useState } from 'react';

// A dynamic, interactive abacus inspired by soroban principles.
// Users can click beads to move them and see the total update in real-time.
export default function Abacus({ rods = 9 }) {
  // Soroban: each rod has 1 upper bead (value 5) and 4 lower beads (value 1 each)
  const [state, setState] = useState(() =>
    Array.from({ length: rods }, () => ({ upper: false, lower: [false, false, false, false] }))
  );

  const containerRef = useRef(null);

  const total = useMemo(() => {
    return state.reduce((sum, rod) => {
      const lowerCount = rod.lower.filter(Boolean).length;
      const upperVal = rod.upper ? 5 : 0;
      return sum + lowerCount + upperVal;
    }, 0);
  }, [state]);

  // Gentle idle animation: occasionally nudge a random bead for a lively feel
  useEffect(() => {
    const id = setInterval(() => {
      setState((prev) => {
        const copy = prev.map((r) => ({ upper: r.upper, lower: [...r.lower] }));
        const rodIndex = Math.floor(Math.random() * rods);
        const toggleUpper = Math.random() < 0.2; // sometimes touch the upper bead
        if (toggleUpper) {
          copy[rodIndex].upper = !copy[rodIndex].upper;
        } else {
          const beadIndex = Math.floor(Math.random() * 4);
          copy[rodIndex].lower[beadIndex] = !copy[rodIndex].lower[beadIndex];
        }
        return copy;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [rods]);

  const toggleUpper = (i) => {
    setState((prev) => {
      const copy = prev.map((r) => ({ upper: r.upper, lower: [...r.lower] }));
      copy[i].upper = !copy[i].upper;
      return copy;
    });
  };

  const toggleLower = (i, j) => {
    setState((prev) => {
      const copy = prev.map((r) => ({ upper: r.upper, lower: [...r.lower] }));
      copy[i].lower[j] = !copy[i].lower[j];
      return copy;
    });
  };

  const reset = () => {
    setState(Array.from({ length: rods }, () => ({ upper: false, lower: [false, false, false, false] })));
  };

  const randomize = () => {
    setState(Array.from({ length: rods }, () => ({
      upper: Math.random() > 0.7, // less frequent upper bead
      lower: [0, 1, 2, 3].map(() => Math.random() > 0.5),
    })));
  };

  return (
    <div ref={containerRef} className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-slate-600 dark:text-slate-300">Interactive Abacus</div>
        <div className="flex items-center gap-2">
          <button onClick={reset} className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm transition">
            Reset
          </button>
          <button onClick={randomize} className="px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition">
            Shuffle
          </button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-4xl select-none">
        {/* Frame */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-200/70 to-amber-300/70 p-2 shadow-inner">
          <div className="rounded-xl bg-amber-100 p-4">
            {/* Divider bar */}
            <div className="mb-4 h-2 rounded-full bg-amber-300/80 shadow-inner"></div>

            {/* Rods */}
            <div className="grid grid-cols-9 gap-3 md:gap-4">
              {state.map((rod, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Upper bead (value 5) */}
                  <button
                    onClick={() => toggleUpper(i)}
                    className={`relative mb-6 h-10 w-10 rounded-full transition-transform duration-300 ease-out shadow 
                      ${rod.upper ? 'translate-y-3 bg-amber-500' : '-translate-y-1 bg-amber-400'}
                    `}
                    aria-label={`Toggle upper bead on rod ${i + 1}`}
                  >
                    <span className="absolute inset-0 rounded-full bg-black/10" />
                  </button>

                  {/* Lower beads (4 beads of value 1) */}
                  <div className="flex flex-col gap-2">
                    {rod.lower.map((active, j) => (
                      <button
                        key={j}
                        onClick={() => toggleLower(i, j)}
                        className={`relative h-10 w-10 rounded-full transition-transform duration-300 ease-out shadow 
                          ${active ? '-translate-y-2 bg-amber-500' : 'translate-y-1 bg-amber-400'}
                        `}
                        aria-label={`Toggle lower bead ${j + 1} on rod ${i + 1}`}
                      >
                        <span className="absolute inset-0 rounded-full bg-black/10" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-slate-700 shadow">
            <span className="font-semibold">Total:</span>
            <span className="tabular-nums text-lg font-bold text-indigo-700">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
