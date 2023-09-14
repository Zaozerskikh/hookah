import './DetailedProductPage.css'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";
import LoadingIcon from "../../ui_components/loading/LoadingIcon";
import {ProductInfo, Products} from "../../../content/Products";
import ProductInfoOnCard from "../../ui_components/product_card/product_info/ProductInfoOnCard";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";
import MoreButton from "../../ui_components/more_button/MoreButton";

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
      setTimeout(() => {
        setCurrProduct(product)
      }, 2000)
    } else {
      navigate(RoutePaths.NOT_FOUND)
    }

  }, [navigate, productInfo]);

  useEffect(() => {
    if (currProduct) {
      setLoading(false)
    }
  }, [currProduct]);

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div
      style={{
        minHeight: `${Math.max(window.innerHeight - 692, 300)}px`,
        width: '1264px',
        display: "flex",
        backgroundColor: 'black',
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
            width: '1264px',
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: '40px'
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
                style={{ width: '782px', display: 'flex', flexDirection: 'column', gap: '16px'}}
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
                />
                <div
                  style={{
                    color: '#EAEBF0',
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
                  width: '384px',
                  height: '476px'
                }}
                alt="tobacco-img"
              />
            </div>
            <div
              style={{
                display: 'flex',
                width: "100%",
                alignItems:'center',
                justifyContent:'center'
              }}
            >
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
