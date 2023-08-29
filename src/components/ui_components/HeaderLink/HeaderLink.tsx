import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import './HeaderLink.css'
import mainLogoClouds from './../../../assets/icons/decorations/main_logo_cloud.png'

interface HeaderLinkProps {
  link: string
  text: string;
  wrapperWidth: number;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ link, text, wrapperWidth }) => {
  const location = useLocation();
  const currPath = location.pathname;

  const [isHovered, setHovered] = useState(false)

  return(
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        minWidth: `${wrapperWidth}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative"
      }}

    >
      <Link to={link} className={currPath === link ? 'curr-menu-link' : 'menu-link'}>
        {text}
      </Link>
      <img
        style={{
          position: 'absolute',
          opacity: isHovered ? 1 : 0,
          cursor: isHovered ? 'pointer' : undefined,
          width: 61,
          height: 61,
          alignSelf: 'center',
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
        }}
        src={mainLogoClouds}
        alt="main-logo-clouds"/>
    </div>
  )
}

export default HeaderLink;
