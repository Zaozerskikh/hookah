import React, {useState} from "react";

interface SocialLinkProps {
  commonIcon: string,
  hoveredIcon: string,
  iconStyle?: React.CSSProperties
  linkStyle?: React.CSSProperties,
  link: string
}

const SocialLink: React.FC<SocialLinkProps> =
  ({link, hoveredIcon, commonIcon, iconStyle, linkStyle}) => {
  const [isHovered, setHovered] = useState(false)

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
        height: '32px',
        width: '32px',
        ...linkStyle
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={commonIcon}
        alt="main-logo-telegram"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '32px',
          width: '32px',
          opacity: 1,
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
          ...iconStyle
        }}
      />
      <img
        src={hoveredIcon}
        alt="main-logo-telegram"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '32px',
          width: '32px',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.5s',
          ...iconStyle
        }}
      />
    </a>
  )
}

export default SocialLink
