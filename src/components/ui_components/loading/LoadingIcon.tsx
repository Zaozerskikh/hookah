import './LoadingIcon.css'
import React from "react";

import cloudsIcon from "./../../../assets/icons/decorations/floating_loading_filled_clouds.png";

interface LoaderProps {
  isMobile ? : boolean
}

const LoadingIcon: React.FC<LoaderProps> = ({ isMobile}) => {
  const renderDesktop = () => {
    return(
      <div
        className="loading-container"
        style={{
          position: 'relative',
          overflow: 'hidden',
          alignSelf: 'center',
          width: '200px',
          height: '200px',
          borderRadius: '100px',
          backgroundColor: '#EAEBF0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="loading-top-floating-clouds-container">
          <img src={cloudsIcon} alt="loading-floating-clouds" className="loading-floating-clouds-image" />
        </div>
        <div className="loading-bottom-floating-clouds-container">
          <img src={cloudsIcon} alt="loading-floating-clouds" className="loading-floating-clouds-image" />
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return(
      <div
        className="loading-container-mobile"
        style={{
          position: 'relative',
          overflow: 'hidden',
          alignSelf: 'center',
          width: '100px',
          height: '100px',
          borderRadius: '50px',
          backgroundColor: '#EAEBF0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          justifySelf: 'center'
        }}
      >
        <div className="loading-top-floating-clouds-container-mobile">
          <img src={cloudsIcon} alt="loading-floating-clouds" className="loading-floating-clouds-image-mobile" />
        </div>
        <div className="loading-bottom-floating-clouds-container-mobile">
          <img src={cloudsIcon} alt="loading-floating-clouds" className="loading-floating-clouds-image-mobile" />
        </div>
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

export default LoadingIcon
