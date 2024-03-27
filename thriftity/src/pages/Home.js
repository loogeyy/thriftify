import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
      <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <h1 className="logo-text">thriftify</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
            <img src="logo.png" alt="map with hanger logo"></img>
            </div>
        </div>
        </div>
        </header>
        <div className="row button-container">
            <div className="col-7">
              <Link to="/UploadPage" className="btn btn-block upload-listing">
                upload listing
              </Link>
              </div>
            <div className="col-3">
              <Link to="/offers" className="btn btn-block view-listings">
                view listings
              </Link>
            </div>
        </div>
     </div>   
    );
  };

export default Home;
  