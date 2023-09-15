import React, {useState} from "react";

interface SocialLinkPropsMobile {
  commonIcon: string,
  clickedIcon: string,
  iconStyle?: React.CSSProperties
  linkStyle?: React.CSSProperties,
  link: string
}
const SocialLinkMobile: React.FC<SocialLinkPropsMobile> = ({ commonIcon, clickedIcon, link}) => {
  const [isPressed, setPressed] = useState(false)

  return(
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      style={{
        position: 'relative',
        textDecoration: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        height: '42px',
        width: '42px',
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      <img
        src={commonIcon}
        alt="main-logo"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '42px',
          width: '42px',
          opacity: 1,
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
        }}
      />
      <img
        src={clickedIcon}
        alt="main-logo-telegram"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '42px',
          width: '42px',
          opacity: isPressed ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
      />
    </a>
  )
}

export default SocialLinkMobile
