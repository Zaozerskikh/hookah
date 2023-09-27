import React, {useState} from "react";
import bottom from './../../../../assets/icons/share_button/bottom.png'
import arrHeader from './../../../../assets/icons/share_button/arr_header.png'
import arrTail from './../../../../assets/icons/share_button/arr_tail.png'


interface ShareButtonProps {
  productLink: string;
  onClickAdditionalAction : (...args: any) => any;
  isMobile ? : boolean;
}
const ShareButton: React.FC<ShareButtonProps> = ({ productLink , onClickAdditionalAction, isMobile}) => {
  const [isHovered, setHovered] = useState(false)

  const onClickAction = async () => {
    onClickAdditionalAction()
    try {
      await navigator.clipboard.writeText(productLink);
    } catch (error) {
      const tempInput = document.createElement('input');
      tempInput.setAttribute('value', productLink);
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);
      try {
        document.execCommand('copy');
      } catch (copyError) {
        //
      } finally {
        document.body.removeChild(tempInput);
      }
    }
  }

  return(
    <div
      style={{
        width: isMobile ? '42px' : '48px',
        height: isMobile ? '42px' : '48px',
        borderRadius: '36px',
        backgroundColor: isHovered ? '#EAEBF0' : 'white',
        cursor: isHovered ? 'pointer' : undefined,
        display: "flex",
        alignItems:'center',
        justifyContent: 'center',
        transition: "all .3s ease",
        WebkitTransition: "all .3s ease",
        MozTransition: "all .3s ease",
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
      onClick={onClickAction}
    >
      <div
        style={{
          width: isMobile ? '24px' : '30px',
          height: isMobile ? '24px' : '30px',
          position: 'relative',
        }}
      >
        <img
          src={arrHeader}
          alt="arr"
          style={{
            width: isMobile ? '16px' : '18px',
            position: 'absolute',
            left: isMobile ? '4px' : '6px',
            top: isMobile ?'1px' : '2px'
          }}
        />
        <img
          src={arrTail}
          alt="arr"
          style={{
            position: 'absolute',
            top: isMobile ? '3px' : '5px',
            left: isMobile ? '11px' : '14px',
            height: isHovered ? isMobile ? '15px' : '17px' : '12px',
            width: isMobile ? '2px' : '2.5px',
            transition: "all .2s ease",
            WebkitTransition: "all .2s ease",
            MozTransition: "all .2s ease",
          }}
        />
        <img
          src={bottom}
          alt="arr"
          style={{
            position: 'absolute',
            top: isMobile ? '16px' : '18.75px',
            left: isMobile ? '4px' : '5px',
            width: isMobile ? '18px' : '20px'
          }}
        />
      </div>
    </div>
  )
}

export default ShareButton
