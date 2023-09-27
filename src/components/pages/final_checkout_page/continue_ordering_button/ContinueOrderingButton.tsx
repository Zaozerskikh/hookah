import React, {useState} from "react";
import arr_h from "../../../../assets/icons/share_button/arr_header.png";
import arr_t from "../../../../assets/icons/share_button/arr_tail.png";

interface ContinueOrderingButtonProps {
  onClickAction: () => void;
}
const ContinueOrderingButton: React.FC<ContinueOrderingButtonProps> = ({ onClickAction }) => {
  const [isHovered, setHovered] = useState(false)

  return(
    <div
      style={{
        display: 'flex',
        height: '40px',
        padding: '12px 20px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: isHovered ? "var(--auxiliary-smoke-gray)" : 'white',
        transition: "all .2s ease",
        WebkitTransition: "all .2s ease",
        MozTransition: "all .2s ease",
        borderRadius: '20px',
        boxSizing: 'border-box',
        zIndex: '9999'
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      onClick={onClickAction}
    >
      <div
        style={{
          color: 'var(--main-black, #000)',
          textAlign: 'center',
          fontFamily: 'Monsterrat-600, serif',
          fontSize: '16px',
          lineHeight: '144%',
        }}
      >
        Continue ordering
      </div>
      <div style={{position: 'relative', width: '24px', height: '24px'}}>
        <img src={arr_h} alt="d" style={{ transform: 'rotate(180deg)', position: 'absolute', width: '17px', top: '12px', left: '4px'}}/>
        <img
          src={arr_t} alt="d"
          style={{
            position: 'absolute',
            width: '2.5px',
            height: isHovered ? '18px' : '16px',
            bottom: '4px',
            left: '11.5px',
            transition: "all .2s ease",
            WebkitTransition: "all .2s ease",
            MozTransition: "all .2s ease",
          }}
        />
      </div>
    </div>
  )
}

export default ContinueOrderingButton
