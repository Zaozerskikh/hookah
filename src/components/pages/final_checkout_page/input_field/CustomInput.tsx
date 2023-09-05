import './CustomInput.css'
import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";

interface CustomInputProps {
  placeholderText: string
  onInputChange: (value: string) => void;
  validationFunc : (text: string) => boolean;
  isCheckoutButtonClicked: boolean;
  multiline? : boolean;
  number ? : boolean;
  invalidTextHint ? : string;
}

const CustomInput: React.FC<CustomInputProps> =
  ({ placeholderText, multiline, validationFunc, invalidTextHint, onInputChange, number, isCheckoutButtonClicked }) => {
  const [isActive, setIsActive] = useState(false)
  const [text, setText] = useState('')
  const [padding, setPadding] = useState(0)
  const [isActivated, setActivated] = useState(false)

  useEffect(() => {
    setActivated(false)
  }, [])

  useEffect(() => {
    onInputChange(text)
  }, [onInputChange, text])

  useEffect(() => {
    console.log(isActivated)
  }, [isActivated])
  return(
    <div className="custom-input-wrapper">
      <div
        className="invalid-text-hint"
        style={{
          opacity: !validationFunc(text) && ((isActivated && !isActive) || isCheckoutButtonClicked) ? 1 : 0,
          transition: "all .1s ease",
          WebkitTransition: "all .1s ease",
          MozTransition: "all .1s ease",
        }}
      >
        {invalidTextHint}
      </div>
      <div
        className="custom-input-field-wrapper"
        style={{
          height: !multiline ? '45px' : '96px',
          borderColor: !validationFunc(text) && ((isActivated && !isActive) || isCheckoutButtonClicked)
            ? '#FF4572'
            : isActive
              ? '#005CCD'
              : '#EAEBF0',
          zIndex: '9999 !important'
        }}
      >
        <TextField
          autoFocus={true}
          onBlur={() => setIsActive(false)}
          onFocus={() => {
            setIsActive(true)
            if (!isActivated) {
              setActivated(true)
            }
          }}
          fullWidth={true}
          onAnimationStart={(e) => {
            if (e.animationName === 'mui-auto-fill') {
              setPadding(11)
            } else {}
          }}
          onAnimationEnd={() => setPadding(0)}
          inputProps={{
            maxLength: !multiline ? 30 : 150,
            style:
              {
                fontSize: 16,
                fontFamily: 'Monsterrat-600, serif',
                lineHeight: '23.04px',
              }
          }}
          InputLabelProps={{
            style:
              {
                fontSize: isActive || text !== '' ? 14 : 16,
                fontFamily: 'Monsterrat-500, serif',
                lineHeight: '23.04px',
                color: '#909398'
              }
          }}
          sx={{
            marginTop: isActive || text !== '' ? '11px !important' : `${padding}px !important`,
            fontFamily: 'Monsterrat-600, serif',
            lineHeight: '23.04px',
            marginBottom: '0px !important',
            paddingTop: '0px !important',
            transition: "all .1s ease",
            WebkitTransition: "all .1s ease",
            MozTransition: "all .1s ease",
          }}
          onChange={(e) => {
            setText(e.target.value)
          }}
          size="small"
          label={placeholderText}
          variant="outlined"
          margin="none"
          multiline={multiline}
          maxRows={3}
          type={number ? 'number' : undefined}
        />
      </div>
    </div>
  )
}

export default CustomInput
