import React, { useState } from 'react';
import CheckoutTrainer from './components/CheckoutTrainer';
import RandomCheckout from './components/RandomCheckout';
import RulesModal from './components/RulesModal';

function App() {
  const [activeTab, setActiveTab] = useState('trainer');
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-4">
      <header className="flex justify-between items-center pb-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold">Dart Training Hub 🍺</h1>
        <button onClick={() => setShowRules(true)} className="bg-amber-600 px-4 py-2 rounded-lg font-bold hover:bg-amber-500">Rules</button>
      </header>
      
      <nav className="flex gap-4 my-6">
        <button onClick={() => setActiveTab('trainer')} className={`px-4 py-2 rounded ${activeTab === 'trainer' ? 'bg-blue-600' : 'bg-slate-700'}`}>Checkout Trainer 🎯</button>
        <button onClick={() => setActiveTab('random')} className={`px-4 py-2 rounded ${activeTab === 'random' ? 'bg-blue-600' : 'bg-slate-700'}`}>Random Checkout 🎲</button>
      </nav>

      <main>
        {activeTab === 'trainer' ? <CheckoutTrainer /> : <RandomCheckout />}
      </main>

      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </div>
  );
}

export default App;