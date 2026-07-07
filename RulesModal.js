import React, { useState } from 'react';

export default function RandomCheckout() {
  const [num, setNum] = useState(null);
  const generate = () => setNum(Math.floor(Math.random() * 170) + 2);
  
  return (
    <div className="bg-slate-800 p-8 rounded-xl">
      <h2 className="text-2xl">Random Checkout</h2>
      <div className="text-6xl my-6">{num || '---'}</div>
      <button onClick={generate} className="bg-purple-600 px-6 py-2 rounded">New Target</button>
    </div>
  );
}