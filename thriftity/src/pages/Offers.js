import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Offers.css';

const Offers = ({ clothesList }) => {
  // const cardsData = [
  //   {
  //     title: 'Offer 1',
  //     description: 'Description for Offer 1. More details can be added here.',
  //     category: 'Category 1',
  //     color: 'Red',
  //     size: 'M',
  //     brand: 'Brand X',
  //   },
  //   {
  //     title: 'Offer 2',
  //     description: 'Description for Offer 2. More details can be added here.',
  //     category: 'Category 2',
  //     color: 'Blue',
  //     size: 'L',
  //     brand: 'Brand Y',
  //   },
  //   {
  //     title: 'Offer 3',
  //     description: 'Description for Offer 3. More details can be added here.',
  //     category: 'Category 1',
  //     color: 'Green',
  //     size: 'S',
  //     brand: 'Brand Z',
  //   },
  // ];

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
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + clothesList.length) % clothesList.length);
  };

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % clothesList.length);
  };

  return (
    <div className="container offers-container">
      <h2 className="offers-title">Offers</h2>
      <div className="centered-box">
        <button className="nav-button prev" onClick={handlePrevClick}>{'<'}</button>
        {clothesList && clothesList.length > 0 && (
          <div className="card">
            <h2>{clothesList[currentCardIndex].title}</h2>
            <p>{clothesList[currentCardIndex].description}</p>
            <p>Item: {clothesList[currentCardIndex].item}</p>
            <p>Category: {clothesList[currentCardIndex].category}</p>
            <p>Color: {clothesList[currentCardIndex].color}</p>
            <p>Size: {clothesList[currentCardIndex].size}</p>
            <p>Brand: {clothesList[currentCardIndex].brand}</p>
          </div>
        )}
        <button className="nav-button next" onClick={handleNextClick}>{'>'}</button>
      </div>
      <div className="store-list-container">
        <h3 className="matches-header">Matches for this Offer:</h3>
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
