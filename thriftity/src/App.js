// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './pages/Home';
import Offers from './pages/Offers';
import UploadPage from './pages/UploadPage';
import ListPage from './pages/ListPage';

import React, { useState } from 'react';
// import UploadPage from './UploadPage';
// import ListPage from './ListPage';
// import Navbar from '../components/Navbar.js';

function App() {
  const [clothesList, setClothesList] = useState([]);

  const addClothes = (clothes) => {
    setClothesList([...clothesList, clothes]);
  };

  const removeClothes = (clothesToRemove) => {
    setClothesList(clothesList.filter(clothes => clothes !== clothesToRemove));
  };

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/offers" element={<Offers clothesList={clothesList} />} />
          <Route path="/uploadPage" element={<UploadPage addClothes={addClothes}/>} />
          <Route path="/listPage" element={<ListPage clothesList={clothesList} removeClothes={removeClothes}/>} />
        </Routes>
    </Router>
  );
}

export default App;