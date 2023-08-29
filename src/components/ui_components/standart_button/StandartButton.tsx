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

  const parsedButtonStyle = {
    cursor: isHovered ? 'pointer' : undefined,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: '12px',
    border: 'none',
    outline: 'none',
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
    ...buttonStyle
  }

  const parsedTextStyle = {
    color: 'white',
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
      style={!isHovered ? parsedButtonStyle : {...parsedButtonStyle, backgroundColor: '#CFD5DB'}}
      onClick={onClickAction}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={!isHovered ? parsedTextStyle : {...parsedTextStyle, color: 'black'}}>
        {text}
      </span>
    </button>
  )
}

export default StandardButton
