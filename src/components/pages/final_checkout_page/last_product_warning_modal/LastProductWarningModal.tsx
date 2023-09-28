import React from "react";
import './LastProductWarningModal.css'
import StandardButton from "../../../ui_components/standart_button/StandartButton";
import MoreButton from "../../../ui_components/more_button/MoreButton";

interface LastProductWarningModalProps {
  isShown: boolean;
  onConfirmAction: (...args: any) => any;
  onRollbackAction: (args: any) => any;
  isMobile ? : boolean;
}

const LastProductWarningModal: React.FC<LastProductWarningModalProps> =
  ({ isShown, onConfirmAction, onRollbackAction, isMobile }) => {

  const renderDesktop = () => {
    return(
      <div className={`last-product-warning-container ${isShown ? 'open' : ''}`}>
        <div className="last-product-warning-card">
          <div
            className="last-product-warning-header"
            dangerouslySetInnerHTML={{__html: 'You are deleting the last</br>item in your cart'}}
          />
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <div className="last-product-info-text">We'll take you back to the catalog page</div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '16px'}}>
              <StandardButton
                text="Back to catalog"
                buttonStyle={{
                  borderRadius: '24px',
                  borderWidth: '2.5px',
                  borderStyle: 'solid',
                  borderColor: 'white',
                  width: '257px',
                  height: '48px',
                }}
                onClickAction={onConfirmAction}
                onHoverColor={'var(--main-white)'}
              />
              <MoreButton
                showText={true}
                text="Cancel"
                buttonStyle={{
                  width: '257px',
                  height: '48px',
                  borderRadius: '24px',
                }}
                dontShowIcon={true}
                onClickAction={onRollbackAction}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return(
      <div
        className={`lp-warning-container-mobile ${isShown ? 'open' : ''}`}
      >
        <div className="lpw-header" dangerouslySetInnerHTML={{ __html: 'You are deleting the last</br>item in your cart'}}/>
        <div className="lpw-text">We'll take you back to the catalog page</div>
        <StandardButton
          text="Back to catalog"
          buttonStyle={{
            borderRadius: '20px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'white',
            width: '100%',
            display: 'flex',
            height: '40px',
          }}
          onClickAction={onConfirmAction}
          onHoverColor={'var(--main-white)'}
          isMobile={true}
        />
        <MoreButton
          showText={true}
          text="Cancel"
          buttonStyle={{
            borderRadius: '20px',
            width: '100%',
            height: '40px',
            backgroundColor: 'white'
          }}
          dontShowIcon={true}
          onClickAction={onRollbackAction}
          isMobile={true}
        />
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

// @ts-ignore
export default LastProductWarningModal
// @ts-ignore
