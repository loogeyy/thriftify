import React, { useState } from 'react';
import Navbar from '../components/Navbar';
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
    <div>
      <div className='title-container'>
        <h2 className="offers-title">Offers</h2>
      </div>
      <div className="container offers-container">
        <div className="centered-box">

          {clothesList && clothesList.length > 0 ? (
            <div>
              <h1>{clothesList[currentCardIndex].title}</h1>
              <div className='row'>
                <div className='col'>
                  <button className="card-btn prev" onClick={handlePrevClick} disabled={!clothesList || clothesList.length < 2}>{'<'}</button>
                </div>
                <div className='col'>
                  <div className="card">
                    <p>{clothesList[currentCardIndex].description}</p>
                    <p>Item: {clothesList[currentCardIndex].item}</p>
                    <p>Category: {clothesList[currentCardIndex].category}</p>
                    <p>Color: {clothesList[currentCardIndex].color}</p>
                    <p>Size: {clothesList[currentCardIndex].size}</p>
                    <p>Brand: {clothesList[currentCardIndex].brand}</p>
                  </div>
                </div>
                <div className='col'>
                  <button className="card-btn next" onClick={handleNextClick} disabled={!clothesList || clothesList.length < 2}>{'>'}</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="blank-card">
              <p>No items added, please go to the upload screen to add an item.</p>
            </div>
          )}

        </div>
        <div className='row'>   
        <div className="col matches-header">Matches for this Item:</div>
        <div class="col dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort By
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Ascending Distance</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        </div>
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
    </div>
  );
};

export default Offers;

