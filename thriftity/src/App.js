import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
