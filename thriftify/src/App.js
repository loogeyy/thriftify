// import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './pages/Home';
import Offers from './pages/Offers';
import UploadPage from './pages/UploadPage';
import ListPage from './pages/ListPage';

function App() {
  const [clothesList, setClothesList] = useState([]);
  const [index, setIndex] = useState(0);

  const changeIndex = (i) => {
    console.log("changing index to...", i)
    setIndex(i);
  }

  const addClothes = (clothes) => {
    setClothesList([...clothesList, clothes]);
  };

  const removeClothes = (clothesToRemove) => {
    setClothesList(clothesList.filter(clothes => clothes !== clothesToRemove));
  };

  return (
    <Router>
        <Routes>
          <Route path="/thriftify" element={<Home />} />
          <Route path="/offers/:itemIndex?" element={<Offers clothesList={clothesList} index={index} changeIndex={changeIndex}/>} />
          <Route path="/upload" element={<UploadPage addClothes={addClothes} clothesList={clothesList} />} />
          <Route path="/list" element={<ListPage clothesList={clothesList} removeClothes={removeClothes} index={index} changeIndex={changeIndex}/>} />
        </Routes>
    </Router>
  );
}

export default App;