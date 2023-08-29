import React from "react";
import './ShopGrid.css'
import ProductCard from "../product_card/ProductCard";
import darkSide_FallingStar_base from '../../../assets/icons/products/darkSide_FallingStar_base.png'
import darkSide_IGranny_base from '../../../assets/icons/products/darkSide_Igranny_base.png'
import darkSide_BnPapa_base from '../../../assets/icons/products/darkSide_BnPapa_base.png'
import darkSide_Supernova_base from '../../../assets/icons/products/darkSide_SuperNova_base.png'
import darkSide_SpaceIchi_base from '../../../assets/icons/products/darkSide_SpaceIchi_base.png'
import darkSide_KaleeGrap_base from '../../../assets/icons/products/darkSide_KaleeGrap_base.png'
import darkSide_Hola_base from '../../../assets/icons/products/darkSide_Hola_base.png'
import darkSide_Skyline_base from '../../../assets/icons/products/darkSide_Skyline_base.png'
import {RoutePaths} from "../../../routes/RoutePaths";
import {Link} from "react-router-dom";
import StandardButton from "../../ui_components/standart_button/StandartButton";


const ShopGrid: React.FC = () => {
  return(
    <div className="shop-container">
      <div className="shop">
        <ProductCard
          name="Falling star"
          brand="DarkSide"
          line="Base"
          weight={30}
          price={7.99}
          description="Mango, joghurt"
          image={darkSide_FallingStar_base}
          fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <ProductCard
          name="I Granny"
          brand="DarkSide"
          line="Base"
          weight={30}
          price={7.99}
          description="Mango, joghurt"
          image={darkSide_IGranny_base}
          fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ProductCard
          name="Bnpapa"
          brand="DarkSide"
          line="Base"
          weight={30}
          price={7.99}
          description="Mango, joghurt"
          image={darkSide_BnPapa_base}
          fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ProductCard
          name="Supernova"
          brand="DarkSide"
          line="Base"
          weight={30}
          price={7.99}
          description="Mango, joghurt"
          image={darkSide_Supernova_base}
          fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ProductCard
          name="Space Ichi"
          brand="DarkSide"
          line="Base"
          weight={30}
          price={7.99}
          description="Mango, joghurt"
          image={darkSide_SpaceIchi_base}
          fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ProductCard
          name="Kalee grap"
          brand="DarkSide"
          line="Base"
          weight={30}
          price={7.99}
          description="Mango, joghurt"
          image={darkSide_KaleeGrap_base}
          fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ProductCard
          name="Hola"
          brand="DarkSide"
          line="Base"
          weight={30}
          price={7.99}
          description="Mango, joghurt"
          image={darkSide_Hola_base}
          fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ProductCard
          name="Skyline"
          brand="DarkSide"
          line="Base"
          weight={30}
          price={7.99}
          description="Mango, joghurt"
          image={darkSide_Skyline_base}
          fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
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
