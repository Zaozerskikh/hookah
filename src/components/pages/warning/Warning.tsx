import React, {useEffect} from "react";
import './Warning.css'
import MoreButton from "../../ui_components/more_button/MoreButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import {setIsWarningShown} from "../../../redux/warning_reducer/WarningReducer";
import {useLocation} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";

const Warning: React.FC = () => {
  const location = useLocation();
  const isWarningShown = useSelector((state: RootState) => state.warning.isShown);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.values(RoutePaths).includes(location.pathname)) {
      dispatch(setIsWarningShown(false))
    }
  }, [dispatch, location])

  return(
    <div className={`warning-container ${isWarningShown && Object.values(RoutePaths).includes(location.pathname) ? 'open' : ''}`}>
      <div className="warning-card">
        <span className="warning-header">
          By clicking Enter you certify that you are 18 years of age or older
        </span>
        <div className="warning-block">
          <span className="warning-text">
            Smoking harms your health and kills you!
          </span>
          <MoreButton
            onClickAction={() => dispatch(setIsWarningShown(false))}
            showText={true}
            text="Enter"
            buttonStyle={{
              width: '530px',
              height: '48px',
              borderRadius: '24px',
              padding: '12px 20px 12px 20px'
            }}
            iconStyle={{
              right: '20px',
              top: '12.5px'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Warning;
