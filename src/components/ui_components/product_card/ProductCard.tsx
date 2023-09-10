import React, {useEffect, useState} from "react";
import './ProductCard.css';
import MoreButton from "../more_button/MoreButton";
import StandardButton from "../standart_button/StandartButton";
import CounterButton from "../counter_button/CounterButton";
import CloseButton from "../close_button/CloseButton";
import {ProductInfo, productsWithLongDescription} from "../../../content/Products";
import Scrollbar from "react-scrollbars-custom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import {decrementProductCount, incrementProductCount} from "../../../redux/cart_reducer/CartReducer";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";

const ProductCard: React.FC<ProductInfo> =
  ({ productId, name, brand,line, weight, description, price, image , fullDescription, stock, tags}) => {
  const purchasedCount = useSelector((state: RootState) => state.cart[productId]) || 0;
  const isCheckoutOpened = useSelector((state: RootState) => state.productDetailedView.isVisible)
  const [isDetailedViewOpened, setDetailedViewOpened] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (isDetailedViewOpened) {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'scroll';
    }

    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  }, [isDetailedViewOpened]);

  return (
    <div className="product-card-container">
      {
        <div
          style={{
            position:'absolute',
            top: '16px',
            left: '16px',
            display: "flex",
            flexDirection:'row',
            gap: '8px'
          }}
        >
          {stock === 0 && <span className="soldout-detailed">Soldout</span>}
          {tags && tags.map(tag => (
            <span className="soldout-detailed">{tag}</span>
          ))}
        </div>
      }
      <div
        className={`detailed-view-container ${!isCheckoutOpened && isDetailedViewOpened ? 'open' : ''}`}
        style={{
          backgroundColor: !isCheckoutOpened && isDetailedViewOpened ? 'rgba(0, 0, 0, 0.7)' : 'transparent'
        }}
        onClick={(e) => {
          e.preventDefault()
          if (e.target === e.currentTarget) {
            setDetailedViewOpened(false)
          }
        }}
      >
        <div className="detailed-view-card">
          <CloseButton
            onClickAction={() => setDetailedViewOpened(false)}
            iconSize={20}
            changeColorOnHover={true}
            onClickColor="#d1d1d9"
          />
          <div className="detailed-view-text-container">
            <span className="detailed-view-header">
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
            </div>
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
              </div>
            ) : (
              <div className="detailed-button-container">
                <span
                  style={{
                    height: '48px',
                    display: 'flex',
                    alignItems:'center',
                    width: '100%'
                  }}
                >
                  <span className="soldout-detailed">Soldout</span>
                </span>
              </div>
            )
            }
            <div className={`containerwrapper${productsWithLongDescription.find(p => p === productId) ? '' : 'nogradient'}`}>
              <Scrollbar
                className="detailed-full-description"
                thumbYProps={{
                  renderer: (props) => {
                    const { elementRef, ...restProps } = props;
                    return <span {...restProps} ref={elementRef} className="thumb-y" />;
                  },
                }}
                trackYProps={{
                  renderer: (props) => {
                    const { elementRef, ...restProps } = props;
                    return <span {...restProps} ref={elementRef} className="track-y" />;
                  },
                }}
              >
                <span className="test">{fullDescription}</span>
              </Scrollbar>
            </div>
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
          style={{
            fontSize: `${name.length > 20 ? 18 : 22}px`
          }}
        >
          {`${brand} – ${name} (${line}) ${weight}G`}
        </span>
        <span
          onClick={() => setDetailedViewOpened(true)}
          className="product-description">{description}
        </span>
        <span className={`product-price ${stock === 0 ? 'soldout' : ''}`}>{price.toFixed(2)}€</span>
      </div>
      <div className="button-container">
        {stock !== 0 ? (
          purchasedCount === 0
            ? (
              <StandardButton
                text="Buy"
                onClickAction={() => dispatch(incrementProductCount(productId))}
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
                onPlusClickAction={() => {
                  dispatch(incrementProductCount(productId))
                }}
                onMinusClickAction={() => {
                  dispatch(decrementProductCount(productId))
                }}
              />
            )
        ) : (
          <span className="soldout-text">Soldout</span>
        )}
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
