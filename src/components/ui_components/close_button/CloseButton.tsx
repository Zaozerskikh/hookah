import React, {useState} from "react";
import blackCloseIcon from "../../../assets/icons/product_card/close_button_icon.png";
import extendedBlackCloseIcon from "../../../assets/icons/product_card/extended_close_button_icon.png";
import whiteCloseIcon from "../../../assets/icons/product_card/close_button_icon_white.png";
import whiteExtendedCloseIcon from "../../../assets/icons/product_card/extended_close_button_icon_white.png";
import {useMediaQuery} from "react-responsive";

interface CloseButtonProps {
  isDark ? : boolean,
  buttonStyle? : React.CSSProperties;
  changeColorOnHover : boolean
  onClickColor : string;
  iconSize: number;
  onClickAction : (...args: any) => any;
  isMobile ? : boolean;
}

const CloseButton: React.FC<CloseButtonProps> = ({onClickAction, buttonStyle, iconSize, isDark, changeColorOnHover, onClickColor, isMobile}) => {
  const [isHovered, setHovered] = useState(false)
  const [isClicked, setClicked] = useState(false)
  const isTouchable = useMediaQuery({ query: '(pointer: coarse)' });

  return(
    <button
      style={{
        position: 'absolute',
        top: '-64px',
        right: '0',
        width: '48px',
        height: '48px',
        display: 'flex',
        placeContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '36px',
        border: 'none',
        outline: 'none',
        backgroundColor: isClicked ? onClickColor : !isHovered
          ? (isDark ? 'black' : 'white')
          : (isDark
            ? !changeColorOnHover ? 'black' : '#2C2D2E'
            : !changeColorOnHover ? 'white' : '#e2e5e7'),
        cursor: isHovered ? 'pointer' : undefined,
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
        ...buttonStyle
      }}
      onMouseEnter={() => {
        if (!isTouchable) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isTouchable) {
          setHovered(false)
          setClicked(false)
        }
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      onMouseDown={() => {
        if (!isTouchable) {
          setClicked(true)
        }
      }}
      onMouseUp={() => {
        if (!isTouchable) {
          setClicked(false)
        }
      }}
      onClick={onClickAction}
    >
      <img
        style={{
          width: isHovered ? iconSize * 1.2 : iconSize,
          height: isHovered ? iconSize * 1.2 : iconSize,
          transition: "all 0.1s ease",
          WebkitTransition: "all 0.1s ease",
          MozTransition: "all 0.1s ease",
        }}
        src={isHovered
          ? (isDark ? whiteExtendedCloseIcon : extendedBlackCloseIcon)
          : (isDark ? whiteCloseIcon : blackCloseIcon)
        }
        alt="close-icon"/>
    </button>
  )
}

export default CloseButton;
