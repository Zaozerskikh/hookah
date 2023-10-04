import './ProductViewMobile.css'
import React, {useCallback, useEffect, useState} from "react";
import {ProductInfo} from "../../../../content/Products";
import CounterButton from "../../counter_button/CounterButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";
import {decrementProductCount, incrementProductCount} from "../../../../redux/cart_reducer/CartReducer";
import {RoutePaths} from "../../../../routes/RoutePaths";
import MoreButton from "../../more_button/MoreButton";
import {useNavigate} from "react-router-dom";
import ShareButton from "../share_button/ShareButton";
import {FRONTEND_URL} from "../../../../env/env";
import {setBottomHintState} from "../../../../redux/bottom_hint_reducer/BottomHintReducer";
import ProductTagsRow from "../../product_tags/ProductTagsRow";
import {buildTobaccoLink} from "../../../../models/TobaccoOperations";
import BottomSlider from "../../bottom_slider/BottomSlider";

interface ProductViewMobileProps extends ProductInfo {
  onClick: (...args: any) => void;
  isOpened: boolean;
  isSoldout: boolean;
  isLast: boolean;
  isDiscount: boolean;
}
const ProductViewMobile: React.FC<ProductViewMobileProps> = ({ onClick, productId, stock, name, tags, weight,
     description, fullDescription, image,
     price, discountPrice, line, brand, isOpened , isDiscount, isLast, isSoldout})=> {
  const purchasedCount = useSelector((state: RootState) => state.cart[productId]) || 0;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [zIdx, setZIdx] = useState(-9999)

  useEffect(() => {
    if (isOpened) {
      setZIdx(9999)
    } else {
      setTimeout(() => {
        setZIdx(-9999)
      }, 500)
    }
  }, [isOpened])

  const buildProductLink = useCallback((): string => {
    return `${FRONTEND_URL}/product/${productId}-${brand.toLowerCase().replace(' ', '-')}-${name.toLowerCase().replace(' ', '-')}-${line.toLowerCase().replace(' ', '-')}-${weight.toString()}g`;
  }, [name, productId, brand, line, weight]);

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add('hidden');
    } else {
      setTimeout(() => {
        document.body.classList.remove('hidden');
      }, 300)
    }
  }, [isOpened]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: '24px',
          left: '16px',
          zIndex: zIdx * 1000000,
          opacity: isOpened ? 1 : 0,
          transition: "all .2s ease",
          WebkitTransition: "all .2s ease",
          MozTransition: "all .2s ease",
        }}
      >
        <ShareButton
          productLink={buildProductLink()}
          isMobile={true}
          onClickAdditionalAction={() => dispatch(setBottomHintState(true, 'The link has been copied!</br>You can share it with your friends 😎'))}
        />
      </div>
      <BottomSlider
        isOpened={isOpened}
        onCloseAction={onClick}
        maxRelativeHeight={0.75}
        showCloseButton={true}
      >
        <div className="product-view-mobile-wrapper" style={{ width: '100%', display: "flex", flexDirection: 'column', alignItems: 'center', gap: '16px'}}>
          <h2
            className="product-header"
            onClick={() => navigate(buildTobaccoLink(productId, brand, name, line, weight))}
          >
            {`${brand} - ${name}`}
          </h2>
          <div className="bottom-grad"/>
          <div className="bottom-tricky-div"/>
          <ProductTagsRow
            tags={tags}
            isSoldout={stock === 0}
            isLast={stock === 1}
            isDiscount={isDiscount}
            isMobile={true}
            optionalWrapperStyle={{
              gap: '6px',
              flexWrap: 'wrap',
              width: '100%'
            }}
          />
          <div className="detailed-view-description-container-mobile">
            <div>
              <span className="detailed-view-brand-line-info-mobile">Brand: </span>
              <span className="detailed-view-brand-line-mobile">{brand}</span>
            </div>
            <div>
              <span className="detailed-view-brand-line-info-mobile">Line: </span>
              <span className="detailed-view-brand-line-mobile">{line}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', position: 'relative'}}>
              <span className="detailed-view-brand-line-info-mobile-base">Price per pack: </span>
              {isDiscount && (
                <span
                  className="detailed-view-brand-line-info-mobile"
                  style={{ textDecoration: 'line-through'}}
                >
                    {price}€
                  </span>
              )}
              <span className="detailed-view-brand-line-mobile">
                  {discountPrice ? discountPrice : price}€
                </span>
              {isSoldout && <div className="top-grad"/>}
            </div>
          </div>
          {(!isSoldout || purchasedCount !== 0) && (
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
                    dispatch(incrementProductCount(productId))
                  }
                  navigate(RoutePaths.FINAL_CHECKOUT)
                }}
              />
              <CounterButton
                counterState={purchasedCount}
                disabledPlus={isSoldout}
                isDark={true}
                isMobile={true}
                wrapperStyle={{ minWidth: '89px', width: undefined}}
                onPlusClickAction={() => dispatch(incrementProductCount(productId))}
                onMinusClickAction={() => dispatch(decrementProductCount(productId))}
              />
              <div className="top-grad"/>
            </div>
          )}
          <div
            className={"full-prod-descr-mob"}
            style={{overflow: 'auto'}}
          >
            {fullDescription}
          </div>
        </div>
      </BottomSlider>
      <div className={"product-view-mobile-wrapper-img"} style={{zIndex: isOpened ? 99999 : -99999}}>
        <div
          className={isOpened ? 'img-wrpr-opened' : 'img-wrpr'}
          style={{
            position: "relative",
            width: '100%',
            height: '100%',
          }}
        >
          <img
            style={{
              position: "absolute",
              width: '100%',
              height: 'auto',
            }}
            src={image} alt='p'
          />
        </div>
      </div>
    </>
  )
}

//@ts-ignore
export default ProductViewMobile
//@ts-ignore
