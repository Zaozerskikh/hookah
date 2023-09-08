import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
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


const App: React.FC = () => {
  const isWarningShown = useSelector((state: RootState) => state.warning.isShown)

  const [minHeight, setMinHeight] = useState(window.innerHeight - 500)

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
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  }, [isWarningShown]);

  return (
    <Router>
      <div
        style={{
          width:'100%',
          display: "flex",
          alignItems: 'flex-start',
          justifyContent: 'center',
          minHeight: minHeight
      }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'center'
          }}
        >
          <Warning/>
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
            <Route path={RoutePaths.DARKSIDE} element={<NotFoundPage />} />
            <Route path={RoutePaths.MUSTHAVE} element={<NotFoundPage />} />
            <Route path={RoutePaths.ELEMENT} element={<NotFoundPage />} />
            <Route path={RoutePaths.TANGIERS} element={<NotFoundPage />} />
            <Route path={RoutePaths.FUMARI} element={<NotFoundPage />} />
            <Route path={RoutePaths.FINAL_CHECKOUT} element={<FinalCheckoutPage />} />
            <Route path={RoutePaths.TEST_404} element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
