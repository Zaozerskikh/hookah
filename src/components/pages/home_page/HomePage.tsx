import React, {useState} from "react";
import './HomePage.css'
import FloatingClouds from "./floating_clouds/FloatingClouds";
import darksideLogo from '../../../assets/icons/partners/darkside_logo.png'
import elementLogo from '../../../assets/icons/partners/element_logo.png'
import fumariLogo from '../../../assets/icons/partners/fumari_logo.png'
import musthaveLogo from '../../../assets/icons/partners/musthave_logo.png'
import tangiersLogo from '../../../assets/icons/partners/tangiers_logo.png'
import ShopGrid from "../../ui_components/shop_grid/ShopGrid";
import NewsSection from "./news_section/NewsSection";
import PartnersLogo from "./partners_logo/PartnersLogo";
import ExternalLinks from "../../../routes/ExternalLinks";
import Greeting from "./greetings/Greeting";
import {useMediaQuery} from "react-responsive";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";

const HomePage: React.FC = () => {
  const Products = useSelector((state: RootState) => state.productArray)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  const showMockPartnerCard = useMediaQuery({
    query: '(max-width: 500px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  const renderDesktop= () => {
    return(
      <div className="homepage-container" style={{ width: isDesktopOrLaptop ? '1264px' : '948px'}}>
        <div className="clouds-and-text-container">
          <div
            className="left-tricky-div"
            style={{
              width: "6000px",
              position: 'absolute',
              left: '-5500px'
            }}
          />
          <Greeting />
          <FloatingClouds />
        </div>
        <ShopGrid
          // products={productsOnTheMain.map(productId =>
          //   Products.find(product =>
          //     product.productId === productId
          //   )
          // )}
          products={Products}
          showAllCatalogButton={true}
        />
        <NewsSection/>
        <div className="partners-container" style={{ width: isDesktopOrLaptop ? '1264px' : '948px'}}>
        <span className="partners-header">
          <h2>Our partners</h2> ❤️
        </span>
          <div
            className="partners-logo-container"
            style={{
              display: 'flex',
              width: isDesktopOrLaptop ? '1264px' : '948px',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '64px',
            }}
          >
            <PartnersLogo src={darksideLogo} url={ExternalLinks.DARKSIDE} />
            <PartnersLogo src={musthaveLogo} url={ExternalLinks.MUSTHAVE} />
            <PartnersLogo src={elementLogo} url={ExternalLinks.ELEMENT} />
            <PartnersLogo src={tangiersLogo} url={ExternalLinks.TANGIERS} />
            <PartnersLogo src={fumariLogo} url={ExternalLinks.FUMARI} />
          </div>
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return(
      <div style={{ display: "flex", flexDirection: 'column', width: 'calc(100% - 32px)', paddingRight: '16px', paddingLeft: '16px', paddingTop: '76px', paddingBottom: '128px', gap: '76px'}}>
        <Greeting/>
        <ShopGrid
          // products={productsOnTheMain.map(productId =>
          //   Products.find(product =>
          //     product.productId === productId
          //   )
          // )}
          products={Products}
          showAllCatalogButton={true}
          isMobile={true}
        />
        <NewsSection isMobile={true}/>
        <div style={{ display: "flex", flexDirection: "column", gap: '24px', alignItems: 'center'}}>
          <span className="partners-header-mobile">
            <h2>Our partners</h2> ❤️
          </span>
          <div
            style={{
              alignSelf: 'center',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignContent: 'center',
              flexWrap: 'wrap',
              rowGap: '8px',
              columnGap: '16px'
            }}
          >
            <PartnersLogo src={darksideLogo} url={ExternalLinks.DARKSIDE} isMobile={true} />
            <PartnersLogo src={musthaveLogo} url={ExternalLinks.MUSTHAVE} isMobile={true} />
            <PartnersLogo src={elementLogo} url={ExternalLinks.ELEMENT} isMobile={true} />
            <PartnersLogo src={tangiersLogo} url={ExternalLinks.TANGIERS} isMobile={true} />
            <PartnersLogo src={fumariLogo} url={ExternalLinks.FUMARI} isMobile={true} />
            {showMockPartnerCard && <div style={{ width: '76px', height: '76px'}}/>}
          </div>
        </div>
      </div>
    )
  }

  return (isMobile ? renderMobile() : renderDesktop());
};

export default HomePage;
