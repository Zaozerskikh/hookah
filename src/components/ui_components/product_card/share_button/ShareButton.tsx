import React, {useState} from "react";
import bottom from './../../../../assets/icons/share_button/bottom.png'
import arrHeader from './../../../../assets/icons/share_button/arr_header.png'
import arrTail from './../../../../assets/icons/share_button/arr_tail.png'


interface ShareButtonProps {
  productLink: string;
  onClickAdditionalAction : (...args: any) => any
}
const ShareButton: React.FC<ShareButtonProps> = ({ productLink , onClickAdditionalAction}) => {
  const [isHovered, setHovered] = useState(false)

  const onClickAction = async () => {
    onClickAdditionalAction()
    await navigator.clipboard.writeText(productLink);
  }

  return(
    <div
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '36px',
        backgroundColor: isHovered ? '#EAEBF0' : 'white',
        cursor: isHovered ? 'pointer' : undefined,
        display: "flex",
        alignItems:'center',
        justifyContent: 'center',
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClickAction}
    >
      <div
        style={{
          width: '30px',
          height: '30px',
          position: 'relative',
        }}
      >
        <img
          src={arrHeader}
          alt="arr"
          style={{
            width: '18px',
            position: 'absolute',
            left: '6px',
            top: '2px'
          }}
        />
        <img
          src={arrTail}
          alt="arr"
          style={{
            position: 'absolute',
            top: '5px',
            left: '14px',
            height: isHovered ? '17px' : '12px',
            width: '2.5px',
            transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease",
          }}
        />
        <img
          src={bottom}
          alt="arr"
          style={{
            position: 'absolute',
            top: '18.75px',
            left: '5px',
            width: '20px'
          }}
        />
      </div>
    </div>
  )
}

export default ShareButton
