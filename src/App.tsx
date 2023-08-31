import React from "react";
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
import AccessoriesPage from "./components/pages/accessories_page/AccessoriesPage";

const App: React.FC = () => {
  return (
    <Router>
      <Warning/>
      <MenuPanel/>
      <Routes>
        <Route path="/" element={<Navigate to={RoutePaths.HOME} />} />
        <Route path="/hookah" element={<Navigate to={RoutePaths.HOME} />} />
        <Route path={RoutePaths.HOME} element={<HomePage />} />
        <Route path={RoutePaths.TOBACCO} element={<TobaccoPage />} />
        <Route path={RoutePaths.NEWS} element={<NewsPage />} />
        <Route path={RoutePaths.NEWS_DETAILED} element={<DetailedNewsPage />} />
        <Route path={RoutePaths.ACCESSORIES} element={<AccessoriesPage />} />
        <Route path={RoutePaths.ABOUT} element={<AboutUsPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
