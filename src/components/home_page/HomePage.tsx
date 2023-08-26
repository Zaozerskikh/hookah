import React from "react";
import './HomePage.css'
import FloatingClouds from "./floating_clouds/FloatingClouds";
import darksideLogo from './../../assets/icons/partners/darkside_logo.png'
import elementLogo from './../../assets/icons/partners/element_logo.png'
import fumariLogo from './../../assets/icons/partners/fumari_logo.png'
import musthaveLogo from './../../assets/icons/partners/musthave_logo.png'
import tangiersLogo from './../../assets/icons/partners/tangiers_logo.png'
import floatingClouds from "../../assets/icons/floating_clouds.png";

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <div className="clouds-and-text-container">
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
      <div className="shop">

      </div>
      <div className="partners-container">
        <span className="partners-header">Our partners ❤️</span>
        <div className="partners-logo-container">
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
