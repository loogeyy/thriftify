import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap'
import './Offers.css';
import storesData from '../storesData';

const Offers = ({ clothesList }) => {
  // const storeData = [
  //   { name: 'Store A', price: '$10', distance: '5 miles' },
  //   { name: 'Store B', price: '$15', distance: '8 miles' },
  //   { name: 'Store C', price: '$12', distance: '3 miles' },
  //   { name: 'Store D', price: '$20', distance: '10 miles' },
  //   { name: 'Store E', price: '$18', distance: '6 miles' },
  //   { name: 'Store F', price: '$25', distance: '12 miles' },
  // ];

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

  const calculatePriceRange = (itemIndex) => {
    if(clothesList.length === 0) {
      return [];
    }

    const currentItem = clothesList[itemIndex];
    const matchingStores = [];
    storesData.forEach((store) => {
      console.log(`Checking store: ${store.name}`);
      const matchingBrand = store.brands.some((brand) => brand.value === currentItem.brand);
      if (matchingBrand) {
        const itemOffer = store.offers.find((offer) => offer.item === currentItem.category);
        const priceLow = itemOffer['price-low']
        const priceHigh = itemOffer['price-high']
        console.log(`Found matching offer at ${store.name}. Price range: ${priceLow} - ${priceHigh}`);
        if (!isNaN(priceLow) && !isNaN(priceHigh)) {
          matchingStores.push({ name: store.name, priceLow, priceHigh });
        }
      }
    });
    if (matchingStores.length === 0) {
      return [{ name: 'No stores offer', priceLow: 0, priceHigh: 0 }];
    }

    console.log(matchingStores);
    return matchingStores;
  };

  return (
    <div>
      <div className='title-container'>
        <h2 className="offers-title">Offers</h2>
      </div>
      <div className="container offers-container">

      {clothesList && clothesList.length > 0 ? (
        <>
          <h1>{clothesList[currentCardIndex].title}</h1>
          <div className='row'>
            <div className='col'>
              <div className="card">
                <p>{clothesList[currentCardIndex].description}</p>
                <div className="item">
                  <p><strong> {clothesList[currentCardIndex].item} </strong></p>
                </div>
                <p><strong>Category:</strong> {clothesList[currentCardIndex].category}</p>
                <p><strong>Color:</strong> {clothesList[currentCardIndex].color}</p>
                <p><strong>Size:</strong> {clothesList[currentCardIndex].size}</p>
                <p><strong>Brand:</strong> {clothesList[currentCardIndex].brand}</p>
                <p><strong>Condition:</strong> {clothesList[currentCardIndex].condition}</p>
              </div>
            </div>
            
          </div>
          <div className='row'>
            <div className='col btn-col'>
              <button className="card-btn prev" onClick={handlePrevClick} disabled={!clothesList || clothesList.length < 2}>{'<'}</button>
            </div>
            <div className='col btn-col'>
              <button className="card-btn next" onClick={handleNextClick} disabled={!clothesList || clothesList.length < 2}>{'>'}</button>
            </div>
          </div>
        </>
      ) : (
        <div className="blank-card">
          <p>No items added, please go to the upload screen to add an item.</p>
        </div>
      )}

        <div className='row'>
          <div className="col matches-header">Matches for this Item:</div>
          <div class="col">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" >
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Distance</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Price</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row store-list-container">
          <div className="col store-list">
            {calculatePriceRange(currentCardIndex).map((store, index) => {
              console.log(store)
              return (
              <div key={index} className="store-item">
                <div className="row">
                  <div className="col-3">
                    <p className="store-price">${store.priceLow} - ${store.priceHigh}</p>
                  </div>
                  <div className="col-9">
                    <div className="row">
                      <div className="col-12">
                        <p className="store-name">{store.name}</p>
                      </div>
                      <div className="col-12">
                        <p className="store-distance">{storesData[index].distance} miles</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>)
            })}
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Offers;

/*
<div key={index} className="store-item">
                <div className="row">
                  <div className="col-3">
                    <p className="store-price">${store.priceLow} - ${store.priceHigh}</p>
                  </div>
                  <div className="col-9">
                    <div className="row">
                      <div className="col-12">
                        <p className="store-name">{store.name}</p>
                      </div>
                      <div className="col-12">
                        <p className="store-distance">{storesData[index].distance} miles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
*/