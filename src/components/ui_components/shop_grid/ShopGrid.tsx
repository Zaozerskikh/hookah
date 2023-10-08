import React from "react";
import './ShopGrid.css'
import ProductCard from "../product_card/ProductCard";
import {RoutePaths} from "../../../routes/RoutePaths";
import {Link} from "react-router-dom";
import StandardButton from "../standart_button/StandartButton";
import {ProductInfo} from "../../../content/Products";
import {useMediaQuery} from "react-responsive";
import LoadingIcon from "../loading/LoadingIcon";

interface ShopGridProps {
  showAllCatalogButton: boolean;
  products: ProductInfo[],
  isMobile ? : boolean;
  invertedColors ? : boolean,
  openProductDetailedPagesInsteadOfCards ? : boolean
}

const ShopGrid: React.FC<ShopGridProps> = ({showAllCatalogButton, products, isMobile, invertedColors, openProductDetailedPagesInsteadOfCards}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  const renderMobile = () => {
    return(
      <div
        className="shop-container-mobile"
        style={{
          display: "flex",
          flexDirection: 'column',
          gap: '52px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-32px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            rowGap: '40px',
            columnGap: '10px'
          }}
        >
          {
            products.map((product, idx) => (
              <ProductCard
                key={idx}
                productId={product.productId}
                name={product.name}
                brand={product.brand}
                line={product.line}
                weight={product.weight}
                price={product.price}
                discountPrice={product.discountPrice}
                description={product.description}
                image={product.image}
                fullDescription={product.fullDescription}
                stock={product.stock}
                tags={product.tags}
                openFullPage={openProductDetailedPagesInsteadOfCards}
                invertedColors={invertedColors}
              />
            ))
          }
        </div>
        {showAllCatalogButton &&
            <Link to={RoutePaths.TOBACCO} className="tobacco-link-mobile" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                <StandardButton
                  isMobile={true}
                  buttonStyle={{
                    width: '262px',
                    height: '48px',
                  }}
                  text="Open full catalog"
                />
            </Link>
        }
      </div>
    )
  }

  const renderDesktop = () => {
    return(
      <div
        className="shop-container"
        style={{
          gap:' 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: isDesktopOrLaptop ? '1264px' : '948px'
        }}
      >
        <div
          style={{
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            gap: '48px 16px',
            flexWrap: 'wrap',
            minWidth: isDesktopOrLaptop ? '1264px' : '948px'
          }}
        >
          {
            products.map((product, idx) => (
              <ProductCard
                key={idx}
                productId={product.productId}
                name={product.name}
                brand={product.brand}
                line={product.line}
                weight={product.weight}
                price={product.price}
                discountPrice={product.discountPrice}
                description={product.description}
                image={product.image}
                fullDescription={product.fullDescription}
                stock={product.stock}
                tags={product.tags}
                openFullPage={openProductDetailedPagesInsteadOfCards}
                invertedColors={invertedColors}
              />
            ))
          }
        </div>
        {showAllCatalogButton &&
            <Link to={RoutePaths.TOBACCO} className="tobacco-link" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                <StandardButton
                    buttonStyle={{
                      width: '323px',
                      height: '60px',
                    }}
                    text="Open full catalog"
                />
            </Link>
        }
      </div>
    )
  }

  return(products ? (isMobile ? renderMobile() : renderDesktop()) : <LoadingIcon isMobile={isMobile}/>)
}

export default ShopGrid;
