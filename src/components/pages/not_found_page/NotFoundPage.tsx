import React from "react";
import './NotFoundPage.css'
import StandardButton from "../../ui_components/standart_button/StandartButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return(
    <div
      style={{
        width: '100%',
        position: 'relative',
      }}
    >
      <div style={{position: "absolute", top: '220px', left: '926px'}}>
        <svg width="199" height="294" viewBox="0 0 199 294" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.1729 0H88.3968L79.3408 72.4478H61.2288L52.1729 0Z" fill="#2C2D2E"/>
          <rect x="58.207" y="77.2546" width="24.1493" height="132.821" fill="#2C2D2E"/>
          <ellipse cx="69.7096" cy="78.395" rx="69.7096" ry="19.3638" fill="#2C2D2E"/>
          <g clipPath="url(#clip0_383_2287)">
            <circle cx="70.2834" cy="265.642" r="60.3732" fill="#CFD5DB"/>
          </g>
          <path d="M77.4561 140.359C151.038 128.74 120.056 179.086 112.311 241.05C104.565 303.014 197.511 287.523 197.511 287.523" stroke="#2C2D2E" strokeWidth="7.74551"/>
          <defs>
            <clipPath id="clip0_383_2287">
              <rect width="132.821" height="60.3732" fill="white" transform="translate(3.87207 205.269)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '-88px',
          right: '0',
          zIndex: -9998,
        }}
      >
        <svg width="713" height="715" viewBox="0 0 713 715" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M557.686 440.694C556.569 510.504 529.376 579.975 476.107 633.244C367.287 742.063 190.855 742.063 82.0355 633.244C-26.7842 524.424 -26.7842 347.992 82.0356 239.173C135.309 185.899 204.786 158.706 274.602 157.593C275.719 87.7832 302.912 18.3127 356.181 -34.9563C465.001 -143.776 641.432 -143.776 750.252 -34.9563C859.072 73.8634 859.072 250.295 750.252 359.115C696.979 412.388 627.501 439.581 557.686 440.694Z" fill="#CFD5DB" fillOpacity="0.19"/>
        </svg>
      </div>
      <div style={{ marginLeft: `88px`, marginTop: '100px'}}>
        <svg width="411" height="141" viewBox="0 0 411 141" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M123.8 106.102H97.2V140.502H77.8V106.102H0V92.1024L71.6 0.502441H93.2L24.6 88.9025H78.4V58.5024H97.2V88.9025H123.8V106.102Z" fill="#CFD5DB"/>
          <path d="M228.844 86.1727L221.096 86.2963L220.972 94.0437C220.816 103.847 217.003 113.579 209.529 121.054C194.264 136.319 169.514 136.319 154.249 121.054C138.984 105.788 138.984 81.0387 154.249 65.7736C161.724 58.2984 171.456 54.4861 181.261 54.3297L189.008 54.2062L189.132 46.4587C189.289 36.6549 193.101 26.9235 200.576 19.4489C215.841 4.18371 240.591 4.18371 255.856 19.4489C271.121 34.714 271.121 59.4637 255.856 74.7288C248.381 82.204 238.648 86.0163 228.844 86.1727Z" stroke="#CFD5DB" strokeWidth="16"/>
          <path d="M410.105 106.102H383.505V140.502H364.105V106.102H286.305V92.1024L357.905 0.502441H379.505L310.905 88.9025H364.705V58.5024H383.505V88.9025H410.105V106.102Z" fill="#CFD5DB"/>
        </svg>
      </div>
      <span className="not-found-text">Page not found</span>
      <span className="dorry-text">
        But don't worry: an up-to-date assortment<br/>
        of the best tobaccos awaits you in our online store! 🧐
      </span>
      <StandardButton
        text="Open catalog"
        buttonStyle={{
          position: "absolute",
          left: "88px",
          top: 490,
          padding: '12px 64px 12px 64px'
        }}
        onClickAction={() => navigate(RoutePaths.TOBACCO)}
      />
    </div>
  )
}

export default NotFoundPage
