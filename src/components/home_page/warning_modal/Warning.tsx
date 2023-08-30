import React, {useState} from "react";
import './Warning.css'
import MoreButton from "../../ui_components/more_button/MoreButton";

const Warning: React.FC = () => {
  const [closed, setClosed] = useState(false)

  return(
    <div className={`warning-container ${!closed ? 'open' : ''}`}>
      <div className="warning-card">
        <span className="warning-header">
          By clicking Enter you certify that you are 18 years of age or older
        </span>
        <div className="warning-block">
          <span className="warning-text">
            Smoking harms your health and kills you!
          </span>
          <MoreButton
            onClickAction={() => setClosed(true)}
            showText={true}
            text="Enter"
            buttonStyle={{
              width: '138px',
              height: '48px',
              borderRadius: '24px',
              padding: '12px 20px 12px 20px'
            }}
            iconStyle={{
              right: '-1px',
              top: '12.5px'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Warning;
