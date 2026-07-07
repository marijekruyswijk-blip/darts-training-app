import { useState } from 'react';

function App() {
  const [score, setScore] = useState(501);
  const [turnInput, setTurnInput] = useState('');
  const [history, setHistory] = useState([]);

  // Simpele logica voor checkout-tips
  const getCheckoutTip = (currentScore) => {
    if (currentScore > 170) return "Scoor zoveel mogelijk (Rijg de T20's aaneen!)";
    if (currentScore === 170) return "T20 - T20 - Bullseye";
    if (currentScore === 50) return "Bullseye";
    if (currentScore === 40) return "Tops (D20)";
    if (currentScore === 32) return "D16";
    if (currentScore % 2 === 0 && currentScore <= 40) return `Double ${currentScore / 2}`;
    return "Zet hem weg op een mooie dubbel";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const points = parseInt(turnInput, 10);

    if (isNaN(points) || points < 0 || points > 180) {
      alert("Voer een geldige score in tussen 0 en 180 points.");
      return;
    }

    if (score - points < 0 || score - points === 1) {
      alert("No Score! (Bust)");
      setTurnInput('');
      return;
    }

    const newScore = score - points;
    setScore(newScore);
    setHistory([points, ...history]);
    setTurnInput('');

    if (newScore === 0) {
      alert("Gefeliciteerd! Je hebt de leg uitgegooid! 🎉");
      handleReset();
    }
  };

  const handleReset = () => {
    setScore(501);
    setTurnInput('');
    setHistory([]);
  };

  const average = history.length > 0 
    ? (history.reduce((a, b) => a + b, 0) / history.length).toFixed(1) 
    : "0.0";

  return (
    <div class="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
      <h1 class="text-3xl font-extrabold text-slate-800 mb-2">🎯 Darts Training</h1>
      <p class="text-xs text-gray-400 mb-6 uppercase tracking-widest font-semibold">X01 Score Tracker</p>

      {/* Grote Score Weergave */}
      <div class="bg-slate-900 text-white rounded-2xl py-8 mb-6 shadow-inner relative overflow-hidden">
        <div class="text-6xl font-black tracking-tight">{score}</div>
        <div class="text-xs text-slate-400 mt-1 font-medium">RESTERENDE PUNTEN</div>
      </div>

      {/* Oefen Statieken */}
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-slate-50 p-3 rounded-xl border border-gray-100">
          <div class="text-2xl font-bold text-slate-700">{average}</div>
          <div class="text-xxs text-gray-400 uppercase font-bold tracking-wider">3-Dart Gemiddelde</div>
        </div>
        <div class="bg-slate-50 p-3 rounded-xl border border-gray-100">
          <div class="text-2xl font-bold text-slate-700">{history.length}</div>
          <div class="text-xxs text-gray-400 uppercase font-bold tracking-wider">Beurten gegooid</div>
        </div>
      </div>

      {/* Checkout Tip Container */}
      <div class="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-6 text-sm text-blue-700 font-medium">
        💡 <span class="font-bold">Advies:</span> {getCheckoutTip(score)}
      </div>

      {/* Invoer Formulier */}
      <form onSubmit={handleSubmit} class="mb-4">
        <input
          type="number"
          value={turnInput}
          onChange={(e) => setTurnInput(e.target.value)}
          placeholder="Voer beurt-score in (bijv. 60)"
          class="w-full text-center border-2 border-gray-200 rounded-xl py-3 px-4 text-lg font-semibold focus:outline-none focus:border-blue-500 transition mb-3"
          min="0"
          max="180"
          autoFocus
        />
        <button 
          type="submit" 
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition shadow-md hover:shadow-lg"
        >
          Score Aftrekken
        </button>
      </form>

      {/* Reset Knop */}
      <button 
        onClick={handleReset}
        class="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-2 rounded-xl text-sm transition"
      >
        Herstart (501)
      </button>

      {/* Geschiedenislijst */}
      {history.length > 0 && (
        <div class="mt-6 text-left border-t border-gray-100 pt-4">
          <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Laatste worpen</h3>
          <div class="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
            {history.map((s, idx) => (
              <span key={idx} class="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-gray-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
