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
import {RoutePaths} from "../../routes/RoutePaths";
import ExternalLinks from "../../routes/ExternalLinks";
import SocialLink from "../ui_components/social_link/SocialLink";
import HeaderLink from "./header_link/HeaderLink";
import {Link} from "react-router-dom";

const MenuPanel: React.FC = () => {
  return(
    <div className="menu-panel-container">
      <Link to={RoutePaths.HOME} className="home-link">
        <div className="logo">
          <span className="hookah-text">h</span>
          <img src={mainLogoCloudIcon} alt="main-logo-cloud" className="main-logo-cloud"/>
          <span className="hookah-text">kah.p</span>
          <img src={mainLogoHookahIcon} alt="main-logo-hookah" className="main-logo-hookah"/>
        </div>
      </Link>
      <div className="links">
        <HeaderLink
          link={RoutePaths.HOME}
          text="Home"
          wrapperWidth={90}
        />
        <HeaderLink
          link={RoutePaths.TOBACCO}
          text="Tobacco"
          wrapperWidth={132}
        />
        <HeaderLink
          link={RoutePaths.NEWS}
          text="News"
          wrapperWidth={86}
        />
        <HeaderLink
          link={RoutePaths.ABOUT}
          text="About us"
          wrapperWidth={135}
        />
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
