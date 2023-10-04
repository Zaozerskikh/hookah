import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import {setBottomHintState} from "../../../redux/bottom_hint_reducer/BottomHintReducer";
import {useMediaQuery} from "react-responsive";
const BottomHint: React.FC = () => {
  const bottomHintState = useSelector((state: RootState) => state.bottomHint)
  const dispatch = useDispatch()
  const [startAnimation, setStartAnimation] = useState(false)

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  useEffect(() => {
    if (bottomHintState.isShown) {
      setTimeout(() => {
        if (bottomHintState.isShown) {
          dispatch(setBottomHintState(false, bottomHintState.message))
        }
      }, 4200)
    }
  },  [bottomHintState, dispatch]);

  useEffect(() => {
    if (bottomHintState.isShown) {
      if (!startAnimation) {
        setTimeout(() => {
          if (bottomHintState.isShown) {
            setStartAnimation(true)
          }
        }, 200)
      }
    }
  }, [bottomHintState.isShown, startAnimation]);

  useEffect(() => {
    if (!bottomHintState.isShown) {
      setStartAnimation(false)
    }
  }, [bottomHintState.isShown]);

  return(
    <div
      style={{
        position: 'fixed',
        bottom: !isMobile ? bottomHintState.isShown && bottomHintState.message ? 0 :'-55px' : undefined,
        top: isMobile ? bottomHintState.isShown && bottomHintState.message ? 0 : '-55px' : undefined,
        width: isMobile ? '100%' : '594px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '10000000',
        transition: "all .2s ease",
        WebkitTransition: "all .2s ease",
        MozTransition: "all .2s ease",
      }}
    >
      <div
        style={{
          backgroundColor: '#38D36D',
          borderRadius: isMobile ? '0 0 19px 19px' : '32px 32px 0px 0px',
          padding: isMobile ? '8px 16px 8px 16px' : '16px 32px 16px 32px',
          fontFamily: 'Monsterrat-600, serif',
          lineHeight: isMobile ? '17.28px' : '23.04px',
          fontSize: isMobile ? '12px' : '16px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: "hidden",
          position: 'relative',
          width: '100%'
        }}
      >
        <div
          style={{
            position:'absolute',
            top: '0px',
            right: '0px',
            height: '100%',
            width: !startAnimation ? '0%' : '100%',
            backgroundColor: '#22CE5D',
            transition: startAnimation ? "all 4s ease-in-out" : undefined,
            WebkitTransition: startAnimation ? "all 4s ease-in-out" : undefined,
            MozTransition: startAnimation ? "all 4s ease-in-out" : undefined,
            zIndex: '10000',
          }}
        />
        <span style={{ zIndex: '10001', textAlign: 'center'}} dangerouslySetInnerHTML={{__html: bottomHintState.message}}/>
      </div>
    </div>
  )
}

export default BottomHint
