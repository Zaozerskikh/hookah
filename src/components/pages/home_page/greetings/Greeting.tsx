import React from "react";
import './Greetings.css'
import StandardButton from "../../../ui_components/standart_button/StandartButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../../routes/RoutePaths";

const Greeting: React.FC = () => {
  const navigate = useNavigate();

  return(
    <div className="greetings-container">
      <div className="greetings-header">
        👋
        <h2>Welcome to Hookah.pt</h2>
      </div>
      <p className="greetings-text">
        Our premium tobacco shop is your way to hookah pleasure in Portugal. Hookah.pt is the first online store offering a wide selection of quality hookah tobaccos from DarkSide, MustHave, Element, Tangiers, Fumari, and other brands delivered right to your door.
      </p>
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
          onClickAction={() => navigate(RoutePaths.FUMARI)}
        />
      </div>
    </div>
  )
}

export default Greeting
