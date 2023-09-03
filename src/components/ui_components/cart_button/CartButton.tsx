import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import cartIcon from './../../../assets/icons/cart_button/cart.png'
import hangerIcon from './../../../assets/icons/cart_button/hang.png'
import './CartButton.css'
import {Products} from "../../../content/Products";

const CartButton: React.FC = () => {
  const cartState = useSelector((state: RootState) => state.cart)
  const [isHovered, setHovered] = useState(false)

  return(
    <div
      className="cart-button"
      style={{
        cursor: isHovered ? 'pointer' : undefined,
        position: "fixed",
        right: Object.values(cartState).reduce((acc, value) => acc + value, 0) === 0 ? '-88px' : '20px',
        boxShadow: '0px 0px 10px #9093984D',
        top: '186px',
        width: '82px',
        height: '82px',
        backgroundColor: isHovered ? '#CFD5DB' : '#EAEBF0',
        border: 'none',
        borderRadius: '41px',
        transition: "all .2s ease",
        WebkitTransition: "all .2s ease",
        MozTransition: "all .2s ease",
        zIndex: '9999'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          <span className="info-text">
            {Object.values(cartState).reduce((acc, value) => acc + value, 0)}
          </span>
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
          <span className="info-text">
            {
              Math.ceil(
                Object.keys(cartState).reduce((acc, productId) => {
                  const product = Products.find((p) => p.productId === productId);
                  if (product) {
                    const productCount = cartState[productId];
                    const productPrice = product.price;
                    return acc + productCount * productPrice;
                  }
                  return acc;
                }, 0)
              )
            }€
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartButton;
