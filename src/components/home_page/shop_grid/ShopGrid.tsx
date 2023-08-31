import React, {useEffect, useState} from "react";
import './ShopGrid.css'
import ProductCard from "../product_card/ProductCard";
import {RoutePaths} from "../../../routes/RoutePaths";
import {Link} from "react-router-dom";
import StandardButton from "../../ui_components/standart_button/StandartButton";
import {Products} from "../../../content/Products";


const ShopGrid: React.FC = () => {
  const [padding, setPadding] = useState(88.00)
  useEffect(() => {
    const handleResize = () => {
      setPadding(Math.max((window.innerWidth - 2560 - 178) / 2, 0))
    }

    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return(
    <div className="shop-container">
      <div
        style={{
          paddingLeft: padding,
          paddingRight: padding
        }}
      >
        <div className="shop">
          {
            Products.map((product, idx) => (
              <ProductCard
                key={idx}
                productId={product.productId}
                name={product.name}
                brand={product.brand}
                line={product.line}
                weight={product.weight}
                price={7.99}
                description={product.description}
                image={product.image}
                fullDescription={product.fullDescription}
              />
            ))
          }
        </div>
      </div>
      <Link to={RoutePaths.TOBACCO} className="tobacco-link">
        <StandardButton
          buttonStyle={{
            width: '186px',
            height: '60px',
          }}
          text="More"
        />
      </Link>
    </div>
  )
}

export default ShopGrid;
