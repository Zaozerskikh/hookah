import log from "../../../../assets/icons/MOBILE/menu_panel/log.png";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";
import {setIsBurgerShown} from "../../../../redux/burger_button_reducer/BurgerButtonReducer";

const BurgerButton: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.burger.isOpened)
  const dispatch = useDispatch()

  return(
    <div
      style={{
        width: '56px',
        height: '42px',
        position: 'relative',
      }}
      onClick={() => dispatch(setIsBurgerShown(!isOpened))}
    >
      <img alt="borger" src={log} style={{ width: '56px', height: '3px', position: "absolute", left:'0', top: '15px'}}/>
      <img
        alt="borger"
        src={log}
        style={{
          width: '42px',
          height: '3px',
          position: "absolute",
          left: isOpened ? '0' : '14px',
          top: '25px',
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
        }}
      />
    </div>
  )
}

export default BurgerButton
