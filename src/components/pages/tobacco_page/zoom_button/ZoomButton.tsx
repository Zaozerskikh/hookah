import React, {useState} from "react";
import zoomIcon from "../../../../assets/icons/tobacco_page/zoom-icon.png";

interface ZoomButtonProps {
  onClickAction: () => void;
  isMobile ? : boolean;
}

const ZoomButton: React.FC<ZoomButtonProps> = ({ onClickAction, isMobile }) => {
  const [isHovered, setHovered] = useState(false);
  return(
    <button
      onMouseEnter={() => {
        if (!isMobile) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setHovered(false)
        }
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      onClick={onClickAction}
      style={{
        position: isMobile ? undefined : 'absolute',
        right: `0px`,
        cursor: isHovered ? 'pointer' : undefined,
        display: 'inline-flex',
        height: isMobile ? '28px' : '31px',
        width: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        placeContent: 'center',
        gap: '10px',
        flexShrink: '0',
        borderRadius: '0px 16px 16px 0px',
        backgroundColor: !isHovered ? '#EAEBF0' : '#CFD5DB',
        border:'none',
        outline: 'none',
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
      }}
    >
      <img
        src={zoomIcon}
        alt="zoom"
        style={{
          width: !isHovered ? '20px' : '24px',
          height: !isHovered ? '20px' : '24px',
          marginRight: '2px',
          transition: "all .2s ease",
          WebkitTransition: "all .2s ease",
          MozTransition: "all .2s ease",
        }}
      />
    </button>
  )
}

export default ZoomButton
