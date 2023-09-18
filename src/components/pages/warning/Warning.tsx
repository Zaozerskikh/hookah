import React, {useEffect} from "react";
import './Warning.css'
import MoreButton from "../../ui_components/more_button/MoreButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import {setIsWarningShown} from "../../../redux/warning_reducer/WarningReducer";
import {useLocation} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";
import {useMediaQuery} from "react-responsive";

const Warning: React.FC = () => {
  const location = useLocation();
  const isWarningShown = useSelector((state: RootState) => state.warning.isShown);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  useEffect(() => {
    if (!Object.values(RoutePaths).includes(location.pathname)) {
      dispatch(setIsWarningShown(false))
    }
  }, [dispatch, location])

  const renderMobile = () => {
    return(
      <>
        <div
          className={`warning-container-mobile ${isWarningShown && Object.values(RoutePaths).includes(location.pathname) ? 'open' : ''}`}
          style={{ width: window.innerWidth}}
        />
        <div
          className={`warning-card-mobile ${isWarningShown && Object.values(RoutePaths).includes(location.pathname) ? 'open' : ''}`}
        >
          <div className="warning-header-mobile" dangerouslySetInnerHTML={{ __html: 'By clicking Enter</br>you certify that you are</br> 18 years of age or older'}}/>
          <div className="warning-text-mobile">
            Smoking harms your health and kills you!
          </div>
          <MoreButton
            showText={true}
            text="Enter"
            buttonStyle={{
              width: '100%',
              borderRadius: '20px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent:'center'
            }}
            onClickAction={() => dispatch(setIsWarningShown(false))}
            textStyle={{
              fontFamily: 'Monsterrat-600, serif',
              fontSize: '16px',
              lineHeight: '23.04px',
              textAlign: 'center',
              marginLeft: '30px'
            }}
            iconStyle={{
              right: '30px',
            }}
            isMobile={true}
          />
        </div>
      </>
    )
  }

  const renderDesktop = () => {
    return(
      <div
        className={`warning-container ${isWarningShown && Object.values(RoutePaths).includes(location.pathname) ? 'open' : ''}`}
        style={{ width: window.innerWidth}}
      >
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
                width: '100%',
                height: '48px',
                borderRadius: '24px',
                padding: '12px 20px 12px 20px',
              }}
              iconStyle={{
                right: '20px',
                top: '12.5px',
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

//@ts-ignore
export default Warning;
//@ts-ignore
