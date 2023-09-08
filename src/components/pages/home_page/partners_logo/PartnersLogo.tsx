import React from "react";

interface PartnersLogoProps {
  src: string;
  url: string;
}
const PartnersLogo: React.FC<PartnersLogoProps> = ({ src, url}) => {
  return(
    <a href={url} target="_blank" rel="noreferrer">
      <img
        src={src}
        alt="darksideLogo"
        style={{
          height: '160px',
          width: '160px'
        }}
      />
    </a>
  )
}

export default PartnersLogo
