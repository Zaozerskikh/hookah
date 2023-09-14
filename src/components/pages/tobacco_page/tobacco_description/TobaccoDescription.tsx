import React from "react";
import MoreButton from "../../../ui_components/more_button/MoreButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../../routes/RoutePaths";

interface TobaccoDescriptionProps {
  name: string;
  description: string;
  headerEmoji: string;
}
const TobaccoDescription: React.FC<TobaccoDescriptionProps> = ({ name, description, headerEmoji }) => {
  const navigate = useNavigate()

  return(
    <div style={{ display: 'flex', flexDirection: 'column', gap: '34px'}}>
      <div style={{ display: "flex", flexDirection: 'row', gap: '32px', alignItems: 'center'}}>
        <div style={{ display: "flex", flexDirection: 'row', gap: '8px'}}>
          <h1 style={{ margin: 0, padding: 0, fontFamily: 'Monsterrat-700, serif', fontSize: '32px', lineHeight: '144%'}}>{headerEmoji}</h1>
          <h1 style={{ margin: 0, padding: 0, fontFamily: 'Monsterrat-700, serif', fontSize: '32px', lineHeight: '144%'}}>{name}</h1>
        </div>
        <MoreButton
          showText={true}
          text="Open all brands"
          buttonStyle={{
            paddingLeft: '15px',
            width: '254px',
            height: '48px',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            gap:'0px'
          }}
          textStyle={{
            fontFamily: 'Monsterrat-600, serif',
            fontSize: '22px',
            lineHeight: '144%',
          }}
          iconStyle={{
            marginLeft: '-10px'
          }}
          onHoverColor="#EAEBF0"
          onClickAction={() => navigate(RoutePaths.TOBACCO)}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: description}}
        style={{
          fontFamily: 'Monsterrat-500, serif',
          fontSize: '22px',
          lineHeight: '144%'
        }}
      />
    </div>
  )
}

export default TobaccoDescription
