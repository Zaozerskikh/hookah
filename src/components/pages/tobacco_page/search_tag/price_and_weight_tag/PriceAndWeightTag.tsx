import React, {useState} from "react";
import logIcon from './../../../../../assets/icons/search_tag/log.png'

export const TagState = {
  ASCENDING: 'ASCENDING',
  DESCENDING: 'DESCENDING',
  TURNED_OFF: 'TURNED_OFF'
}

interface PriceAndWeightTagProps {
  displayedName: string;
  onClickAction: (newState: string) => void;
  tagState: string;
  isMobile? : boolean;
}

const PriceAndWeightTag: React.FC<PriceAndWeightTagProps> = ({ displayedName, onClickAction, tagState, isMobile }) => {
  const [isHovered, setHovered] = useState(false)

  const changeState = () => {
    if (tagState === TagState.TURNED_OFF) {
      onClickAction(TagState.ASCENDING)
    } else if (tagState === TagState.ASCENDING) {
      onClickAction(TagState.DESCENDING)
    } else if (tagState === TagState.DESCENDING) {
      onClickAction(TagState.TURNED_OFF)
    }
  }

  return(
    <div
      style={{
        cursor: isHovered ? 'pointer' : undefined,
        borderColor: tagState !== TagState.TURNED_OFF ? 'black' : !isHovered ? '#EAEBF0' : '#CFD5DB',
        borderStyle: 'solid',
        display: 'flex',
        padding: '3px 16px',
        flexDirection: 'row',
        alignItems: 'center',
        gap: tagState !== TagState.TURNED_OFF ? '10px' : '0px',
        borderRadius: '16px',
        borderWidth: '2px',
        background: !isHovered ? '#EAEBF0' : '#CFD5DB',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
      }}
      onMouseEnter={() => {
        if (!isMobile) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setHovered(false)
        }
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      onClick={changeState}
    >
      <span
        style={{
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Monsterrat-500, serif',
          fontSize: isMobile ? '12px' : '16px',
          fontStyle: 'normal',
          lineHeight: '144%',
        }}
      >
        {displayedName}
      </span>
      <div
        style={{
          width: tagState !== TagState.TURNED_OFF ? '16px' : '0px',
          height: '12px',
          transition: "all 0.5s ease",
          WebkitTransition: "all 0.5s ease",
          MozTransition: "all 0.5s ease",
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '3px',
        }}
      >
        <img
          src={logIcon}
          alt="logIcon"
          style={{
            width: tagState === TagState.TURNED_OFF ? '0px' : tagState === TagState.ASCENDING ? '5px' : '16px',
            height: '2px',
            transition: "all 0.5s ease",
            WebkitTransition: "all 0.5s ease",
            MozTransition: "all 0.5s ease",
          }}
        />
        <img
          src={logIcon}
          alt="logIcon"
          style={{
            width: tagState === TagState.TURNED_OFF ? '0px' : '10px',
            height: '2px',
            transition: "all 0.5s ease",
            WebkitTransition: "all 0.5s ease",
            MozTransition: "all 0.5s ease",
          }}
        />
        <img
          src={logIcon}
          alt="logIcon"
          style={{
            width: tagState === TagState.TURNED_OFF ? '0px' : tagState === TagState.ASCENDING ? '16px' : '5px',
            height: '2px',
            transition: "all 0.5s ease",
            WebkitTransition: "all 0.5s ease",
            MozTransition: "all 0.5s ease",
          }}
        />
      </div>
    </div>
  )
}

export default PriceAndWeightTag
