import { Link } from 'react-router-dom';
import listIcon from './list-icon.png';
import uploadIcon from './upload-icon.png';
import offersIcon from './offers-icon.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav class='nav-bar'>
      <div class='nav-bar-tabs'>
        <Link to="/list" style={{ textDecoration: 'none' }}>
          <img class="nav-bar-list-icon" src={listIcon} alt="List Icon" />
        </Link>
        <Link to="/upload">
          <img class="nav-bar-upload-icon" src={uploadIcon} alt="Upload Icon"/>
        </Link>
        <Link to="/offers" style={{ textDecoration: 'none' }}>
          <img class="nav-bar-offers-icon" src={offersIcon} alt="Offers Icon" />
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
