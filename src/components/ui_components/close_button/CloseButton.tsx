import React, {useState} from "react";
import closeIcon from "../../../assets/icons/product_card/close_button_icon.png";
import extendedCloseIcon from "../../../assets/icons/product_card/extended_close_button_icon.png";

interface CloseButtonProps {
  onClickAction: (...args: any) => any;
}

const CloseButton: React.FC<CloseButtonProps> = ({onClickAction}) => {
  const [isHovered, setHovered] = useState(false)

  return(
    <button
      style={{
        padding: !isHovered ? '14px' : '12px',
        position: 'absolute',
        top: '-64px',
        right: '0',
        width: '48px',
        height: '48px',
        display: 'flex',
        placeContent: 'center',
        borderRadius: '36px',
        border: 'none',
        outline: 'none',
        backgroundColor: !isHovered ? 'white' : '#e2e5e7',
        cursor: isHovered ? 'pointer' : undefined,
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
      }}
      onClick={onClickAction}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        style={{
          width: isHovered ? '24px' : '20px',
          height: isHovered ? '24px' : '20px',
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
        }}
        src={isHovered ? extendedCloseIcon : closeIcon}
        alt="close-icon"/>
    </button>
  )
}

export default CloseButton;
