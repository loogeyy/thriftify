import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './pages/Home';
import Offers from './pages/Offers';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/upload" element={<Upload/>} />
        </Routes>
    </Router>
  );
}

export default App;