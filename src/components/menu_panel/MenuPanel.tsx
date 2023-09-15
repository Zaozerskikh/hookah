import React from "react";
import './MenuPanel.css'
import mainLogoInstagramIcon from '../../assets/icons/socials/instagram_logo_black.png'
import mainLogoWhatsappIcon from '../../assets/icons/socials/whatsapp_logo_black.png'
import mainLogoTelegramIcon from '../../assets/icons/socials/telegram_logo_black.png'
import instagramGreyIcon from "../../assets/icons/socials/instagram_logo_smokegrey.png";
import whatsappGreyIcon from "../../assets/icons/socials/whatsapp_logo_smokegrey.png";
import telegramGreyIcon from "../../assets/icons/socials/telegram_logo__smokegrey.png";

import {RoutePaths} from "../../routes/RoutePaths";
import ExternalLinks from "../../routes/ExternalLinks";
import SocialLink from "../ui_components/social_link/SocialLink";
import HeaderLink from "./desktop/header_link/HeaderLink";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import BurgerButton from "./mobile/burger_button/BurgerButton";
import {useDispatch} from "react-redux";
import {setIsBurgerShown} from "../../redux/burger_button_reducer/BurgerButtonReducer";

const MenuPanel: React.FC = () => {
  const dispatch = useDispatch();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  const renderDesktop = () => {
    return(
      <div
        className="menu-panel-container"
        style={{
          width: isDesktopOrLaptop ? '1264px' : '948px',
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'space-between',
          backgroundColor: 'white'
        }}
      >
        <Link to={RoutePaths.HOME} className="home-link">
          <div className="logo-wrapper" style={{marginTop: '11px'}}>
            <svg width="190" height="49" viewBox="0 0 190 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5198 22.2109V31.3157H15.766V22.7909C15.766 21.0511 15.3617 19.7753 14.5532 18.9054C13.7447 18.0355 12.5897 17.5716 11.0304 17.5716C9.99088 17.5716 9.06687 17.8035 8.25836 18.2675C7.44985 18.7314 6.87234 19.3693 6.41034 20.2392C6.00608 21.1091 5.77508 22.0949 5.77508 23.2548V31.2577H2.02128V8.93077H5.77508V18.2095C6.46809 16.9917 7.3921 16.0638 8.54711 15.4259C9.64438 14.788 10.9149 14.44 12.3009 14.44C13.8602 14.44 15.1307 14.73 16.228 15.3679C17.3252 16.0058 18.1337 16.8757 18.6535 18.0355C19 18.6734 19.231 19.3693 19.3465 20.1812C19.462 20.8191 19.5198 21.457 19.5198 22.2109Z" fill="black"/>
              <path d="M129.477 27.9521C129.246 27.6042 128.957 27.3142 128.611 27.0823C128.264 26.8503 127.86 26.7923 127.456 26.7923C127.052 26.7923 126.59 26.9083 126.243 27.0823C125.897 27.3142 125.608 27.6042 125.377 27.9521C125.146 28.3001 125.088 28.706 125.088 29.112C125.088 29.5759 125.204 29.9819 125.377 30.3298C125.608 30.6778 125.839 30.9677 126.243 31.1997C126.59 31.4317 126.994 31.4896 127.456 31.4896C127.918 31.4896 128.322 31.3737 128.611 31.1997C128.957 30.9677 129.246 30.7358 129.477 30.3298C129.708 29.9819 129.766 29.5759 129.766 29.112C129.766 28.706 129.65 28.3001 129.477 27.9521Z" fill="black"/>
              <path d="M151.653 18.5574C150.96 17.2816 149.979 16.2378 148.766 15.5418C147.553 14.788 146.109 14.44 144.55 14.44C143.049 14.44 141.663 14.788 140.392 15.4839C139.179 16.1798 138.14 17.2236 137.274 18.4994C137.158 18.6734 136.985 18.9054 136.927 19.1374V14.8459H133.173V36.013H136.927V26.9663C137.043 27.1982 137.158 27.3722 137.274 27.6042C138.14 28.88 139.179 29.9239 140.45 30.6198C141.663 31.3157 143.049 31.7216 144.608 31.7216C146.225 31.7216 147.611 31.3737 148.824 30.6198C150.036 29.8659 151.018 28.88 151.711 27.6042C152.404 26.3284 152.751 24.8206 152.751 23.0808C152.693 21.341 152.346 19.8333 151.653 18.5574ZM148.188 25.9804C147.726 26.7923 147.149 27.4882 146.34 27.9521C145.532 28.4161 144.666 28.648 143.626 28.648C142.587 28.648 141.663 28.4161 140.739 27.9521C139.872 27.4882 139.064 26.7923 138.429 25.9804C137.736 25.1105 137.216 24.1827 136.812 23.0808C137.216 21.979 137.793 20.9931 138.429 20.1812C139.122 19.3113 139.872 18.6734 140.739 18.2095C141.663 17.7455 142.587 17.5136 143.626 17.5136C144.666 17.5136 145.532 17.7455 146.34 18.2095C147.149 18.6734 147.726 19.3113 148.188 20.1812C148.65 20.9931 148.881 21.979 148.881 23.0808C148.881 24.1827 148.65 25.1685 148.188 25.9804Z" fill="black"/>
              <path d="M121.912 22.2109V31.3157H118.158V22.7909C118.158 21.0511 117.754 19.7753 116.945 18.9054C116.137 18.0355 114.982 17.5716 113.48 17.5716C112.441 17.5716 111.459 17.8035 110.65 18.2675C109.842 18.7314 109.264 19.3693 108.802 20.2392C108.398 21.1091 108.167 22.0949 108.167 23.2548V31.2577H104.413V8.93077H108.167V18.2095C108.86 16.9917 109.784 16.0638 110.939 15.4259C112.036 14.788 113.307 14.44 114.693 14.44C116.252 14.44 117.523 14.73 118.62 15.3679C119.717 16.0058 120.526 16.8757 121.046 18.0355C121.623 19.1954 121.912 20.5872 121.912 22.2109Z" fill="black"/>
              <path d="M100.833 14.8459H96.9635L96.5593 18.9054C96.5015 18.7894 96.386 18.6734 96.3283 18.4994C95.462 17.2236 94.4225 16.1798 93.152 15.4839C91.9392 14.788 90.5532 14.44 88.9939 14.44C87.3769 14.44 85.9909 14.788 84.7781 15.5418C83.5654 16.2378 82.5836 17.2816 81.8906 18.5574C81.1976 19.8333 80.8511 21.341 80.8511 23.0808C80.8511 24.7626 81.1976 26.2704 81.8906 27.6042C82.5836 28.88 83.5654 29.9239 84.7781 30.6198C85.9909 31.3157 87.4347 31.7216 88.9939 31.7216C90.4954 31.7216 91.8815 31.3737 93.152 30.6198C94.4225 29.9239 95.462 28.88 96.3283 27.6042C96.386 27.4882 96.5015 27.3722 96.5593 27.1982L96.9635 31.2577H100.833L99.9666 23.0228L100.833 14.8459ZM95.1155 25.9804C94.4225 26.7923 93.6717 27.4882 92.7477 27.9521C91.8815 28.4161 90.8997 28.648 89.8602 28.648C88.8207 28.648 87.9544 28.4161 87.1459 27.9521C86.3374 27.4882 85.7021 26.7923 85.2979 25.9804C84.8359 25.1105 84.6049 24.1827 84.6049 23.0808C84.6049 21.979 84.8359 20.9931 85.2979 20.1812C85.7599 19.3113 86.3951 18.6734 87.1459 18.2095C87.9544 17.7455 88.8207 17.5136 89.8602 17.5136C90.8997 17.5136 91.8815 17.7455 92.7477 18.2095C93.614 18.6734 94.4225 19.3113 95.1155 20.1812C95.8085 20.9931 96.3283 21.979 96.7325 23.0808C96.386 24.1827 95.8085 25.1685 95.1155 25.9804Z" fill="black"/>
              <path d="M80.5046 31.2577H76.1155L71.8419 24.4726L66.1246 31.2577H62.6596V8.93077H66.4134V26.2704L75.6535 14.846H79.9848L74.2675 21.689L80.5046 31.2577Z" fill="black"/>
              <path d="M184.34 47.6694C184.225 47.6694 182.666 47.9594 180.702 47.9594C178.103 47.9594 174.696 47.5534 172.617 45.5817C172.097 45.0598 171.693 44.4799 171.404 43.8419C171.346 43.726 171.289 43.668 171.289 43.552C171.231 43.436 171.231 43.378 171.173 43.262C171.115 43.146 171.116 43.0301 171.058 42.9721C171.058 42.9141 171 42.7981 171 42.7401C171 42.6821 171 42.6241 170.942 42.5081C170.884 42.1022 170.827 41.6962 170.827 41.2323C170.827 40.8844 170.827 40.4784 170.884 40.1305C171 39.1446 171.173 38.2167 171.347 37.2889C171.52 36.245 171.751 35.2591 171.982 34.2733C172.733 30.7358 173.426 27.6622 172.155 26.3864C171.347 25.5165 169.672 25.2845 167.015 25.6325V35.0272C166.438 34.9112 165.802 34.8532 165.225 34.8532C164.59 34.8532 164.012 34.9112 163.435 35.0272V18.6154C158.526 18.3835 154.772 17.1656 154.772 15.7738C154.772 14.324 158.641 13.1062 163.666 12.9322L162.568 4.05945H167.997L166.9 12.9322C171.809 13.1642 175.62 14.382 175.62 15.7738C175.62 17.2236 171.982 18.3835 167.131 18.6154V24.3566C170.134 24.0087 172.04 24.3566 173.079 25.5165C174.754 27.3142 174.061 30.4458 173.195 34.4472C172.964 35.6651 172.675 36.9409 172.444 38.2747C172.386 38.5647 172.328 38.8546 172.328 39.1446C172.271 39.4925 172.213 39.8405 172.213 40.1884C172.097 41.1163 172.155 41.9862 172.328 42.6821C172.386 42.8561 172.444 42.9721 172.444 43.0881C172.502 43.204 172.559 43.32 172.617 43.436C172.675 43.552 172.675 43.61 172.733 43.668C172.906 44.0159 173.137 44.3059 173.426 44.5378C176.602 47.5534 184.109 46.3936 184.167 46.3356L184.34 47.6694Z" fill="black"/>
              <path d="M165.283 34.7372C165.918 34.7372 166.495 34.7952 167.073 34.9112V35.4331H163.435V34.9112C164.012 34.7952 164.647 34.7372 165.283 34.7372Z" fill="white"/>
              <path d="M170.884 41.1744C170.884 40.8265 170.884 40.4785 170.942 40.0726C170.884 40.4205 170.884 40.8265 170.884 41.1744Z" fill="white"/>
              <path d="M172.213 42.6821C171.982 41.9282 171.982 41.1163 172.097 40.1884C171.982 41.1163 172.04 41.9862 172.213 42.6821Z" fill="white"/>
              <path d="M171.289 43.494C171.347 43.61 171.346 43.668 171.404 43.7839H156.274C156.274 39.4345 159.334 35.7811 163.492 34.9112C164.07 34.7952 164.647 34.7372 165.283 34.7372C165.918 34.7372 166.495 34.7952 167.073 34.9112C168.748 35.2591 170.249 36.071 171.404 37.1729C171.231 38.1007 171.058 39.0286 170.942 40.0145C170.884 40.4204 170.884 40.7684 170.884 41.1163C170.884 41.5803 170.942 41.9862 171 42.3921C171 42.4501 171 42.5081 171.058 42.6241C171.058 42.6821 171.115 42.7981 171.115 42.8561C171.173 42.9721 171.173 43.088 171.231 43.146C171.173 43.32 171.231 43.378 171.289 43.494Z" fill="#CFD5DB"/>
              <path d="M174.234 43.7839H172.675C172.617 43.7259 172.559 43.61 172.559 43.552C172.502 43.436 172.444 43.32 172.386 43.204C172.328 43.088 172.271 42.9141 172.271 42.7981C172.04 42.0442 172.04 41.2323 172.155 40.3044C172.213 39.9565 172.271 39.6085 172.271 39.2606C172.328 38.9706 172.386 38.6806 172.386 38.3907C173.541 39.7825 174.234 41.6962 174.234 43.7839Z" fill="#CFD5DB"/>
              <path d="M47.4711 0.231964C40.1945 0.231964 34.3039 6.08915 34.1884 13.3382C26.9696 13.4541 21.1368 19.3693 21.1368 26.6763C21.1368 34.0413 27.0851 40.0145 34.4194 40.0145C41.696 40.0145 47.5866 34.1573 47.7021 26.9083C54.921 26.7923 60.7538 20.8771 60.7538 13.5701C60.7538 6.20514 54.8055 0.231964 47.4711 0.231964ZM47.4711 23.7767H47.3556C46.1429 23.7767 44.9878 23.5447 43.9483 23.1388C44.3526 24.2406 44.5836 25.4005 44.5836 26.5603V26.6763C44.5836 32.3015 40.0213 36.8829 34.4194 36.8829C28.8176 36.8829 24.2553 32.3015 24.2553 26.6763C24.2553 21.0511 28.8176 16.4697 34.4194 16.4697H34.5349C35.7477 16.4697 36.9027 16.7017 37.9422 17.1076C37.538 16.0638 37.307 14.9039 37.307 13.6861V13.5701C37.307 7.9449 41.8693 3.36353 47.4711 3.36353C53.0729 3.36353 57.6353 7.9449 57.6353 13.5701C57.6353 19.1953 53.0729 23.7767 47.4711 23.7767Z" fill="#CFD5DB"/>
            </svg>
          </div>
        </Link>
        <div
          className="links"
          style={{
            gap: isDesktopOrLaptop ? '35px' : '15px',
            width: isDesktopOrLaptop ? '550px': '490px'
          }}
        >
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

  const renderMobile = () => {
    return(
      <div
        style={{
          width: 'calc(100% - 32px)',
          height: '42px',
          zIndex: '1',
          display: 'flex',
          justifyContent: "space-between",
          flexDirection: 'row',
          alignItems: "center",
          padding: '8px 16px'
        }}
      >
        <Link to={RoutePaths.HOME} style={{display: "flex", alignItems: "center"}} onClick={() => dispatch(setIsBurgerShown(false))}>
          <svg width="128" height="33" viewBox="0 0 128 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1085_1267)">
              <path d="M13.1502 14.9632V21.0969H10.6213V15.3539C10.6213 14.1819 10.3489 13.3224 9.80426 12.7363C9.25958 12.1503 8.48147 11.8378 7.43101 11.8378C6.73071 11.8378 6.10821 11.994 5.56353 12.3066C5.01885 12.6191 4.62979 13.0489 4.31855 13.6349C4.04621 14.2209 3.89058 14.8851 3.89058 15.6665V21.0579H1.36171V6.0166H3.89058V12.2675C4.35745 11.4471 4.97995 10.822 5.75806 10.3922C6.49727 9.96249 7.3532 9.72809 8.28694 9.72809C9.33739 9.72809 10.1933 9.92343 10.9325 10.3532C11.6717 10.7829 12.2164 11.369 12.5666 12.1503C12.8 12.5801 12.9556 13.0489 13.0334 13.5958C13.1113 14.0256 13.1502 14.4553 13.1502 14.9632Z" fill="black"/>
              <path d="M87.2267 18.8312C87.0711 18.5968 86.8766 18.4014 86.6432 18.2451C86.4097 18.0889 86.1374 18.0498 85.865 18.0498C85.5927 18.0498 85.2815 18.1279 85.048 18.2451C84.8146 18.4014 84.6201 18.5968 84.4644 18.8312C84.3088 19.0656 84.2699 19.3391 84.2699 19.6125C84.2699 19.9251 84.3477 20.1986 84.4644 20.433C84.6201 20.6674 84.7757 20.8627 85.048 21.019C85.2815 21.1753 85.5538 21.2143 85.865 21.2143C86.1763 21.2143 86.4486 21.1362 86.6432 21.019C86.8766 20.8627 87.0711 20.7064 87.2267 20.433C87.3824 20.1986 87.4213 19.9251 87.4213 19.6125C87.4213 19.3391 87.3435 19.0656 87.2267 18.8312Z" fill="black"/>
              <path d="M102.167 12.5019C101.7 11.6424 101.038 10.9391 100.221 10.4703C99.4043 9.96244 98.4316 9.72803 97.3811 9.72803C96.3696 9.72803 95.4359 9.96244 94.5799 10.4313C93.7629 10.9001 93.0626 11.6033 92.479 12.4628C92.4012 12.58 92.2845 12.7363 92.2456 12.8926V10.0015H89.7167V24.2614H92.2456V18.1668C92.3234 18.323 92.4012 18.4402 92.479 18.5965C93.0626 19.456 93.7629 20.1592 94.6188 20.6281C95.4359 21.0969 96.3696 21.3704 97.4201 21.3704C98.5094 21.3704 99.4432 21.136 100.26 20.6281C101.077 20.1202 101.739 19.456 102.205 18.5965C102.672 17.737 102.906 16.7212 102.906 15.5492C102.867 14.3771 102.633 13.3614 102.167 12.5019ZM99.8322 17.5026C99.521 18.0496 99.1319 18.5184 98.5872 18.8309C98.0425 19.1435 97.459 19.2997 96.7587 19.2997C96.0584 19.2997 95.4359 19.1435 94.8134 18.8309C94.2298 18.5184 93.6851 18.0496 93.2571 17.5026C92.7903 16.9166 92.4401 16.2915 92.1678 15.5492C92.4401 14.8069 92.8292 14.1427 93.2571 13.5958C93.724 13.0098 94.2298 12.58 94.8134 12.2675C95.4359 11.9549 96.0584 11.7986 96.7587 11.7986C97.459 11.7986 98.0425 11.9549 98.5872 12.2675C99.1319 12.58 99.521 13.0098 99.8322 13.5958C100.143 14.1427 100.299 14.8069 100.299 15.5492C100.299 16.2915 100.143 16.9557 99.8322 17.5026Z" fill="black"/>
              <path d="M82.1301 14.9632V21.0969H79.6012V15.3539C79.6012 14.1819 79.3289 13.3224 78.7842 12.7363C78.2395 12.1503 77.4614 11.8378 76.4499 11.8378C75.7495 11.8378 75.0882 11.994 74.5435 12.3066C73.9988 12.6191 73.6097 13.0489 73.2985 13.6349C73.0261 14.2209 72.8705 14.8851 72.8705 15.6665V21.0579H70.3416V6.0166H72.8705V12.2675C73.3374 11.4471 73.9599 10.822 74.738 10.3922C75.4772 9.96249 76.3331 9.72809 77.2669 9.72809C78.3173 9.72809 79.1733 9.92343 79.9125 10.3532C80.6517 10.7829 81.1964 11.369 81.5465 12.1503C81.9356 12.9317 82.1301 13.8693 82.1301 14.9632Z" fill="black"/>
              <path d="M67.9295 10.0015H65.3228L65.0504 12.7363C65.0115 12.6581 64.9337 12.58 64.8948 12.4628C64.3112 11.6033 63.6109 10.9001 62.755 10.4313C61.938 9.96244 61.0043 9.72803 59.9538 9.72803C58.8644 9.72803 57.9307 9.96244 57.1137 10.4703C56.2967 10.9391 55.6353 11.6424 55.1684 12.5019C54.7015 13.3614 54.4681 14.3771 54.4681 15.5492C54.4681 16.6822 54.7015 17.6979 55.1684 18.5965C55.6353 19.456 56.2967 20.1592 57.1137 20.6281C57.9307 21.0969 58.9033 21.3704 59.9538 21.3704C60.9653 21.3704 61.8991 21.136 62.755 20.6281C63.6109 20.1592 64.3112 19.456 64.8948 18.5965C64.9337 18.5184 65.0115 18.4402 65.0504 18.323L65.3228 21.0578H67.9295L67.3459 15.5101L67.9295 10.0015ZM64.0778 17.5026C63.6109 18.0496 63.1052 18.5184 62.4827 18.8309C61.8991 19.1435 61.2377 19.2997 60.5374 19.2997C59.8371 19.2997 59.2535 19.1435 58.7088 18.8309C58.1641 18.5184 57.7362 18.0496 57.4638 17.5026C57.1526 16.9166 56.997 16.2915 56.997 15.5492C56.997 14.8069 57.1526 14.1427 57.4638 13.5958C57.7751 13.0098 58.203 12.58 58.7088 12.2675C59.2535 11.9549 59.8371 11.7986 60.5374 11.7986C61.2377 11.7986 61.8991 11.9549 62.4827 12.2675C63.0663 12.58 63.6109 13.0098 64.0778 13.5958C64.5447 14.1427 64.8948 14.8069 65.1672 15.5492C64.9337 16.2915 64.5447 16.9557 64.0778 17.5026Z" fill="black"/>
              <path d="M54.2347 21.0579H51.2778L48.3988 16.4869L44.5471 21.0579H42.2128V6.0166H44.7416V17.698L50.9666 10.0016H53.8845L50.0328 14.6116L54.2347 21.0579Z" fill="black"/>
              <path d="M124.187 32.1142C124.109 32.1142 123.059 32.3095 121.736 32.3095C119.985 32.3095 117.69 32.036 116.289 30.7077C115.939 30.3561 115.667 29.9654 115.472 29.5357C115.433 29.4575 115.395 29.4185 115.395 29.3403C115.356 29.2622 115.356 29.2231 115.317 29.145C115.278 29.0669 115.278 28.9887 115.239 28.9497C115.239 28.9106 115.2 28.8325 115.2 28.7934C115.2 28.7543 115.2 28.7152 115.161 28.6371C115.122 28.3636 115.083 28.0902 115.083 27.7776C115.083 27.5432 115.083 27.2697 115.122 27.0353C115.2 26.3712 115.317 25.7461 115.433 25.121C115.55 24.4177 115.706 23.7536 115.861 23.0894C116.367 20.7063 116.834 18.6356 115.978 17.7761C115.433 17.1901 114.305 17.0338 112.516 17.2683V23.5973C112.126 23.5192 111.698 23.4801 111.309 23.4801C110.881 23.4801 110.492 23.5192 110.103 23.5973V12.541C106.796 12.3847 104.267 11.5643 104.267 10.6266C104.267 9.64994 106.874 8.82951 110.259 8.7123L109.52 2.73486H113.177L112.438 8.7123C115.745 8.86858 118.312 9.68901 118.312 10.6266C118.312 11.6034 115.861 12.3847 112.593 12.541V16.4087C114.616 16.1743 115.9 16.4087 116.601 17.1901C117.729 18.4012 117.262 20.5109 116.678 23.2066C116.523 24.0271 116.328 24.8866 116.173 25.7851C116.134 25.9805 116.095 26.1758 116.095 26.3712C116.056 26.6056 116.017 26.84 116.017 27.0744C115.939 27.6995 115.978 28.2855 116.095 28.7543C116.134 28.8715 116.173 28.9497 116.173 29.0278C116.212 29.1059 116.25 29.1841 116.289 29.2622C116.328 29.3403 116.328 29.3794 116.367 29.4185C116.484 29.6529 116.64 29.8482 116.834 30.0045C118.974 32.036 124.032 31.2547 124.071 31.2156L124.187 32.1142Z" fill="black"/>
              <path d="M111.348 23.4023C111.776 23.4023 112.165 23.4414 112.554 23.5195V23.8712H110.103V23.5195C110.492 23.4414 110.92 23.4023 111.348 23.4023Z" fill="white"/>
              <path d="M115.122 27.7389C115.122 27.5045 115.122 27.2701 115.161 26.9966C115.122 27.231 115.122 27.5045 115.122 27.7389Z" fill="white"/>
              <path d="M116.017 28.7546C115.861 28.2468 115.861 27.6998 115.939 27.0747C115.861 27.6998 115.9 28.2858 116.017 28.7546Z" fill="white"/>
              <path d="M115.395 29.3016C115.433 29.3798 115.433 29.4189 115.472 29.497H105.279C105.279 26.5669 107.341 24.1056 110.142 23.5195C110.531 23.4414 110.92 23.4023 111.348 23.4023C111.776 23.4023 112.165 23.4414 112.554 23.5195C113.683 23.754 114.694 24.3009 115.472 25.0432C115.356 25.6683 115.239 26.2934 115.161 26.9576C115.122 27.231 115.122 27.4654 115.122 27.6999C115.122 28.0124 115.161 28.2859 115.2 28.5594C115.2 28.5984 115.2 28.6375 115.239 28.7156C115.239 28.7547 115.278 28.8328 115.278 28.8719C115.317 28.95 115.317 29.0282 115.356 29.0672C115.317 29.1844 115.356 29.2235 115.395 29.3016Z" fill="#CFD5DB"/>
              <path d="M117.379 29.4966H116.328C116.289 29.4576 116.25 29.3794 116.25 29.3404C116.212 29.2622 116.173 29.1841 116.134 29.1059C116.095 29.0278 116.056 28.9106 116.056 28.8325C115.9 28.3246 115.9 27.7776 115.978 27.1525C116.017 26.9181 116.056 26.6837 116.056 26.4493C116.095 26.254 116.134 26.0586 116.134 25.8633C116.912 26.8009 117.379 28.0902 117.379 29.4966Z" fill="#CFD5DB"/>
              <path d="M31.9805 0.15625C27.0784 0.15625 23.11 4.10214 23.0322 8.98567C18.169 9.06381 14.2395 13.0488 14.2395 17.9714C14.2395 22.933 18.2468 26.9571 23.1878 26.9571C28.09 26.9571 32.0583 23.0112 32.1362 18.1276C36.9994 18.0495 40.9289 14.0645 40.9289 9.14195C40.9289 4.18028 36.9216 0.15625 31.9805 0.15625ZM31.9805 16.018H31.9027C31.0857 16.018 30.3076 15.8617 29.6073 15.5882C29.8796 16.3305 30.0352 17.1119 30.0352 17.8932V17.9714C30.0352 21.761 26.9617 24.8474 23.1878 24.8474C19.414 24.8474 16.3404 21.761 16.3404 17.9714C16.3404 14.1818 19.414 11.0954 23.1878 11.0954H23.2656C24.0827 11.0954 24.8608 11.2516 25.5611 11.5251C25.2887 10.8219 25.1331 10.0405 25.1331 9.22008V9.14195C25.1331 5.35233 28.2067 2.26594 31.9805 2.26594C35.7544 2.26594 38.828 5.35233 38.828 9.14195C38.828 12.9316 35.7544 16.018 31.9805 16.018Z" fill="#CFD5DB"/>
            </g>
            <defs>
              <clipPath id="clip0_1085_1267">
                <rect width="128" height="32.4266" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Link>
        <BurgerButton/>
      </div>
    )
  }

  return(!isMobile ? renderDesktop() : renderMobile())
}

export default MenuPanel;
