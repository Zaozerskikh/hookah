import React, {useState} from "react";

interface SearchInputFieldProps {
  onInputChange: (value: string) => void;
  onEnterAction : () => void;
  inputValue: string;
}
const SearchInputField: React.FC<SearchInputFieldProps> = ({ inputValue, onInputChange, onEnterAction }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  return(
    <input
      type="text"
      placeholder="Find your flavour"
      onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('ddd')
        if (e.key === 'Enter') {
          onEnterAction();
        }
      }}
      style={{
        overflow: 'hidden',
        position: "absolute",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 16px',
        right: '45px',
        color: isFocused ? 'black' : '#909398',
        width: '137px',
        marginTop: isFocused ? '1px': undefined,
        height: isFocused ? '21px' : '23px',
        fontFamily: 'Monsterrat-500, serif',
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '144%',
        backgroundColor: '#EAEBF0',
        border: 'none',
        borderRadius: '16px 0px 0px 16px',
      }}
      value={inputValue}
      onChange={handleInputChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  )
}

export default SearchInputField;
