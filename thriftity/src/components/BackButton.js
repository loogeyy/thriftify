import { Link } from 'react-router-dom';
import leftArrow from '../images/left-arrow.png';
import './BackButton.css';

const BackButton = () => {
  return (
    <div class='back-button'>
        <div className="container">
            <div className="row">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="col">
                    <img class='back-button-icon' src={leftArrow} alt="Left Arrow" />
                    </div>
                    <div className="col">
                    <div class="text">Home</div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    // <nav class='nav-bar'>
    //   <div class='nav-bar-tabs'>
    //     <Link to="/ListPage" style={{ textDecoration: 'none' }}>
    //       <img class="nav-bar-list-icon" src={listIcon} alt="List Icon" />
    //     </Link>
    //     <Link to="/UploadPage">
    //       <img class="nav-bar-upload-icon" src={uploadIcon} alt="Upload Icon"/>
    //     </Link>
    //     <Link to="/Offers" style={{ textDecoration: 'none' }}>
    //       <img class="nav-bar-offers-icon" src={offersIcon} alt="Offers Icon" />
    //     </Link>

    //   </div>
    // </nav>
  );
};

export default BackButton;
