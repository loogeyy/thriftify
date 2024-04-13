import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Offers.css';
import storesData from '../storesData';
import ItemCard from './ItemCard';
import rightArrow from '../components/right-arrow.png';
import rightArrowLight from '../components/right-arrow-light.png';
import leftArrow from '../components/left-arrow.png';
import leftArrowLight from '../components/left-arrow-light.png';
import { Link } from 'react-router-dom';
import uploadIcon from '../components/upload-icon.png';
import sadIcon from '../components/sad-face.png';

const Offers = ({ clothesList, index, changeIndex }) => {

  const [sort, setSort] = useState('');
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePrevClick = () => {
    if (clothesList && clothesList.length > 1) {
      changeIndex((index - 1 + clothesList.length) % clothesList.length);
    }
  };

  const handleNextClick = () => {
    if (clothesList && clothesList.length > 1) {
      changeIndex((index + 1) % clothesList.length);
    }
  };

  const calculatePriceRange = (itemIndex) => {
    if (clothesList.length === 0) {
      return [];
    }
    const currentItem = clothesList[itemIndex];
    const matchingStores = [];

    storesData.forEach((store) => {
      const matchingBrand = store.brands.some((brand) => brand.value === currentItem.brand);
      if (matchingBrand) {
        const itemOffer = store.offers.find((offer) => offer.item === currentItem.category);
        const priceLow = itemOffer['price-low'];
        const priceHigh = itemOffer['price-high'];
        if (!isNaN(priceLow) && !isNaN(priceHigh)) {
          matchingStores.push({ name: store.name, priceLow, priceHigh, distance: store.distance });
        }
      }
    });

    // sort matchingStores based on selected option
    switch (sort) {
      // if prices are the same it takes the higher range
      // if both ranges are the same it just sorts by alpha
      case "Ascending Price":
        matchingStores.sort((a, b) => {
        if (a.priceLow !== b.priceLow) {
          return a.priceLow - b.priceLow;
        } else {
          return a.priceHigh - b.priceHigh;
        }
      });
        break;
        // goes off higher end of range for descending
      case "Descending Price":
        matchingStores.sort((a, b) => {
          if (a.priceHigh !== b.priceHigh) {
            return b.priceHigh - a.priceHigh;
          } else {
            return b.priceLow - a.priceLow;
          }
        });
        break;
      case "Ascending Distance":
        matchingStores.sort((a, b) => a.distance - b.distance);
        break;
      case "Descending Distance":
        matchingStores.sort((a, b) => b.distance - a.distance);
        break;
      default:
        break;
    }

    return matchingStores;
  };

  return (
    <div>
      <div className='title-container text-center'>
        <h2 className="offers-title mx-auto">offers</h2>
      </div>
      <div className="container offers-container">
        {clothesList && clothesList.length > 0 ? (
          <>
            <div className='row justify-content-center align-items-center'>
              <div className='col-auto text-center arrows'>
                <button className="card-btn" onClick={handlePrevClick} disabled={!clothesList || clothesList.length < 2}>
                  <img className='arrow' src={!clothesList || clothesList.length < 2 ? leftArrowLight : leftArrow} alt="left arrow" />
                </button>
              </div>
              <div className='col'>
                <ItemCard clothesList={clothesList} currentCardIndex={index}></ItemCard>
              </div>
              <div className='col-auto text-center arrows'>
                <button className="card-btn" onClick={handleNextClick} disabled={!clothesList || clothesList.length < 2}>
                  <img className='arrow' src={!clothesList || clothesList.length < 2 ? rightArrowLight : rightArrow} alt="right arrow" />
                </button>
              </div>
            </div>
            <p className='item-count-display'>{index + 1} of {clothesList.length} items</p>

            <div className='matches-header text-center'>Matches for this Item:</div>

            <div className="row text-center">
              <div className="col mx-auto">
                <select className="sort" onChange={(event) => handleSortChange(event)}>
                  <option value="">Sort By</option>
                  <option value="Ascending Price">Ascending Price</option>
                  <option value="Descending Price">Descending Price</option>
                  <option value="Ascending Distance">Ascending Distance</option>
                  <option value="Descending Distance">Descending Distance</option>
                </select>
              </div>
            </div>

            <div className="row store-list-container">
              <div className="col store-list">
                {calculatePriceRange(index).length !== 0 ? calculatePriceRange(index).map((store, index) => (
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
                            <p className="store-distance">{store.distance} miles</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )) : 
                <div className='no-match text-center'>
                  <img src={sadIcon} alt="Sad Icon" /><br />
                  No available matches for the current item.<br />
                </div>
                }
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container justify-content-center align-items-center text-center">
              <div className='row'>
                <h3 className="no-offers">Upload your first item:</h3>
              </div>
              <div className='row'>
                <div className='col'>
                  <button className='upload-btn'>
                    <Link to="/upload" className="btn btn-block">
                      <img className='upload' src={uploadIcon} alt="Upload Icon" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="container no-items-container d-flex justify-content-center align-items-center text-center">
              <div className="row">
                <div className="col">
                  <h3 className="no-offers">No offers available.</h3>
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
