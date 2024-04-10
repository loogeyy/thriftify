import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap'
import './Offers.css';
import storesData from '../storesData';
import ItemCard from './ItemCard';
import rightArrow from '../components/right-arrow.png';
import rightArrowLight from '../components/right-arrow-light.png';
import leftArrow from '../components/left-arrow.png';
import leftArrowLight from '../components/left-arrow-light.png';
import { Link } from 'react-router-dom';
import uploadIcon from '../components/upload-icon.png';

const Offers = ({ clothesList }) => {

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
    if (clothesList.length === 0) {
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
      return [{ name: '', priceLow: -1, priceHigh: -1 }];
    }

    console.log(matchingStores);
    return matchingStores;
  };

  return (
    <div>
      <div className='title-container'>
        <h2 className="offers-title">offers</h2>
      </div>
      <div className="container offers-container">
        {clothesList && clothesList.length > 0 ? (
          <>
            <div className='row justify-content-center align-items-center'>
              <div className='col-auto text-center arrows'>
                <button className="card-btn" onClick={handlePrevClick} disabled={!clothesList || clothesList.length < 2}>
                  <img class='arrow' src={!clothesList || clothesList.length < 2 ? leftArrowLight : leftArrow} alt="left arrow" />
                </button>
              </div>
              <div className='col'>
                <ItemCard clothesList={clothesList} currentCardIndex={currentCardIndex}></ItemCard>
              </div>
              <div className='col-auto text-center arrows'>
                <button className="card-btn" onClick={handleNextClick} disabled={!clothesList || clothesList.length < 2}>
                  <img class='arrow' src={!clothesList || clothesList.length < 2 ? rightArrowLight : rightArrow} alt="right arrow" />
                </button>
              </div>
            </div>

            <div className='row'>
              <div className="col matches-header">Matches for this Item:</div>
              {/* <div class="col">
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic" >
      Sort by
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Distance</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Price</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</div> */}
            </div>
            <div className="row store-list-container">
              <div className="col store-list">
                {calculatePriceRange(currentCardIndex).map((store, index) => {
                  console.log(store)
                  return (
                    <div key={index} className="store-item">
                      {store.name != '' ?
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
                        : <p className="store-name">No Offers from Nearby Stores</p>}
                    </div>)
                })}
              </div>
            </div>

          </>
        ) : (
          <>
            <div className="container no-items-container d-flex justify-content-center align-items-center text-center">
              <div className="row">
                <div className="col">
                  <h3 className="no-offers">No items uploaded yet.</h3>
                </div>
              </div>
            </div>


            <div className="container justify-content-center align-items-center text-center">
              <div className='row'>
                <h3 className="no-offers">Upload your first item:</h3>
              </div>
              <div className='row align-items-center justify-content-center'> {/* Added justify-content-center class */}
                <div className='col'> {/* Added col class */}
                  <button className='upload-btn'>
                    <Link to="/UploadPage" className="btn btn-block">
                      <img className='upload' src={uploadIcon} alt="Upload Icon" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>

          </>


        )}
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