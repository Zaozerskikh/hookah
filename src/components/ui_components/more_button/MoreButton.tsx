import React, {useState} from "react";
import blackMoreIcon from "../../../assets/icons/product_card/black_more_icon.png";
import whiteMoreIcon from "../../../assets/icons/product_card/white_more_icon.png";

interface MoreButtonProps {
  showText: boolean;
  onClickAction? : (...args: any) => any
  buttonStyle? : React.CSSProperties
  textStyle? : React.CSSProperties
  iconStyle? : React.CSSProperties
}

const MoreButton: React.FC<MoreButtonProps> =
  ({ showText, buttonStyle, textStyle, iconStyle, onClickAction }) => {
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
          <span style={parsedTextStyle}>Read more</span>
        )}
        <div style={{position: "relative", height: '48px', width: '48px',}}>
          <img
            className="more-icon"
            src={blackMoreIcon}
            alt="more-icon"
            style={{...parsedIconStyle, opacity: isHovered ? 0 : 1}}
          />
          <img
            className="more-icon"
            src={whiteMoreIcon}
            alt="more-icon"
            style={{...parsedIconStyle, width: '32px', opacity: isHovered ? 1 : 0, right: isHovered ? '9px' : '12px'}}
          />
        </div>
      </button>
    )
  }

export default MoreButton
