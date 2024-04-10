import './Offers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCard({ clothesList, currentCardIndex }) {
    return (
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
        </>
    )
}

export default ItemCard;