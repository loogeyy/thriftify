import React, { useState } from 'react';
import './UploadPage.css'; // Import CSS file
import Navbar from '../components/Navbar.js';

function UploadPage({ addClothes }) {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const clothes = { type, size, color, brand };
    addClothes(clothes);
    setType('');
    setSize('');
    setColor('');
    setBrand('');
  };

  return (
    <div>
      <div className="upload-container">
        <h1>Upload Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="size">Type:</label>
            <input type="text" id="type" value={type} onChange={handleTypeChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="size">Size:</label>
            <input type="text" id="size" value={size} onChange={handleSizeChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input type="text" id="color" value={color} onChange={handleColorChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" value={brand} onChange={handleBrandChange} required />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
      <Navbar />
    </div>
  );
}

export default UploadPage;