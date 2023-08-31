import React from "react";
import './Warning.css'
import MoreButton from "../../ui_components/more_button/MoreButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import {toggleWarning} from "../../../redux/warning_reducer/WarningReducer";

const Warning: React.FC = () => {
  const isWarningShown = useSelector((state: RootState) => state.warning.isShown);
  const dispatch = useDispatch();

  return(
    <div className={`warning-container ${isWarningShown? 'open' : ''}`}>
      <div className="warning-card">
        <span className="warning-header">
          By clicking Enter you certify that you are 18 years of age or older
        </span>
        <div className="warning-block">
          <span className="warning-text">
            Smoking harms your health and kills you!
          </span>
          <MoreButton
            onClickAction={() => dispatch(toggleWarning())}
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
