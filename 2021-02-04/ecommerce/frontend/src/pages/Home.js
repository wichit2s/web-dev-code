import React, { useState, useEffect } from 'react';
import Product from '../components/Product.js';

import axios from 'axios';

function Home() {

  const [products, setProducts] = useState([]); // hook 

  // componentDidMount() {} 
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
    return () => {};
  }, []);

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
