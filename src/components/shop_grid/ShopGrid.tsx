import React from "react";
import './ShopGrid.css'
import ProductCard from "../home_page/product_card/ProductCard";
import darkSide_FallingStar_base from './../../assets/icons/products/darkSide_FallingStar_base.png'
import darkSide_IGranny_base from './../../assets/icons/products/darkSide_Igranny_base.png'
import darkSide_BnPapa_base from './../../assets/icons/products/darkSide_BnPapa_base.png'
import darkSide_Supernova_base from './../../assets/icons/products/darkSide_SuperNova_base.png'
import darkSide_SpaceIchi_base from './../../assets/icons/products/darkSide_SpaceIchi_base.png'
import darkSide_KaleeGrap_base from './../../assets/icons/products/darkSide_KaleeGrap_base.png'
import darkSide_Hola_base from './../../assets/icons/products/darkSide_Hola_base.png'
import darkSide_Skyline_base from './../../assets/icons/products/darkSide_Skyline_base.png'


const ShopGrid: React.FC = () => {
  return(
    <div className="shop">
      <ProductCard
        name="DarkSide – Falling star (base) 30G"
        price={7.99}
        description="Mango, joghurt"
        image={darkSide_FallingStar_base}
      />
      <ProductCard
        name="DarkSide – I Granny (base) 30G"
        price={7.99}
        description="Mango, joghurt"
        image={darkSide_IGranny_base}
      />
      <ProductCard
        name="DarkSide – Bnpapa (base) 30G"
        price={7.99}
        description="Mango, joghurt"
        image={darkSide_BnPapa_base}
      />
      <ProductCard
        name="DarkSide – Supernova (base) 30G"
        price={7.99}
        description="Mango, joghurt"
        image={darkSide_Supernova_base}
      />
      <ProductCard
        name="DarkSide – Space Ichi (base) 30G"
        price={7.99}
        description="Mango, joghurt"
        image={darkSide_SpaceIchi_base}
      />
      <ProductCard
        name="DarkSide – Kalee grap (base) 30G"
        price={7.99}
        description="Mango, joghurt"
        image={darkSide_KaleeGrap_base}
      />
      <ProductCard
        name="DarkSide – Hola (base) 30G"
        price={7.99}
        description="Mango, joghurt"
        image={darkSide_Hola_base}
      />
      <ProductCard
        name="DarkSide – Skyline (base) 30G"
        price={7.99}
        description="Mango, joghurt"
        image={darkSide_Skyline_base}
      />
    </div>
  )
}

export default ShopGrid;
