import 'react-phone-number-input/style.css'
import React, {useEffect, useState} from "react";
import PhoneInput from 'react-phone-number-input'
import './PhoneCustomInput.css'
import flags from 'react-phone-number-input/flags'

interface PhoneCustomInputProps {
  onChange: (number: string) => void;
  isCheckoutButtonClicked: boolean;
  invalidPhoneHint: string;
}

const PhoneCustomInput: React.FC<PhoneCustomInputProps> = ({ onChange, invalidPhoneHint, isCheckoutButtonClicked }) => {
  const [value, setValue] = useState('+351 99-999-9999')
  const [isActive, setActive] = useState(false)
  const [isActivated, setActivated] = useState(false)

  useEffect(() => {
    setActivated(false)
  }, [])

  useEffect(() => {
    onChange(value)
  }, [onChange, value])

  useEffect(() => {
    if (value === '+351 99-999-9999' && isActive === true) {
      setValue(undefined)
    }
  }, [isActivated, isActive, value])

  useEffect(() => {
    const styleElement = document.createElement('style');
    const cssRule = `
      .PhoneInputInput {
        margin-left: 10px;
        border: none !important;
        color: ${isActivated ? 'black' : '#909398'};
        font-family: Monsterrat-500, serif;
        font-size: 16px;
        font-style: normal;
        line-height: 144%;
        outline: none !important;
        width: 520px;
      }
    `;

    styleElement.appendChild(document.createTextNode(cssRule));
    document.head.appendChild(styleElement);

    return () => {
      styleElement.parentNode?.removeChild(styleElement);
    };
  }, [isActivated]);

  return(
    <div
      style={{
        position: 'relative'
      }}
    >
      <div
        className="invalid-phone-hint"
        style={{
          opacity: !(value && value.length > 9 && value.length < 16) && ((isActivated && !isActive) || isCheckoutButtonClicked) ? 1 : 0,
          transition: "all .1s ease",
          WebkitTransition: "all .1s ease",
          MozTransition: "all .1s ease",
        }}
      >
        {invalidPhoneHint}
      </div>
      <div
        className="phone-number-wrapper"
        onFocus={() => {
          setActive(true)
          if (!isActivated) {
            setActivated(true)
          }
        }}
        onBlur={() => setActive(false)}
        style={{
          borderColor: !(value && value.length > 9 && value.length < 16) && ((isActivated && !isActive) || isCheckoutButtonClicked) ? '#FF4572' : '#EAEBF0'
        }}
      >
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          flags={flags}
          defaultCountry="PT"
          placeholder="+351 99-999-9999"
          value={value}
          onChange={setValue}
          withCountryCallingCode={true}
          smartCaret={true}
          useNationalFormatForDefaultCountryValue={true}
        />
      </div>
    </div>
  )
}

export default PhoneCustomInput
