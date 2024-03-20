import { Link } from 'react-router-dom';
const Home = () => {
    return (
      <div>
        <h2>Thriftity</h2>
        <button><Link to="/Upload">Start Uploading</Link></button>
        <button><Link to="/Offers">View Offers</Link></button>
      </div>
    );
  };

export default Home;
  