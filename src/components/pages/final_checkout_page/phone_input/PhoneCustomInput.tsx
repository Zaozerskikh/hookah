import 'react-phone-number-input/style.css'
import React, {useEffect, useState} from "react";
import PhoneInput from 'react-phone-number-input'
import './PhoneCustomInput.css'
import flags from 'react-phone-number-input/flags'

interface PhoneCustomInputProps {
  onChange: (number: string) => void;
  validationFunc : (text: string) => boolean;
  isCheckoutButtonClicked: boolean;
  invalidPhoneHint: string;
}

const PhoneCustomInput: React.FC<PhoneCustomInputProps> = ({ onChange, invalidPhoneHint, isCheckoutButtonClicked , validationFunc}) => {
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
        position: 'relative',
        marginTop: !(validationFunc(value)) && ((isActivated && !isActive) || isCheckoutButtonClicked) ? '12px' : 0,
        transition: "all .3s ease",
        WebkitTransition: "all .3s ease",
        MozTransition: "all .3s ease",
      }}
    >
      <div
        className="invalid-phone-hint"
        style={{
          opacity: !(validationFunc(value)) && ((isActivated && !isActive) || isCheckoutButtonClicked) ? 1 : 0,
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
          borderColor: !(validationFunc(value)) && ((isActivated && !isActive) || isCheckoutButtonClicked) ? '#FF4572' : '#EAEBF0'
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
