import React from "react";
import './MenuPanel.css'
import mainLogoCloudIcon from '../../assets/icons/decorations/main_logo_cloud.png'
import mainLogoHookahIcon from '../../assets/icons/decorations/main_logo_hookah.png'
import mainLogoInstagramIcon from '../../assets/icons/socials/instagram_logo_black.png'
import mainLogoWhatsappIcon from '../../assets/icons/socials/whatsapp_logo_black.png'
import mainLogoTelegramIcon from '../../assets/icons/socials/telegram_logo_black.png'
import instagramGreyIcon from "../../assets/icons/socials/instagram_logo_smokegrey.png";
import whatsappGreyIcon from "../../assets/icons/socials/whatsapp_logo_smokegrey.png";
import telegramGreyIcon from "../../assets/icons/socials/telegram_logo__smokegrey.png";
import {Link, useLocation} from "react-router-dom";
import {RoutePaths} from "../../routes/RoutePaths";
import ExternalLinks from "../../routes/ExternalLinks";
import SocialLink from "../ui_components/social_link/SocialLink";

const MenuPanel: React.FC = () => {
  const location = useLocation();
  const currPath = location.pathname;

  return(
    <div className="menu-panel-container">
      <div className="logo">
        <span className="hookah-text">h</span>
        <img src={mainLogoCloudIcon} alt="main-logo-cloud" className="main-logo-cloud"/>
        <span className="hookah-text">kah.p</span>
        <img src={mainLogoHookahIcon} alt="main-logo-hookah" className="main-logo-hookah"/>
      </div>
      <div className="links">
        <div style={{minWidth: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Link to={RoutePaths.HOME} className={currPath === RoutePaths.HOME ? 'curr-menu-link' : 'menu-link'}>
            Home
          </Link>
        </div>
        <div style={{minWidth: '132px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Link to={RoutePaths.TOBACCO} className={currPath === RoutePaths.TOBACCO ? 'curr-menu-link' : 'menu-link'}>
            Tobacco
          </Link>
        </div>
        <div style={{minWidth: '86px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Link to={RoutePaths.NEWS} className={currPath === RoutePaths.NEWS ? 'curr-menu-link' : 'menu-link'}>
            News
          </Link>
        </div>
        <div style={{minWidth: '135px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Link to={RoutePaths.ABOUT} className={currPath === RoutePaths.ABOUT ? 'curr-menu-link' : 'menu-link'}>
            About us
          </Link>
        </div>
      </div>
      <div className="socials">
        <SocialLink
          commonIcon={mainLogoInstagramIcon}
          hoveredIcon={instagramGreyIcon}
          link={ExternalLinks.INSTAGRAM}
        />
        <SocialLink
          commonIcon={mainLogoWhatsappIcon}
          hoveredIcon={whatsappGreyIcon}
          link={ExternalLinks.WHATSAPP}
        />
        <SocialLink
          commonIcon={mainLogoTelegramIcon}
          hoveredIcon={telegramGreyIcon}
          link={ExternalLinks.TELEGRAM}
        />
      </div>
    </div>
  )
}

export default MenuPanel;
