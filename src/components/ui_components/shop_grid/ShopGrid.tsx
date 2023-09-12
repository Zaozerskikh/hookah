import React from "react";
import './ShopGrid.css'
import ProductCard from "../product_card/ProductCard";
import {RoutePaths} from "../../../routes/RoutePaths";
import {Link} from "react-router-dom";
import StandardButton from "../standart_button/StandartButton";
import {ProductInfo} from "../../../content/Products";

interface ShopGridProps {
  showAllCatalogButton: boolean;
  products: ProductInfo[],
}

const ShopGrid: React.FC<ShopGridProps> = ({showAllCatalogButton, products}) => {
  return(
    <div
      className="shop-container"
      style={{
        gap:' 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '1264px'
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
          minWidth: '1264px'
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

export default ShopGrid;
