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
      ...buttonStyle
    }

    const parsedTextStyle = {
      color: 'black',
      fontFamily: 'Monsterrat-600, serif',
      fontSize: '22px',
      lineHeight: '31.68px',
      ...textStyle
    }

    const parsedIconStyle = {
      height: '24px',
      width: '24px',
      ...iconStyle
    }

    return(
      <button
        onClick={onClickAction}
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        style={ !isHovered ? parsedButtonStyle : {
          ...parsedButtonStyle,
          backgroundColor: "black"
        }}
      >
        {showText && (
          <span style={!isHovered ? parsedTextStyle : {...parsedTextStyle, color: 'white'}}>Read more</span>
        )}
        <img
          className="more-icon"
          src={!isHovered ? blackMoreIcon : whiteMoreIcon}
          alt="more-icon"
          style={!isHovered ? parsedIconStyle : {...parsedIconStyle, width: '32px'}}
        />
      </button>
    )
  }

export default MoreButton
