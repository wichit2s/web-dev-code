import React from 'react';

import './ProductDetail.css';

import products from '../data.js';

function ProductDetail(props) { // Route path='/product/:id'
  const product = products.find(p => p._id === props.match.params.id);
  return (
    <div>
      <div className="detail">
        <div className="detail-image">
          <img src={product.url} />
        </div>
        <div className="detail-info">
          <ul>
            <li><h4>{product.name}</h4></li>
            <li>{product.stars} จากทั้งหมด 100 reviews</li>
            <li>Price: <b>฿{product.price}</b></li>
            <li>Brand: <i>{product.brand}</i></li>
          </ul>
        </div>
        <div className="detail-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: กำลังจัดส่ง</li>
            <li>จำนวนที่ต้องการ: <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </li>
            <li><button className="checkout primary">เพิ่มลงตะกร้า</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
