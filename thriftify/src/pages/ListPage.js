import Navbar from '../components/Navbar.js';
import soldIcon from '../components/sold-icon.png';
import './ListPage.css';

function ListPage({ clothesList, removeClothes }) {
  return (
    <div className='offers-container'>
      <div className='title-container'>
        <h2 className="offers-title">List</h2>
      </div>
      <div className="container">
        {clothesList && clothesList.length > 0 ? 
          clothesList.map((clothes, index) => (
            <div className="item-container" key={index}>
              <div className="row item">
                <div className='col'>
                  <strong>Item:</strong> {clothes.item}
                </div>
                <div className='col'>
                  <strong>Category:</strong> {clothes.category}
                </div>
                <div className='col'>
                  <strong>Size:</strong> {clothes.size}
                </div>
                <div className='col'>
                  <strong>Color:</strong> {clothes.color}
                </div>
                <div className='col'>
                  <strong>Brand:</strong> {clothes.brand}
                </div>
                <div className='col'>
                  <button className='sold-btn' onClick={() => removeClothes(clothes)}>
                    <img className='sold-btn-img' src={soldIcon} alt='Sold Icon' />
                  </button>
                </div>
              </div>
            </div>  
          ))
          : <p>No items uploaded yet.</p>}
      </div>
      <Navbar />
    </div>
  );
};

export default ListPage;