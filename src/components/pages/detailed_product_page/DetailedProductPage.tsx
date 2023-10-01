import './DetailedProductPage.css'
import React, {useEffect, useMemo, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";
import LoadingIcon from "../../ui_components/loading/LoadingIcon";
import {ProductInfo, Products} from "../../../content/Products";
import ProductInfoOnCard from "../../ui_components/product_card/product_info/ProductInfoOnCard";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import MoreButton from "../../ui_components/more_button/MoreButton";
import {useMediaQuery} from "react-responsive";
import ShopGrid from "../../ui_components/shop_grid/ShopGrid";
import {getSuggestions} from "../tobacco_page/TobaccoOperations";

const DetailedProductPage: React.FC = () => {
  const navigate = useNavigate()
  const { productInfo } = useParams<{ productInfo: string }>();
  const [isLoading, setLoading] = useState(true)
  const [currProduct, setCurrProduct] = useState<ProductInfo>(undefined)
  const purchasedCount = useSelector((state: RootState) => state.cart[productInfo.split('-')[0]]) || 0;

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

  const suggestions = useMemo(() => {
    return getSuggestions(4, Products, productInfo.split('-')[0]);
  }, [productInfo]);

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

export default DetailedProductPage
