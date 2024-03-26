import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
      <div>
        <Row>
          <Col> <h2>Thriftity</h2> </Col>
        </Row>
        
        <div class='fixed-bottom nav-bar'>
          <Row>
            <Col> <button class='button'><Link to="/Upload">Start Uploading</Link></button> </Col>
            <Col> <button class='button'><Link to="/Offers">View Offers</Link></button> </Col>
          </Row>
        </div>
      </div>
    );
  };

export default Home;
  