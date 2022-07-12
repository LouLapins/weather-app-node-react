import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/error' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
