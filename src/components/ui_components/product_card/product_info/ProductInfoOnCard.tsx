import './ProductInfoOnCard.css'
import CounterButton from "../../counter_button/CounterButton";
import {decrementProductCount, incrementProductCount} from "../../../../redux/cart_reducer/CartReducer";
import {RoutePaths} from "../../../../routes/RoutePaths";
import ShareButton from "../share_button/ShareButton";
import {setBottomHintState} from "../../../../redux/bottom_hint_reducer/BottomHintReducer";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";
import {useNavigate} from "react-router-dom";
import {FRONTEND_URL} from "../../../../env/env";
import {buildFullTobaccoPageLink, buildTobaccoLink} from "../../../../models/TobaccoOperations";
import ProductTagsRow from "../../product_tags/ProductTagsRow";

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
  showShareButtonOnCard ? : boolean;
  isSoldout: boolean;
  isLast: boolean;
  isDiscount: boolean;
}

export const ProductInfoOnCard: React.FC<ProductInfoProps> = ({ productId, name, brand, line,
                                                                price, discountPrice, stock,
                                                                purchasedCount, weight, optionalTags,
                                                                showShareButtonOnCard, isDiscount, isLast, isSoldout}) => {
  const bottomHintState = useSelector((state: RootState) => state.bottomHint);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return(
    <div style={{display: 'flex', flexDirection: 'column'}} className="product-info-on-card">
      <span
        className="detailed-view-header"
        onClick={() => navigate(buildTobaccoLink(productId, brand, name, line, weight))}
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
          <span className="detailed-view-brand-line-info">Price per pack ({weight}G): </span>
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
      <ProductTagsRow
        tags={optionalTags}
        isSoldout={stock === 0}
        isLast={stock === 1}
        isDiscount={isDiscount}
        optionalWrapperStyle={{ marginBottom: '24px'}}
      />
      {(!isSoldout || purchasedCount !== 0) ? (
        <div className="detailed-button-container">
          <CounterButton
            counterState={purchasedCount}
            isDark={true}
            disabledPlus={isSoldout}
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
          {showShareButtonOnCard && <ShareButton
            productLink={buildFullTobaccoPageLink(productId, brand, name, line, weight, FRONTEND_URL)}
            onClickAdditionalAction={() => {
              if (!bottomHintState.isShown) {
                dispatch(setBottomHintState(true, 'The link has been copied! You can share it with your friends 😎'))
              }
            }}
          />}
        </div>
      ) : (
        showShareButtonOnCard ? (
          <div className="detailed-button-container">
            <ShareButton
              productLink={buildFullTobaccoPageLink(productId, brand, name, line, weight, FRONTEND_URL)}
              onClickAdditionalAction={() => {
                if (!bottomHintState.isShown) {
                  dispatch(setBottomHintState(true, 'The link has been copied! You can share it with your friends 😎'))
                }
              }}
            />
          </div>
        ) : (<div/>)
      )}
    </div>
  )
}

export default ProductInfoOnCard
