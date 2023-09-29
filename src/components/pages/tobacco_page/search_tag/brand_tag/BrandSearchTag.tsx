import './BrandSearchTag.css'
import React, {useState} from "react";
import {useMediaQuery} from "react-responsive";

interface BrandSearchTagProps {
  name: string
  isActive: boolean
  onActiveChanged: (...args: any) => any;
  isMobile ? : boolean;
}

const BrandSearchTag: React.FC<BrandSearchTagProps> = ({ name , isActive, onActiveChanged, isMobile}) => {
  const [isHovered, setHovered] = useState(false)
  const isTouchable = useMediaQuery({ query: '(pointer: coarse)' });

  return(
    <button
      onClick={onActiveChanged}
      onMouseEnter={() => {
        if (!isTouchable) {
          setHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (!isTouchable) {
          setHovered(false)
        }
      }}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      className="search-tag-button"
      style={{
        cursor: isHovered ? 'pointer' : undefined,
        borderColor: isActive ? 'black' : !isHovered ? '#EAEBF0' : '#CFD5DB',
        borderStyle: 'solid',
        display: 'flex',
        padding: isMobile ? '4px 10px' : '3px 16px',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '16px',
        borderWidth: '2px',
        background: !isHovered ? '#EAEBF0' : '#CFD5DB',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
        height: isMobile ? '28px' : undefined
      }}
    >
      <span className="tag-name" style={{ fontSize: isMobile ? '12px' : '16px'}}>
        {name}
      </span>
    </button>
  )
}

export default BrandSearchTag
