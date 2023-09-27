import './CustomInput.css'
import React, {useEffect, useRef, useState} from "react";
import {TextField} from "@mui/material";

interface CustomInputProps {
  placeholderText: string;
  onInputChange: (value: string) => void;
  validationFunc : (text: string) => boolean;
  isSubmitButtonClicked: boolean;
  multiline? : boolean;
  promocode ? : boolean;
  dontExpandOnError ? : boolean;
  invalidTextHint ? : string;
  autoFocus ? : boolean;
  onFocus ? : () => any;
  zipCode ? : boolean;
  disabled ? : boolean;
  initialText ? : string;
}

const CustomInput: React.FC<CustomInputProps> =
  ({ placeholderText, multiline, validationFunc, invalidTextHint,
     onInputChange, isSubmitButtonClicked , autoFocus, initialText,
     promocode, onFocus, zipCode, dontExpandOnError, disabled}) => {
    const [isActive, setIsActive] = useState(false)
    const [text, setText] = useState(initialText ? initialText : '')
    const [prevTextLen, setPrevTextLen] = useState(0)
    const [padding, setPadding] = useState(1)
    const [isActivated, setActivated] = useState(false)
    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
      setActivated(false)
    }, [])

    useEffect(() => {
      onInputChange(text)
    }, [onInputChange, text])

    useEffect(() => {
      if (zipCode) {
        if (text.length === 4 && prevTextLen !== 5
          && prevTextLen !== 4 && text.at(-1) !== '-') {
          setText(text + '-')
        }

        if (prevTextLen === 5 && text.length === 4) {
          setText(text.slice(0, -1))
        }
      }

      setPrevTextLen(text.length)
    }, [prevTextLen, text, zipCode])

    useEffect(() => {
      console.log(text)
    }, [text]);

    return(
      <div
        className="custom-input-wrapper"
        style={{
          marginTop: !validationFunc(text) && ((isActivated && !isActive && !promocode) || isSubmitButtonClicked) && !dontExpandOnError ? '12px' : 0,
          transition: "all .3s ease",
          WebkitTransition: "all .3s ease",
          MozTransition: "all .3s ease",
        }}
        onClick={() => inputRef.current.focus()}
      >
        <div
          className="invalid-text-hint"
          style={{
            opacity: !validationFunc(text) && ((isActivated && !isActive && !promocode) || isSubmitButtonClicked) ? 1 : 0,
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
            borderColor:
              !disabled ?
                !validationFunc(text) && ((isActivated && !isActive && !promocode) || isSubmitButtonClicked)
                  ? 'var(--special-error)'
                  : isActive
                    ? 'var(--text-link)'
                    : 'var(--auxiliary-smoke-gray)'
                : '#EAEBF0',
            zIndex: '9999 !important',
          }}
        >
          <TextField
            inputRef={inputRef}
            autoFocus={autoFocus}
            onBlur={() => setIsActive(false)}
            onFocus={() => {
              setIsActive(true)
              if (!isActivated) {
                setActivated(true)
              }
              if (promocode) {
                onFocus()
              }
            }}
            fullWidth={true}
            onAnimationStart={(e) => {
              if (e.animationName === 'mui-auto-fill') {
                setIsActive(true)
                setPadding(11)
              } else if (e.animationName === 'mui-auto-fill-cancel'){
                setPadding(1)
                setIsActive(false)
              }
            }}
            onAnimationEnd={() => {
              if (padding === 11) {
                inputRef.current.blur()
              }
              setPadding(1)
            }}
            onAnimationEndCapture={() => setPadding(1)}
            inputProps={{
              maxLength: multiline ? 150 : zipCode ? 8 : 30,
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
              if (zipCode) {
                let digitsOnly = e.target.value.replace(/[^\d]/g, '');

                if (digitsOnly.length > 4) {
                  digitsOnly = digitsOnly.slice(0, 4) + '-' + digitsOnly.slice(4);
                }
                setText(digitsOnly)
              } else {
                setText(e.target.value)
              }
            }}
            size="small"
            label={placeholderText}
            variant="outlined"
            margin="none"
            multiline={multiline}
            maxRows={3}
            value={initialText ? initialText : text.length > 0 || isActive ? text : undefined}
            disabled={disabled}
          />
        </div>
      </div>
    )
  }

export default CustomInput
