import React, {useEffect, useState} from "react";
import './ShopSection.css'
import ProductCard from "../../../ui_components/product_card/ProductCard";
import {RoutePaths} from "../../../../routes/RoutePaths";
import {Link} from "react-router-dom";
import StandardButton from "../../../ui_components/standart_button/StandartButton";
import {Products} from "../../../../content/Products";


const ShopSection: React.FC = () => {
  const [countCardsInRow, setCountCardsInRow] = useState(Math.floor((window.innerWidth - 180) / 320 - 0.0001))
  useEffect(() => {
    const handleResize = () => {
      setCountCardsInRow(Math.floor((window.innerWidth - 180) / 320 - 0.0001))
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
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          gap: '48px 16px',
          flexWrap: 'wrap',
          maxWidth: `${countCardsInRow * 320 - 16}px`
        }}
      >
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

export default ShopSection;
