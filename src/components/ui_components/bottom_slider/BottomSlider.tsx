import React, {useEffect, useState} from "react";
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "@use-gesture/react";
import {ReactDOMAttributes} from "@use-gesture/react/dist/declarations/src/types";
import './BottomSlider.css'


interface BottomSliderProps {
  isOpened: boolean;
  onCloseAction: (...args: any) => any;
  threshold: number;
  maxRelativeHeight: number;
  gestureZoneChild ? : React.ReactNode
  mainZoneChild ? : React.ReactNode
}

const BottomSlider: React.FC<BottomSliderProps> = ({ isOpened, onCloseAction, threshold, gestureZoneChild, mainZoneChild, maxRelativeHeight}) => {
  const [{ x, y }, api] = useSpring(() => ({
    x: 0, y: 0,
    config: {
      tension: 201,
      friction: 20,
      duration: 300,
    },
  }))
  const [zIdx, setZIdx] = useState(-9999)

  useEffect(() => {
    if (isOpened) {
      setZIdx(9999)
    } else {
      setTimeout(() => {
        setZIdx(-9999)
      }, 200)
    }
  }, [api, isOpened])

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (my > 5) {
      document.body.classList.add('hidden');
      onCloseAction()
    }
  }) as unknown as (...args: any[]) => ReactDOMAttributes;

  useEffect(() => {
    if (!isOpened) {
      setTimeout(() => {
        document.body.classList.remove('hidden');
      }, 300)
    }
  }, [isOpened]);

  return(
    <div
      className={"bottom-slider-wrapper"}
      style={{
        zIndex: zIdx,
        backdropFilter: isOpened ? 'blur(2px) opacity(1)' : 'blur(2px) opacity(0)',
        backgroundColor: isOpened ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
      }}
    >
      <div className={`bottom-slider-info-wrapper ${isOpened ? 'open' : ''}`} style={{maxHeight: window.innerHeight - 128}}>
        <animated.div {...bind()} style={{ x, y }} >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              width: window.innerWidth - 32,
              backgroundColor: 'black',
              paddingTop: '16px',
              zIndex: '9999',
              marginBottom: '-3px',
              borderRadius: '22px 22px 0px 0px',
              boxShadow: '1px 1px 30px 0px rgba(0, 0, 0, 0.50)',
            }}
          >
            <svg width="56" height="5" viewBox="0 0 56 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="5" rx="2.5" fill="#909398"/>
            </svg>
            {gestureZoneChild}
          </div>
        </animated.div>
        {mainZoneChild}
      </div>
    </div>
  )
}

export default BottomSlider;
