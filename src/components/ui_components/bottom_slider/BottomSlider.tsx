import React, {useEffect, useState} from "react";
import './BottomSlider.css'
import Sheet from 'react-modal-sheet';
import CloseButton from "../close_button/CloseButton";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";


interface BottomSliderProps extends React.PropsWithChildren {
  isOpened: boolean;
  onCloseAction: (...args: any) => any;
  maxRelativeHeight ? : number;
  marginTop ? : number;
  showShareButton ? : boolean;
  showCloseButton ? : boolean;
}

const BottomSlider: React.FC<BottomSliderProps> = ({ isOpened, showCloseButton, marginTop, onCloseAction, children, maxRelativeHeight}) => {
  const [closeBtnZidx, setCloseBtnZidx] = useState(10000000)
  const isCheckoutOpened = useSelector((state: RootState) => state.productDetailedView.isVisible)

  useEffect(() => {
    if (!isOpened || !showCloseButton) {
      setTimeout(() => {
        setCloseBtnZidx(-10000000000)
      }, 200)
    } else {
      setCloseBtnZidx(1000000000000)
    }
  }, [isOpened, showCloseButton]);

  useEffect(() => {
    const styleElement = document.createElement('style');
    const cssRule = `
      .react-modal-sheet-backdrop {
        background-color: ${isCheckoutOpened ? 'rgba(0, 0, 0, 0.7) !important' : 'transparent !important'};
        backdrop-filter: ${isCheckoutOpened ? 'blur(2px) opacity(1) !important' : 'none !important'};
      }
    `;

    styleElement.appendChild(document.createTextNode(cssRule));
    document.head.appendChild(styleElement);
  }, [isCheckoutOpened]);

  return (
    <>
      {isCheckoutOpened && <div style={{ position: 'fixed', width: window.innerWidth, height: window.innerHeight * 100, display: 'flex', zIndex: '99999', backgroundColor: 'transparent'}}/>}
      <CloseButton
        changeColorOnHover={false}
        onClickColor={'white'}
        iconSize={17}
        onClickAction={onCloseAction}
        isMobile={true}
        buttonStyle={{
          position: 'fixed',
          top: '24px',
          right: '16px',
          width: '42px',
          height: '42px',
          zIndex: closeBtnZidx,
          transition: "all .2s ease",
          WebkitTransition: "all .2s ease",
          MozTransition: "all .2s ease",
          opacity: isOpened && showCloseButton ? 1 : 0,
        }}
      />
      <Sheet
        isOpen={isOpened}
        onClose={onCloseAction}
        snapPoints={[maxRelativeHeight ? window.innerHeight * maxRelativeHeight : window.innerHeight - marginTop, 0]}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            {children}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}

export default BottomSlider;
