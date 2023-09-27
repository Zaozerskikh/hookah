import './TobaccoPage.css'
import React, {useEffect, useState} from "react";
import BrandSearchTag from "./search_tag/brand_tag/BrandSearchTag";
import CloseButton from "../../ui_components/close_button/CloseButton";
import ShopGrid from "../../ui_components/shop_grid/ShopGrid";
import {Products} from "../../../content/Products";
import ZoomButton from "./zoom_button/ZoomButton";
import SearchInputField from "./search_input_field/SearchInputField";
import LoadingIcon from "../../ui_components/loading/LoadingIcon";
import PageNumberButton from "./page_number_button/PageNumberButton";
import MoreButton from "../../ui_components/more_button/MoreButton";
import NotFoundModal from "./not_found_modal/NotFoundModal";
import PriceAndWeightTag, {TagState} from "./search_tag/price_and_weight_tag/PriceAndWeightTag";
import TobaccoDescription from "./tobacco_description/TobaccoDescription";
import {useMediaQuery} from "react-responsive";
import {
  applyFilteringTags,
  applySearchString,
  applySortingTags,
  filterByOneBrand,
  moveSoldoutToEnd
} from "./TobaccoOperations";

export const PRODUCTS_COUNT_ON_A_PAGE = 4;
const PAGES_BEFORE_MORE_BUTTON = 5;

interface TobaccoPageProps {
  initialSortByBrand ? : string;
  tobaccoName ? : string;
  tobaccoDescription ? : string;
  headerEmoji ? : string;
}

const TobaccoPage: React.FC<TobaccoPageProps> = ({ initialSortByBrand, tobaccoDescription, tobaccoName, headerEmoji }) => {
  // main content management
  const [isLoading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(Products)
  const [currPageNumber, setCurrPageNumber] = useState(1)
  const [totalPageCount, setTotalPageCount] = useState(0)
  const [currLastPageNumberShown, setCurrLastPageNumberShown] = useState(PAGES_BEFORE_MORE_BUTTON)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  useEffect(() => {
    setTotalPageCount(Math.ceil(filteredProducts.length / PRODUCTS_COUNT_ON_A_PAGE))
  }, [filteredProducts])

  // search field
  const [searchString, setSearchString] = useState('');
  const onSearchStringChanged = (value: string) => {
    setUseTags(false)
    setSearchString(value);
  };

  useEffect(() => {
    if (!initialSortByBrand) {
      setFilteredProducts(moveSoldoutToEnd(Products))
    }
  }, [initialSortByBrand])

  const filterBySearchString = () => {
    if (searchString.length > 0) {
      setLoading(true)
      setCurrPageNumber(1)
      setCurrLastPageNumberShown(PAGES_BEFORE_MORE_BUTTON)

      setTangiersTagActive(false)
      setFumariTagActive(false)
      setMusthaveTagActive(false)
      setDarkSideTagActive(false)
      setElementTagActive(false)

      setTimeout(() => {
        setFilteredProducts(applySearchString(searchString, Products))
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
  const [priceTagState, setPriceTagState] = useState(TagState.TURNED_OFF)
  const [weightTagState, setWeightTagState] = useState(TagState.TURNED_OFF)
  const isTagsOff =
    !darkSideTagActive && !elementSideTagActive && !tangiersTagActive &&
    !fumariTagActive && !musthaveTagActive &&
    priceTagState === TagState.TURNED_OFF && weightTagState === TagState.TURNED_OFF

  useEffect(() => {
    const filterByTags = () => {
      if (useTags) {
        setSearchString('')
        setLoading(true)
        setCurrPageNumber(1)
        setCurrLastPageNumberShown(PAGES_BEFORE_MORE_BUTTON)

        setFilteredProducts(
          applyFilteringTags(
            darkSideTagActive, tangiersTagActive, elementSideTagActive,
            musthaveTagActive, fumariTagActive, Products
          )
        )
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }

    filterByTags()
  }, [
    darkSideTagActive, musthaveTagActive, elementSideTagActive,
    tangiersTagActive, fumariTagActive, useTags
  ])

  const clearAllBrandTags = () => {
    setTangiersTagActive(false)
    setFumariTagActive(false)
    setMusthaveTagActive(false)
    setDarkSideTagActive(false)
    setElementTagActive(false)
    setSearchString('')
    setWeightTagState(TagState.TURNED_OFF)
    setPriceTagState(TagState.TURNED_OFF)
    setUseTags(true)
    setFilteredProducts(Products)
  }

  // window & scroll
  useState(() => {
    window.scrollTo({ top: 0 });
  })

  useEffect(() => {
    if (weightTagState === TagState.ASCENDING || weightTagState === TagState.DESCENDING) {
      setPriceTagState(TagState.TURNED_OFF)
      setFilteredProducts(applySortingTags(weightTagState, undefined, filteredProducts))
    }
  }, [weightTagState]);

  useEffect(() => {
    if (priceTagState === TagState.ASCENDING || priceTagState === TagState.DESCENDING) {
      setWeightTagState(TagState.TURNED_OFF)
      setFilteredProducts(applySortingTags(undefined, priceTagState, filteredProducts))
    }
  }, [priceTagState]);

  useEffect(() => {
    if (initialSortByBrand) {
      setFilteredProducts(filterByOneBrand(initialSortByBrand, Products))
    }
  }, [initialSortByBrand]);

  const renderDesktop = () => {
    return(
      <div
        className="tobacco-page-wrapper"
        style={{
          minHeight: `${window.innerHeight - 500}px`,
          width: isDesktopOrLaptop ? '1264px' : '948px'
        }}
      >
        {initialSortByBrand && <TobaccoDescription name={tobaccoName} description={tobaccoDescription} headerEmoji={headerEmoji} />}
        <div
          className="tags-container"
          style={{
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', flexDirection: "row", gap: '8px', flexWrap: 'wrap', maxWidth: isDesktopOrLaptop ? undefined : '555px'}}>
            {!initialSortByBrand && (
              <div className="brand-tags-container">
                <BrandSearchTag
                  name="DarkSide"
                  isActive={darkSideTagActive}
                  onActiveChanged={() => {
                    setUseTags(true)
                    setDarkSideTagActive(!darkSideTagActive)
                  }}
                />
                <BrandSearchTag
                  name="Musthave"
                  isActive={musthaveTagActive}
                  onActiveChanged={() => {
                    setUseTags(true)
                    setMusthaveTagActive(!musthaveTagActive)
                  }}
                />
                <BrandSearchTag
                  name="Element"
                  isActive={elementSideTagActive}
                  onActiveChanged={() => {
                    setUseTags(true)
                    setElementTagActive(!elementSideTagActive)
                  }}
                />
                <BrandSearchTag
                  name="Tangiers"
                  isActive={tangiersTagActive}
                  onActiveChanged={() => {
                    setUseTags(true)
                    setTangiersTagActive(!tangiersTagActive)
                  }}
                />
                <BrandSearchTag
                  name="Fumari"
                  isActive={fumariTagActive}
                  onActiveChanged={() => {
                    setUseTags(true)
                    setFumariTagActive(!fumariTagActive)
                  }}
                />
              </div>
            )}
            <PriceAndWeightTag
              displayedName="Price"
              onClickAction={setPriceTagState}
              tagState={priceTagState}
            />
            <PriceAndWeightTag
              displayedName="Weight"
              onClickAction={setWeightTagState}
              tagState={weightTagState}
            />
            <CloseButton
              onClickAction={() => {
                setDarkSideTagActive(false)
                setMusthaveTagActive(false)
                setElementTagActive(false)
                setTangiersTagActive(false)
                setFumariTagActive(false)
                setWeightTagState(TagState.TURNED_OFF)
                setPriceTagState(TagState.TURNED_OFF)
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
                  !fumariTagActive && !musthaveTagActive && priceTagState === TagState.TURNED_OFF && weightTagState === TagState.TURNED_OFF ? 0 : 1
              }}
              iconSize={12}
              isDark={true}
              changeColorOnHover={true}
              onClickColor="#424446"
            />
          </div>
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
              <NotFoundModal  onClearFiltersAction={clearAllBrandTags}/>
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

  const renderMobile = () => {
    return(
      <div className="tobacco-page-wrapper-mobile">
        {initialSortByBrand &&
            <TobaccoDescription
                isMobile={true}
                name={tobaccoName}
                description={tobaccoDescription}
                headerEmoji={headerEmoji}
            />
        }
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%'}}>
          <div style={{ display: "flex", flexDirection:'row', gap: '4px'}}>
            <SearchInputField
              onInputChange={onSearchStringChanged}
              onEnterAction={filterBySearchString}
              inputValue={searchString}
              isMobile={true}
            />
            <ZoomButton
              onClickAction={filterBySearchString}
              isMobile={true}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: "row", gap: '4px', flexWrap: 'wrap', position: 'relative'}}>
            <CloseButton
              onClickAction={() => {
                setDarkSideTagActive(false)
                setMusthaveTagActive(false)
                setElementTagActive(false)
                setTangiersTagActive(false)
                setFumariTagActive(false)
                setWeightTagState(TagState.TURNED_OFF)
                setPriceTagState(TagState.TURNED_OFF)
              }}
              buttonStyle={{
                position: 'absolute',
                width: isTagsOff ? '0px' : '27px',
                height: '27px',
                borderRadius: '16px',
                padding: isTagsOff ? '0px' : '6px',
                top: '0px',
                left: '0px',
                marginLeft: isTagsOff ? '0px' : '4x',
                opacity: isTagsOff ? 0 : 1,
              }}
              iconSize={12}
              isDark={true}
              changeColorOnHover={true}
              onClickColor="#424446"
            />
            {!initialSortByBrand && (
              <div style={{
                marginLeft: isTagsOff ? 0 : '32px',
                transition: "all .5s ease",
                WebkitTransition: "all .5s ease",
                MozTransition: "all .5s ease",
              }}>
                <BrandSearchTag
                  name="DarkSide"
                  isActive={darkSideTagActive}
                  onActiveChanged={() => {
                    setUseTags(true)
                    setDarkSideTagActive(!darkSideTagActive)
                  }}
                  isMobile={true}
                />
              </div>
            )}
            {!initialSortByBrand && <BrandSearchTag
                name="Musthave"
                isActive={musthaveTagActive}
                onActiveChanged={() => {
                  setUseTags(true)
                  setMusthaveTagActive(!musthaveTagActive)
                }}
                isMobile={true}
            />}
            {!initialSortByBrand && <BrandSearchTag
                name="Element"
                isActive={elementSideTagActive}
                onActiveChanged={() => {
                  setUseTags(true)
                  setElementTagActive(!elementSideTagActive)
                }}
                isMobile={true}
            />}
            {!initialSortByBrand && <BrandSearchTag
                name="Tangiers"
                isActive={tangiersTagActive}
                onActiveChanged={() => {
                  setUseTags(true)
                  setTangiersTagActive(!tangiersTagActive)
                }}
                isMobile={true}
            />}
            {!initialSortByBrand && <BrandSearchTag
                name="Fumari"
                isActive={fumariTagActive}
                onActiveChanged={() => {
                  setUseTags(true)
                  setFumariTagActive(!fumariTagActive)
                }}
                isMobile={true}
            />}
            <div style={{
              marginLeft: isTagsOff || !initialSortByBrand ? 0 : '32px',
              transition: "all .5s ease",
              WebkitTransition: "all .5s ease",
              MozTransition: "all .5s ease",
            }}>
              <PriceAndWeightTag
                displayedName="Price"
                onClickAction={setPriceTagState}
                tagState={priceTagState}
                isMobile={true}
              />
            </div>
            <PriceAndWeightTag
              displayedName="Weight"
              onClickAction={setWeightTagState}
              tagState={weightTagState}
              isMobile={true}
            />
          </div>
        </div>
        <div style={{ paddingTop: '32px'}}>
          <ShopGrid
            showAllCatalogButton={false}
            products={filteredProducts.slice(
              (currPageNumber - 1) * PRODUCTS_COUNT_ON_A_PAGE,
              currPageNumber * PRODUCTS_COUNT_ON_A_PAGE
            )}
            isMobile={true}
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
                      opacity: totalPageCount > 1 ? 1 : 0
                      // opacity: currPageNumber > 1 ? 1 : 0
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

                      if (currLastPageNumberShown > PAGES_BEFORE_MORE_BUTTON || currPageNumber > 1) {
                        window.scrollTo({ top: 0 });
                      }
                    }}
                    isMobile={true}
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
                          onClickAction={() => {
                            setCurrPageNumber(num)
                            if (currPageNumber !== num) {
                              window.scrollTo({ top: 0 });
                            }
                          }}
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
                      opacity: totalPageCount > 1 ? 1 : 0,
                      // opacity: currPageNumber < totalPageCount ? 1 : 0,
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

                      if (currPageNumber < totalPageCount || currLastPageNumberShown < totalPageCount) {
                        window.scrollTo({ top: 0 });
                      }
                    }}
                    isMobile={true}
                  />
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

export default TobaccoPage;
