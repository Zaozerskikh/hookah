import './TobaccoPage.css'
import React, {useEffect, useState} from "react";
import SearchTag from "./search_tag/SearchTag";
import CloseButton from "../../ui_components/close_button/CloseButton";
import ShopGrid from "../../ui_components/shop_grid/ShopGrid";
import {ProductBrand, ProductInfo, Products} from "../../../content/Products";
import ZoomButton from "./zoom_button/ZoomButton";
import SearchInputField from "./search_input_field/SearchInputField";
import LoadingIcon from "../../ui_components/loading/LoadingIcon";

const TobaccoPage: React.FC = () => {
  // main content management
  const [isLoading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(Products)

  // search field
  const [searchString, setSearchString] = useState('');
  const onSearchStringChanged = (value: string) => {
    setSearchString(value);
  };

  const filterBySearchString = () => {
    setLoading(true)
    setTimeout(() => {
      const namesMatches = Products
        .filter(product => product.name.toLowerCase().includes(searchString.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));

      const brandMatches = Products
        .filter(product =>
          product.brand.toLowerCase().includes(searchString.toLowerCase()) &&
          !namesMatches.some(nm => nm.productId === product.productId))
        .sort((a, b) => a.name.localeCompare(b.name));

      const descriptionMatches = Products
        .filter(product =>
          product.description.toLowerCase().includes(searchString.toLowerCase()) &&
          ![...namesMatches, ...brandMatches].some(nm => nm.productId === product.productId))
        .sort((a, b) => a.name.localeCompare(b.name));

      setFilteredProducts([...namesMatches, ...brandMatches, ...descriptionMatches])
      setLoading(false)
    }, 500)
  }

  // tags
  const [darkSideTagActive, setDarkSideTagActive] = useState(false)
  const [musthaveTagActive, setMusthaveTagActive] = useState(false)
  const [elementSideTagActive, setElementTagActive] = useState(false)
  const [tangiersTagActive, setTangiersTagActive] = useState(false)
  const [fumariTagActive, setFumariTagActive] = useState(false)
  const [accessoriesTagActive, setAccessoriesTagActive] = useState(false)

  useEffect(() => {
    const filterByTags = () => {
      setLoading(true)
      if (!(darkSideTagActive || musthaveTagActive || elementSideTagActive || tangiersTagActive || fumariTagActive || accessoriesTagActive)) {
        setFilteredProducts(Products)
        setLoading(false)
      } else {
        const brandsToSearch = []
        if (darkSideTagActive) {
          brandsToSearch.push(ProductBrand.DARKSIDE)
        }

        if (fumariTagActive) {
          brandsToSearch.push(ProductBrand.FUMARI)
        }

        if (elementSideTagActive) {
          brandsToSearch.push(ProductBrand.ELEMENTS)
        }

        if (tangiersTagActive) {
          brandsToSearch.push(ProductBrand.TANGIERS)
        }

        if (musthaveTagActive) {
          brandsToSearch.push(ProductBrand.MUSTHAVE)
        }

        let filtered: ProductInfo[] = []
        brandsToSearch.map(brand => {
          filtered = [...filtered, ...Products.filter(p => p.brand === brand)]
        })

        setFilteredProducts(filtered)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }

    filterByTags()
  }, [
    darkSideTagActive, musthaveTagActive, elementSideTagActive,
    tangiersTagActive, fumariTagActive, accessoriesTagActive
  ])

  // window & scroll
  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div
      className="tobacco-page-wrapper"
      style={{
        minHeight: `${window.innerHeight - 500}px`
      }}
    >
      <div
        className="tags-container"
        style={{
          position: 'relative',
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
        <SearchInputField onInputChange={onSearchStringChanged} onEnterAction={filterBySearchString}/>
        <ZoomButton onClickAction={filterBySearchString}/>
      </div>
      {isLoading
        ? (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: `${window.innerHeight - 645}px`
            }}
          >
            <LoadingIcon/>
          </div>
        )
        : <ShopGrid showAllCatalogButton={false} products={filteredProducts} />}
    </div>
  )
}

export default TobaccoPage;
