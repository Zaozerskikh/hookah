import React, {useState} from "react";

interface SearchInputFieldProps {
  onInputChange: (value: string) => void;
}
const SearchInputField: React.FC<SearchInputFieldProps> = ({ onInputChange}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onInputChange(newValue);
  };

  return(
    <input
      type="text"
      placeholder="Find your flavour"
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
      value={value}
      onChange={handleInputChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  )
}

export default SearchInputField;
