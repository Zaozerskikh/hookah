import './TobaccoPage.css'
import React, {useState} from "react";
import SearchTag from "./search_tag/SearchTag";
import CloseButton from "../../ui_components/close_button/CloseButton";

const TobaccoPage: React.FC = () => {
  const [darkSideTagActive, setDarkSideTagActive] = useState(false)
  const [musthaveTagActive, setMusthaveTagActive] = useState(false)
  const [elementSideTagActive, setElementTagActive] = useState(false)
  const [tangiersTagActive, setTangiersTagActive] = useState(false)
  const [fumariTagActive, setFumariTagActive] = useState(false)

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div className="tobacco-page-wrapper">
      <div className="tags-container">
        <SearchTag
          name="DarkSide"
          isActive={darkSideTagActive}
          onActiveChanged={() => setDarkSideTagActive(!darkSideTagActive)}
        />
        <SearchTag
          name="Musthave"
          isActive={musthaveTagActive}
          onActiveChanged={() => setMusthaveTagActive(!musthaveTagActive)}
        />
        <SearchTag
          name="Element"
          isActive={elementSideTagActive}
          onActiveChanged={() => setElementTagActive(!elementSideTagActive)}
        />
        <SearchTag
          name="Tangiers"
          isActive={tangiersTagActive}
          onActiveChanged={() => setTangiersTagActive(!tangiersTagActive)}
        />
        <SearchTag
          name="Fumari"
          isActive={fumariTagActive}
          onActiveChanged={() => setFumariTagActive(!fumariTagActive)}
        />
        <CloseButton
          onClickAction={() => {
            setDarkSideTagActive(false)
            setMusthaveTagActive(false)
            setElementTagActive(false)
            setTangiersTagActive(false)
            setFumariTagActive(false)
          }}
          buttonStyle={{
            position: 'relative',
            width: '32px',
            height: '32px',
            borderRadius: '16px',
            padding: '6px',
            top: '0px',
            left: '0px',
            marginLeft: '16px',
            opacity: !darkSideTagActive && !elementSideTagActive && !tangiersTagActive && !fumariTagActive && !musthaveTagActive ? 0 : 1
          }}
          iconSize={12}
          isDark={true}
        />
      </div>
    </div>
  )
}

export default TobaccoPage;
