import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Offers.css';

const Offers = ({ clothesList }) => {
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
    if (clothesList && clothesList.length > 1) {
      setCurrentCardIndex((prevIndex) => (prevIndex - 1 + clothesList.length) % clothesList.length);
    }
  };

  const handleNextClick = () => {
    if (clothesList && clothesList.length > 1) {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % clothesList.length);
    }
  };

  return (
    <div className="container offers-container">
      <BackButton />
      <h2 className="offers-title">Offers</h2>
      <div className="centered-box">
        <button className="card-btn prev" onClick={handlePrevClick} disabled={!clothesList || clothesList.length < 2}>{'<'}</button>
        {clothesList && clothesList.length > 0 ? (
          <div className="card">
            <h2>{clothesList[currentCardIndex].title}</h2>
            <p>{clothesList[currentCardIndex].description}</p>
            <p>Item: {clothesList[currentCardIndex].item}</p>
            <p>Category: {clothesList[currentCardIndex].category}</p>
            <p>Color: {clothesList[currentCardIndex].color}</p>
            <p>Size: {clothesList[currentCardIndex].size}</p>
            <p>Brand: {clothesList[currentCardIndex].brand}</p>
          </div>
        ) : (
          <div className="blank-card">
            <p>No items added, please go to the upload screen to add an item.</p>
          </div>
        )}
        <button className="card-btn next" onClick={handleNextClick} disabled={!clothesList || clothesList.length < 2}>{'>'}</button>
      </div>
      <div className="matches-header">Matches for this Item:</div>
      <div className="store-list-container">
        <div className="store-list">
          {storeData.map((store, index) => (
            <div key={index} className="store-item">
              <div className="row">
                <div className="col-3">
                  <p className="store-price">{store.price}</p>
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-12">
                      <p className="store-name">{store.name}</p>
                    </div>
                    <div className="col-12">
                      <p className="store-distance">{store.distance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Offers;

