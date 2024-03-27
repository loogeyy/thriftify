import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav>
      <div class='row'>
        <div class='col'>
          <Link to="/UploadPage">icon1</Link>
        </div>
        <div class='col'>
          <Link to="/Offers">icon2</Link>
        </div>
        <div class='col'>
          <Link to="/ListPage">icon3</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;