import './DetailedProductPage.css'
import React, {useEffect, useMemo, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";
import LoadingIcon from "../../ui_components/loading/LoadingIcon";
import {ProductInfo} from "../../../content/Products";
import ProductInfoOnCard from "../../ui_components/product_card/product_info/ProductInfoOnCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import MoreButton from "../../ui_components/more_button/MoreButton";
import {useMediaQuery} from "react-responsive";
import ShopGrid from "../../ui_components/shop_grid/ShopGrid";
import {getSuggestions, isDiscount, isLast, isSoldout} from "../../../models/TobaccoOperations";
import ProductTagsRow from "../../ui_components/product_tags/ProductTagsRow";
import {decrementProductCount, incrementProductCount} from "../../../redux/cart_reducer/CartReducer";
import CounterButton from "../../ui_components/counter_button/CounterButton";

const DetailedProductPage: React.FC = () => {
  const Products = useSelector((state: RootState) => state.productArray)
  const navigate = useNavigate()
  const { productInfo } = useParams<{ productInfo: string }>();
  const [isLoading, setLoading] = useState(true)
  const [currProduct, setCurrProduct] = useState<ProductInfo>(undefined)
  const purchasedCount = useSelector((state: RootState) => state.cart[productInfo.split('-')[0]]) || 0;
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch()

  const soldout = useMemo(() => {
    if (currProduct) {
      return isSoldout(currProduct.stock, cartState, currProduct.productId)
    }
    else {
      return false
    }
  }, [cartState, currProduct])

  const last = useMemo(() => {
    if (currProduct) {
      return isLast(currProduct.stock, cartState, currProduct.productId)
    }
    else {
      return false
    }
  }, [cartState, currProduct])

  const discount = useMemo(() => {
    if (currProduct) {
      return isDiscount(currProduct.price, currProduct.discountPrice)
    }
    else {
      return false
    }
  }, [currProduct])

  useEffect(() => {
    const productId = productInfo.split('-')[0]

    if (!productId) {
      navigate(RoutePaths.NOT_FOUND)
    }

    const product = Products.find(p => p.productId === productId)
    if (product) {
      setLoading(true)
      setTimeout(() => {
        setCurrProduct(product)
        window.scrollTo({ top: 0 });
      }, 1000)
    } else {
      navigate(RoutePaths.NOT_FOUND)
    }

  }, [navigate, productInfo]);

  useEffect(() => {
    if (currProduct) {
      setLoading(false)
    }
  }, [currProduct]);

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('hidden');
    }, 600)
  }, []);

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  const suggestions = useMemo(() => {
    return getSuggestions(4, Products, productInfo.split('-')[0]);
  }, [productInfo]);

  const renderDesktop = () => {
    return(
      <div
        style={{
          minHeight: `${Math.max(window.innerHeight - 692, 300)}px`,
          width: isDesktopOrLaptop ? '1264px' : '948px',
          display: "flex",
          backgroundColor: 'var(--main-black)',
          justifyContent: 'center',
          marginTop: '32px',
          marginBottom: '160px'
        }}
      >
        {isLoading ? (
          <LoadingIcon/>
        ) : (
          <div
            style={{
              width: isDesktopOrLaptop ? '1264px' : '948px',
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: '64px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <div
                  style={{ width: isDesktopOrLaptop ? '782px' : 'calc(782px - 216px)', display: 'flex', flexDirection: 'column', gap: '16px'}}
                >
                  <ProductInfoOnCard
                    productId={currProduct.productId}
                    name={currProduct.name}
                    brand={currProduct.brand}
                    line={currProduct.line}
                    price={currProduct.price}
                    discountPrice={currProduct.discountPrice}
                    stock={currProduct.stock}
                    purchasedCount={purchasedCount}
                    weight={currProduct.weight}
                    showOptionalTags={true}
                    optionalTags={currProduct.tags}
                    showShareButtonOnCard={true}
                    isDiscount={discount}
                    isSoldout={soldout}
                    isLast={last}
                  />
                  <div
                    style={{
                      color: 'var(--auxiliary-light-gray)',
                      fontFamily: 'Monsterrat-400, serif',
                      fontSize: '16px',
                      lineHeight: '144%'
                    }}
                  >
                    {currProduct.fullDescription}
                  </div>
                </div>
                <img
                  src={currProduct.image}
                  style={{
                    width: isDesktopOrLaptop ? '384px' : '284px',
                    height:  isDesktopOrLaptop ? '476px' : '347px',
                    marginBottom: '20px'
                  }}
                  alt="tobacco-img"
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: "100%",
                  alignItems:'center',
                  justifyContent:'center',
                  gap: '40px'
                }}
              >
                <ShopGrid
                  showAllCatalogButton={false}
                  products={isDesktopOrLaptop || suggestions?.length < 4 ? suggestions : suggestions.slice(0, Math.max(suggestions.length - 1, 3))}
                  invertedColors={true}
                  openProductDetailedPagesInsteadOfCards={true}
                />
                <MoreButton
                  showText={true}
                  text="We have a lot more"
                  buttonStyle={{
                    width: '298px',
                    height: '48px',
                    display:'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    gap:'0px',
                    borderRadius: '24px',
                    paddingLeft:'20px'
                  }}
                  textStyle={{
                    fontFamily: 'Monsterrat-600, serif',
                    fontSize: '22px',
                    lineHeight: '144%',
                  }}
                  iconStyle={{
                    marginLeft: '-10px'
                  }}
                  onHoverColor="#EAEBF0"
                  onClickAction={() => navigate(RoutePaths.TOBACCO)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderMobile = () => {
    return(
      <div className="full-tobacco-page-mob" style={{ justifyContent: isLoading ? 'center' : undefined, minHeight: window.innerHeight - 100}}>
        {isLoading ? (
          <LoadingIcon isMobile={true}/>
        ) : (
          <>
            <div className="head">{currProduct?.brand} - {currProduct?.name}</div>
            <ProductTagsRow
              tags={currProduct?.tags}
              isSoldout={currProduct?.stock === 0}
              isLast={currProduct?.stock === 1}
              isDiscount={discount}
              isMobile={true}
            />
            <img src={currProduct?.image} alt="p" className="prod-img"/>
            <div className="info-wrapper">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '4px'}}>
                <div className="info-h">Brand: </div>
                <div className="info-c">{currProduct?.brand}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '4px'}}>
                <div className="info-h">Line: </div>
                <div className="info-c">{currProduct?.line}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '8px'}}>
                <div className="info-h">{`Price per pack (${currProduct?.weight}G): `}</div>
                {discount && (
                  <div
                    className="info-h"
                    style={{ textDecoration: 'line-through'}}
                  >
                    {currProduct?.price}€
                  </div>
                )}
                <div className="info-c">
                  {discount ? currProduct?.discountPrice : currProduct?.price}€
                </div>
              </div>
            </div>
            <div style={{ marginTop: '8px', marginBottom: '8px'}}>
              {(!soldout || purchasedCount !== 0) && (
                <div style={{paddingBottom: '4px', display: 'flex', width: '100%', flexDirection: 'row', gap: '8px', position: 'relative'}}>
                  <MoreButton
                    showText={true}
                    isMobile={true}
                    dontShowIcon={true}
                    text="Buy now"
                    buttonStyle={{
                      width: '100%',
                      borderRadius: '20px',
                      height: '40px'
                    }}
                    textStyle={{
                      fontFamily: 'Monsterrat-600, serif',
                      fontSize: '16px',
                      lineHeight: '144%',
                      textAlign: 'center'
                    }}
                    onClickAction={() => {
                      if (purchasedCount === 0) {
                        dispatch(incrementProductCount(currProduct?.productId))
                      }
                      navigate(RoutePaths.FINAL_CHECKOUT)
                    }}
                  />
                  <CounterButton
                    counterState={purchasedCount}
                    disabledPlus={soldout}
                    isDark={true}
                    isMobile={true}
                    wrapperStyle={{ minWidth: '89px', width: undefined}}
                    onPlusClickAction={() => dispatch(incrementProductCount(currProduct?.productId))}
                    onMinusClickAction={() => dispatch(decrementProductCount(currProduct?.productId))}
                  />
                </div>
              )}
            </div>
            <div className="descr">
              {currProduct?.fullDescription}
            </div>
            <ShopGrid
              showAllCatalogButton={false}
              isMobile={true}
              invertedColors={true}
              products={suggestions?.length > 1 ? suggestions.slice(0, 2) : suggestions.slice(0, suggestions.length)}
            />
            <MoreButton
              showText={true}
              isMobile={true}
              text="We have a lot more"
              buttonStyle={{
                width: '100%',
                height: '40px',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                gap:'0px',
                borderRadius: '20px',
                paddingLeft: '20px',
                marginTop: '24px',
                marginBottom: '128px'
              }}
              textStyle={{
                fontFamily: 'Monsterrat-600, serif',
                fontSize: '16px',
                lineHeight: '144%',
                marginLeft: '10px'
              }}
              iconStyle={{
                marginRight: '10px'
              }}
              onHoverColor="#EAEBF0"
              onClickAction={() => navigate(RoutePaths.TOBACCO)}
            />
          </>
        )}
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

export default DetailedProductPage
