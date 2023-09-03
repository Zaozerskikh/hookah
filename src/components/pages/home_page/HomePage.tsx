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
import {Products, productsOnTheMain} from "../../../content/Products";

const HomePage: React.FC = () => {
  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return (
    <div className="homepage-container">
      <div className="clouds-and-text-container">
        <div
          className="left-tricky-div"
          style={{
            width: "6000px",
            position: 'absolute',
            left: '-5500px'
          }}
        />
        <div
          className="greetings-container"
        >
          <div className="greetings-header">
            👋 Welcome to Hookah.pt
          </div>
          <p className="greetings-text">
            Our premium tobacco shop is your way to hookah pleasure in Portugal. Hookah.pt is the first online store offering a wide selection of quality hookah tobaccos from DarkSide, MustHave, Element, Tangiers, Fumari, and other brands delivered right to your door.
          </p>
        </div>
        <FloatingClouds/>
      </div>
      <ShopGrid
        products={productsOnTheMain.map(productId =>
          Products.find(product =>
            product.productId === productId
          )
        )}
        showAllCatalogButton={true}
      />
      <NewsSection/>
      <div className="partners-container">
        <span className="partners-header">Our partners ❤️</span>
        <div
          className="partners-logo-container"
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '64px',
            gap: '88px',
          }}
        >
          <img src={darksideLogo} alt="darksideLogo" className="partner-logo-image" />
          <img src={musthaveLogo} alt="musthaveLogo" className="partner-logo-image" />
          <img src={elementLogo} alt="elementLogo" className="partner-logo-image" />
          <img src={tangiersLogo} alt="tangiersLogo" className="partner-logo-image" />
          <img src={fumariLogo} alt="fumariLogo" className="partner-logo-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
