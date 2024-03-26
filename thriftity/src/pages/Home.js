import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} className="text-center">
              <h1 className="logo-text">thriftify</h1>
              <img src="logo.png" alt="map with hanger logo" className="img-fluid" />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} sm={6} className="text-center">
              <Link to="/upload" className="btn btn-block upload-listing">
                Upload Listing
              </Link>
            </Col>
            <Col xs={12} sm={6} className="text-center mt-3 mt-sm-0">
              <Link to="/offers" className="btn btn-block view-listings">
                View Listings
              </Link>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Home;
