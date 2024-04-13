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
      {clothesList && clothesList.length > 0 ? (
        clothesList.map((clothes, index) => (
          <div className='item-container' key={index}>
            <div className="row align-items-center"> 
              <div className='col text-center'> 
                <strong className='larger-font'>{clothes.item}</strong>
              </div>
              <div className='col text-right'> 
                <div className='row'>
                  <div className='col-6'>
                    <Link to='/offers'>
                      <button className='sold-button sold-btn' onClick={() => findIndexByItemName(clothes.item)}>
                        <img className='sold-btn-img' src={eyeIcon} alt='Eye Icon' />
                      </button>
                    </Link>
                  </div>
                  <div className='col-6'>
                    <button className='sold-button sold-btn' onClick={() => removeClothes(clothes)}>
                      <img className='sold-btn-img' src={soldIcon} alt='Sold Icon' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row"> 
              <div className='col-4'>
                <strong>Category:</strong> {clothes.category}
              </div>
              <div className='col-4'>
                <strong>Size:</strong> {clothes.size}
              </div>
              <div className='col-4'>
                <strong>Color:</strong> {clothes.color}
              </div>
              <div className='col-4'>
                <strong>Brand:</strong> {clothes.brand}
              </div>
              <div className='col-4'>
                <strong>Condition:</strong> {clothes.condition}
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
};

export default ListPage;