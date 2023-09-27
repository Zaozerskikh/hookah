import './BrandSearchTag.css'
import React, {useState} from "react";

interface BrandSearchTagProps {
  name: string
  isActive: boolean
  onActiveChanged: (...args: any) => any;
  isMobile ? : boolean;
}

const BrandSearchTag: React.FC<BrandSearchTagProps> = ({ name , isActive, onActiveChanged, isMobile}) => {
  const [isHovered, setHovered] = useState(false)

  return(
    <button
      onClick={onActiveChanged}
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
      className="search-tag-button"
      style={{
        cursor: isHovered ? 'pointer' : undefined,
        borderColor: isActive ? 'black' : !isHovered ? '#EAEBF0' : '#CFD5DB',
        borderStyle: 'solid',
        display: 'flex',
        padding: '3px 16px',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '16px',
        borderWidth: '2px',
        background: !isHovered ? '#EAEBF0' : '#CFD5DB',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
      }}
    >
      <span className="tag-name" style={{ fontSize: isMobile ? '12px' : '16px'}}>
        {name}
      </span>
    </button>
  )
}

export default BrandSearchTag
