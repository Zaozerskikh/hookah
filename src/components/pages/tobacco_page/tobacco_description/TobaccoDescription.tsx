import React from "react";
import MoreButton from "../../../ui_components/more_button/MoreButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../../routes/RoutePaths";

interface TobaccoDescriptionProps {
  name: string;
  description: string;
  headerEmoji: string;
  isMobile ? : boolean;
}
const TobaccoDescription: React.FC<TobaccoDescriptionProps> = ({ name, description, headerEmoji, isMobile }) => {
  const navigate = useNavigate()

  const renderDesktop = () => {
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
              paddingLeft: '20px',
              width: '254px',
              height: '48px',
              display:'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              gap:'0px',
              borderRadius: '24px'
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

  const renderMobile = () => {
    return(
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <h1 style={{ margin: 0, padding: 0, fontFamily: 'Monsterrat-700, serif', fontSize: '24px', lineHeight: '125%'}}>{headerEmoji}</h1>
          <h1 style={{ margin: 0, padding: 0, fontFamily: 'Monsterrat-700, serif', fontSize: '24px', lineHeight: '125%'}}>{name}</h1>
        </div>
        <MoreButton
          showText={true}
          isMobile={true}
          text="Open all brands"
          buttonStyle={{
            paddingLeft: '20px',
            width: '198px',
            height: '40px',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            gap:'0px',
            borderRadius: '20px',
          }}
          textStyle={{
            fontFamily: 'Monsterrat-600, serif',
            fontSize: '16px',
            lineHeight: '23.04px',
          }}
          iconStyle={{
            right: '11px'
          }}
          iconWrapperStyle={{
            marginLeft: '5px',
            width: '30px'
          }}
          onHoverColor="#EAEBF0"
          onClickAction={() => navigate(RoutePaths.TOBACCO)}
        />
        <div
          dangerouslySetInnerHTML={{ __html: description.replaceAll('</br>', '')}}
          style={{
            marginTop: '8px',
            fontFamily: 'Monsterrat-500, serif',
            fontSize: '16px',
            lineHeight: '23.04px'
          }}
        />
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

export default TobaccoDescription
