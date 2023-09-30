import React, {useCallback, useEffect, useState} from "react";
import './ProductCard.css';
import MoreButton from "../more_button/MoreButton";
import StandardButton from "../standart_button/StandartButton";
import CounterButton from "../counter_button/CounterButton";
import CloseButton from "../close_button/CloseButton";
import {ProductInfo, ProductTag} from "../../../content/Products";
import Scrollbar from "react-scrollbars-custom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import {decrementProductCount, incrementProductCount} from "../../../redux/cart_reducer/CartReducer";
import ProductInfoOnCard from "./product_info/ProductInfoOnCard";
import {useMediaQuery} from "react-responsive";
import ProductViewMobile from "./product_view_mobile/ProductViewMobile";
import {setBottomHintState} from "../../../redux/bottom_hint_reducer/BottomHintReducer";
import ShareButton from "./share_button/ShareButton";
import {FRONTEND_URL} from "../../../env/env";
import ImageWrapper from "../image_wrapper/ImageWrapper";

const ProductCard: React.FC<ProductInfo> = ({ productId, name, brand,line, weight, description, price, discountPrice, image , fullDescription, stock, tags}) => {
  const purchasedCount = useSelector((state: RootState) => state.cart[productId]) || 0;
  const isCheckoutOpened = useSelector((state: RootState) => state.productDetailedView.isVisible)
  const [isDetailedViewOpened, setDetailedViewOpened] = useState<boolean>(false);
  const dispatch = useDispatch();
  const bottomHintState = useSelector((state: RootState) => state.bottomHint);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

   const buildProductLink = useCallback((): string => {
     return `${FRONTEND_URL}/product/${productId}-${brand.toLowerCase().replace(' ', '-')}-${name.toLowerCase().replace(' ', '-')}-${line.toLowerCase().replace(' ', '-')}-${weight.toString()}g`;
   }, [name, productId, brand, line, weight]);

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

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



  const renderDesktop = () => {
    return(
      <div className="product-card-container">
        {
          <div
            style={{
              position:'absolute',
              top: '16px',
              left: '16px',
              display: "flex",
              flexDirection:'row',
              gap: '8px',
            }}
          >
            {stock === 0 && <span className="soldout-detailed">Soldout</span>}
            {stock === 1 && <span className="tag-detailed" style={{ backgroundColor: '#FF8A00'}}>Last title</span>}
            {discountPrice && discountPrice !== price && <span className="tag-detailed" style={{ backgroundColor: '#22CE5D'}}>Sale</span>}
            {tags && tags.includes(ProductTag.NEW) && <span className="tag-detailed" style={{ backgroundColor: '#BC4FFF'}}>New</span>}
          </div>
        }
        {isDetailedViewOpened && (
          <>
            <div
              className={`detailed-view-container ${!isCheckoutOpened && isDetailedViewOpened ? 'open' : ''}`}
              style={{
                backgroundColor: !isCheckoutOpened && isDetailedViewOpened ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
                width: `${window.innerWidth}px`
              }}
              onClick={(e) => {
                e.preventDefault()
                if (e.target === e.currentTarget) {
                  setDetailedViewOpened(false)
                }
              }}
            >
              <div className="detailed-view-card" style={{marginTop: isDesktopOrLaptop ? '0px' : '24px'}}>
                <CloseButton
                  onClickAction={() => setDetailedViewOpened(false)}
                  iconSize={20}
                  changeColorOnHover={true}
                  onClickColor="#d1d1d9"
                />
                <div style={{
                  position: "absolute",
                  top: '-64px',
                  right: '64px',
                }}>
                  <ShareButton
                    productLink={buildProductLink()}
                    onClickAdditionalAction={() => {
                      if (!bottomHintState.isShown) {
                        dispatch(setBottomHintState(true, 'The link has been copied! You can share it with your friends 😎'))
                      }
                    }}
                  />
                </div>
                <div className="detailed-view-text-container">
                  <ProductInfoOnCard
                    productId={productId}
                    name={name}
                    brand={brand}
                    line={line}
                    price={price}
                    discountPrice={discountPrice}
                    stock={stock}
                    purchasedCount={purchasedCount}
                    weight={weight}
                    optionalTags={tags}
                  />
                  <div className={`containerwrapper`}>
                    <div className="heheboi"/>
                    <Scrollbar
                      className={`detailed-full-description ${(name.length > 20 || stock === 0 || stock === 1 || (tags && tags.includes(ProductTag.NEW)) || (discountPrice && discountPrice !== price)) ? 'short' : 'long'}`}
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
          </>
        )}
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
          <div className="product-price-wrapper">
            {stock !== 0 && discountPrice && discountPrice !== price && <span className={`product-price-before-discount`}>{price.toFixed(2)}€</span>}
            <span className={`product-price ${stock === 0 ? 'soldout' : ''}`}>{discountPrice ? discountPrice.toFixed(2) : price.toFixed(2)}€</span>
          </div>
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
    )
  }

  const renderMobile = () => {
    return(
      <div className="card-wrapper-mobile">
        <ProductViewMobile
          onClick={() => setDetailedViewOpened(false)}
          isOpened={isDetailedViewOpened}
          productId={productId}
          name={name}
          brand={brand}
          line={line}
          weight={weight}
          price={price}
          discountPrice={discountPrice}
          description={description}
          image={image}
          fullDescription={fullDescription}
          stock={stock}
          tags={tags}
        />
        <div
          style={{
            position:'absolute',
            top: '8px',
            left: '8px',
            display: "flex",
            flexDirection:'row',
            flexWrap:'wrap',
            gap: '6px'
          }}
          onClick={() => setDetailedViewOpened(true)}
        >
          {stock === 0 && <span className="soldout-detailed-mobile">Soldout</span>}
          {stock === 1 && <span className="tag-detailed-mobile" style={{ backgroundColor: '#FF8A00'}}>Last title</span>}
          {discountPrice && discountPrice !== price && <span className="tag-detailed-mobile" style={{ backgroundColor: '#22CE5D'}}>Sale</span>}
          {tags && tags.includes(ProductTag.NEW) && <span className="tag-detailed-mobile" style={{ backgroundColor: '#BC4FFF'}}>New</span>}
        </div>
        <ImageWrapper
          xRatio={608}
          yRatio={760}
        >
          <img
            onClick={() => setDetailedViewOpened(true)}
            src={image}
            alt={name}
            className="product-image-mobile"
            style={{
              width: '100%',
              height: "auto",
              borderRadius: '16px 16px 0px 0px'
            }}
          />
        </ImageWrapper>
        <div
          className="product-card-product-info-mobile"
          onClick={() => setDetailedViewOpened(true)}
        >
          <span
            className="product-name-mobile"
          >
            {`${brand} – ${name} (${line}) ${weight}G`}
          </span>
          <span
            className="product-description-mobile">{description}
          </span>
          <div className="product-price-wrapper-mobile">
            {stock !== 0 && discountPrice && discountPrice !== price && <span className={`product-price-before-discount-mobile`}>{price.toFixed(2)}€</span>}
            <span className={`product-price-mobile ${stock === 0 ? 'soldout' : ''}`}>{discountPrice ? discountPrice.toFixed(2) : price.toFixed(2)}€</span>
          </div>
        </div>
        <div className="button-container-mobile">
          {stock !== 0 ? (
            purchasedCount === 0
              ? (
                <StandardButton
                  text="Buy"
                  onClickAction={() => dispatch(incrementProductCount(productId))}
                  buttonStyle={{
                    height: '40px',
                    width: '100%',
                    borderRadius: '20px 0px 0px 20px'
                  }}
                  isMobile={true}
                />
              )
              : (
                <CounterButton
                  isMobile={true}
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
              height: '40px',
              width: '48px',
              backgroundColor:
                purchasedCount === 0
                  ? '#EAEBF0'
                  : "transparent",
            }}
            iconStyle={{
              left: '6px'
            }}
            isMobile={true}
            onClickAction={() => setDetailedViewOpened(true)}
          />
        </div>
      </div>
    )
  }

  return (isMobile ? renderMobile() : renderDesktop());
};

export default ProductCard;
