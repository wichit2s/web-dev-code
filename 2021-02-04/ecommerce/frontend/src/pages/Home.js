import React from 'react';
import Product from '../components/Product.js';

import products from '../data.js';

function Home() {
  return (
    <div>
      <h1> หน้า home </h1>
      <ul className="products">
        {products.map( (p) => 
          <li>
            <Product product={p} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Home;
