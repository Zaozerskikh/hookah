import React, {useState} from "react";
import {useMediaQuery} from "react-responsive";

interface StandardButtonProps {
  text: string;
  onClickAction? : (...args: any) => any
  buttonStyle? : React.CSSProperties
  textStyle? : React.CSSProperties
  onHoverColor ? : string
  isMobile ? : boolean
}

const StandardButton: React.FC<StandardButtonProps> =
  ({ text, buttonStyle, textStyle , onClickAction, onHoverColor, isMobile}) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const isTouchable = useMediaQuery({ query: '(pointer: coarse)' });

  const parsedButtonStyle = {
    cursor: isHovered ? 'pointer' : undefined,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isClicked ? '#c7ccd3' : isHovered ? onHoverColor ? onHoverColor : '#CFD5DB' : 'black',
    borderRadius: isMobile ? '8px' : '12px',
    border: 'none',
    outline: 'none',
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
    ...buttonStyle
  }

  const parsedTextStyle = {
    color: !isHovered && !isClicked? 'white' : 'black',
    fontFamily: 'Monsterrat-600, serif',
    fontSize: isMobile ? '16px' : '22px',
    lineHeight: isMobile ? '23px' : '31.68px',
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
    ...textStyle
  }

  return(
    <button
      style={parsedButtonStyle}
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
    >
      <span style={parsedTextStyle}>
        {text}
      </span>
    </button>
  )
}

export default StandardButton
