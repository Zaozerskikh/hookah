import React from "react";
import './Footer.css'
import ExternalLinks from "../../routes/ExternalLinks";
import footerInstagramIcon from "../../assets/icons/socials/instagram_logo_white.png";
import footerWhatsappIcon from "../../assets/icons/socials/whatsapp_logo_white.png";
import footerTelegramIcon from "../../assets/icons/socials/telegram_logo_white.png";
import {RoutePaths} from "../../routes/RoutePaths";


const Footer: React.FC = () => {
  return(
    <div className="footer">
      <div className="section">
        <span className="header">catalog</span>
        <a href={RoutePaths.TOBACCO} className="menu-link">
          <button className="menu-button">
            <span className="catalog-item-text">tobacco</span>
          </button>
        </a>
        <a href={RoutePaths.ACCESSORIES} className="menu-link">
          <button className="menu-button">
            <span className="catalog-item-text">accessories</span>
          </button>
        </a>
        <a href={RoutePaths.NEWS} className="menu-link">
          <button className="menu-button">
            <span className="catalog-item-text">news</span>
          </button>
        </a>
        <a href={RoutePaths.ABOUT} className="menu-link">
          <button className="menu-button">
            <span className="catalog-item-text">about</span>
          </button>
        </a>
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
          <a href={ExternalLinks.INSTAGRAM} className="menu-link">
            <button className="menu-button">
              <img src={footerInstagramIcon} alt="main-logo-instagram" className="footer-logo-social"/>
            </button>
          </a>
          <a href={ExternalLinks.WHATSAPP} className="menu-link">
            <button className="menu-button">
              <img src={footerWhatsappIcon} alt="main-logo-whatsapp" className="footer-logo-social"/>
            </button>
          </a>
          <a href={ExternalLinks.TELEGRAM} className="menu-link">
            <button className="menu-button">
              <img src={footerTelegramIcon} alt="main-logo-telegram" className="footer-logo-social"/>
            </button>
          </a>
        </div>
        <span className="copyright">designed by Gleb Kossov</span>
      </div>
    </div>
  )
}

export default Footer;
