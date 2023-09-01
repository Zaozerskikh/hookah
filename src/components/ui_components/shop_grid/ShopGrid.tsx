import React, {useEffect, useState} from "react";
import './ShopGrid.css'
import ProductCard from "../product_card/ProductCard";
import {RoutePaths} from "../../../routes/RoutePaths";
import {Link} from "react-router-dom";
import StandardButton from "../standart_button/StandartButton";
import {ProductInfo} from "../../../content/Products";
import {useDispatch} from "react-redux";
import {setShopGridSize} from "../../../redux/shop_grid_size_reducer/ShopGridSizeReducer";
import {Consts} from "../../../content/Consts";

interface ShopGridProps {
  showAllCatalogButton: boolean;
  products: ProductInfo[],
}

const ShopGrid: React.FC<ShopGridProps> = ({showAllCatalogButton, products}) => {
  const [countCardsInRow, setCountCardsInRow] = useState(Math.floor((window.innerWidth - Consts.MIN_SIDE_MARGIN * 2 ) / 320))
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      const winWidth = window.innerWidth - Consts.MIN_SIDE_MARGIN * 2
      let cardCountInRow = Math.floor(winWidth / 320)
      if (winWidth % 320 < 10) {
        cardCountInRow -= 1
      }
      cardCountInRow = Math.min(cardCountInRow, products.length)
      if (window.innerWidth >= 1120) {
        setCountCardsInRow(cardCountInRow)
        dispatch(setShopGridSize(cardCountInRow * 320 - 16, window.innerWidth, true, 304, 16))
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, products.length])

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
          products.map((product, idx) => (
            <ProductCard
              key={idx}
              productId={product.productId}
              name={product.name}
              brand={product.brand}
              line={product.line}
              weight={product.weight}
              price={product.price}
              description={product.description}
              image={product.image}
              fullDescription={product.fullDescription}
            />
          ))
        }
      </div>
      {showAllCatalogButton &&
          <Link to={RoutePaths.TOBACCO} className="tobacco-link">
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
