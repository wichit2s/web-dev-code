import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Product from './components/Product.js';
import Sidebar from './components/Sidebar.js';

import products from './data.js';

function App() {
  return (
  <div className="grid-container">
    <Header />
    <Sidebar />

    <main className="main">
      <div className="content">
        <ul className="products">
          {products.map( (p) => 
            <li>
              <Product product={p} />
            </li>
          )}
        </ul>
      </div>
    </main>

    <Footer />
  </div> 
  );
}

export default App;
