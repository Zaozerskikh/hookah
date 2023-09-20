import './ProductInfoOnCard.css'
import CounterButton from "../../counter_button/CounterButton";
import {decrementProductCount, incrementProductCount} from "../../../../redux/cart_reducer/CartReducer";
import {RoutePaths} from "../../../../routes/RoutePaths";
import ShareButton from "../share_button/ShareButton";
import {setBottomHintState} from "../../../../redux/bottom_hint_reducer/BottomHintReducer";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";
import {useNavigate} from "react-router-dom";
import {FRONTEND_URL} from "../../../../env/env";
import {ProductTag} from "../../../../content/Products";

interface ProductInfoProps {
  productId: string;
  name: string;
  brand: string;
  line: string;
  price: number;
  discountPrice: number;
  stock: number;
  purchasedCount: number;
  weight: number;
  optionalTags ? : string[];
  showOptionalTags ? : boolean;
}

export const ProductInfoOnCard: React.FC<ProductInfoProps> = ({ productId, name, brand, line, price, discountPrice, stock, purchasedCount, weight, optionalTags}) => {
  const bottomHintState = useSelector((state: RootState) => state.bottomHint);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buildProductLink = useCallback((): string => {
    return `${FRONTEND_URL}/product/${productId}-${brand.toLowerCase().replace(' ', '-')}-${name.toLowerCase().replace(' ', '-')}-${line.toLowerCase().replace(' ', '-')}-${weight.toString()}g`;
  }, [name, productId, brand, line, weight]);

  return(
    <div style={{display: 'flex', flexDirection: 'column'}} className="product-info-on-card">
      <span
        className="detailed-view-header"
        onClick={() => navigate('/product/' + buildProductLink().split('/').slice(-1)[0])}
      >
        {`${brand} - ${name}`}
      </span>
      <div className="detailed-view-description-container">
        <div>
          <span className="detailed-view-brand-line-info">Brand: </span>
          <span className="detailed-view-brand-line">{brand}</span>
        </div>
        <div>
          <span className="detailed-view-brand-line-info">Line: </span>
          <span className="detailed-view-brand-line">{line}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px'}}>
          <span className="detailed-view-brand-line-info">Price per pack: </span>
          {discountPrice && discountPrice !== price && (
            <span
              className="detailed-view-brand-line-info"
              style={{ textDecoration: 'line-through'}}
            >
              {price}€
            </span>
          )}
          <span className="detailed-view-brand-line">{discountPrice ? discountPrice : price}€</span>
        </div>
      </div>
      {(stock === 0 || stock === 1 || (optionalTags && optionalTags.includes(ProductTag.NEW)) || (discountPrice && discountPrice !== price)) && (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', marginBottom: '24px'}}>
          {stock === 0 && <span className="soldout-detailed">Soldout</span>}
          {stock === 1 && <span className="tag-detailed" style={{ backgroundColor: '#FF8A00'}}>Last title</span>}
          {discountPrice && discountPrice !== price && <span className="tag-detailed" style={{ backgroundColor: '#22CE5D'}}>Sale</span>}
          {optionalTags && optionalTags.includes(ProductTag.NEW) && <span className="tag-detailed" style={{ backgroundColor: '#BC4FFF'}}>New</span>}
        </div>
      )}
      {stock !== 0 ? (
        <div className="detailed-button-container">
          <CounterButton
            counterState={purchasedCount}
            isDark={true}
            onPlusClickAction={() => dispatch(incrementProductCount(productId))}
            onMinusClickAction={() => dispatch(decrementProductCount(productId))}
          />
          <button
            className="detailed-buy-now-button"
            onClick={() => {
              if (purchasedCount === 0) {
                dispatch(incrementProductCount(productId))
              }
              navigate(RoutePaths.FINAL_CHECKOUT)
            }}
          >
            <span className="buy-now-text">Buy now</span>
          </button>
          <ShareButton
            productLink={buildProductLink()}
            onClickAdditionalAction={() => {
              if (!bottomHintState.isShown) {
                dispatch(setBottomHintState(true, 'The link has been copied! You can share it with your friends 😎'))
              }
            }}
          />
        </div>
      ) : (
        <div className="detailed-button-container">
          <ShareButton
            productLink={buildProductLink()}
            onClickAdditionalAction={() => {
              if (!bottomHintState.isShown) {
                dispatch(setBottomHintState(true, 'The link has been copied! You can share it with your friends 😎'))
              }
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ProductInfoOnCard
