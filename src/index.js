import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/unbounded/Unbounded-300.ttf';
import './assets/fonts/unbounded/Unbounded-400.ttf';
import './assets/fonts/unbounded/Unbounded-700.ttf';
import './assets/fonts/monsterrat/Montserrat-300.ttf'
import './assets/fonts/monsterrat/Montserrat-400.ttf'
import './assets/fonts/monsterrat/Montserrat-500.ttf'
import './assets/fonts/monsterrat/Montserrat-600.ttf'
import './assets/fonts/monsterrat/Montserrat-700.ttf'
import {Provider} from "react-redux";
import store from "./redux/Store";
import {BrowserRouter as Router} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

reportWebVitals();
