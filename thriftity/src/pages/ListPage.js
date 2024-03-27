import Navbar from '../components/Navbar.js';

function ListPage({ clothesList }) {
  return (
    <div>
        <div>
        <h2>List Page</h2>
        <ul>
            {clothesList.map((clothes, index) => (
            <li key={index}>
                Type: {clothes.type}, Size: {clothes.size}, Color: {clothes.color}, Brand: {clothes.brand}
            </li>
            ))}
        </ul>
        </div>
      <Navbar />
    </div>
  );
};

export default ListPage;