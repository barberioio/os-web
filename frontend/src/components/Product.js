import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <br></br>
        <p className="info__name">{name}</p>

        <p className="info__price">฿{price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          VIEW
        </Link>
      </div>
    </div>
  );
};

export default Product;
