import React, {useState} from "react";
import './FooterLink.css'
import mainLogoWhite from './../../../assets/icons/decorations/main_logo_cloud.png'
import {Link} from "react-router-dom";

interface FooterLinkProps {
  text: string,
  link: string
}

const FooterLink: React.FC<FooterLinkProps> = ({text, link}) => {
  const [isHovered, setHovered] = useState(false)

  return(
    <div className="footer-link-wrapper">
      <Link
        to={link}
        className="footer-link"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {text}

      </Link>
      <img
        src={mainLogoWhite}
        alt="cloud"
        style={{
          width: '20px',
          height: '20px',
          opacity: isHovered ? 1 : 0,
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
          marginBottom: '18px',
          marginLeft: '10px'
        }}
      />
    </div>
  )
}

export default FooterLink;
