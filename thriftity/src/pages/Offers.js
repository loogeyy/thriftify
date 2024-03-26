// Import necessary libraries and components
import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Update the path based on your project structure
import './Offers.css'; // Import CSS file for styling

const Offers = () => {
  // Sample data for demonstration purposes
  const cardsData = [
    { 
      title: 'Offer 1', 
      description: 'Description for Offer 1. More details can be added here.',
      category: 'Category 1',
      color: 'Red',
      size: 'M',
      brand: 'Brand X'
    },
    { 
      title: 'Offer 2', 
      description: 'Description for Offer 2. More details can be added here.',
      category: 'Category 2',
      color: 'Blue',
      size: 'L',
      brand: 'Brand Y'
    },
    { 
      title: 'Offer 3', 
      description: 'Description for Offer 3. More details can be added here.',
      category: 'Category 1',
      color: 'Green',
      size: 'S',
      brand: 'Brand Z'
    }
  ];

  // Sample store data for demonstration purposes
  const storeData = [
    { name: 'Store A', price: '$10', distance: '5 miles' },
    { name: 'Store B', price: '$15', distance: '8 miles' },
    { name: 'Store C', price: '$12', distance: '3 miles' },
    { name: 'Store D', price: '$20', distance: '10 miles' },
    { name: 'Store E', price: '$18', distance: '6 miles' },
    { name: 'Store F', price: '$25', distance: '12 miles' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  return (
    <div className="offers-container">
      <h2>Offers</h2>
      <div className="offers-content">
        <div className="card-container">
          <div className="card">
            <h2>{cardsData[currentCardIndex].title}</h2>
            <p>{cardsData[currentCardIndex].description}</p>
            <p>Category: {cardsData[currentCardIndex].category}</p>
            <p>Color: {cardsData[currentCardIndex].color}</p>
            <p>Size: {cardsData[currentCardIndex].size}</p>
            <p>Brand: {cardsData[currentCardIndex].brand}</p>
          </div>
          <div className="description-box">
            <div className="nav-buttons">
              <button onClick={handlePrevClick}>Previous</button>
              <button onClick={handleNextClick}>Next</button>
            </div>
          </div>
        </div>
        <div className="store-list">
          <h3>Matches for this Offer:</h3>
          <div className="scrollable-container">
            {storeData.map((store, index) => (
              <div key={index} className="store-item">
                <p className="store-name">{store.name}</p>
                <p className="store-price">{store.price}</p>
                <p className="store-distance">{store.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Offers;
