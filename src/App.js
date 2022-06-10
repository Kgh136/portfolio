
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}


export default App;
