import React, {useEffect} from "react";
import './NotFoundPage.css'
import StandardButton from "../../ui_components/standart_button/StandartButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";
import {useMediaQuery} from "react-responsive";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
        document.body.classList.remove('hidden');
      }, 500)
    } else {
      setTimeout(() => {
        document.body.classList.add('hidden');
      }, 500)
    }
  }, [isMobile]);

  const renderDesktop = () => {
    return(
      <div
        style={{
          width: '100%',
          minHeight: '700px',
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
            top: '-180px',
            left: '720px',
          }}
        >
          <svg width="832" height="832" viewBox="0 0 832 832" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M557.686 557.694C556.569 627.504 529.376 696.975 476.107 750.243C367.287 859.063 190.855 859.063 82.0355 750.244C-26.7842 641.424 -26.7842 464.992 82.0356 356.172C135.309 302.899 204.786 275.706 274.602 274.593C275.719 204.783 302.912 135.313 356.181 82.0436C465.001 -26.7762 641.432 -26.7762 750.252 82.0436C859.072 190.863 859.072 367.295 750.252 476.115C696.979 529.388 627.501 556.581 557.686 557.694Z" fill="#CFD5DB" fillOpacity="0.19"/>
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

  const renderMobile = () => {
    return(
      <div style={{ height: window.innerHeight + 1, position: 'relative', zIndex: '2999', overflowX: 'hidden', width: '100%', display: 'flex'}}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', zIndex: 3001}}>
          <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M241.002 241.002C240.519 271.193 228.759 301.238 205.722 324.275C158.66 371.337 82.3579 371.337 35.2962 324.275C-11.7654 277.213 -11.7654 200.911 35.2963 153.85C58.3355 130.81 88.3826 119.05 118.576 118.569C119.059 88.3778 130.819 58.3337 153.857 35.2963C200.919 -11.7654 277.221 -11.7654 324.282 35.2962C371.344 82.3579 371.344 158.66 324.282 205.722C301.243 228.761 271.196 240.521 241.002 241.002Z" fill="#CFD5DB" fillOpacity="0.19"/>
          </svg>
        </div>
        <div
          style={{
            width: '100%',
            boxSizing: 'border-box',
            paddingLeft: '16px', paddingRight: '16px', paddingTop: '74px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <svg width="65" height="95" viewBox="0 0 65 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9062 0H28.644L25.7095 23.4755H19.8407L16.9062 0Z" fill="#2C2D2E"/>
            <rect x="18.8604" y="25.0332" width="7.82515" height="43.0383" fill="#2C2D2E"/>
            <ellipse cx="22.5882" cy="25.4034" rx="22.5882" ry="6.27449" fill="#2C2D2E"/>
            <g clipPath="url(#clip0_1334_5368)">
              <circle cx="22.7743" cy="86.0756" r="19.5629" fill="#CFD5DB"/>
            </g>
            <path d="M25.0986 45.4812C48.9417 41.7165 38.9025 58.0302 36.3927 78.1085C33.8829 98.1869 64.0005 93.1673 64.0005 93.1673" stroke="#2C2D2E" strokeWidth="2.5098"/>
            <defs>
              <clipPath id="clip0_1334_5368">
                <rect width="43.0383" height="19.5629" fill="white" transform="translate(1.25488 66.5127)"/>
              </clipPath>
            </defs>
          </svg>
          <svg width="153" height="54" viewBox="0 0 153 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.1867 40.3089H36.2629V53.1427H29.0253V40.3089H0V35.0858L26.7122 0.912109H34.7706L9.17765 33.892H29.2491V22.5505H36.2629V33.892H46.1867V40.3089Z" fill="#CFD5DB"/>
            <path d="M85.376 32.8735L82.4857 32.9196L82.4394 35.81C82.3809 39.4675 80.9586 43.0981 78.17 45.8867C72.475 51.5818 63.2415 51.5818 57.5464 45.8867C51.8514 40.1917 51.8514 30.9582 57.5464 25.2631C60.3352 22.4743 63.9661 21.052 67.6239 20.9937L70.5143 20.9476L70.5605 18.0572C70.6191 14.3997 72.0413 10.7691 74.8299 7.9805C80.525 2.28545 89.7585 2.28545 95.4535 7.9805C101.149 13.6755 101.149 22.909 95.4535 28.6041C92.6647 31.3929 89.0339 32.8152 85.376 32.8735Z" stroke="#CFD5DB" strokeWidth="5.9692"/>
            <path d="M153 40.3089H143.076V53.1427H135.838V40.3089H106.813V35.0858L133.525 0.912109H141.584L115.991 33.892H136.062V22.5505H143.076V33.892H153V40.3089Z" fill="#CFD5DB"/>
          </svg>
          <div
            style={{
              color: 'var(--auxiliary-smoke-gray, #CFD5DB)',
              /* Mobile/H1 */
              fontFamily: 'Monsterrat-700, serif',
              fontSize: '24px',
              fontStyle: 'normal',
              lineHeight: '125%', /* 30px */
            }}
          >
            Page not found
          </div>
          <div
            style={{
              color: 'var(--main-black, #000)',

              /* Mobile/Main text */
              fontFamily: 'Monsterrat-500, serif',
              fontSize: '16px',
              lineHeight: '144%', /* 23.04px */
              alignSelf: 'stretch',
              marginTop: '-24px'
            }}
          >
            But don't worry: an up-to-date assortment of the best tobaccos awaits you in our online store! 🧐
          </div>
          <div style={{ display: 'flex', width: '100%'}}>
            <StandardButton
              text={'Open catalog'}
              buttonStyle={{
                height: '48px',
                width: 'calc(100% - 32px)',
                padding: '12px 64px 12px 64px',
                position: "absolute",
                bottom: '32px',
                alignSelf: 'center'
              }}
              onClickAction={() => navigate(RoutePaths.TOBACCO)}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

export default NotFoundPage
