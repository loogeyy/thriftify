import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Offers-alt.css';
import storesData from '../storesData';
import { Link } from 'react-router-dom';
import uploadIcon from '../components/upload-icon.png';
import sadIcon from '../components/sad-face.png';

const Offers = ({ clothesList, index, changeIndex }) => {

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
        const priceLow = itemOffer['price-low']
        const priceHigh = itemOffer['price-high']
        console.log(`Found matching offer at ${store.name}. Price range: ${priceLow} - ${priceHigh}`);
        if (!isNaN(priceLow) && !isNaN(priceHigh)) {
          matchingStores.push({ name: store.name, priceLow, priceHigh });
        }
      }
    });
    if (matchingStores.length === 0) {
      return [];
    }

    console.log(matchingStores);
    return matchingStores;
  };

  return (
    <div>
      <div className='title-container text-center'>
        <h2 className="offers-title mx-auto">offers</h2>
      </div>
      <div className="container offers-container">
        {clothesList && clothesList.length > 0 ? (
          <div className="store-list" style={{ width: '100%', padding: '0px', marginLeft: '20px'}}>
            {clothesList.map((item, outerIndex) => (
              <>
                <div className='matches-header text-center' style={{fontSize: '25px', marginBottom:'10px'}}>{item.item}'s Offers</div>
                <div className="row" style={{ overflowX: 'auto', whiteSpace: 'nowrap',  width: '100%'  }}>
                  {calculatePriceRange(outerIndex).length !== 0 ? (
                    <div className="d-flex flex-row text-center" >
                      {calculatePriceRange(outerIndex).map((store, innerIndex) => (
                        <div key={innerIndex} className="store-item alternate">
                          <div className="row text-center align-items-center justify-content-center">
                            <p className="store-name-alt text-center">{store.name}</p>
                            <p className="">{storesData[innerIndex].distance} miles</p>
                            <p className="">${store.priceLow} - ${store.priceHigh}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className='no-match text-center'>
                      <img src={sadIcon} alt="Sad Icon" /><br />
                      No available matches for the current item.<br />
                    </div>
                  )}
                </div>


</>
            ))}
          </div>
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
