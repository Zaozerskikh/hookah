import React, {useState} from "react";
import './CopyrightLink.css'
import mainLogoGrey from '../../../assets/icons/decorations/main_logo_cloud_grey.png'
import ExternalLinks from "../../../routes/ExternalLinks";
import {useMediaQuery} from "react-responsive";

const CopyrightLink: React.FC = () => {
  const [isHovered, setHovered] = useState(false)
  const isTouchable = useMediaQuery({ query: '(pointer: coarse)' });

  return(
    <a
      href={ExternalLinks.GLEB_KOSSOV_COPYRIGHT}
      target="_blank"
      className="copyright-link"
      rel="noreferrer"
      onMouseEnter={() => {
        if (!isTouchable) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isTouchable) {
          setHovered(false)
        }
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
    >
      designed by Gleb Kossov
      <img
        src={mainLogoGrey}
        alt="cloud"
        style={{
          position: "absolute",
          top: '-24px',
          left: '55.5px',
          width: '62px',
          height: '62px',
          zIndex: '-9999',
          opacity: isHovered ? 1 : 0,
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
        }}
      />
    </a>
  )
}

export default CopyrightLink;
