import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import MenuPanel from "./components/menu_panel/MenuPanel";
import {RoutePaths} from "./routes/RoutePaths";
import HomePage from "./components/home_page/HomePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <Router>
          <MenuPanel/>
          <Routes>
              <Route path="/" element={<Navigate to={RoutePaths.HOME} />} />
              <Route path="/hookah" element={<Navigate to={RoutePaths.HOME} />} />
              <Route path={RoutePaths.HOME} element={<HomePage />} />
          </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
