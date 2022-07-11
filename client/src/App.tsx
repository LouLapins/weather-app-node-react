import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Days from './components/Days';
import Day from './components/Day';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/days' element={<Days/>} />
          <Route path="/:date" element={<Day/>} />
          <Route path='/error' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
