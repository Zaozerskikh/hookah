import './LoadingIcon.css'
import React from "react";

import cloudsIcon from "./../../../assets/icons/decorations/floating_loading_filled_clouds.png";

const LoadingIcon: React.FC = () => {
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

export default LoadingIcon
