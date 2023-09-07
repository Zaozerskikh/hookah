import React, {useState} from "react";
import tapeIcon from './../../../../assets/icons/promocode_button/tape.png'

interface PromocodeButtonProps {
  onClickAction: (...args: any) => any
}

const PromocodeButton: React.FC<PromocodeButtonProps> = ({ onClickAction }) => {
  const [isHovered, setHovered] = useState(false)
  const [isClicked, setClicked] = useState(false)

  return(
    <div
      style={{
        position: 'relative',
        cursor: isHovered ? 'pointer' : undefined,
        width: '128px',
        height: '24px',
        backgroundColor: isClicked ? '#c7ccd3' : isHovered ? "#CFD5DB" : '#EAEBF0',
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
        borderRadius: '24px',
        padding: '12px 20px 12px 20px',
        display: "flex",
        alignItems: 'center',
        gap: '10px'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClickAction}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onMouseOut={() => setClicked(false)}
    >
      <span
        style={{
          color: 'black',
          fontFamily: 'Monsterrat-600, serif',
          fontSize: '22px',
          lineHeight: '31.68px',
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
        }}
      >
        Activate
      </span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V11M12 7H15.5C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2H15.4198C14.2803 2 13.2758 2.74741 12.9484 3.83881L12 7ZM12 7H8.5C7.11929 7 6 5.88071 6 4.5C6 3.11929 7.11929 2 8.5 2H8.58023C9.71968 2 10.7242 2.74741 11.0516 3.83881L12 7ZM4 11H20C21.1046 11 22 10.1046 22 9V9C22 7.89543 21.1046 7 20 7H4C2.89543 7 2 7.89543 2 9V9C2 10.1046 2.89543 11 4 11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 19V20.5V22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <img
        src={tapeIcon}
        alt="tape"
        style={{
          position: 'absolute',
          right: '31.7px',
          bottom: '15px',
          width: '2px',
          height: isHovered ? '2px' : '16px',
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
        }}
      />
    </div>
  )
}

export default PromocodeButton
