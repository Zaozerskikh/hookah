import './FinalCheckoutPage.css'
import React, {useEffect, useState} from "react";
import CustomInput from "./input_field/CustomInput";
import PhoneCustomInput from "./phone_input/PhoneCustomInput";
import StandardButton from "../../ui_components/standart_button/StandartButton";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const FinalCheckoutPage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [isCheckoutButtonClicked, setCheckoutButtonClicked] = useState(false)

  useEffect(() => {
    setCheckoutButtonClicked(false)
  }, [])

  return(
    <div
      style={{
        minHeight: '800px'
      }}
    >
      <div className="input-box">
        <CustomInput
          placeholderText="Your name"
          multiline={false}
          invalidTextHint="Please enter your real name"
          validationFunc={(e) => e.length > 1}
          onInputChange={(text) => setName(text)}
          isCheckoutButtonClicked={isCheckoutButtonClicked}
        />
        <CustomInput
          placeholderText="Your email"
          multiline={false}
          invalidTextHint="Incorrect e-mail. Please use form: email@domain.com"
          validationFunc={(e) => emailRegex.test(e)}
          onInputChange={(text) => setEmail(text)}
          isCheckoutButtonClicked={isCheckoutButtonClicked}
        />
        <CustomInput
          placeholderText="Your city"
          multiline={false}
          invalidTextHint="Please enter your real city"
          validationFunc={(e) => e.length > 2}
          onInputChange={(text) => setCity(text)}
          isCheckoutButtonClicked={isCheckoutButtonClicked}
        />
        <CustomInput
          placeholderText="Your address"
          multiline={true}
          invalidTextHint="Please enter not blank address"
          validationFunc={(e) => e.length > 1}
          onInputChange={(text) => setAddress(text)}
          isCheckoutButtonClicked={isCheckoutButtonClicked}
        />
        <CustomInput
          placeholderText="Zip-code"
          multiline={false}
          invalidTextHint="Incorrect zip-code. Please use form: 1234-5678"
          validationFunc={(e) => e.length > 1}
          onInputChange={(text) => setZipCode(text)}
          number={true}
          isCheckoutButtonClicked={isCheckoutButtonClicked}
        />
        <PhoneCustomInput
          onChange={(e) => setPhone(e)}
          invalidPhoneHint="Incorrect number"
          isCheckoutButtonClicked={isCheckoutButtonClicked}
        />
        <CustomInput
          placeholderText="Order comment (if desired)"
          multiline={true}
          validationFunc={() => true}
          onInputChange={(text) => setComment(text)}
          isCheckoutButtonClicked={isCheckoutButtonClicked}
        />
        <StandardButton
          text="Checkout"
          buttonStyle={{
            width: '598px',
            height: '60px',
            borderRadius: '12px'
          }}
          onClickAction={() => setCheckoutButtonClicked(true)}
        />
      </div>
    </div>
  )
}

export default FinalCheckoutPage

