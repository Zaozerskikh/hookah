import './SearchTag.css'
import React, {useState} from "react";

interface SearchTagProps {
  name: string
  isActive: boolean
  onActiveChanged: (...args: any) => any
}

const SearchTag: React.FC<SearchTagProps> = ({ name , isActive, onActiveChanged}) => {
  const [isHovered, setHovered] = useState(false)

  return(
    <button
      onClick={onActiveChanged}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
      <span className="tag-name">
        {name}
      </span>
    </button>
  )
}

export default SearchTag
