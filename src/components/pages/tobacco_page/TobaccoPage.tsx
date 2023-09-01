import './TobaccoPage.css'
import React, {useEffect, useState} from "react";
import SearchTag from "./search_tag/SearchTag";
import CloseButton from "../../ui_components/close_button/CloseButton";
import ShopGrid from "../../ui_components/shop_grid/ShopGrid";
import {Products} from "../../../content/Products";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import ZoomButton from "./zoom_button/ZoomButton";
import SearchInputField from "./search_input_field/SearchInputField";

const TobaccoPage: React.FC = () => {
  // search field
  const [searchString, setSearchString] = useState('');
  const onSearchStringChanged = (value: string) => {
    setSearchString(value);
  };

  const filterBySearchString = () => {
    console.log('filter by search string: ' + searchString)
  }

  // tags
  const [darkSideTagActive, setDarkSideTagActive] = useState(false)
  const [musthaveTagActive, setMusthaveTagActive] = useState(false)
  const [elementSideTagActive, setElementTagActive] = useState(false)
  const [tangiersTagActive, setTangiersTagActive] = useState(false)
  const [fumariTagActive, setFumariTagActive] = useState(false)
  const [accessoriesTagActive, setAccessoriesTagActive] = useState(false)

  const filterByTags = () => {
    console.log('filter by tags')
  }

  useEffect(() => {
    filterByTags()
  }, [
    darkSideTagActive, musthaveTagActive, elementSideTagActive,
    tangiersTagActive, fumariTagActive, accessoriesTagActive
  ])

  // scroll
  useState(() => {
    window.scrollTo({ top: 0 });
  })

  // window
  const gridState = useSelector((state: RootState) => state.grid)

  return(
    <div
      className="tobacco-page-wrapper"
      style={{
        minHeight: `${window.innerHeight - 580}px`
      }}
    >
      <div
        className="tags-container"
        style={{
          position: 'relative',
          margin: `0px ${(gridState.windowWidth - gridState.gridWidth) / 2}px`
        }}
      >
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
        <SearchTag
          name="Accessories"
          isActive={accessoriesTagActive}
          onActiveChanged={() => setAccessoriesTagActive(!accessoriesTagActive)}
        />
        <CloseButton
          onClickAction={() => {
            setDarkSideTagActive(false)
            setMusthaveTagActive(false)
            setElementTagActive(false)
            setTangiersTagActive(false)
            setFumariTagActive(false)
            setAccessoriesTagActive(false)
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
            opacity:
              !darkSideTagActive && !elementSideTagActive && !tangiersTagActive &&
              !fumariTagActive && !musthaveTagActive && !accessoriesTagActive ? 0 : 1
          }}
          iconSize={12}
          isDark={true}
        />
        <SearchInputField onInputChange={onSearchStringChanged}/>
        <ZoomButton onClickAction={filterBySearchString}/>
      </div>

      <ShopGrid showAllCatalogButton={false} products={Products} />
    </div>
  )
}

export default TobaccoPage;
