import './FinalCheckoutPage.css'
import React, {useCallback, useEffect, useState} from "react";
import CustomInput from "./input_field/CustomInput";
import PhoneCustomInput from "./phone_input/PhoneCustomInput";
import StandardButton from "../../ui_components/standart_button/StandartButton";
import PromocodeButton from "./promocode_button/PromocodeButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import {Products} from "../../../content/Products";
import CounterButton from "../../ui_components/counter_button/CounterButton";
import {
  clearCart,
  decrementProductCount,
  incrementProductCount,
  resetProductCount
} from "../../../redux/cart_reducer/CartReducer";
import CloseButton from "../../ui_components/close_button/CloseButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";
import LastProductWarningModal from "./last_product_warning_modal/LastProductWarningModal";
import CheckoutResult from "./checkout_result/CheckoutResult";
import {
  validateAddress, validateAll,
  validateCity,
  validateEmail, validateName, validateNumber,
  validatePostalCode
} from "./input_fields_validator/InputFieldsValidator";


const CheckoutState = {
  NEW: 'NEW',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const FinalCheckoutPage: React.FC = () => {
  const [checkoutResult, setCheckoutResult] = useState(CheckoutState.NEW)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [promocode, setPromocode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [deliveryPrice, setDeliveryPrice] = useState(10)
  const [isCheckoutButtonClicked, setCheckoutButtonClicked] = useState(false)
  const [isPromocodeButtonClicked, setPromocodeButtonClicked] = useState(false)

  const cartState = useSelector((state: RootState) => state.cart)
  const [actualCart, setActualCart] = useState(
    Object
    .entries(cartState)
    .filter(([, countInCart]) => countInCart !== 0)
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [lastProductWarningState, setLastProductWarningState] = useState({isShown: false, productId: '0'})

  useEffect(() => {
    setActualCart(Object
      .entries(cartState)
      .filter(([, value]) => value !== 0)
    )
  }, [cartState])

  useEffect(() => {
    if (actualCart.length === 0 && checkoutResult !== CheckoutState.SUCCESS) {
      navigate(RoutePaths.HOME)
    }
  }, [actualCart.length, checkoutResult, navigate])

  useEffect(() => {
    setCheckoutButtonClicked(false)
    setPromocodeButtonClicked(false)
  }, [])

  useEffect(() => {
    if (checkoutResult === CheckoutState.SUCCESS && Object.keys(cartState).length !== 0) {
      dispatch(clearCart())
    }
  }, [dispatch, checkoutResult, cartState]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (checkoutResult === CheckoutState.ERROR) {
      setCheckoutButtonClicked(false)
    }
  }, [checkoutResult]);

  useEffect(() => {
    if (promocode === 'Gleb' && isPromocodeButtonClicked) {
      setDiscount(3)
    }

    if (promocode !== 'Gleb' && isPromocodeButtonClicked) {
      setDiscount(0)
    }
  }, [isPromocodeButtonClicked, promocode]);

  const getTotalPrice = useCallback(() => {
    return Object.keys(cartState).reduce((acc, productId) => {
      const product = Products.find((p) => p.productId === productId);
      if (product) {
        const productCount = cartState[productId];
        const productPrice = product.price;
        return acc + productCount * productPrice;
      }
      return acc;
    }, 0);
  }, [cartState]);

  useEffect(() => {
    if (getTotalPrice() > 200) {
      setDeliveryPrice(0)
    } else {
      setDeliveryPrice(10)
    }
  }, [deliveryPrice, getTotalPrice]);

  const renderNewCheckoutResult = () => {
    return(
      <div
        style={{
          minHeight: '1000px',
          display: 'flex',
          flexDirection: "column",
          gap: '24px',
          paddingTop: '32px'
        }}
        className="final-checkout-page-wrapper"
      >
        <LastProductWarningModal
          isShown={lastProductWarningState.isShown}
          onConfirmAction={() => {
            setLastProductWarningState({...lastProductWarningState, isShown: false})
            dispatch(resetProductCount(lastProductWarningState.productId))}
          }
          onRollbackAction={() => {
            setLastProductWarningState({...lastProductWarningState, isShown: false})}
          }
        />
        <span className="header">📦 Your order</span>
        <div
          style={{
            display: "flex",
            flexDirection: 'row',
            gap: '64px',
            width: '1264px',
            marginBottom: '128px'
          }}
        >
          <div className="all-input-wrapper">
            <div className="input-box">
              <CustomInput
                placeholderText="Your name"
                multiline={false}
                invalidTextHint="Please enter your real name"
                validationFunc={(e) => validateName(e)}
                onInputChange={(text) => setName(text)}
                isSubmitButtonClicked={isCheckoutButtonClicked}
              />
              <CustomInput
                placeholderText="Your email"
                multiline={false}
                invalidTextHint="Incorrect e-mail. Please use form: email@domain.com"
                validationFunc={(e) => validateEmail(e)}
                onInputChange={(text) => setEmail(text)}
                isSubmitButtonClicked={isCheckoutButtonClicked}
              />
              <CustomInput
                placeholderText="Your city"
                multiline={false}
                invalidTextHint="Please enter your real city"
                validationFunc={(e) => validateCity(e)}
                onInputChange={(text) => setCity(text)}
                isSubmitButtonClicked={isCheckoutButtonClicked}
              />
              <CustomInput
                placeholderText="Your address"
                multiline={true}
                invalidTextHint="Please enter not blank address"
                validationFunc={(e) => validateAddress(e)}
                onInputChange={(text) => setAddress(text)}
                isSubmitButtonClicked={isCheckoutButtonClicked}
              />
              <CustomInput
                placeholderText="Zip-code"
                multiline={false}
                invalidTextHint="Incorrect zip-code. Please use form: 1234-567"
                validationFunc={(e) => validatePostalCode(e)}
                onInputChange={(text) => setZipCode(text)}
                isSubmitButtonClicked={isCheckoutButtonClicked}
                zipCode={true}
              />
              <PhoneCustomInput
                onChange={(e) => setPhone(e)}
                invalidPhoneHint="Incorrect number"
                isCheckoutButtonClicked={isCheckoutButtonClicked}
                validationFunc={(e) => validateNumber(e)}
              />
              <CustomInput
                placeholderText="Order comment (if desired)"
                multiline={true}
                validationFunc={() => true}
                onInputChange={(text) => setComment(text)}
                isSubmitButtonClicked={isCheckoutButtonClicked}
              />
            </div>
            <div className="input-box">
          <span
            className="delivery-info"
            dangerouslySetInnerHTML={{__html: 'We will deliver your order with <a href="https://www.ctt.pt/" target="_blank" rel="noreferrer">CTT</a>.</br>' +
                'Delivery will take up to 7 business days.</br>' +
                'Free shipping on orders of 200 euros and more.'
            }}
          />
              <div
                style={{
                  display: 'flex',
                  flexDirection: "row",
                  gap: '19px',
                  alignItems: 'flex-end'
                }}
              >
                <div
                  style={{
                    width: '414px'
                  }}
                >
                  <CustomInput
                    placeholderText="Promo code"
                    invalidTextHint="Invalid or expired code"
                    onInputChange={(text) => setPromocode(text)}
                    validationFunc={(e) => e === 'Gleb'}
                    isSubmitButtonClicked={isPromocodeButtonClicked}
                    onFocus={() => setPromocodeButtonClicked(false)}
                    promocode={true}
                  />
                </div>
                <PromocodeButton
                  onClickAction={() => setPromocodeButtonClicked(true)}
                />
              </div>
            </div>
            <StandardButton
              text="Checkout"
              buttonStyle={{
                height: '60px',
                borderRadius: '12px'
              }}
              onClickAction={() => {
                setCheckoutButtonClicked(true)
                if (validateAll(name, email, city, address, zipCode, phone)) {
                  setCheckoutResult(Math.random() > 0.5 ? CheckoutState.ERROR : CheckoutState.SUCCESS)
                }
              }}
            />
          </div>
          <div
            style={{
              width: '600px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            <div className="payment-info-wrapper">
              <div className="payment-line-wrapper">
                <span className="static-info">CTT Delivery: </span>
                <span className="black-info">{deliveryPrice.toFixed(2)}€</span>
              </div>
              <div className="payment-line-wrapper">
                <span className="static-info">Discount: </span>
                <span className={discount === 0 ? "black-info" : "green-info"}>{discount.toFixed(2)}€</span>
              </div>
              <div
                className="payment-line-wrapper"
                style={{
                  gap: discount === 0 ? '5px' : '10px',
                  transition: "all .2s ease",
                  WebkitTransition: "all .2s ease",
                  MozTransition: "all .2s ease",
                }}
              >
                <span className="static-info">Total amount: </span>
                <span
                  className="total-item-amount-without-discount"
                  dangerouslySetInnerHTML={{
                    __html: `${(getTotalPrice() + deliveryPrice).toFixed(2)}€`
                  }}
                  style={{
                    display: 'block',
                    maxWidth: discount === 0 ? '0px' : '200px',
                    overflow: 'hidden',
                  }}
                />
                <span className="black-info">{(getTotalPrice() - discount + deliveryPrice).toFixed(2)}€</span>
              </div>
            </div>
            {
              actualCart.map(([productId, productCount]) => {
                const product = Products.find(p => p.productId === productId)
                return(
                  <div className="order-item-container" key={productId}>
                    <img src={product.image} alt="p" style={{ width: '48px', height: '48px', borderRadius: '8px'}}/>
                    <div className="order-item-info-container">
                    <span className="order-item-header">
                       {`${product.brand} – ${product.name} (${product.line}) ${product.weight}G`}
                    </span>
                      <span className="order-item-price">
                      {`${product.price}€/Pack`}
                    </span>
                      <div className="buttons-wrapper">
                        <CounterButton
                          counterState={productCount}
                          isDark={false}
                          onPlusClickAction={() => dispatch(incrementProductCount(productId))}
                          onMinusClickAction={() => {
                            if (actualCart.length > 1 || productCount > 1) {
                              dispatch(decrementProductCount(productId))
                            } else {
                              setLastProductWarningState({isShown: true, productId: productId})
                            }
                          }}
                          isFramed={true}
                        />
                        <span className="total-item-amount">
                        {(product.price * productCount).toFixed(2)}€
                      </span>
                      </div>

                    </div>
                    <CloseButton
                      changeColorOnHover={true}
                      iconSize={16}
                      onClickAction={() => {
                        if (actualCart.length > 1) {
                          dispatch(resetProductCount(productId))
                        } else {
                          setLastProductWarningState({isShown: true, productId: productId})
                        }
                      }}
                      buttonStyle={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        width: '32px',
                        height: '32px'
                      }}
                      isDark={true}
                      onClickColor="#424446"
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (checkoutResult) {
      case CheckoutState.NEW:
        return renderNewCheckoutResult()
      case CheckoutState.ERROR:
        return (
          <CheckoutResult
            isSuccess={false}
            orderNumber={12345}
            onErrorAction={() => setCheckoutResult(CheckoutState.NEW)}
          />
        )
      case CheckoutState.SUCCESS:
        return (
          <CheckoutResult
            isSuccess={true} orderNumber={12345}
            onErrorAction={() => setCheckoutResult(CheckoutState.NEW)}
          />
        )
    }
  }

  return <div>{renderContent()}</div>
}

//@ts-ignore
export default FinalCheckoutPage

