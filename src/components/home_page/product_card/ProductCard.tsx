import React, {useState} from "react";
import './ProductCard.css';
import closeIcon from './../../../assets/icons/product_card/close_button_icon.png'
import MoreButton from "../../ui_components/more_button/MoreButton";
import StandardButton from "../../ui_components/standart_button/StandartButton";
import CounterButton from "../../ui_components/counter_button/CounterButton";

interface ProductCardProps {
  name: string;
  brand: string;
  line: string;
  weight: number;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> =
  ({ name, brand,line, weight, description, price, image , fullDescription}) => {
  const [purchasedCount, setPurchasedCount] = useState<number>(0);
  const [isDetailedViewOpened, setDetailedViewOpened] = useState<boolean>(false)

  return (
    <div className="product-card-container">
      <div className={`detailed-view-container ${isDetailedViewOpened ? 'open' : ''}`}>
        <div className="detailed-view-card">
          <button
            className="close-button"
            onClick={() => setDetailedViewOpened(false)}
          >
            <img className="close-icon" src={closeIcon} alt="close-icon"/>
          </button>
          <div className="detailed-view-text-container">
            <span className="detailed-view-header">{`${brand} - ${name}`}</span>
            <div className="detailed-view-description-container">
              <div>
                <span className="detailed-view-brand-line-info">Brand: </span>
                <span className="detailed-view-brand-line">{brand}</span>
              </div>
              <div>
                <span className="detailed-view-brand-line-info">Line: </span>
                <span className="detailed-view-brand-line">{line}</span>
              </div>
            </div>
            <div className="detailed-button-container">
              <CounterButton
                counterState={purchasedCount}
                isDark={true}
                onPlusClickAction={() => setPurchasedCount(purchasedCount + 1)}
                onMinusClickAction={() => setPurchasedCount(purchasedCount - 1 > -1 ? purchasedCount - 1 : 0)}
              />
              <button className="detailed-buy-now-button">
                <span className="buy-now-text">Buy now</span>
              </button>
            </div>
            <div className="detailed-full-description">{fullDescription}</div>
          </div>
          <img className="detailed-view-image" src={image} alt="detailed-img"/>
        </div>
      </div>
      <img
        src={image}
        alt={name}
        className="product-image"
        onClick={() => setDetailedViewOpened(true)}
      />
      <div className="product-card-text">
        <span
          className="product-name"
          onClick={() => setDetailedViewOpened(true)}
        >
          {`${brand} - ${name} (${line.toLowerCase()}) ${weight}G`}
        </span>
        <span className="product-description">{description}</span>
        <span className="product-price">${price.toFixed(2)}</span>
      </div>
      <div className="button-container">
        {purchasedCount === 0
          ? (
            <StandardButton
              text="Buy"
              onClickAction={() => setPurchasedCount(purchasedCount + 1)}
              buttonStyle={{
                width: '148px',
                height: '48px',
                borderRadius: '24px 0 0 24px',
              }}
            />
          )
          : (
            <CounterButton
              counterState={purchasedCount}
              isDark={false}
              onPlusClickAction={() => setPurchasedCount(purchasedCount + 1)}
              onMinusClickAction={() => setPurchasedCount(purchasedCount - 1)}
            />
          )
        }
        <MoreButton
          showText={false}
          buttonStyle={{
            backgroundColor:
              purchasedCount === 0
                ? '#EAEBF0'
                : "transparent",
            width: '64px',
            height: '48px'
          }}
          onClickAction={() => setDetailedViewOpened(true)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
