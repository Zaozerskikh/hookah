import React from "react";
import './HookahAnimation.css'
import cloudsIcon from "../../../../assets/icons/decorations/floating_clouds_about_us.png";

const HookahAnimation: React.FC = () => {
  return(
    <div
      className="about-animation-container"
      style={{
        position: 'relative',
        overflow: 'hidden',
        alignSelf: 'center',
        width: '340px',
        height: '340px',
        borderRadius: '170px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="hookah-wrapper">
        <svg width="131" height="193" viewBox="0 0 131 193" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.293 0H58.103L52.1505 47.6201H40.2455L34.293 0Z" fill="black"/>
          <rect x="38.2598" y="50.7798" width="15.8734" height="87.3035" fill="black"/>
          <ellipse cx="45.8203" cy="51.5292" rx="45.8203" ry="12.7278" fill="black"/>
          <g clipPath="url(#clip0_422_3034)">
            <circle cx="46.1971" cy="174.607" r="39.6834" fill="#CFD5DB"/>
          </g>
          <path d="M50.9121 92.2581C99.2779 84.6215 78.9134 117.714 73.8222 158.443C68.7311 199.172 129.825 188.99 129.825 188.99" stroke="black" strokeWidth="5.09114"/>
          <defs>
            <clipPath id="clip0_422_3034">
              <rect width="87.3035" height="39.6834" fill="white" transform="translate(2.54492 134.923)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="about-animation-top-floating-clouds-container">
        <img src={cloudsIcon} alt="about-animation-floating-clouds" className="about-animation-floating-clouds-image" />
      </div>
      <div className="about-animation-bottom-floating-clouds-container">
        <img src={cloudsIcon} alt="about-animation-floating-clouds" className="about-animation-floating-clouds-image" />
      </div>
      <div className="about-animation-top-floating-clouds-container">
        <img src={cloudsIcon} alt="about-animation-floating-clouds" className="about-animation-floating-clouds-image" />
      </div>
      <div className="about-animation-bottom-floating-clouds-container">
        <img src={cloudsIcon} alt="about-animation-floating-clouds" className="about-animation-floating-clouds-image" />
      </div>
      <div className="about-animation-top-floating-clouds-container">
        <img src={cloudsIcon} alt="about-animation-floating-clouds" className="about-animation-floating-clouds-image" />
      </div>
    </div>
  )
}

export default HookahAnimation
