import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import {setBottomHintState} from "../../../redux/bottom_hint_reducer/BottomHintReducer";
const BottomHint: React.FC = () => {
  const [isHovered, setHovered] = useState(false)
  const bottomHintState = useSelector((state: RootState) => state.bottomHint)
  const dispatch = useDispatch()

  useEffect(() => {
    if (bottomHintState.isShown) {
      setTimeout(() => {
        if (bottomHintState.isShown) {
          dispatch(setBottomHintState(false, bottomHintState.message))
        }
      }, 4000)
    }
  },  [bottomHintState, dispatch]);

  return(
    <div
      style={{
        position: 'fixed',
        bottom: bottomHintState.isShown && bottomHintState.message ? 0 :'-55px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '55px',
        zIndex: '9999',
        transition: "all .2s ease",
        WebkitTransition: "all .2s ease",
        MozTransition: "all .2s ease",
        cursor: isHovered ? 'pointer' : undefined
      }}
      onClick={() => dispatch(setBottomHintState(false, bottomHintState.message))}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
      <div
        style={{
          width: '530px',
          backgroundColor: '#22CE5D',
          borderRadius: '32px 32px 0px 0px',
          padding: '16px 32px 16px 32px',
          fontFamily: 'Monsterrat-600, serif',
          lineHeight: '23.04px',
          fontSize: '16px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {bottomHintState.message}
      </div>
    </div>
  )
}

export default BottomHint
