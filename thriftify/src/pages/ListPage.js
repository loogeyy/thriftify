import React from 'react';
import Navbar from '../components/Navbar.js';
import './ListPage.css';
import { Link } from 'react-router-dom';

function ListPage({ clothesList, removeClothes, index, changeIndex }) {
  function findIndexByItemName(name) {
    const i = clothesList.findIndex((obj) => obj.item === name);
    changeIndex(i);
    return i;
  }

  return (
    <div className="general">
      <div>
        <div className="title-container">
          <h2 className="offers-title">list</h2>
        </div>
        <div className="container">
          {clothesList && clothesList.length > 0 ? (
            clothesList.map((clothes, i) => (
              <div className="item-container" key={i}>
                <div className="row align-items-center">
                  <div className="col text-center">
                    <strong className="larger-font">{clothes.item}</strong>
                  </div>
                </div>
                <div className="item-description">
                  <div className="row">
                    <div className="col-cat">
                      <strong>Category:</strong> {clothes.category}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <strong>Size: </strong>{clothes.size}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <strong>Color: </strong>{clothes.color}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <strong>Brand: </strong>{clothes.brand}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <strong>Condition: </strong>{clothes.condition}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <Link to={`/offers/${i}`} className="sold-button-top view-offers-link">
                      view offers
                    </Link>
                  </div>
                  <div className="col text-center">
                    <button
                      className="sold-button-bot"
                      onClick={() => removeClothes(clothes)}
                    >
                      mark as sold
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="none">
              <p>No items uploaded yet.</p>
            </div>
          )}
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default ListPage;
