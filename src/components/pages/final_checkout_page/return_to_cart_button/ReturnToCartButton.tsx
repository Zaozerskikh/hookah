import React, {useState} from "react";
import hangerIcon from "../../../../assets/icons/cart_button/hang.png";
import cartIcon from "../../../../assets/icons/cart_button/cart.png";


interface ReturnToCartButtonProps {
  onClickAction: () => void;
}
const ReturnToCartButton: React.FC<ReturnToCartButtonProps> = ({ onClickAction }) => {
  const [isHovered, setHovered] = useState(false)

  return(
    <div
      style={{
        display: 'flex',
        height: '40px',
        padding: '12px 20px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: isHovered ? "var(--auxiliary-light-gray)" : 'white',
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
        borderRadius: '20px',
        boxSizing: 'border-box'
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      onClick={onClickAction}
    >
      <div
        style={{
          color: 'var(--main-black, #000)',
          textAlign: 'center',
          fontFamily: 'Monsterrat-600, serif',
          fontSize: '16px',
          lineHeight: '144%',
        }}
      >
        Show shopping cart
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
    </div>
  )
}

export default ReturnToCartButton
