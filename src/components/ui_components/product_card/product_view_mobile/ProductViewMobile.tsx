import './ProductViewMobile.css'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import type { ReactDOMAttributes } from '@use-gesture/react/dist/declarations/src/types';
import React, {useCallback, useEffect, useRef, useState} from "react";
import {ProductInfo, ProductTag} from "../../../../content/Products";
import CounterButton from "../../counter_button/CounterButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";
import {decrementProductCount, incrementProductCount} from "../../../../redux/cart_reducer/CartReducer";
import {RoutePaths} from "../../../../routes/RoutePaths";
import MoreButton from "../../more_button/MoreButton";
import {useNavigate} from "react-router-dom";
import CloseButton from "../../close_button/CloseButton";
import ShareButton from "../share_button/ShareButton";
import {FRONTEND_URL} from "../../../../env/env";

interface ProductViewMobileProps extends ProductInfo {
  onClick: (...args: any) => void;
  isOpened: boolean;
}
const ProductViewMobile: React.FC<ProductViewMobileProps> = ({ onClick, productId, name, tags, weight,
     description, fullDescription, stock, image,
     price, discountPrice, line, brand, isOpened })=> {
  const purchasedCount = useSelector((state: RootState) => state.cart[productId]) || 0;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [{ x, y }, api] = useSpring(() => ({
    x: 0, y: 0,
    config: {
      tension: 200,
      friction: 20,
      duration: 300,
    },
  }))
  const [zIdx, setZIdx] = useState(-9999)

  useEffect(() => {
    if (isOpened) {
      setZIdx(9999)
    } else {
      setTimeout(() => {
        setZIdx(-9999)
      }, 500)
    }
  }, [api, isOpened])

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (my > 9.5) {
      onClick()
    }
  }) as unknown as (...args: any[]) => ReactDOMAttributes;

  const buildProductLink = useCallback((): string => {
    return `${FRONTEND_URL}/product/${productId}-${brand.toLowerCase().replace(' ', '-')}-${name.toLowerCase().replace(' ', '-')}-${line.toLowerCase().replace(' ', '-')}-${weight.toString()}g`;
  }, [name, productId, brand, line, weight]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [distanceFromBottom, setDistanceFromBottom] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;

      if (container) {
        const distance = container.scrollHeight - container.scrollTop - container.clientHeight;
        console.log(distance);
        setDistanceFromBottom(distance);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className={"product-view-mobile-wrapper"} style={{zIndex: zIdx}}>
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
        <CloseButton
          changeColorOnHover={false}
          onClickColor={'white'}
          iconSize={17}
          onClickAction={() => onClick()}
          isMobile={true}
          buttonStyle={{
            top: '24px',
            right: '16px',
            width: '42px',
            height: '42px'
          }}
        />
        <div style={{ position: "absolute", top: '24px', left: '16px'}}>
          <ShareButton
            productLink={buildProductLink()}
            isMobile={true}
            onClickAdditionalAction={() => console.log('f')}/>
        </div>
      </div>
      <div className={`product-view-mobile-product-info-wrapper ${isOpened ? 'open' : ''}`} style={{maxHeight: window.innerHeight * 0.7}}>
        <animated.div {...bind()} style={{ x, y }} >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              width: window.innerWidth - 32,
              backgroundColor: 'black',
              paddingTop: '16px',
              zIndex: '9999',
              marginBottom: '-3px',
              borderRadius: '22px 22px 0px 0px',
              boxShadow: '1px 1px 30px 0px rgba(0, 0, 0, 0.50)',
            }}
          >
            <svg width="56" height="5" viewBox="0 0 56 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="5" rx="2.5" fill="#909398"/>
            </svg>
            <h2 className="product-header">{`${brand} - ${name}`}</h2>
          </div>
        </animated.div>
        <div style={{ width: '100%', display: "flex", flexDirection: 'column', alignItems: 'center', gap: '16px'}}>
          <div className="bottom-grad"/>
          <div className="bottom-tricky-div"/>
          {(stock === 0 || stock === 1 || (tags && tags.includes(ProductTag.NEW)) || (discountPrice && discountPrice !== price)) && (
            <div
              style={{
                display: "flex",
                flexDirection:'row',
                flexWrap:'wrap',
                gap: '6px',
                width: '100%',
                paddingTop: '17px',
              }}
            >
              {stock === 0 && <span className="soldout-detailed-mobile">Soldout</span>}
              {stock === 1 && <span className="tag-detailed-mobile" style={{ backgroundColor: '#FF8A00'}}>Last title</span>}
              {discountPrice && discountPrice !== price && <span className="tag-detailed-mobile" style={{ backgroundColor: '#22CE5D'}}>Sale</span>}
              {tags && tags.includes(ProductTag.NEW) && <span className="tag-detailed-mobile" style={{ backgroundColor: '#BC4FFF'}}>New</span>}
            </div>
          )}
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
                {discountPrice && discountPrice !== price && (
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
              {stock === 0 && <div className="top-grad"/>}
            </div>
          </div>
          {stock !== 0 && (
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
            ref={containerRef}
            className={distanceFromBottom === 0 ? "full-prod-descr-mob-f" : stock === 0 ? 'full-prod-descr-mob-l' : "full-prod-descr-mob"}
            style={{overflow: 'auto'}}
          >
            {fullDescription}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductViewMobile
