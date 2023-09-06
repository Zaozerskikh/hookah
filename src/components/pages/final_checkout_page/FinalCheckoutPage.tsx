import './FinalCheckoutPage.css'
import React, {useEffect, useState} from "react";
import CustomInput from "./input_field/CustomInput";
import PhoneCustomInput from "./phone_input/PhoneCustomInput";
import StandardButton from "../../ui_components/standart_button/StandartButton";
import PromocodeButton from "./promocode_button/PromocodeButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import {Products} from "../../../content/Products";
import CounterButton from "../../ui_components/counter_button/CounterButton";
import {decrementProductCount, incrementProductCount, resetProductCount} from "../../../redux/cart_reducer/CartReducer";
import CloseButton from "../../ui_components/close_button/CloseButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const postalCodeRegex = /^\d{4}-\d{3}$/

const FinalCheckoutPage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [promocode, setPromocode] = useState('')
  const [isCheckoutButtonClicked, setCheckoutButtonClicked] = useState(false)
  const [isPromocodeButtonClicked, setPromocodeButtonClicked] = useState(false)

  const cartState = useSelector((state: RootState) => state.cart)
  const [actualCart, setActualCart] = useState(Object
    .entries(cartState)
    .filter(([, countInCart]) => countInCart !== 0)
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setActualCart(Object
      .entries(cartState)
      .filter(([, value]) => value !== 0)
    )
  }, [cartState])

  useEffect(() => {
    if (actualCart.length === 0) {
      navigate(RoutePaths.HOME)
    }
  }, [actualCart.length, navigate])

  useEffect(() => {
    setCheckoutButtonClicked(false)
    setPromocodeButtonClicked(false)
  }, [])

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  const getTotalPrice = (): number => {
    return Object.keys(cartState).reduce((acc, productId) => {
      const product = Products.find((p) => p.productId === productId);
      if (product) {
        const productCount = cartState[productId];
        const productPrice = product.price;
        return acc + productCount * productPrice;
      }
      return acc;
    }, 0)
  }

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
              validationFunc={(e) => e.length > 1}
              onInputChange={(text) => setName(text)}
              isSubmitButtonClicked={isCheckoutButtonClicked}
            />
            <CustomInput
              placeholderText="Your email"
              multiline={false}
              invalidTextHint="Incorrect e-mail. Please use form: email@domain.com"
              validationFunc={(e) => emailRegex.test(e)}
              onInputChange={(text) => setEmail(text)}
              isSubmitButtonClicked={isCheckoutButtonClicked}
            />
            <CustomInput
              placeholderText="Your city"
              multiline={false}
              invalidTextHint="Please enter your real city"
              validationFunc={(e) => e.length > 2}
              onInputChange={(text) => setCity(text)}
              isSubmitButtonClicked={isCheckoutButtonClicked}
            />
            <CustomInput
              placeholderText="Your address"
              multiline={true}
              invalidTextHint="Please enter not blank address"
              validationFunc={(e) => e.length > 1}
              onInputChange={(text) => setAddress(text)}
              isSubmitButtonClicked={isCheckoutButtonClicked}
            />
            <CustomInput
              placeholderText="Zip-code"
              multiline={false}
              invalidTextHint="Incorrect zip-code. Please use form: 1234-567"
              validationFunc={(e) => postalCodeRegex.test(e)}
              onInputChange={(text) => setZipCode(text)}
              isSubmitButtonClicked={isCheckoutButtonClicked}
              zipCode={true}
            />
            <PhoneCustomInput
              onChange={(e) => setPhone(e)}
              invalidPhoneHint="Incorrect number"
              isCheckoutButtonClicked={isCheckoutButtonClicked}
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
                  validationFunc={() => false}
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
            onClickAction={() => setCheckoutButtonClicked(true)}
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
              <span className="black-info">0€</span>
            </div>
            <div className="payment-line-wrapper">
              <span className="static-info">Discount: </span>
              <span className="green-info">0€</span>
            </div>
            <div className="payment-line-wrapper">
              <span className="static-info">Total amount: </span>
              <span className="black-info">{getTotalPrice().toFixed(2)}€</span>
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
                        onMinusClickAction={() => dispatch(decrementProductCount(productId))}
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
                    onClickAction={() => dispatch(resetProductCount(productId))}
                    buttonStyle={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      width: '32px',
                      height: '32px'
                    }}
                    isDark={true}
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

//@ts-ignore
export default FinalCheckoutPage

