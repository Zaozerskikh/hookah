import React, {useState} from "react";
import blackMoreIconArrow from "../../../assets/icons/product_card/black_more_icon.png";
import blackMoreIconBase from "../../../assets/icons/product_card/black_more_icon_base.png";

interface MoreButtonProps {
  showText: boolean;
  text? : string;
  onClickAction? : (...args: any) => any;
  buttonStyle? : React.CSSProperties;
  textStyle? : React.CSSProperties;
  iconWrapperStyle ? : React.CSSProperties;
  iconStyle? : React.CSSProperties;
  iconShift ? : number;
  dontShowIcon ? : boolean;
  onHoverColor ? : string;
  isMobile ? : boolean;
}

const MoreButton: React.FC<MoreButtonProps> =
  ({ showText, text, buttonStyle, textStyle,
     iconStyle, iconWrapperStyle, onClickAction, iconShift ,
     dontShowIcon, onHoverColor, isMobile}) => {
    const [isHovered, setHovered] = useState(false);
    const [isClicked, setClicked] = useState(false);

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
      top: isMobile ? '11px': '12px',
      right: '12px',
      zIndex: '9999 !important',
      transition: "all .5s ease",
      WebkitTransition: "all .5s ease",
      MozTransition: "all .5s ease",
      marginTop: isMobile ? '1px' : 0,
      ...iconStyle
    }

    return(
      <button
        onClick={onClickAction}
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        onMouseUpCapture={() => setClicked(false)}
        onMouseOut={() => setClicked(false)}
        style={isClicked
          ? {...parsedButtonStyle, backgroundColor: '#c7ccd3'}
          : !isHovered
            ? {...parsedButtonStyle, position: 'relative'}
            : {...parsedButtonStyle,
              backgroundColor: onHoverColor ? onHoverColor : "#CFD5DB",
            }
        }
      >
        {showText && (
          <span style={parsedTextStyle}>{text ? text : 'Read more'}</span>
        )}
        {
          !dontShowIcon && (
            <div style={{position: "relative", height: '48px', width: '48px', ...iconWrapperStyle}}>
              <img
                className="more-icon"
                src={blackMoreIconArrow}
                alt="more-icon"
                style={!isMobile ? {
                  opacity: 1,
                  ...parsedIconStyle,
                } : {
                  ...parsedIconStyle,
                  height: '22px',
                  width: '22px',
                  marginTop: '2px'
                }}
              />
              <img
                className="more-icon"
                src={blackMoreIconBase}
                alt="more-icon"
                style={{
                  opacity: 1,
                  right: '12px', ...parsedIconStyle,
                  width: !isMobile
                    ? (isHovered ? iconShift ? `calc(24px + ${iconShift}px` : '32px' : '24px')
                    : isClicked ? iconShift ? `calc(23px + ${iconShift}px` : '27px' : '23px'
                }}
              />
            </div>
          )
        }
      </button>
    )
  }

export default MoreButton
