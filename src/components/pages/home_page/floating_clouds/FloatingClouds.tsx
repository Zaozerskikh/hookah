import React from 'react';
import './FloatingClouds.css';
import floatingClouds from '../../../../assets/icons/decorations/floating_clouds_test_2.png'

const FloatingClouds: React.FC = () => {
  return (
    <div className="floating-clouds-wrapper">
      <div className="top-floating-clouds-container">
        <img src={floatingClouds} alt="floating-clouds" className="floating-clouds-image" />
      </div>
      <div className="bottom-floating-clouds-container">
        <img src={floatingClouds} alt="floating-clouds" className="floating-clouds-image" />
      </div>
    </div>
  );
};

export default FloatingClouds;
