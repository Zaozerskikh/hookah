import React, {useState} from "react";

interface StandardButtonProps {
  text: string;
  onClickAction? : (...args: any) => any
  buttonStyle? : React.CSSProperties
  textStyle? : React.CSSProperties
}

const StandardButton: React.FC<StandardButtonProps> =
  ({ text, buttonStyle, textStyle , onClickAction}) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false)

  const parsedButtonStyle = {
    cursor: isHovered ? 'pointer' : undefined,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isClicked ? '#c7ccd3' : isHovered ? '#CFD5DB' : 'black',
    borderRadius: '12px',
    border: 'none',
    outline: 'none',
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
    ...buttonStyle
  }

  const parsedTextStyle = {
    color: !isHovered ? 'white' : 'black',
    fontFamily: 'Monsterrat-600, serif',
    fontSize: '22px',
    lineHeight: '31.68px',
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
    ...textStyle
  }

  return(
    <button
      style={parsedButtonStyle}
      onClick={onClickAction}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onMouseOut={() => setClicked(false)}
    >
      <span style={parsedTextStyle}>
        {text}
      </span>
    </button>
  )
}

export default StandardButton
