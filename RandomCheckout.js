import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function CheckoutTrainer() {
  const [target, setTarget] = useState(41);
  const [stars, setStars] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const generateTarget = () => {
    let newTarget;
    do {
      newTarget = Math.floor(Math.random() * 60) + 41;
    } while (newTarget === 99 || newTarget > 100);
    setTarget(newTarget);
  };

  const checkAnswer = () => {
    if (input.length > 0) {
        setStars(s => s + 1);
        setFeedback('correct');
        setTimeout(() => { setFeedback(''); generateTarget(); setInput(''); }, 1000);
    }
  };

  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl">Checkout Trainer</h2>
      <div className="text-6xl my-6">{target}</div>
      <input value={input} onChange={e => setInput(e.target.value)} className="text-black p-2 rounded w-full" placeholder="e.g. S9, D16" />
      <button onClick={checkAnswer} className="bg-green-600 mt-4 px-6 py-2 rounded">Submit</button>
      {feedback === 'correct' && <Star className="text-yellow-400 w-12 h-12 mt-4 animate-bounce" />}
      <div className="mt-4">Total Stars: {stars}</div>
    </div>
  );
}