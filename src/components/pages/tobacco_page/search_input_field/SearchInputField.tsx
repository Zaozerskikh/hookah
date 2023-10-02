import React, {useEffect, useState} from "react";
import CloseButton from "../../../ui_components/close_button/CloseButton";

interface SearchInputFieldProps {
  onInputChange: (value: string) => void;
  onEnterAction : () => void;
  inputValue: string;
  isMobile ? : boolean;
}
const SearchInputField: React.FC<SearchInputFieldProps> = ({ inputValue, onInputChange, onEnterAction, isMobile}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  useEffect(() => {
    console.log(isFocused)
  }, [isFocused]);

  return(
    <>
      {!(!inputValue || (inputValue && inputValue.length === 0)) && (<CloseButton
        isMobile={isMobile}
        changeColorOnHover={false}
        onClickColor='#909398'
        iconSize={10}
        onClickAction={() => onInputChange('')}
        buttonStyle={{
          backgroundColor: 'transparent',
          zIndex: 999,
          position: "absolute",
          right: '52px',
          top: isMobile ? '2px' : '3px',
          width: '24px',
          height: '24px',
        }}
      />)}
      <input
        type="text"
        placeholder="Find your flavour"
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            onEnterAction();
          }
        }}
        style={{
          overflow: 'hidden',
          position: isMobile ? undefined : "absolute",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px 16px',
          right: '45px',
          color: isFocused ? 'black' : '#909398',
          width: isMobile ? 'calc(100% - 84px)' : '137px',
          height: !isMobile ? '20px' : '16px',
          fontFamily: 'Monsterrat-500, serif',
          fontSize: isMobile ? '12px' : '16px',
          fontStyle: 'normal',
          lineHeight: '144%',
          backgroundColor: '#EAEBF0',
          borderColor: isFocused ? 'black' : '#EAEBF0',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderBottomWidth: '2px',
          borderBottomColor: isFocused ? 'black' : '#EAEBF0',
          borderBottomStyle: 'solid',
          borderRightStyle: 'solid',
          borderTopStyle: 'solid',
          borderLeftStyle: 'solid',
          outline: 'none',
          boxShadow: 'none',
          borderRadius: '16px 0px 0px 16px',
        }}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </>
  )
}

export default SearchInputField;
