import React, { useState } from 'react';
import './UploadPage.css'; // Import CSS file
import Navbar from '../components/Navbar.js';
import { useNavigate } from 'react-router-dom';

function UploadPage({ addClothes, clothesList }) {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false); // State for controlling the visibility of the popup

  const categories = ['Shirt', 'Pants', 'Shoes', 'Dress', 'Shorts', 'Skirt', 'Outerwear']; // Example categories
  const sizes = ['XS', 'S', 'M', 'L', 'XL']; // Example sizes
  const conditions = ['Poor', 'Average', 'Excellent']; // Example conditions

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

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = (event) => {
    event.preventDefault();
    const clothes = { item, category, size, color, brand, condition };
    addClothes(clothes);
    setItem('');
    setCategory('');
    setSize('');
    setColor('');
    setBrand('');
    setCondition('');
    setUploadSuccess(true); // Set upload success to true when the form is submitted
    // Reset upload success after some time (e.g., 3 seconds)

    const newIndex = clothesList.length;
    // Use navigate to navigate to the desired URL
    navigate(`/offers/${newIndex}`);


    setTimeout(() => {
      setUploadSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg">
      <div className='title-container'>
        <h2 className="list-title">upload</h2>
      </div>
      <div className="bg">
        <div className="upload-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="item">Item:</label>
              <input type="text" id="type" value={item} onChange={handleItemChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select className="dropdown" value={category} onChange={handleCategoryChange} required>
                <option value="">Select category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="size">Size:</label>
              <select className="dropdown" value={size} onChange={handleSizeChange} required>
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
            <div className="form-group">
              <label htmlFor="condition">Condition:</label>
              <select className="dropdown" value={condition} onChange={handleConditionChange} required>
                <option value="">Select condition</option>
                {conditions.map((cd, index) => (
                  <option key={index} value={cd}>{cd}</option>
                ))}
              </select>
            </div>
            <button className="upload-button" type="submit">submit</button>
            {uploadSuccess && <div className="form-group">Upload successful!</div>} 
          </form>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default UploadPage;
