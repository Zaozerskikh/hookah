import React from "react";
import './MenuPanel.css'
import mainLogoCloudIcon from './../../assets/icons/main_logo_cloud.png'
import mainLogoHookahIcon from './../../assets/icons/main_logo_hookah.png'
import mainLogoInstagramIcon from './../../assets/icons/instagram_logo_black.png'
import mainLogoWhatsappIcon from './../../assets/icons/whatsapp_logo_black.png'
import mainLogoTelegramIcon from './../../assets/icons/telegram_logo_black.png'
import {Link} from "react-router-dom";
import {RoutePaths} from "../../routes/RoutePaths";
import ExternalLinks from "../../routes/ExternalLinks";


const MenuPanel: React.FC = () => {
  return(
    <div className="menu-panel-container">
      <div className="logo">
        <span className="hookah-text">h</span>
        <img src={mainLogoCloudIcon} alt="main-logo-cloud" className="main-logo-cloud"/>
        <span className="hookah-text">kah.p</span>
        <img src={mainLogoHookahIcon} alt="main-logo-hookah" className="main-logo-hookah"/>
      </div>
      <div className="links">
        <Link to={RoutePaths.HOME} className="menu-link">
          <button className="menu-button">
            <span className="home-link-text">Home</span>
          </button>
        </Link>
        <Link to={RoutePaths.TOBACCO} className="menu-link">
          <button className="menu-button">
            <span className="link-text">Tobacco</span>
          </button>
        </Link>
        <Link to={RoutePaths.NEWS} className="menu-link">
          <button className="menu-button">
            <span className="link-text">News</span>
          </button>
        </Link>
        <Link to={RoutePaths.ABOUT} className="menu-link">
          <button className="menu-button">
            <span className="link-text">About us</span>
          </button>
        </Link>
      </div>
      <div className="socials">
        <a href={ExternalLinks.INSTAGRAM} className="menu-link">
          <button className="menu-button">
            <img src={mainLogoInstagramIcon} alt="main-logo-instagram" className="main-logo-social"/>
          </button>
        </a>
        <a href={ExternalLinks.WHATSAPP} className="menu-link">
          <button className="menu-button">
            <img src={mainLogoWhatsappIcon} alt="main-logo-whatsapp" className="main-logo-social"/>
          </button>
        </a>
        <a href={ExternalLinks.TELEGRAM} className="menu-link">
          <button className="menu-button">
            <img src={mainLogoTelegramIcon} alt="main-logo-telegram" className="main-logo-social"/>
          </button>
        </a>
      </div>
    </div>
  )
}

export default MenuPanel;
