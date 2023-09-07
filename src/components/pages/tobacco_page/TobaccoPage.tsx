import './TobaccoPage.css'
import React, {useEffect, useState} from "react";
import SearchTag from "./search_tag/SearchTag";
import CloseButton from "../../ui_components/close_button/CloseButton";
import ShopGrid from "../../ui_components/shop_grid/ShopGrid";
import {ProductBrand, ProductInfo, Products} from "../../../content/Products";
import ZoomButton from "./zoom_button/ZoomButton";
import SearchInputField from "./search_input_field/SearchInputField";
import LoadingIcon from "../../ui_components/loading/LoadingIcon";
import PageNumberButton from "./page_number_button/PageNumberButton";
import MoreButton from "../../ui_components/more_button/MoreButton";
import NotFoundModal from "./not_found_modal/NotFoundModal";

export const PRODUCTS_COUNT_ON_A_PAGE = 4;
const PAGES_BEFORE_MORE_BUTTON = 5;

const TobaccoPage: React.FC = () => {
  // main content management
  const [isLoading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(Products)
  const [currPageNumber, setCurrPageNumber] = useState(1)
  const [totalPageCount, setTotalPageCount] = useState(0)
  const [currLastPageNumberShown, setCurrLastPageNumberShown] = useState(PAGES_BEFORE_MORE_BUTTON)

  useEffect(() => {
    setTotalPageCount(Math.ceil(filteredProducts.length / PRODUCTS_COUNT_ON_A_PAGE))
  }, [filteredProducts])

  // search field
  const [searchString, setSearchString] = useState('');
  const onSearchStringChanged = (value: string) => {
    setUseTags(false)
    setSearchString(value);
  };

  const filterBySearchString = () => {
    if (searchString.length > 0) {
      setLoading(true)
      setCurrPageNumber(1)
      setCurrLastPageNumberShown(PAGES_BEFORE_MORE_BUTTON)

      setTangiersTagActive(false)
      setAccessoriesTagActive(false)
      setFumariTagActive(false)
      setMusthaveTagActive(false)
      setDarkSideTagActive(false)
      setElementTagActive(false)

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
  }

  // tags
  const [useTags, setUseTags] = useState(false)
  const [darkSideTagActive, setDarkSideTagActive] = useState(false)
  const [musthaveTagActive, setMusthaveTagActive] = useState(false)
  const [elementSideTagActive, setElementTagActive] = useState(false)
  const [tangiersTagActive, setTangiersTagActive] = useState(false)
  const [fumariTagActive, setFumariTagActive] = useState(false)
  const [accessoriesTagActive, setAccessoriesTagActive] = useState(false)

  useEffect(() => {
    const filterByTags = () => {
      if (useTags) {
        setSearchString('')
        setLoading(true)
        setCurrPageNumber(1)
        setCurrLastPageNumberShown(PAGES_BEFORE_MORE_BUTTON)

        if (!(darkSideTagActive || musthaveTagActive || elementSideTagActive ||
          tangiersTagActive || fumariTagActive || accessoriesTagActive)) {
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
    }

    filterByTags()
  }, [
    darkSideTagActive, musthaveTagActive, elementSideTagActive,
    tangiersTagActive, fumariTagActive, accessoriesTagActive, useTags
  ])

  const clearAll = () => {
    setTangiersTagActive(false)
    setAccessoriesTagActive(false)
    setFumariTagActive(false)
    setMusthaveTagActive(false)
    setDarkSideTagActive(false)
    setElementTagActive(false)
    setSearchString('')
    setUseTags(true)
    setFilteredProducts(Products)
  }

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
          onActiveChanged={() => {
            setUseTags(true)
            setDarkSideTagActive(!darkSideTagActive)
          }}
        />
        <SearchTag
          name="Musthave"
          isActive={musthaveTagActive}
          onActiveChanged={() => {
            setUseTags(true)
            setMusthaveTagActive(!musthaveTagActive)
          }}
        />
        <SearchTag
          name="Element"
          isActive={elementSideTagActive}
          onActiveChanged={() => {
            setUseTags(true)
            setElementTagActive(!elementSideTagActive)
          }}
        />
        <SearchTag
          name="Tangiers"
          isActive={tangiersTagActive}
          onActiveChanged={() => {
            setUseTags(true)
            setTangiersTagActive(!tangiersTagActive)
          }}
        />
        <SearchTag
          name="Fumari"
          isActive={fumariTagActive}
          onActiveChanged={() => {
            setUseTags(true)
            setFumariTagActive(!fumariTagActive)
          }}
        />
        <SearchTag
          name="Accessories"
          isActive={accessoriesTagActive}
          onActiveChanged={() => {
            setUseTags(true)
            setAccessoriesTagActive(!accessoriesTagActive)
          }}
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
          changeColorOnHover={true}
          onClickColor="#424446"
        />
        <SearchInputField
          onInputChange={onSearchStringChanged}
          onEnterAction={filterBySearchString}
          inputValue={searchString}
        />
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
        : (
          filteredProducts.length === 0 ? (
            <NotFoundModal  onClearFiltersAction={clearAll}/>
          ) : (
            <div>
              <ShopGrid
                showAllCatalogButton={false}
                products={filteredProducts.slice(
                  (currPageNumber - 1) * PRODUCTS_COUNT_ON_A_PAGE,
                  currPageNumber * PRODUCTS_COUNT_ON_A_PAGE
                )}
              />
              {
                <div
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '64px',
                    marginBottom: '128px'
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '16px',
                      width: '320px',
                    }}
                  >
                    <div
                      style={{
                        transform: 'rotate(180deg)',
                        position: "absolute",
                        left: 0,
                        display: 'flex',
                        marginLeft: totalPageCount > 4 ? undefined : `calc(112px - ${totalPageCount / 2 * 48}px + 8px)`,
                        zIndex: '10',
                      }}
                    >
                      <MoreButton
                        showText={false}
                        buttonStyle={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '16px',
                          paddingRight: '0px',
                          paddingLeft: '-5px',
                          opacity: currPageNumber > 1 ? 1 : 0
                        }}
                        iconStyle={{
                          right: '4px'
                        }}
                        iconShift={3}
                        onClickAction={() => {
                          if (currLastPageNumberShown > PAGES_BEFORE_MORE_BUTTON) {
                            setCurrLastPageNumberShown(currLastPageNumberShown - 1)
                          }

                          if (currPageNumber > 1) {
                            setCurrPageNumber(currPageNumber - 1)
                          }
                        }}
                      />
                    </div>
                    <div
                      className="static-number-window"
                      style={{
                        width: '224px',
                        height: '32px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        className="dynamic-number-row"
                        style={{
                          display: "flex",
                          flexDirection: 'row',
                          gap: '16px',
                          width: '224px',
                          flexWrap: 'nowrap',
                          flexShrink: '0',
                          alignItems: 'center',
                          justifyContent: currLastPageNumberShown === PAGES_BEFORE_MORE_BUTTON && currLastPageNumberShown > totalPageCount ? 'center' : 'flex-start',
                          position: "absolute",
                          left: 48 * (-currLastPageNumberShown) + PAGES_BEFORE_MORE_BUTTON * 48,
                          transition: "all .5s ease",
                          WebkitTransition: "all .5s ease",
                          MozTransition: "all .5s ease",
                        }}
                      >
                        {
                          totalPageCount > 1 && Array.from(
                            { length: totalPageCount },
                            (_, i) => i + 1
                          ).map((num, idx) => (
                            <PageNumberButton
                              pageNumber={num}
                              isActive={currPageNumber === num}
                              onClickAction={() => setCurrPageNumber(num)}
                              key={idx}
                            />
                          ))
                        }
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                      }}
                    >
                      <MoreButton
                        showText={false}
                        buttonStyle={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '16px',
                          paddingRight: '0px',
                          paddingLeft: '-5px',
                          marginRight: totalPageCount > 4 ? undefined : `calc(112px - ${totalPageCount / 2 * 48}px + 8px)`,
                          opacity: currPageNumber < totalPageCount ? 1 : 0,
                          zIndex: '10',
                        }}
                        iconStyle={{
                          right: '4px'
                        }}
                        iconShift={3}
                        onClickAction={() => {
                          if (currLastPageNumberShown < totalPageCount) {
                            setCurrLastPageNumberShown(currLastPageNumberShown + 1)
                          }

                          if (currPageNumber < totalPageCount) {
                            setCurrPageNumber(currPageNumber + 1)
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              }
            </div>
          )
        )
      }
    </div>
  )
}

export default TobaccoPage;
