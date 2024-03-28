import React, { useState } from 'react';
import './UploadPage.css'; // Import CSS file
import Navbar from '../components/Navbar.js';
import BackButton from '../components/BackButton.js';

function UploadPage({ addClothes }) {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');

  const categories = ['Shirt', 'Pants', 'Shoes', 'Dress']; // Example categories
  const sizes = ['XS', 'S', 'M', 'L', 'XL']; // Example sizes

  const handleItemChange = (event) => {
    setItem(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
    const clothes = { item, category, size, color, brand };
    addClothes(clothes);
    setItem('');
    setCategory('');
    setSize('');
    setColor('');
    setBrand('');
  };

  return (
    <div>
      <BackButton />
      <div className="upload-container">
        <h1>Upload Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="item">Item:</label>
            <input type="text" id="type" value={item} onChange={handleItemChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" value={category} onChange={handleCategoryChange} required>
              <option value="">Select category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="size">Size:</label>
            <select id="size" value={size} onChange={handleSizeChange} required>
              <option value="">Select size</option>
              {sizes.map((sz, index) => (
                <option key={index} value={sz}>{sz}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input type="text" id="color" value={color} onChange={handleColorChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" value={brand} onChange={handleBrandChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Navbar />
    </div>
  );
}

export default UploadPage;