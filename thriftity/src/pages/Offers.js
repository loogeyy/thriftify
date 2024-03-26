// Import necessary libraries and components
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Offers.css';

const Offers = () => {
  const cardsData = [
    { title: 'Offer 1', description: 'Description for Offer 1. More details can be added here.' },
    { title: 'Offer 2', description: 'Description for Offer 2. More details can be added here.' },
    { title: 'Offer 3', description: 'Description for Offer 3. More details can be added here.' }
  ];

  const storeData = [
    { name: 'Store A', price: '$10', distance: '5 miles' },
    { name: 'Store B', price: '$15', distance: '8 miles' },
    { name: 'Store C', price: '$12', distance: '3 miles' },
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
          <div className="store-container">
            {storeData.map((store, index) => (
              <div key={index} className="store-item">
                <p className="store-name">{store.name}</p>
                <p className="store-info">Price: {store.price} | Distance: {store.distance}</p>
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
