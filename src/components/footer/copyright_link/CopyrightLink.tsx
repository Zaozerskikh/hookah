import React, {useState} from "react";
import './CopyrightLink.css'
import mainLogoGrey from '../../../assets/icons/decorations/main_logo_cloud_grey.png'

const CopyrightLink: React.FC = () => {
  const [isHovered, setHovered] = useState(false)

  return(
    <a
      href="https://www.glebkossov.ru/"
      target="_blank"
      className="copyright-link"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
