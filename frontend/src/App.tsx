import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { EditorPage } from './components/EditorPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'editor'>('landing');

  return (
    <div className="bg-white min-h-screen">
      {currentPage === 'landing' ? (
        <LandingPage onStart={() => setCurrentPage('editor')} />
      ) : (
        <EditorPage onBack={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}

export default App;
