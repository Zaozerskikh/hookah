import React, {useEffect, useMemo, useState} from "react";
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
import {
  buildFullTobaccoPageLink,
  buildTobaccoLink,
  isDiscount,
  isLast,
  isSoldout
} from "../../../models/TobaccoOperations";
import {useNavigate} from "react-router-dom";
import MoreButtonInverted from "../more_button/MoreButtonInverted";
import ProductTagsRow from "../product_tags/ProductTagsRow";

interface ProductCardProps extends ProductInfo {
  invertedColors ? : boolean,
  openFullPage ? : boolean
}
const ProductCard: React.FC<ProductCardProps> = ({ productId, name, brand,line,
                                                   weight, description, price, discountPrice,
                                                   image , fullDescription, stock, tags,
                                                   invertedColors, openFullPage}) => {
  const [isDetailedViewOpened, setDetailedViewOpened] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const isCheckoutOpened = useSelector((state: RootState) => state.productDetailedView.isVisible)
  const bottomHintState = useSelector((state: RootState) => state.bottomHint);

  const cartState = useSelector((state: RootState) => state.cart);
  const purchasedCount = useSelector((state: RootState) => state.cart[productId]) || 0;

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


  const soldout = useMemo(() => {
    return isSoldout(stock, cartState, productId)
  }, [cartState, productId, stock])

  const last = useMemo(() => {
    return isLast(stock, cartState, productId)
  }, [cartState, productId, stock])

  const discount = useMemo(() => {
    return isDiscount(price, discountPrice)
  }, [price, discountPrice])

  const renderDesktop = () => {
    return(
      <div className="product-card-container">
        <ProductTagsRow
          tags={tags}
          isSoldout={stock === 0}
          isLast={stock === 1}
          isDiscount={discount}
          optionalWrapperStyle={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            gap: '8px',
            flexWrap: 'wrap',
          }}
          optionalOnClickAction={() => {
            if (openFullPage) {
              navigate(buildTobaccoLink(productId, brand, name, line, weight))
            } else {
              setDetailedViewOpened(true)
            }
          }}
        />
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
              <div className="detailed-view-card">
                <CloseButton
                  onClickAction={() => setDetailedViewOpened(false)}
                  iconSize={20}
                  changeColorOnHover={true}
                  onClickColor="#d1d1d9"
                  buttonStyle={{
                    position: "absolute",
                    top: window.innerHeight > 660 ? '-64px' : '16px',
                    right: window.innerHeight <= 660 ? '16px' : 0,
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: window.innerHeight > 660  ? '-64px' : '16px',
                  right: window.innerHeight > 660  ? '64px' : '80px',
                }}>
                  <ShareButton
                    productLink={buildFullTobaccoPageLink(productId, brand, name, line, weight, FRONTEND_URL)}
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
                    isDiscount={discount}
                    isSoldout={soldout}
                    isLast={last}
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
                      <span className="test" dangerouslySetInnerHTML={{ __html: fullDescription}}/>
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
          onClick={() => {
            if (openFullPage) {
              navigate(buildTobaccoLink(productId, brand, name, line, weight))
            } else {
              setDetailedViewOpened(true)
            }
          }}
        />
        <div className="product-card-text">
          <span
            className="product-name"
            onClick={() => {
              if (openFullPage) {
                navigate(buildTobaccoLink(productId, brand, name, line, weight))
              } else {
                setDetailedViewOpened(true)
              }
            }}
            style={{
              fontSize: `${name.length > 20 ? 18 : 22}px`,
              color: invertedColors ? 'white' : "black"
            }}
          >
            {`${brand} – ${name} (${line}) ${weight}G`}
          </span>
          <span
            onClick={() => {
              if (openFullPage) {
                navigate(buildTobaccoLink(productId, brand, name, line, weight))
              } else {
                setDetailedViewOpened(true)
              }
            }}
            className="product-description">{description}
          </span>
          <div className="product-price-wrapper">
            {discount
              && <span className={`product-price-before-discount`}>{price.toFixed(2)}€</span>
            }
            <span
              className={`product-price ${stock === 0 ? 'soldout' : ''}`}
              style={{
                color: invertedColors ? stock === 0 ? '#CFD5DB' : 'white' : stock === 0 ? '#CFD5DB' : "black"
              }}
            >
              {discountPrice ? discountPrice.toFixed(2) : price.toFixed(2)}€
            </span>
          </div>
        </div>
        <div className="button-container">
          {!soldout ? (
            purchasedCount === 0
              ? (
                invertedColors ? (
                  <MoreButton
                    showText={true}
                    dontShowIcon={true}
                    text="Buy"
                    buttonStyle={{
                      width: '148px',
                      height: '48px',
                      borderRadius: '24px 0 0 24px',
                      backgroundColor: 'white',
                    }}
                    textStyle={{
                      marginBottom: '3px'
                    }}
                    onHoverColor="#EAEBF0"
                    onClickAction={() => dispatch(incrementProductCount(productId))}
                  />
                ) : (
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
              )
              : (
                <CounterButton
                  counterState={purchasedCount}
                  isDark={invertedColors}
                  wrapperStyle={ invertedColors ? {
                    backgroundColor: '#2C2D2E',
                    borderColor: '#2C2D2E'
                  } : {}}
                  onPlusClickAction={() => {
                    dispatch(incrementProductCount(productId))
                  }}
                  onMinusClickAction={() => {
                    dispatch(decrementProductCount(productId))
                  }}
                />
              )
          ) : (
            purchasedCount === 0 ? (
              <span className="soldout-text">Soldout</span>
            ) : (
              <CounterButton
                isGray={invertedColors}
                counterState={purchasedCount}
                isDark={invertedColors}
                disabledPlus={true}
                wrapperStyle={ invertedColors ? {
                  backgroundColor: '#2C2D2E',
                  borderColor: '#2C2D2E'
                } : {}}
                onMinusClickAction={() => {
                  dispatch(decrementProductCount(productId))
                }}
              />
            )
          )}
          {invertedColors ? (
            <MoreButtonInverted
              onClickAction={() => {
                if (openFullPage) {
                  navigate(buildTobaccoLink(productId, brand, name, line, weight))
                } else {
                  setDetailedViewOpened(true)
                }
              }}
              isTransparent={purchasedCount === 0}
            />
          ) : (
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
              onClickAction={() => {
                if (openFullPage) {
                  navigate(buildTobaccoLink(productId, brand, name, line, weight))
                } else {
                  setDetailedViewOpened(true)
                }
              }}
            />
          )}
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
          isSoldout={soldout}
          isDiscount={discount}
          isLast={last}
        />
        <ProductTagsRow
          tags={tags}
          isSoldout={stock === 0}
          isLast={stock === 1}
          isDiscount={discount}
          isMobile={true}
          optionalWrapperStyle={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            gap: '6px',
            flexWrap: 'wrap',
          }}
          optionalOnClickAction={() => {
            if (openFullPage) {
              navigate(buildTobaccoLink(productId, brand, name, line, weight))
            } else {
              setDetailedViewOpened(true)
            }
          }}
        />
        <ImageWrapper
          xRatio={608}
          yRatio={760}
        >
          <img
            onClick={() => {
              if (openFullPage) {
                navigate(buildTobaccoLink(productId, brand, name, line, weight))
              } else {
                setDetailedViewOpened(true)
              }
            }}
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
          onClick={() => {
            if (openFullPage) {
              navigate(buildTobaccoLink(productId, brand, name, line, weight))
            } else {
              setDetailedViewOpened(true)
            }
          }}
        >
          <span
            className="product-name-mobile"
            style={{ color: invertedColors ? 'white' : 'black'}}
          >
            {`${brand} – ${name} (${line}) ${weight}G`}
          </span>
          <span
            className="product-description-mobile">{description}
          </span>
          <div className="product-price-wrapper-mobile">
            {discount && (
              <span
                className={`product-price-before-discount-mobile`}
              >
                {price.toFixed(2)}€
              </span>
            )}
            <span
              className={`product-price-mobile ${stock === 0 ? 'soldout' : ''}`}
              style={{
                color: invertedColors ? stock === 0 ? '#CFD5DB' : 'white' : stock === 0 ? '#CFD5DB' : "black"
              }}
            >
              {discountPrice ? discountPrice.toFixed(2) : price.toFixed(2)}€
            </span>
          </div>
        </div>
        <div className="button-container-mobile">
          {!soldout ? (
            purchasedCount === 0
              ? (
                invertedColors ? (
                  <MoreButton
                    showText={true}
                    dontShowIcon={true}
                    isMobile={true}
                    text="Buy"
                    buttonStyle={{
                      width: '102px',
                      height: '40px',
                      borderRadius: '24px 0 0 24px',
                      backgroundColor: 'white',
                    }}
                    textStyle={{
                      marginBottom: '3px'
                    }}
                    onHoverColor="#EAEBF0"
                    onClickAction={() => dispatch(incrementProductCount(productId))}
                  />
                ) : (
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
              )
              : (
                <CounterButton
                  isMobile={true}
                  counterState={purchasedCount}
                  isDark={invertedColors}
                  onPlusClickAction={() => {
                    dispatch(incrementProductCount(productId))
                  }}
                  onMinusClickAction={() => {
                    dispatch(decrementProductCount(productId))
                  }}
                  wrapperStyle={ invertedColors ? {
                    backgroundColor: '#2C2D2E',
                    borderColor: '#2C2D2E'
                  } : {}}
                />
              )
          ) : (
            purchasedCount === 0 ? (
              <span className="soldout-text">Soldout</span>
            ) : (
              <CounterButton
                isGray={invertedColors}
                isMobile={true}
                counterState={purchasedCount}
                isDark={invertedColors}
                disabledPlus={true}
                onPlusClickAction={() => {
                  dispatch(incrementProductCount(productId))
                }}
                onMinusClickAction={() => {
                  dispatch(decrementProductCount(productId))
                }}
                wrapperStyle={ invertedColors ? {
                  backgroundColor: '#2C2D2E',
                  borderColor: '#2C2D2E'
                } : {}}
              />
            )
          )}
          {invertedColors ? (
            <MoreButtonInverted
              isMobile={true}
              onClickAction={() => {
                if (openFullPage) {
                  navigate(buildTobaccoLink(productId, brand, name, line, weight))
                } else {
                  setDetailedViewOpened(true)
                }
              }}
              isTransparent={purchasedCount === 0}
            />
          ) : (
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
              onClickAction={() => {
                if (openFullPage) {
                  navigate(buildTobaccoLink(productId, brand, name, line, weight))
                } else {
                  setDetailedViewOpened(true)
                }
              }}
            />
          )}
        </div>
      </div>
    )
  }

  return (isMobile ? renderMobile() : renderDesktop());
};

export default ProductCard;
