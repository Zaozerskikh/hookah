import React, {useState} from "react";
import blackMoreIconArrow from "../../../assets/icons/product_card/black_more_icon.png";
import blackMoreIconBase from "../../../assets/icons/product_card/black_more_icon_base.png";

interface MoreButtonProps {
  showText: boolean;
  text? : string;
  onClickAction? : (...args: any) => any
  buttonStyle? : React.CSSProperties
  textStyle? : React.CSSProperties
  iconWrapperStyle ? : React.CSSProperties,
  iconStyle? : React.CSSProperties
  iconShift ? : number
}

const MoreButton: React.FC<MoreButtonProps> =
  ({ showText, text, buttonStyle, textStyle, iconStyle, iconWrapperStyle, onClickAction, iconShift }) => {
    const [isHovered, setHovered] = useState(false);

    const parsedButtonStyle = {
      cursor: isHovered ? 'pointer' : undefined,
      width: '64px',
      height: '48px',
      color: '#EAEBF0',
      borderRadius: '0 24px 24px 0',
      border: 'none',
      outline: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: "all .5s ease",
      WebkitTransition: "all .5s ease",
      MozTransition: "all .5s ease",
      ...buttonStyle
    }

    const parsedTextStyle = {
      color: 'black',
      fontFamily: 'Monsterrat-600, serif',
      fontSize: '22px',
      lineHeight: '31.68px',
      transition: "all .5s ease",
      WebkitTransition: "all .5s ease",
      MozTransition: "all .5s ease",
      ...textStyle
    }

    const parsedIconStyle = {
      height: '24px',
      width: '24px',
      position: 'absolute' as 'absolute',
      top: '12px',
      right: '12px',
      zIndex: '9999 !important',
      transition: "all .5s ease",
      WebkitTransition: "all .5s ease",
      MozTransition: "all .5s ease",
      ...iconStyle
    }

    return(
      <button
        onClick={onClickAction}
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        style={ !isHovered ? {...parsedButtonStyle, position: 'relative'} : {
          ...parsedButtonStyle,
          backgroundColor: "#CFD5DB",
        }}
      >
        {showText && (
          <span style={parsedTextStyle}>{text ? text : 'Read more'}</span>
        )}
        <div style={{position: "relative", height: '48px', width: '48px', ...iconWrapperStyle}}>
          <img
            className="more-icon"
            src={blackMoreIconArrow}
            alt="more-icon"
            style={{opacity: 1, ...parsedIconStyle}}
          />
          <img
            className="more-icon"
            src={blackMoreIconBase}
            alt="more-icon"
            style={{opacity: 1, right: '12px', ...parsedIconStyle, width: isHovered ? iconShift ? `calc(24px + ${iconShift}px` : '32px' : '24px'}}
          />
        </div>
      </button>
    )
  }

export default MoreButton
