import React from "react";

interface PartnersLogoProps {
  src: string;
  url: string;
  isMobile ? : boolean;
}
const PartnersLogo: React.FC<PartnersLogoProps> = ({ src, url, isMobile }) => {
  return(
    <a href={url} target="_blank" rel="noreferrer">
      <img
        src={src}
        alt="partner-logo"
        style={{
          height: isMobile ? '76px' : '160px',
          width: isMobile ? '76px' : '160px'
        }}
      />
    </a>
  )
}

export default PartnersLogo
