import React from "react";
import './Footer.css'
import ExternalLinks from "../../routes/ExternalLinks";
import instagramWhiteIcon from "../../assets/icons/socials/instagram_logo_white.png";
import whatsappWhiteIcon from "../../assets/icons/socials/whatsapp_logo_white.png";
import telegramWhiteIcon from "../../assets/icons/socials/telegram_logo_white.png";
import instagramGreyIcon from "../../assets/icons/socials/instagram_logo_ffffff.png";
import whatsappGreyIcon from "../../assets/icons/socials/whatsapp_logo_ffffff.png";
import telegramGreyIcon from "../../assets/icons/socials/telegram_logo_ffffff.png";
import {RoutePaths} from "../../routes/RoutePaths";
import SocialLink from "../ui_components/social_link/SocialLink";
import CopyrightLink from "./copyright_link/CopyrightLink";
import FooterLink from "./footer_link/FooterLink";


const Footer: React.FC = () => {
  return(
    <div
      className="footer"
      style={{
        padding: `64px 0px 64px 0px`,
        width: 'calc(100%)',
        position: "absolute",
        bottom: '-420px',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: 'row',
          width: '1264px',
          justifyContent: 'space-between'
        }}
      >
        <div className="section">
          <span className="header">catalog</span>
          <FooterLink
            text="tobacco"
            link={RoutePaths.TOBACCO}
          />
          <FooterLink
            text="accessories"
            link={RoutePaths.ACCESSORIES}
          />
          <FooterLink
            text="news"
            link={RoutePaths.NEWS}
          />
          <FooterLink
            text="about"
            link={RoutePaths.ABOUT}
          />
        </div>
        <div className="section">
          <span className="header">delivery</span>
          <p className="delivery-info-text">
            The conditions for delivering hookah tobacco in Portugal via CTT Express for individuals aged 18+ are as follows: free delivery for orders exceeding 200 euros; all our tobacco is legal. Proof of age will be required upon delivery to confirm that the recipient is 18 years or older.Shipping via CTT takes up to 7 business days. Available throughout Portugal including Madeira, Azores, Lisbon, Porto, Algarve and the rest of Portugal.
          </p>
        </div>
        <div className="section">
          <span className="header">return policy</span>
          <span className="return-text">
          The conditions for returning hookah tobacco in Portugal, are as follows:
        </span>
          <p className="return-paragraph">
            The tobacco must be returned in its original, unopened packaging to be eligible for a refund or exchange.
          </p>
          <p className="return-paragraph">
            Returns should be initiated within a specified timeframe, typically within 14 days of purchase, to qualify for a refund.
          </p>
          <p className="return-paragraph">
            A valid proof of purchase, such as a receipt or order confirmation, is required for processing the return of hookah tobacco in Portugal.
          </p>
        </div>
        <div className="section">
          <div className="socials-wrapper">
            <SocialLink
              commonIcon={instagramWhiteIcon}
              hoveredIcon={instagramGreyIcon}
              link={ExternalLinks.INSTAGRAM}
            />
            <SocialLink
              commonIcon={whatsappWhiteIcon}
              hoveredIcon={whatsappGreyIcon}
              link={ExternalLinks.WHATSAPP}
            />
            <SocialLink
              commonIcon={telegramWhiteIcon}
              hoveredIcon={telegramGreyIcon}
              link={ExternalLinks.TELEGRAM}
            />
          </div>
          <CopyrightLink/>
        </div>
      </div>
    </div>
  )
}

export default Footer;