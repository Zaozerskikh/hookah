import React from "react";
import './Footer.css'
import ExternalLinks from "../../routes/ExternalLinks";
import instagramWhiteIcon from "../../assets/icons/socials/instagram_logo_white.png";
import whatsappWhiteIcon from "../../assets/icons/socials/whatsapp_logo_white.png";
import telegramWhiteIcon from "../../assets/icons/socials/telegram_logo_white.png";
import instagramGreyIcon from "../../assets/icons/socials/instagram_logo_ffffff.png";
import instWhite from "../../assets/icons/socials/instagram_logo_ffffff.png";
import whatsappGreyIcon from "../../assets/icons/socials/whatsapp_logo_ffffff.png";
import whatsappWhite from "../../assets/icons/socials/whatsapp_logo_ffffff.png";
import telegramGreyIcon from "../../assets/icons/socials/telegram_logo_ffffff.png";
import telegramWhite from "../../assets/icons/socials/telegram_logo_ffffff.png";
import {RoutePaths} from "../../routes/RoutePaths";
import SocialLink from "../ui_components/social_link/SocialLink";
import CopyrightLink from "./copyright_link/CopyrightLink";
import FooterLink from "./footer_link/FooterLink";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import SocialLinkMobile from "../menu_panel/mobile/social_link_mobile/SocialLinkMobile";


const Footer: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  const renderDesktop = () => {
    return(
      <div
        className="footer"
        style={{
          padding: `64px 0px 64px 0px`,
          position: "absolute",
          width: '100%',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          bottom: '-420px',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: 'row',
            width: isDesktopOrLaptop ? '1264px' : '948px',
            justifyContent: 'space-between'
          }}
        >
          <div className="section" style={{width: isDesktopOrLaptop ? '224px' : '175px'}}>
            <span className="header">links</span>
            <FooterLink
              text="tobacco"
              link={RoutePaths.TOBACCO}
            />
            <FooterLink
              text="news"
              link={RoutePaths.NEWS}
            />
            <FooterLink
              text="about us"
              link={RoutePaths.ABOUT}
            />
          </div>
          <div className="section">
            <span className="header">delivery</span>
            <p className="delivery-info-text">
              The conditions for delivering hookah tobacco in Portugal via CTT Express for individuals aged 18+ are as follows: free delivery for orders exceeding 200 euros; all our tobacco is legal. Proof of age will be required upon delivery to confirm that the recipient is 18 years or older.Shipping via CTT takes up to 7 business days. Available throughout Portugal including Madeira, Azores, Lisbon, Porto, Algarve and the rest of Portugal.
              <span style={{ visibility: 'hidden' }}>l</span>
              <Link className="delivery-link-text" to={RoutePaths.DELIVERY_POLICY}>Read more...</Link>
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
          <div className="section" style={{width: isDesktopOrLaptop ? '224px' : '175px'}}>
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

  const renderMobile = () => {
    return(
      <div
        style={{
          width: '100%',
          display: 'flex',
          backgroundColor: 'black',
          paddingTop: '64px',
          paddingBottom: '64px',
          alignItems: 'center',
          gap:'32px',
          flexDirection:'column'
        }}
      >
        <div className="first-wrapper-footer-mobile">
          <div className="social-wrapper-footer-mobile">
            <SocialLinkMobile commonIcon={telegramWhite} clickedIcon={telegramWhite} link={ExternalLinks.TELEGRAM} />
            <SocialLinkMobile commonIcon={whatsappWhite} clickedIcon={whatsappWhite} link={ExternalLinks.WHATSAPP} />
            <SocialLinkMobile commonIcon={instWhite} clickedIcon={instWhite} link={ExternalLinks.INSTAGRAM} />
          </div>
          <div style={{display:"flex", flexDirection:'column', gap: '8px'}}>
            <Link className="link-mobile-menu" to={RoutePaths.TOBACCO} >
              tobacco
            </Link>
            <Link className="link-mobile-menu" to={RoutePaths.NEWS} >
              news
            </Link>
            <Link className="link-mobile-menu" to={RoutePaths.ABOUT} >
              about us
            </Link>
          </div>
          <div className="delivery-policy-footer-container-mobile">
            <span className="delivery-policy-footer-container-mobile-header">delivery</span>
            <div className="delivery-policy-footer-container-mobile-text-wrapper">
              <div
                className="delivery-policy-footer-container-mobile-text"
                dangerouslySetInnerHTML={{
                  __html: 'The conditions for delivering hookah tobacco</br>in Portugal via CTT Express for individuals aged 18+ are as follows: free delivery for orders exceeding 200 euros; all our tobacco is legal. Proof of age will be required upon delivery to confirm that the recipient is 18 years </br> or older.Shipping via CTT takes up to 7 business days. Available throughout Portugal including Madeira, Azores, Lisbon, Porto, Algarve and the rest of Portugal.'
                }}
              />
              <Link className="delivery-link-text-mobile" to={RoutePaths.DELIVERY_POLICY}>Read full...</Link>
            </div>
          </div>
          <div className="delivery-policy-footer-container-mobile">
            <span className="delivery-policy-footer-container-mobile-header">return policy</span>
            <div className="delivery-policy-footer-container-mobile-text-wrapper">
              <div
                className="delivery-policy-footer-container-mobile-text"
                dangerouslySetInnerHTML={{
                  __html: 'The conditions for returning hookah tobacco in Portugal, are as follows: The tobacco must be returned</br>in its original, unopened packaging to be eligible</br>for a refund or exchange. Returns should be initiated within a specified timeframe, typically within 14 days</br>of purchase, to qualify for a refund. A valid proof</br>of purchase, such as a receipt or order confirmation,</br>is required for processing the return of hookah</br>tobacco in Portugal.'
                }}
              />
            </div>
          </div>
          <div className="delivery-policy-footer-container-mobile">
            <span className="delivery-policy-footer-container-bottom-link">© 2023 Hookah.PT. All rights reserved</span>
            <a href={ExternalLinks.GLEB_KOSSOV_COPYRIGHT} target="_blank" rel="noreferrer" className="delivery-policy-footer-container-bottom-link">Designed by Gleb Kossov</a>
          </div>
        </div>
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

//@ts-ignore
export default Footer;
//@ts-ignore
