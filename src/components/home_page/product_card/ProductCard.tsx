import React, {useState} from "react";
import './ProductCard.css';
import moreIcon from './../../../assets/icons/product_card/more_icon.png'
import minusIcon from './../../../assets/icons/product_card/minus_icon.png'
import plusIcon from './../../../assets/icons/product_card/plus_icon.png'

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> =
  ({ name, description, price, image }) => {
  const [purchasedCount, setPurchasedCount] = useState<number>(0)

  return (
    <div className="product-card-container">
      <img src={image} alt={name} className="product-image" />
      <div className="product-card-text">
        <span className="product-name">{name}</span>
        <span className="product-description">{description}</span>
        <span className="product-price">${price.toFixed(2)}</span>
      </div>
      <div className="button-container">
        {purchasedCount === 0
          ? (
            <button
              className="buy-button"
              onClick={() => setPurchasedCount(purchasedCount + 1)}
            >
              <span className="buy-button-text">Buy</span>
            </button>
          )
          : (
            <div className="product-count-container">
              <button className="invisible-button" onClick={() => setPurchasedCount(purchasedCount - 1)}>
                <img className="product-count-img" src={minusIcon} alt="minus-icon"/>
              </button>
              <span className="purchased-count-number">{purchasedCount}</span>
              <button className="invisible-button" onClick={() => setPurchasedCount(purchasedCount + 1)}>
                <img className="product-count-img" src={plusIcon} alt="plus-icon"/>
              </button>
            </div>
          )
        }
        <button className={purchasedCount === 0 ? "more-button" : "more-button-transparent"}>
          <img className="more-icon" src={moreIcon} alt="more-icon"/>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
