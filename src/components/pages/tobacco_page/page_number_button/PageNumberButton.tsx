import React, {useState} from "react";

interface PageNumberButtonProps {
  pageNumber: number,
  isActive: boolean,
  onClickAction: (...args: any) => any
}

const PageNumberButton: React.FC<PageNumberButtonProps> = ({ isActive, pageNumber, onClickAction }) => {
  const [isHovered, setHovered] = useState(false)

  return(
    <div
      style={{
        cursor: isHovered ? 'pointer' : undefined,
        width: '32px',
        height: '32px',
        borderRadius: '16px',
        backgroundColor: isHovered && !isActive ? '#CFD5DB' : isActive ? 'black' :'#EAEBF0',
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
        flexShrink: 0,
      }}
      onClick={onClickAction}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          fontFamily: 'Monsterrat-500, serif',
          fontSize: '22px',
          fontWeight: '500',
          lineHeight: '32px',
          textAlign: 'center',
          color: isActive ? 'white' :'black',
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
        }}
      >
        {pageNumber}
      </span>
    </div>
  )
}

export default PageNumberButton
