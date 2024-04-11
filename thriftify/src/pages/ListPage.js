import Navbar from '../components/Navbar.js';
import soldIcon from '../components/sold-icon.png';
import eyeIcon from '../components/eye.png';
import './ListPage.css';
import { Link } from 'react-router-dom';

function ListPage({ clothesList, removeClothes, index, changeIndex }) {
  function findIndexByItemName(name) {
    const i = clothesList.findIndex(obj => obj.item === name);
    changeIndex(i);
    return i; 
  }

  return (
    <div className="general">
      <div>
        <div className='title-container'>
          <h2 className="offers-title">list</h2>
        </div>
        <div className="container">
          {clothesList && clothesList.length > 0 ?
            clothesList.map((clothes, index) => (
              <div className='item-container' key={index}>
                <div className="row">
                  <div className='col-8'>
                    <strong className='larger-font'>{clothes.item}</strong>
                  </div>
                  <div className='col-4'>
                    <Link to='/offers'>
                      <button className='sold-button sold-btn' onClick={() => findIndexByItemName(clothes.item)}>
                        <img className='sold-btn-img' src={eyeIcon} alt='Eye Icon' />
                      </button>
                    </Link>
                    <button className='sold-button sold-btn' onClick={() => removeClothes(clothes)}>
                      <img className='sold-btn-img' src={soldIcon} alt='Sold Icon' />
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className='col'>
                    <strong>Category:</strong> {clothes.category}
                  </div>
                </div>
                <div className="row">
                  <div className='col'>
                    <strong>Size:</strong> {clothes.size}
                  </div>
                </div>
                <div className="row">
                  <div className='col'>
                    <strong>Color:</strong> {clothes.color}
                  </div>
                </div>
                <div className="row">
                  <div className='col'>
                    <strong>Brand:</strong> {clothes.brand}
                  </div>
                </div>
                <div className="row">
                  <div className='col'>
                    <strong>Condition:</strong> {clothes.condition}
                  </div>
                </div>
              </div>
            ))
            : <div className="none">
              <p>No items uploaded yet.</p>
            </div>}
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default ListPage;