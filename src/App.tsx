import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import MenuPanel from "./components/menu_panel/MenuPanel";
import {RoutePaths} from "./routes/RoutePaths";
import HomePage from "./components/pages/home_page/HomePage";
import Footer from "./components/footer/Footer";
import Warning from "./components/pages/warning/Warning";
import NewsPage from "./components/pages/news_page/NewsPage";
import DetailedNewsPage from "./components/pages/detailed_news_page/DetailedNewsPage";
import TobaccoPage from "./components/pages/tobacco_page/TobaccoPage";
import AboutUsPage from "./components/pages/about_us_page/AboutUsPage";
import {useSelector} from "react-redux";
import {RootState} from "./redux/Store";
import CartButton from "./components/ui_components/cart_button/CartButton";
import NotFoundPage from "./components/pages/not_found_page/NotFoundPage";
import DeliveryPolicyPage from "./components/pages/delivery_policy_page/DeliveryPolicyPage";
import FinalCheckoutPage from "./components/pages/final_checkout_page/FinalCheckoutPage";
import loaderImg from './assets/icons/decorations/floating_loading_filled_clouds.png'
import aboutImg from './assets/icons/decorations/floating_clouds_about_us.png'
import {ProductBrand} from "./content/Products";
import DetailedProductPage from "./components/pages/detailed_product_page/DetailedProductPage";
import BottomHint from "./components/ui_components/bottom_hint/BottomHint";

const App: React.FC = () => {
  const isWarningShown = useSelector((state: RootState) => state.warning.isShown)
  const [minHeight, setMinHeight] = useState(window.innerHeight - 500)
  const loc = useLocation()

  useEffect(() => {
    const handleResize = () => {
      setMinHeight(Math.max(window.innerHeight - 420))
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    [loaderImg, aboutImg].map(im => {
      const img = new Image();
      img.onload = () => {
        console.log('initialized')
      }
      img.src = im
      return undefined;
    })
  }, []);

  useEffect(() => {
    if (isWarningShown) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [isWarningShown]);

  return (
    <>
      <div
        style={{
          width:'100%',
          display: "flex",
          alignItems: 'flex-start',
          justifyContent: 'center',
          minHeight: minHeight,
          backgroundColor: loc.pathname.startsWith('/product/')? 'black' : 'white',
          position: 'relative'
        }}
      >
        <div style={{ width: '100%', position: 'absolute', top: '0', left: 0, backgroundColor: 'white', height: '80px'}}/>
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'center',
          }}
        >
          <Warning/>
          <BottomHint/>
          <CartButton/>
          <MenuPanel/>
          <Routes>
            <Route path="/" element={<Navigate to={RoutePaths.HOME} />} />
            <Route path="/hookah" element={<Navigate to={RoutePaths.HOME} />} />
            <Route path={RoutePaths.HOME} element={<HomePage />} />
            <Route path={RoutePaths.TOBACCO} element={<TobaccoPage />} />
            <Route path={RoutePaths.NEWS} element={<NewsPage />} />
            <Route path={RoutePaths.NEWS_DETAILED} element={<DetailedNewsPage />} />
            <Route path={RoutePaths.ACCESSORIES} element={<NotFoundPage />} />
            <Route path={RoutePaths.ABOUT} element={<AboutUsPage />} />
            <Route path={RoutePaths.DELIVERY_POLICY} element={<DeliveryPolicyPage />} />
            <Route
              path={RoutePaths.DARKSIDE}
              element={<TobaccoPage
                initialSortByBrand={ProductBrand.DARKSIDE}
                tobaccoName="DarkSide"
                headerEmoji='🔥'
                tobaccoDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              />}
            />
            <Route
              path={RoutePaths.MUSTHAVE}
              element={<TobaccoPage
                initialSortByBrand={ProductBrand.MUSTHAVE}
                tobaccoName="MustHave"
                headerEmoji='🔥'
                tobaccoDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              />}
            />
            <Route
              path={RoutePaths.ELEMENT}
              element={<TobaccoPage
                initialSortByBrand={ProductBrand.ELEMENTS}
                tobaccoName="Element"
                headerEmoji='🔥'
                tobaccoDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              />}
            />
            <Route
              path={RoutePaths.TANGIERS}
              element={<TobaccoPage
                initialSortByBrand={ProductBrand.TANGIERS}
                tobaccoName="Tangiers"
                headerEmoji='🔥'
                tobaccoDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                />
            }
            />
            <Route
              path={RoutePaths.FUMARI}
              element={<TobaccoPage
                initialSortByBrand={ProductBrand.FUMARI}
                tobaccoName="Fumari"
                headerEmoji='🔥'
                tobaccoDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              />}
            />
            <Route path={RoutePaths.PRODUCT_DETAILED} element={<DetailedProductPage />} />
            <Route path={RoutePaths.FINAL_CHECKOUT} element={<FinalCheckoutPage />} />
            <Route path={RoutePaths.NOT_FOUND} element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
