import React, {useState} from "react";
import whiteMoreIconArrow from "../../../assets/icons/product_card/white_more_icon_arr.png";
import whiteMoreIconBase from "../../../assets/icons/product_card/white_more_icon_base.png";
import {useMediaQuery} from "react-responsive";

interface MoreButtonInvertedProps {
  onClickAction: () => void,
  isMobile ? : boolean,
  buttonStyle ? : React.CSSProperties,
  isTransparent ? : boolean,
}
const MoreButtonInverted: React.FC<MoreButtonInvertedProps> = ({ onClickAction, isMobile, buttonStyle, isTransparent }) => {
  const [isHovered, setHovered] = useState(false);
  const isTouchable = useMediaQuery({ query: '(pointer: coarse)' });
  const [isClicked, setClicked] = useState(false);

  return(
    <div
      onClick={onClickAction}
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
      style={{
        width:'64px',
        height: '48px',
        borderRadius: '0px 24px 24px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isHovered ? "pointer" : undefined,
        position: 'relative',
        transition: "all .3s ease",
        WebkitTransition: "all .3s ease",
        MozTransition: "all .3s ease",
        ...buttonStyle,
        backgroundColor: isTransparent ? (isClicked ? '#424446' : isHovered ? '#4E5052' : '#2C2D2E') : 'transparent',
      }}
    >
      <img
        src={whiteMoreIconArrow}
        alt="more-icon"
        style={{
          width: '26px',
          height: '26px',
          position: "absolute",
          top: '10px',
          right: '18px'
        }}
      />
      <img
        className="more-icon"
        src={whiteMoreIconBase}
        alt="more-icon"
        style={{
          top: '10px',
          opacity: 1,
          position: 'absolute',
          right: '17px',
          width: !isMobile
            ? (isHovered ? '33px' : '26px')
            : (isHovered ?  '27px' : '23px'),
          height: '26px',
          transition: "all .3s ease",
          WebkitTransition: "all .3s ease",
          MozTransition: "all .3s ease",
        }}
      />
    </div>
  )
}

export default MoreButtonInverted
