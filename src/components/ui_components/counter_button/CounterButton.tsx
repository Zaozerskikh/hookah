import React, {useState} from "react";
import blackMinusIcon from "../../../assets/icons/product_card/black_minus_icon.png";
import blackPlusIcon from "../../../assets/icons/product_card/black_plus_icon.png";
import whiteMinusIcon from "../../../assets/icons/product_card/white_minus_icon.png";
import whitePlusIcon from "../../../assets/icons/product_card/white_plus_icon.png";
import {useMediaQuery} from "react-responsive";

interface CounterButtonProps {
  counterState: number
  isDark: boolean
  isFramed ? : boolean
  isMobile ? : boolean;
  onPlusClickAction? : (...args: any) => any
  onMinusClickAction? : (...args: any) => any
  wrapperStyle? : React.CSSProperties,
  counterStyle? : React.CSSProperties,
}

const CounterButton: React.FC<CounterButtonProps> =
  ({ counterState, isDark,
     onPlusClickAction, onMinusClickAction, isMobile,
     counterStyle , wrapperStyle, isFramed}) => {
    const [isPlusHovered, setPlusHovered] = useState(false);
    const [isMinusHovered, setMinusHovered] = useState(false);
    const isTouchable = useMediaQuery({ query: '(pointer: coarse)' });

    const parsedCounterStyle = {
      fontFamily: 'Monsterrat-600, serif',
      fontSize: isMobile ? '16px' : '22px',
      lineHeight: '31.68px',
      color: isDark ? 'white' : 'black',
      ...counterStyle
    }

    const parsedWrapperStyle = {
      width: !isDark && !isFramed ? '138px' : '133px',
      height: !isDark && !isFramed ? '24px' : '19.8px',
      borderRadius: isMobile ? '20px' : '24px',
      backgroundColor: isDark ? 'black' : isFramed ? 'white' : '#EAEBF0',
      borderWidth: isDark || isFramed ? '2.5px' : undefined,
      borderStyle: isDark || isFramed? 'solid' : undefined,
      borderColor: isDark ? 'white' : isFramed ? 'black' : undefined,
      outline: 'none',
      padding: isMobile ? '8px 5px' : '12px 5px',
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      transition: "all .5s ease",
      WebkitTransition: "all .5s ease",
      MozTransition: "all .5s ease",
      ...wrapperStyle
    }

    const buttonStyle = {
      width: isMobile ? '30px' : '48px',
      height: isMobile ? '40px' : '48px',
      padding: isMobile ? '0' : undefined,
      margin: isMobile ? '0px' : undefined,
      outline: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: "all .5s ease",
      WebkitTransition: "all .5s ease",
      MozTransition: "all .5s ease",
    }

    const iconStyle = {
      transition: "all 0.1s ease",
      WebkitTransition: "all 0.1s ease",
      MozTransition: "all 0.1s ease",
    }

    return(
      <div style={parsedWrapperStyle}>
        <button
          onClick={onMinusClickAction}
          onMouseEnter={() => {
            if (!isTouchable) {
              setMinusHovered(true)
            }
          }}
          onMouseLeave={() => {
            if (!isTouchable) {
              setMinusHovered(false)
            }
          }}
          onTouchStart={() => setMinusHovered(true)}
          onTouchEnd={() => setMinusHovered(false)}
          onTouchCancel={() => setMinusHovered(false)}
          style={buttonStyle}
        >
          <img
            src={isDark ? whiteMinusIcon : blackMinusIcon}
            alt="minus-icon"
            style={isMinusHovered
              ? isMobile
                ? {height: '28px', width: '28px', cursor: 'pointer', ...iconStyle}
                : {height: '30px', width: '30px', cursor: 'pointer', ...iconStyle}
              : isMobile
                ? {height: '22px', width: '22px', ...iconStyle}
                : {height: '24px', width: '24px', ...iconStyle}
            }
          />
        </button>
        <span style={parsedCounterStyle}>{counterState}</span>
        <button
          onClick={onPlusClickAction}
          onMouseEnter={() => {
            if (!isTouchable) {
              setPlusHovered(true)
            }
          }}
          onMouseLeave={() => {
            if (!isTouchable) {
              setPlusHovered(false)
            }
          }}
          onTouchStart={() => setPlusHovered(true)}
          onTouchEnd={() => setPlusHovered(false)}
          onTouchCancel={() => setPlusHovered(false)}
          style={buttonStyle}
        >
          <img
            src={isDark ? whitePlusIcon : blackPlusIcon}
            style={isPlusHovered
              ? isMobile
                ? {height: '28px', width: '28px', cursor: 'pointer', ...iconStyle}
                : {height: '30px', width: '30px', cursor: 'pointer', ...iconStyle}
              : isMobile
                ? {height: '22px', width: '22px', ...iconStyle}
                : {height: '24px', width: '24px', ...iconStyle}
            }
            alt="plus-icon"
          />
        </button>
      </div>
    )
  }

export default CounterButton
