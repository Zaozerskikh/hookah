import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import cartIcon from './../../../assets/icons/cart_button/cart.png'
import hangerIcon from './../../../assets/icons/cart_button/hang.png'
import './CartButton.css'
import {Products} from "../../../content/Products";
import CloseButton from "../close_button/CloseButton";
import Scrollbar from "react-scrollbars-custom";
import CounterButton from "../counter_button/CounterButton";
import {decrementProductCount, incrementProductCount, resetProductCount} from "../../../redux/cart_reducer/CartReducer";
import {setIsCheckoutWindowShown} from "../../../redux/product_detailed_view_reducer/CheckoutWindowReducer";
import StandardButton from "../standart_button/StandartButton";
import MoreButton from "../more_button/MoreButton";
import {RoutePaths} from "../../../routes/RoutePaths";
import {useLocation, useNavigate} from "react-router-dom";
import {
  getActualCart,
  getFullAmountWithDiscount,
  getProductsCountInCart
} from "../../../redux/cart_reducer/CartOperations";
import {useMediaQuery} from "react-responsive";
import BottomSlider from "../bottom_slider/BottomSlider";

const CartButton: React.FC = () => {
  const cartState = useSelector((state: RootState) => state.cart)
  const [actualCart, setActualCart] = useState(getActualCart(cartState))
  const warningState = useSelector((state: RootState) => state.warning)
  const isCheckoutOpened = useSelector((state: RootState) => state.productDetailedView.isVisible)
  const [isHovered, setHovered] = useState(false)
  const [isClicked, setClicked] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  useEffect(() => {
    setActualCart(Object
      .entries(cartState)
      .filter(([, value]) => value !== 0)
    )
  }, [cartState])

  useEffect(() => {
    if (isCheckoutOpened) {
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
  }, [isCheckoutOpened]);

  useEffect(() => {
    if (isCheckoutOpened && Object.values(cartState).reduce((acc, value) => acc + value, 0) === 0) {
      dispatch(setIsCheckoutWindowShown(false))
    }
  }, [cartState, dispatch, isCheckoutOpened])

  const renderDesktop = () => {
    return(
      <div>
        <div
          className={`checkout-container ${isCheckoutOpened ? 'opened' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            if (e.target === e.currentTarget) {
              dispatch(setIsCheckoutWindowShown(false))
            }
          }}
        >
          <div
            className="checkout-card"
            style={{
              height: `${Math.min(actualCart.length * 117 + 150, 759, window.innerHeight - 200)}px`,
            }}
          >
            <CloseButton
              onClickAction={() => dispatch(setIsCheckoutWindowShown(false))}
              iconSize={20}
              changeColorOnHover={true}
              onClickColor="#d1d1d9"
            />
            <div className="order-header">Your order</div>
            <div
              className="detailed-full-description-wrapper"
            >
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
                <div className="products-container">
                  {
                    actualCart.map(([key, value]) => {
                      const product = Products.find(p => p.productId === key)
                      return(
                        <div className="order-item-container" key={key}>
                          <img src={product.image} alt="dd" className="product-img"/>
                          <div className="product-info">
                          <span className="product-header">
                            {`${product.brand} – ${product.name} (${product.line}) ${product.weight}G`}
                          </span>
                            <div style={{ display: "flex", flexDirection: 'row', gap: '4px'}}>
                              {product.discountPrice && product.discountPrice !== product.price && <span className="product-price-old">{`${product.price}€/Pack`}</span> }
                              <span className="product-price">{`${product.discountPrice ? product.discountPrice : product.price}€/Pack`}</span>
                            </div>
                          </div>
                          <div style={{marginLeft: '20px', marginRight: '20px'}}>
                            <CounterButton
                              counterState={value}
                              isDark={true}
                              onPlusClickAction={() => dispatch(incrementProductCount(key))}
                              onMinusClickAction={() => dispatch(decrementProductCount(key))}
                            />
                          </div>
                          <div className="total-price-info">{((product.discountPrice ? product.discountPrice : product.price) * value).toFixed(2)}€</div>
                          <CloseButton
                            buttonStyle={{
                              position: "relative",
                              bottom: '20px',
                              width: '32px',
                              height: '32px',
                              top: 0,
                              right: 10
                            }}
                            isDark={true}
                            iconSize={16}
                            onClickAction={() => dispatch(resetProductCount(key))}
                            changeColorOnHover={true}
                            onClickColor="#424446"
                          />
                        </div>
                      )
                    })
                  }
                </div>
              </Scrollbar>
            </div>
            <div className="total-total-amount-info">{`Total Amount: ${getFullAmountWithDiscount(cartState).toFixed(2)}€`}</div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            >
              <StandardButton
                text="Back to shopping"
                buttonStyle={{
                  width: '462px',
                  height: '48px',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderColor: 'white',
                  borderRadius: '24px'
                }}
                onHoverColor="white"
                onClickAction={() => dispatch(setIsCheckoutWindowShown(false))}
              />
              <MoreButton
                showText={true}
                text="Checkout"
                buttonStyle={{
                  width: '462px',
                  height: '48px',
                  borderRadius: '24px'
                }}
                onClickAction={() => {
                  dispatch(setIsCheckoutWindowShown(false))
                  navigate(RoutePaths.FINAL_CHECKOUT)
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="cart-button"
          style={{
            cursor: isHovered ? 'pointer' : undefined,
            position: "fixed",
            right: location.pathname === RoutePaths.FINAL_CHECKOUT || isCheckoutOpened || warningState.isShown || Object
              .values(cartState)
              .reduce((acc, value) => acc + value, 0) === 0 ? '-88px' : '20px',
            boxShadow: '0px 0px 10px #9093984D',
            top: '186px',
            width: '82px',
            height: '82px',
            backgroundColor: isClicked ? '#c7ccd3' : isHovered ? '#CFD5DB' : '#EAEBF0',
            border: 'none',
            borderRadius: '41px',
            transition: "all .2s ease",
            WebkitTransition: "all .2s ease",
            MozTransition: "all .2s ease",
            zIndex: '9999'
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => dispatch(setIsCheckoutWindowShown(true))}
          onMouseDown={() => setClicked(true)}
          onMouseUp={() => setClicked(false)}
          onMouseOut={() => setClicked(false)}
        >
          <div
            style={{
              position: "relative",
              height: '82px',
              width: '82px',
              transition: "all .2s ease",
              WebkitTransition: "all .2s ease",
              MozTransition: "all .2s ease",
            }}
          >
            <img
              src={hangerIcon}
              alt="c"
              style={{
                height: !isHovered ? '5px' : '0px',
                width: '2.5px',
                position: 'absolute',
                top: !isHovered ? '37px' : '37px',
                left: '43px',
                transition: "all .1s ease",
                WebkitTransition: "all .1s ease",
                MozTransition: "all .1s ease",
                zIndex: '4'
              }}
            />
            <img
              src={hangerIcon}
              alt="c"
              style={{
                height: !isHovered ? '4px' : '9px',
                width: '2.5px',
                position: 'absolute',
                top:'38px',
                left: '36.3px',
                transition: "all .2s ease",
                WebkitTransition: "all .2s ease",
                MozTransition: "all .2s ease",
                zIndex: '3'
              }}
            />
            <img
              src={cartIcon}
              alt="c"
              style={{
                height: !isHovered ? '28px' : '30px',
                width: !isHovered ? '28px' : '30px',
                position: 'absolute',
                top: !isHovered ? '27px' : '26px',
                left: !isHovered ? '27px' : '26px',
                transition: "all .1s ease",
                WebkitTransition: "all .1s ease",
                MozTransition: "all .1s ease",
                zIndex: '5',
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: '28px',
                height: '28px',
                border: 'none',
                borderRadius: '14px',
                backgroundColor: '#005CCD',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="info-text">{getProductsCountInCart(cartState)}</span>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: '28px',
                minWidth: '20px',
                border: 'none',
                borderRadius: '16px',
                backgroundColor: '#005CCD',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0px 6px',
                transition: "all .2s ease",
                WebkitTransition: "all .2s ease",
                MozTransition: "all .2s ease",
                opacity: isHovered ? 1 : 0
              }}
            >
              <span className="info-text">{Math.ceil(getFullAmountWithDiscount(cartState))}€</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return(
      <>
        <BottomSlider
          isOpened={isCheckoutOpened}
          maxRelativeHeight={0.85}
          onCloseAction={() => dispatch(setIsCheckoutWindowShown(false))}
          threshold={9}
          gestureZoneChild={(<div style={{height: '0px', width: '100%'}}/>)}
          mainZoneChild={(
            <>
              <div className="ur-order-span-mobile">Your Order</div>
              <div className="products-container-mobile">
                <div
                  style={{
                    position: "fixed",
                    top: '24px',
                    right: '16px',
                    opacity: isCheckoutOpened ? '1' : '0',
                    transition: "all .2s ease",
                    WebkitTransition: "all .2s ease",
                    MozTransition: "all .2s ease"
                  }}
                >
                  <CloseButton
                    changeColorOnHover={false}
                    onClickColor={'white'}
                    iconSize={17}
                    onClickAction={() => dispatch(setIsCheckoutWindowShown(false))}
                    isMobile={true}
                    buttonStyle={{
                      top: 0,
                      width: '42px',
                      height: '42px',
                    }}
                  />
                </div>
                {
                  actualCart.map(([key, value]) => {
                    const product = Products.find(p => p.productId === key)
                    return(
                      <div className="order-item-container-mobile" key={key}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '16px'}}>
                          <CloseButton
                            buttonStyle={{
                              position: "absolute",
                              width: '24px',
                              height: '24px',
                              top: '2px',
                              right: 0
                            }}
                            isDark={true}
                            iconSize={12}
                            onClickAction={() => dispatch(resetProductCount(key))}
                            changeColorOnHover={true}
                            onClickColor="#424446"
                            isMobile={true}
                          />
                          <img src={product.image} alt="dd" className="product-img-mobile"/>
                          <div className="product-info-mobile">
                        <span className="product-header-mobile">
                          {`${product.brand} – ${product.name} (${product.line}) ${product.weight}G`}
                        </span>
                            <div style={{ display: "flex", flexDirection: 'row', gap: '4px'}}>
                              {product.discountPrice && product.discountPrice !== product.price && <span className="product-price-old-mobile">{`${product.price}€/Pack`}</span> }
                              <span className="product-price-mobile">{`${product.discountPrice ? product.discountPrice : product.price}€/Pack`}</span>
                            </div>
                          </div>
                        </div>
                        <div style={{marginLeft: '48px', display: "flex", flexDirection: 'row', width: 'calc(100% - 48px)', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                          <div className="total-price-info-mobile">{((product.discountPrice ? product.discountPrice : product.price) * value).toFixed(2)}€</div>
                          <CounterButton
                            counterState={value}
                            isDark={true}
                            onPlusClickAction={() => dispatch(incrementProductCount(key))}
                            onMinusClickAction={() => dispatch(decrementProductCount(key))}
                            isMobile={true}
                            wrapperStyle={{
                              maxWidth: '86px',
                            }}
                          />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <MoreButton
                showText={true}
                isMobile={true}
                text={`Checkout ${getFullAmountWithDiscount(cartState).toFixed(2)}€`}
                buttonStyle={{
                  width: '100%',
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  marginTop: '2px',
                  zIndex: '10000',
                  height: '40px'
                }}
                textStyle={{
                  fontFamily: 'Monsterrat-600, serif',
                  fontSize: '16px',
                  marginLeft: '30px'
                }}
                iconStyle={{
                  right: '27px'
                }}
              />
              <div className="checkoot-mobile-bottom-grad"/>
            </>
          )}
        />
        <div
          className="cart-button-mobile"
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: "fixed",
            top: getActualCart(cartState).length === 0 ? '-60px' : '6px',
            left: '59px',
            padding: '7px 15px 7px 9px',
            backgroundColor: isHovered ? '#CFD5DB' : '#EAEBF0',
            zIndex: '6000',
            borderRadius: '20px',
            transition: "all .2s ease",
            WebkitTransition: "all .2s ease",
            MozTransition: "all .2s ease",
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
          onTouchCancel={() => setHovered(false)}
          onTouchStart={() => setHovered(true)}
          onTouchEnd={() => setHovered(false)}
          onClick={() => dispatch(setIsCheckoutWindowShown(true))}
        >
          <div className="product-count-mobile">
            <span className="product-count-text">{getProductsCountInCart(cartState)}</span>
          </div>
          <div style={{position: 'relative', width: '24px', height: '26px'}}>
            <img
              src={hangerIcon}
              alt="c"
              style={{
                height: !isHovered ? '4px' : '7px',
                top: '8px',
                width: '2px',
                left: '13.5px',
                position: 'absolute',
                transition: "all .1s ease",
                WebkitTransition: "all .1s ease",
                MozTransition: "all .1s ease",
                zIndex: '4'
              }}
            />
            <img
              src={hangerIcon}
              alt="c"
              style={{
                height: !isHovered ? '4px' : '0px',
                top: '8px',
                width: '2px',
                left: '8px',
                position: 'absolute',
                transition: "all .2s ease",
                WebkitTransition: "all .2s ease",
                MozTransition: "all .2s ease",
                zIndex: '3'
              }}
            />
            <img
              src={cartIcon}
              alt="c"
              style={{
                height: !isHovered ? '22px' : '24px',
                width: !isHovered ? '22px' : '24px',
                top: isHovered ? '0px' : '1px',
                left: isHovered ? '0px' : '1px',
                position: 'absolute',
                transition: "all .1s ease",
                WebkitTransition: "all .1s ease",
                MozTransition: "all .1s ease",
                zIndex: '5',
              }}
            />
          </div>
          <span className="product-amount-text">{getFullAmountWithDiscount(cartState).toFixed(2)}€</span>
        </div>
      </>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

export default CartButton;
