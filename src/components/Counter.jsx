'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>{count}</p>
      <button
        className="rounded-lg bg-black p-5"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Incrementar
      </button>
    </div>
  );
}
