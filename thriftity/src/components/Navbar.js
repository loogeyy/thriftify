import { Link } from 'react-router-dom';
import listIcon from '../images/list-icon.png';
import uploadIcon from '../images/upload-icon.png';
import offersIcon from '../images/offers-icon.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav class='nav-bar'>
      <div class='nav-bar-tabs'>
        <Link to="/ListPage" style={{ textDecoration: 'none' }}>
          <img class="nav-bar-list-icon" src={listIcon} alt="List Icon" />
        </Link>
        <Link to="/UploadPage">
          <img class="nav-bar-upload-icon" src={uploadIcon} alt="Upload Icon"/>
        </Link>
        <Link to="/Offers" style={{ textDecoration: 'none' }}>
          <img class="nav-bar-offers-icon" src={offersIcon} alt="Offers Icon" />
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
