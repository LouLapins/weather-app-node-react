import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Error from './pages/Error';

function App() {
  return (
    <div className="max-w-[100vw] overflow-hidden min-h-screen bg-cover bg-palace min-w-screen App">
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/error' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
