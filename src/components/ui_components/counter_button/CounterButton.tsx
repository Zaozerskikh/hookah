import React, {useState} from "react";
import blackMinusIcon from "../../../assets/icons/product_card/black_minus_icon.png";
import blackPlusIcon from "../../../assets/icons/product_card/black_plus_icon.png";
import whiteMinusIcon from "../../../assets/icons/product_card/white_minus_icon.png";
import whitePlusIcon from "../../../assets/icons/product_card/white_plus_icon.png";

interface CounterButtonProps {
  counterState: number
  isDark: boolean
  onPlusClickAction? : (...args: any) => any
  onMinusClickAction? : (...args: any) => any
  wrapperStyle? : React.CSSProperties,
  counterStyle? : React.CSSProperties,
}

const CounterButton: React.FC<CounterButtonProps> =
  ({ counterState, isDark,
     onPlusClickAction, onMinusClickAction,
     counterStyle , wrapperStyle}) => {
    const [isPlusHovered, setPlusHovered] = useState(false);
    const [isMinusHovered, setMinusHovered] = useState(false);

    const parsedCounterStyle = {
      fontFamily: 'Monsterrat-600, serif',
      fontSize: '22px',
      lineHeight: '31.68px',
      color: isDark ? 'white' : 'black',
      ...counterStyle
    }

    const parsedWrapperStyle = {
      width: !isDark ? '138px' : '133px',
      height: !isDark ? '24px' : '19.8px',
      borderRadius: '24px',
      backgroundColor: !isDark ? '#EAEBF0' : 'black',
      borderWidth: isDark ? '2.5px' : undefined,
      borderStyle: isDark ? 'solid' : undefined,
      borderColor: isDark ? 'white' : undefined,
      outline: 'none',
      padding: '12px 5px',
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      transition: "all .5s ease",
      WebkitTransition: "all .5s ease",
      MozTransition: "all .5s ease",
      ...wrapperStyle
    }

    const buttonStyle = {
      width: '48px',
      height: '48px',
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
          onMouseEnter={() => setMinusHovered(true)}
          onMouseLeave={() => setMinusHovered(false)}
          style={buttonStyle}
        >
          <img
            src={isDark ? whiteMinusIcon : blackMinusIcon}
            alt="minus-icon"
            style={isMinusHovered
              ? {height: '28px', width: '28px', cursor: 'pointer', ...iconStyle}
              : {height: '24px', width: '24px', ...iconStyle}
            }
          />
        </button>
        <span style={parsedCounterStyle}>{counterState}</span>
        <button
          onClick={onPlusClickAction}
          onMouseEnter={() => setPlusHovered(true)}
          onMouseLeave={() => setPlusHovered(false)}
          style={buttonStyle}
        >
          <img
            src={isDark ? whitePlusIcon : blackPlusIcon}
            style={isPlusHovered
              ? {height: '30px', width: '30px', cursor: 'pointer', ...iconStyle}
              : {height: '24px', width: '24px', ...iconStyle}
            }
            alt="plus-icon"
          />
        </button>
      </div>
    )
  }

export default CounterButton
