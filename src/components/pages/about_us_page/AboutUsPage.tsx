import './AboutUsPage.css'
import React, {useState} from "react";
import './AboutUsPage.css'
import HookahAnimation from "./hookah_animation/HookahAnimation";
import SocialLink from "../../ui_components/social_link/SocialLink";
import ExternalLinks from "../../../routes/ExternalLinks";
import mainLogoInstagramIcon from './../../../assets/icons/socials/instagram_logo_black.png'
import mainLogoWhatsappIcon from './../../../assets/icons/socials/whatsapp_logo_black.png'
import mainLogoTelegramIcon from './../../../assets/icons/socials/telegram_logo_black.png'
import instagramGreyIcon from "./../../../assets/icons/socials/instagram_logo_smokegrey.png";
import whatsappGreyIcon from "./../../../assets/icons/socials/whatsapp_logo_smokegrey.png";
import telegramGreyIcon from "./../../../assets/icons/socials/telegram_logo__smokegrey.png";
import StandardButton from "../../ui_components/standart_button/StandartButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";

const AboutUsPage: React.FC = () => {
  const navigate = useNavigate()
  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div className="about-us-container">
      <div className="about-header">About us</div>
      <div className="main-text-and-logo-container">
        <div className="main-text-container">
          <span>
            Hookah PT is a premier online store based in Portugal that specializes in providing a wide selection of high-quality hookahs, accessories, and popular tobacco brands such as MustHave, DarkSide, Element, and Tangiers. With a focus on customer satisfaction, Hookah PT aims to deliver an exceptional hookah experience, catering to the needs and preferences of hookah enthusiasts in Portugal and beyond. Whether you’re a seasoned hookah connoisseur or a newcomer to the world of hookah, Hookah PT offers a comprehensive range of products to enhance your enjoyment and elevate your hookah sessions to new heights.
          </span>
          <div className="socials-container">
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
        <HookahAnimation/>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <StandardButton
          text="Our Delivery Policy"
          buttonStyle={{
            width: '344px',
            height: '60px',
            marginTop: '32px',
            marginBottom: '96px'
          }}
          onClickAction={() => navigate(RoutePaths.DELIVERY_POLICY)}
        />
      </div>
    </div>
  )
}

export default AboutUsPage;
