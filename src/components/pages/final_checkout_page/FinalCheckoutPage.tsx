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
  validatePostalCode, validateSurname
} from "./input_fields_validator/InputFieldsValidator";
import {
  getActualCart,
  getFullAmountWithDiscount,
  getFullAmountWithoutDiscount
} from "../../../redux/cart_reducer/CartOperations";
import {setBottomHintState} from "../../../redux/bottom_hint_reducer/BottomHintReducer";
import {useMediaQuery} from "react-responsive";
import ReturnToCartButton from "./return_to_cart_button/ReturnToCartButton";
import {setIsCheckoutWindowShown} from "../../../redux/product_detailed_view_reducer/CheckoutWindowReducer";
import {setIsLastProductWarningShown} from "../../../redux/last_product_warning_reducer/LastProductWarningReducer";


const CheckoutState = {
  NEW: 'NEW',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const FinalCheckoutPage: React.FC = () => {
  const [checkoutResult, setCheckoutResult] = useState(CheckoutState.NEW)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [promocode, setPromocode] = useState('')
  const [commonDiscount, setCommonDiscount] = useState(0)
  const [promocodeDiscount, setPromocodeDiscount] = useState(0)
  const [deliveryPrice, setDeliveryPrice] = useState(10)
  const [isCheckoutButtonClicked, setCheckoutButtonClicked] = useState(false)
  const [isPromocodeButtonClicked, setPromocodeButtonClicked] = useState(false)

  const cartState = useSelector((state: RootState) => state.cart)
  const [actualCart, setActualCart] = useState(getActualCart(cartState))
  const lastProductWarningState= useSelector((state: RootState) => state.lastProductWarning)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setActualCart(getActualCart(cartState))
    setCommonDiscount(getFullAmountWithoutDiscount(cartState) - getFullAmountWithDiscount(cartState))
  }, [cartState])

  useEffect(() => {
    if (actualCart.length === 0 && checkoutResult !== CheckoutState.SUCCESS) {
      navigate(RoutePaths.TOBACCO)
    }
  }, [actualCart.length, checkoutResult, navigate])

  useEffect(() => {
    setCheckoutButtonClicked(false)
    setPromocodeButtonClicked(false)
    document.body.classList.remove('hidden');
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
      dispatch(setBottomHintState(true, 'Promo code activated! 🎁'))
      setPromocodeDiscount(3)
      console.log('called')
    }

    if (promocode !== 'Gleb' && isPromocodeButtonClicked) {
      setPromocodeDiscount(0)
    }
  }, [dispatch, isPromocodeButtonClicked, promocode]);

  const getTotalPrice = useCallback(() => {
    return getFullAmountWithDiscount(cartState)
  }, [cartState]);

  useEffect(() => {
    if (getTotalPrice() > 200) {
      setDeliveryPrice(0)
    } else {
      setDeliveryPrice(10)
    }
  }, [deliveryPrice, getTotalPrice]);

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  const renderNewCheckoutResultDesktop = () => {
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
            dispatch(setIsLastProductWarningShown(false, lastProductWarningState.productId))
            dispatch(resetProductCount(lastProductWarningState.productId))}
          }
          onRollbackAction={() => {
            dispatch(setIsLastProductWarningShown(false, lastProductWarningState.productId))
          }}
        />
        <span className="header">📦 Your order</span>
        <div
          style={{
            display: "flex",
            flexDirection: 'row',
            gap: isDesktopOrLaptop ? '64px' : '48px',
            width: isDesktopOrLaptop ? '1264px' : '948px',
            marginBottom: '128px'
          }}
        >
          <div className="all-input-wrapper" style={{ width: isDesktopOrLaptop ? '600px' : '450px'}}>
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
                placeholderText="Your surname"
                multiline={false}
                invalidTextHint="Please enter your real surname"
                validationFunc={(e) => validateSurname(e)}
                onInputChange={(text) => setSurname(text)}
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
                placeholderText="Country"
                multiline={false}
                invalidTextHint="Please enter your real country"
                validationFunc={() => true}
                onInputChange={() => true}
                isSubmitButtonClicked={false}
                disabled={true}
                initialText="Portugal"
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
                if (validateAll(name, surname, email, city, address, zipCode, phone)) {
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
            <div className="payment-info-wrapper" style={{ width: isDesktopOrLaptop ? '600px' : '450px'}}>
              <div className="payment-line-wrapper">
                <span className="static-info">CTT Delivery: </span>
                <span className="black-info">{deliveryPrice.toFixed(2)}€</span>
              </div>
              <div className="payment-line-wrapper">
                <span className="static-info">Discount: </span>
                <span className={commonDiscount + promocodeDiscount === 0 ? "black-info" : "green-info"}>{(commonDiscount + promocodeDiscount).toFixed(2)}€</span>
              </div>
              <div
                className="payment-line-wrapper"
                style={{
                  gap: commonDiscount === 0 ? '5px' : '10px',
                  transition: "all .2s ease",
                  WebkitTransition: "all .2s ease",
                  MozTransition: "all .2s ease",
                }}
              >
                <span className="static-info">Total amount: </span>
                <span
                  className="total-item-amount-without-discount"
                  dangerouslySetInnerHTML={{
                    __html: `${(getFullAmountWithoutDiscount(cartState) + deliveryPrice).toFixed(2)}€`
                  }}
                  style={{
                    display: 'block',
                    maxWidth: commonDiscount + promocodeDiscount === 0 ? '0px' : '200px',
                    overflow: 'hidden',
                  }}
                />
                <span className="black-info">{(getFullAmountWithoutDiscount(cartState) - commonDiscount - promocodeDiscount + deliveryPrice).toFixed(2)}€</span>
              </div>
            </div>
            {
              actualCart.map(([productId, productCount]) => {
                const product = Products.find(p => p.productId === productId)
                return(
                  <div className="order-item-container" key={productId} style={{ width: isDesktopOrLaptop ? '600px' : '450px'}}>
                    <img src={product.image} alt="p" style={{ width: '48px', height: '48px', borderRadius: '8px'}}/>
                    <div className="order-item-info-container"  style={{ width: isDesktopOrLaptop ? '401px' : '340px'}}>
                    <span className="order-item-header">
                       {`${product.brand} – ${product.name} (${product.line}) ${product.weight}G`}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '4px'}}>
                      {product.discountPrice && product.discountPrice !== product.price && (
                        <span className="order-item-old-price">
                          {`${product.price}€/Pack`}
                        </span>
                      )}
                      <span className="order-item-price">
                        {`${product.discountPrice ? product.discountPrice : product.price}€/Pack`}
                      </span>
                    </div>
                    <div className="buttons-wrapper">
                      <CounterButton
                        counterState={productCount}
                        isDark={false}
                        onPlusClickAction={() => dispatch(incrementProductCount(productId))}
                        onMinusClickAction={() => {
                          if (actualCart.length > 1 || productCount > 1) {
                            dispatch(decrementProductCount(productId))
                          } else {
                            dispatch(setIsLastProductWarningShown(true, productId))
                          }
                        }}
                        isFramed={true}
                      />
                      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px'}}>
                        {product.discountPrice && product.discountPrice !== product.price &&(
                          <span className="total-item-old-amount">
                            {(product.price * productCount).toFixed(2)}€
                          </span>
                        )}
                        <span className="total-item-amount">
                          {((product.discountPrice ? product.discountPrice : product.price) * productCount).toFixed(2)}€
                        </span>
                      </div>
                    </div>

                    </div>
                    <CloseButton
                      changeColorOnHover={true}
                      iconSize={16}
                      onClickAction={() => {
                        if (actualCart.length > 1) {
                          dispatch(resetProductCount(productId))
                        } else {
                          dispatch(setIsLastProductWarningShown(true, productId))
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

  const renderNewCheckoutResultMobile = () => {
    return(
      <>
        <LastProductWarningModal
          isShown={lastProductWarningState.isShown}
          onConfirmAction={() => {
            dispatch(setIsLastProductWarningShown(false, lastProductWarningState.productId))
            dispatch(resetProductCount(lastProductWarningState.productId))}
          }
          onRollbackAction={() => {
            dispatch(setIsLastProductWarningShown(false, lastProductWarningState.productId))
          }}
          isMobile={true}
        />
        <div className="final-checkout-page-wrapper-mobile">
          <div className="inputs-wrapper">
            <span className="header-mobile">📦 Your order</span>
            <CustomInput
              placeholderText="Your name"
              multiline={false}
              invalidTextHint="Please enter your real name"
              validationFunc={(e) => validateName(e)}
              onInputChange={(text) => setName(text)}
              isSubmitButtonClicked={isCheckoutButtonClicked}
            />
            <CustomInput
              placeholderText="Your surname"
              multiline={false}
              invalidTextHint="Please enter your real surname"
              validationFunc={(e) => validateSurname(e)}
              onInputChange={(text) => setSurname(text)}
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
              placeholderText="Country"
              multiline={false}
              invalidTextHint="Please enter your real country"
              validationFunc={() => true}
              onInputChange={() => true}
              isSubmitButtonClicked={false}
              disabled={true}
              initialText="Portugal"
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
          <div className="delivery-promo-wrapper">
          <span
            className="delivery-info-mobile"
            dangerouslySetInnerHTML={{__html: 'We will deliver your order with <a href="https://www.ctt.pt/" target="_blank" rel="noreferrer">CTT</a>.</br>' +
                'Delivery will take up to 7 business days.</br>' +
                'Free shipping on orders of 200 euros and more.'
            }}
          />
            <div className="promo-wrapper">
              <CustomInput
                placeholderText="Promo code"
                invalidTextHint="Invalid or expired code"
                onInputChange={(text) => setPromocode(text)}
                validationFunc={(e) => e === 'Gleb'}
                isSubmitButtonClicked={isPromocodeButtonClicked}
                onFocus={() => setPromocodeButtonClicked(false)}
                promocode={true}
              />
              <PromocodeButton
                onClickAction={() => setPromocodeButtonClicked(true)}
                isMobile={true}
              />
            </div>
          </div>
          <div className="payment-info-wrapper-mobile">
            <div className="payment-line-wrapper-mobile">
              <span className="static-info-mobile">CTT Delivery: </span>
              <span className="black-info-mobile">{deliveryPrice.toFixed(2)}€</span>
            </div>
            <div className="payment-line-wrapper-mobile">
              <span className="static-info-mobile">Discount: </span>
              <span className={commonDiscount + promocodeDiscount === 0 ? "black-info-mobile" : "green-info-mobile"}>{(commonDiscount + promocodeDiscount).toFixed(2)}€</span>
            </div>
            <div
              className="payment-line-wrapper-mobile"
              style={{
                gap: commonDiscount === 0 ? '5px' : '10px',
                transition: "all .2s ease",
                WebkitTransition: "all .2s ease",
                MozTransition: "all .2s ease",
              }}
            >
              <span className="static-info-mobile">Total amount: </span>
              <span
                className="total-item-amount-without-discount-mobile"
                dangerouslySetInnerHTML={{
                  __html: `${(getFullAmountWithoutDiscount(cartState) + deliveryPrice).toFixed(2)}€`
                }}
                style={{
                  display: 'block',
                  maxWidth: commonDiscount + promocodeDiscount === 0 ? '0px' : '200px',
                  overflow: 'hidden',
                }}
              />
              <span className="black-info-mobile">{(getFullAmountWithoutDiscount(cartState) - commonDiscount - promocodeDiscount + deliveryPrice).toFixed(2)}€</span>
            </div>
          </div>
          <div className="buttons-wrapper-final">
            <ReturnToCartButton
              onClickAction={() => dispatch(setIsCheckoutWindowShown(true))}
            />
            <StandardButton
              text="Checkout"
              buttonStyle={{
                height: '48px',
                borderRadius: '8px'
              }}
              onClickAction={() => {
                setCheckoutButtonClicked(true)
                if (validateAll(name, surname, email, city, address, zipCode, phone)) {
                  setCheckoutResult(Math.random() > 0.5 ? CheckoutState.ERROR : CheckoutState.SUCCESS)
                } else {
                  window.scrollTo({ top: 0})
                }
              }}
              isMobile={true}
            />
          </div>
        </div>
      </>
    )
  }

  const renderContent = () => {
    switch (checkoutResult) {
      case CheckoutState.NEW:
        return isMobile ? renderNewCheckoutResultMobile() : renderNewCheckoutResultDesktop()
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

  return renderContent()
}

//@ts-ignore
export default FinalCheckoutPage

