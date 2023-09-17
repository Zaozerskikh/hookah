import React, {useEffect, useState} from "react";
import './Greetings.css'
import StandardButton from "../../../ui_components/standart_button/StandartButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../../routes/RoutePaths";
import Carousel from "./carousel/Carousel";
import {useMediaQuery} from "react-responsive";

const greetingMsgs = {
  FIRST: 'Our premium tobacco shop is your way to hookah pleasure in Portugal. ' +
    'Hookah.pt is the first online store offering a wide selection of quality hookah' +
    ' tobaccos from DarkSide, MustHave, Element, Tangiers</br>' +
    'and other brands delivered right to your door.',
  SECOND: 'Hookah tobacco is, along with carbons, the first thing you will deal</br>' +
    'with after acquiring the body, crown and vase. It depends only</br>' +
    'on you whether you are attracted to a softer light tobacco or a more expressive dark tobacco for turnips. ' +
    'We offer a wide selection of types, brands and flavors.',
}
const Greeting: React.FC = () => {
  const navigate = useNavigate();
  const [mobileGreetingHeight, setMobileGreetingHeight]= useState(0)

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  useEffect(() => {
    console.log(mobileGreetingHeight)
  }, [mobileGreetingHeight]);

  useEffect(() => {
    const updateWidth = () => {
      if (isMobile) {
        console.log(document.getElementById("carousel-item-text-wrapper-2")?.offsetHeight)
        setMobileGreetingHeight(document.getElementById("carousel-item-text-wrapper-2")?.offsetHeight)
      }
    };

    window.addEventListener('resize', updateWidth);
    setTimeout(() => {
      updateWidth();
    },300)

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [isMobile]);

  const renderDesktop = () => {
    return(
      <div className="greetings-container">
        <div className="greetings-header">
          👋
          <h2>Welcome to Hookah.pt</h2>
        </div>
        <Carousel items={[
          {item: greetingMsgs.FIRST, key: 1},
          {item: greetingMsgs.SECOND, key: 2},
          {item: greetingMsgs.FIRST, key: 3},
          {item: greetingMsgs.SECOND, key: 4}
        ]}/>
        <div className="header-buttons-wrapper">
          <StandardButton
            text="Darkside"
            buttonStyle={{
              height: '48px',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: 'white',
              borderRadius: '24px',
              padding: '8px 22px',
            }}
            onHoverColor="white"
            onClickAction={() => navigate(RoutePaths.DARKSIDE)}
          />
          <StandardButton
            text="Musthave"
            buttonStyle={{
              height: '48px',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: 'white',
              borderRadius: '24px',
              padding: '8px 22px',
            }}
            onHoverColor="white"
            onClickAction={() => navigate(RoutePaths.MUSTHAVE)}
          />
          <StandardButton
            text="Element"
            buttonStyle={{
              height: '48px',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: 'white',
              borderRadius: '24px',
              padding: '8px 22px',
            }}
            onHoverColor="white"
            onClickAction={() => navigate(RoutePaths.ELEMENT)}
          />
          <StandardButton
            text="Tangiers"
            buttonStyle={{
              height: '48px',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: 'white',
              borderRadius: '24px',
              padding: '8px 22px',
            }}
            onHoverColor="white"
            onClickAction={() => navigate(RoutePaths.TANGIERS)}
          />
          <StandardButton
            text="Fumari"
            buttonStyle={{
              height: '48px',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: 'white',
              borderRadius: '24px',
              padding: '8px 22px',
            }}
            onHoverColor="white"
            onClickAction={() => navigate(RoutePaths.FUMARI)}
          />
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return(
      <div
        className="greetings-container-mobile"
        id="greetings-container-mobile"
        style={{ height: `${mobileGreetingHeight + 8}px`
      }}>
        <div className="greetings-header-mobile">
          👋
          <h2 className="greetings-header-mobile">Welcome to Hookah.pt</h2>
        </div>
        <Carousel isMobile={true} longestKey={2} items={[
          {item: greetingMsgs.FIRST, key: 1},
          {item: greetingMsgs.SECOND, key: 2},
          {item: greetingMsgs.FIRST, key: 3},
          {item: greetingMsgs.SECOND, key: 4}
        ]}/>
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

//@ts-ignore
export default Greeting
//@ts-ignore
