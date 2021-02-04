import './Product.css';

function Product(props) {
    return (
    <div className="product">
      <img className="product-image" src={props.product.url} alt="product" />
      <div className="product-name">
        <a href="product.html">{props.product.name}</a>
      </div>
      <div className="product-brand">{props.product.brand}</div>
      <div className="product-price">$ {props.product.price}</div>
      <div className="product-rating">{props.product.stars} Stars (10 Reviews)</div>
    </div>
    );
}

export default Product;
