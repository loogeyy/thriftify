import Navbar from '../components/Navbar.js';
import soldIcon from 'sold-icon.png';
import './ListPage.css';

function ListPage({ clothesList, removeClothes }) {

  return (
    <div >
    <div className='title-container'>
        <h2 className="list-title">List</h2>
      </div>
      <div className="container">
        {clothesList && clothesList.length > 0 ? 
          clothesList.map((clothes, index) => (
            <div className="row item" key={index}>
                <div className='col'>
                Item: {clothes.item}, Category: {clothes.category}, Size: {clothes.size}, Color: {clothes.color}, Brand: {clothes.brand}
                </div>
                <div className='col-2'>
                  <button className='sold-btn' onClick={() => removeClothes(clothes)}><img className='sold-btn-img' src={soldIcon}></img></button>
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
