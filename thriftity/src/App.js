import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './pages/Home';
import Offers from './pages/Offers';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
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
              <Link to="/upload" className="btn btn-block upload-listing">
                upload listing
              </Link>
              </div>
            <div className="col-3">
              <Link to="/offers" className="btn btn-block view-listings">
                view listings
              </Link>
            </div>
        </div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/offers" component={Offers} />
          <Route path="/upload" component={Upload} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;