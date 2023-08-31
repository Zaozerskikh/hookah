import React, {useEffect, useState} from "react";
import './HomePage.css'
import FloatingClouds from "./floating_clouds/FloatingClouds";
import darksideLogo from '../../../assets/icons/partners/darkside_logo.png'
import elementLogo from '../../../assets/icons/partners/element_logo.png'
import fumariLogo from '../../../assets/icons/partners/fumari_logo.png'
import musthaveLogo from '../../../assets/icons/partners/musthave_logo.png'
import tangiersLogo from '../../../assets/icons/partners/tangiers_logo.png'
import ShopSection from "./shop_section/ShopSection";
import NewsSection from "./news_section/NewsSection";

const HomePage: React.FC = () => {
  const [partnersGap, setPartnersGap] = useState(118)
  useEffect(() => {
    const handleResize = () => {
      setPartnersGap(Math.min(118, Math.max((window.innerWidth - 176 - 800) / 5, 32)));
    }

    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return (
    <div className="homepage-container">
      <div className="clouds-and-text-container">
        <div className="left-tricky-div"/>
        <div className="greetings-container">
          <div className="greetings-header">
            👋 Welcome to Hookah.pt
          </div>
          <p className="greetings-text">
            Our premium tobacco shop is your way to hookah pleasure in Portugal. Hookah.pt is the first online store offering a wide selection of quality hookah tobaccos from DarkSide, MustHave, Element, Tangiers and other brands delivered right to your door.
          </p>
        </div>
        <FloatingClouds/>
      </div>
      <ShopSection/>
      <NewsSection/>
      <div className="partners-container">
        <span className="partners-header">Our partners ❤️</span>
        <div
          className="partners-logo-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: `${partnersGap}px`,
            marginTop: '64px',
            width: '100%'
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
