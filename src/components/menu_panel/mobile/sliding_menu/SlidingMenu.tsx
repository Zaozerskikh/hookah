import './SlidingMenu.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";
import React from "react";
import floatingClouds from "../../../../assets/icons/decorations/floating_clouds_test_2.png";
import instWhite from '../../../../assets/icons/socials/instagram_logo_ffffff.png'
import whatsappWhite from '../../../../assets/icons/socials/whatsapp_logo_ffffff.png'
import telegramWhite from '../../../../assets/icons/socials/telegram_logo_ffffff.png'
import SocialLinkMobile from "../social_link_mobile/SocialLinkMobile";
import ExternalLinks from "../../../../routes/ExternalLinks";
import {Link} from "react-router-dom";
import {RoutePaths} from "../../../../routes/RoutePaths";
import {setIsBurgerShown} from "../../../../redux/burger_button_reducer/BurgerButtonReducer";


const SlidingMenu: React.FC = () => {
  const isBorgerOpened = useSelector((state: RootState) => state.burger.isOpened)
  const dispatch = useDispatch()

  return(
    <div className={`menu ${isBorgerOpened ? 'open' : ''}`}>
      <div className="floating-clouds-wrapper-mobile">
        <div className="floating-clouds-top-mobile">
          <img src={floatingClouds} alt="floating-clouds" className="floating-clouds-image" />
        </div>
        <div className="floating-clouds-bottom-mobile">
          <img src={floatingClouds} alt="floating-clouds" className="floating-clouds-image" />
        </div>
      </div>
      <div className="social-wrapper-menu-mobile">
        <SocialLinkMobile commonIcon={telegramWhite} clickedIcon={telegramWhite} link={ExternalLinks.TELEGRAM} />
        <SocialLinkMobile commonIcon={whatsappWhite} clickedIcon={whatsappWhite} link={ExternalLinks.WHATSAPP} />
        <SocialLinkMobile commonIcon={instWhite} clickedIcon={instWhite} link={ExternalLinks.INSTAGRAM} />
      </div>
      <div className="links-wrapper-mobile-menu" onClick={() => dispatch(setIsBurgerShown(false))}>
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
    </div>
  )
}

export default SlidingMenu
