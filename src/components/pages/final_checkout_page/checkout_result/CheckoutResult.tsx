import React from "react";
import StandardButton from "../../../ui_components/standart_button/StandartButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../../routes/RoutePaths";
import {useMediaQuery} from "react-responsive";

interface CheckoutResultProps {
  isSuccess: boolean;
  orderNumber: number;
  onErrorAction: (...args: any) => any
}
const CheckoutResult: React.FC<CheckoutResultProps> = ({ isSuccess , orderNumber, onErrorAction}) => {
  const navigate = useNavigate()

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  const renderDesktop = () => {
    return(
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: `${window.innerHeight - 500}px`,
          marginTop: '100px',
          marginBottom: '180px'
        }}
      >
        <div
          style={{
            width: '650px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {
            isSuccess ? (
              <svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="200" height="200" rx="100" fill="#F2FEF8"/>
                <path d="M57 104L83.6667 130.667L145 69.3333" stroke="#7BECB6" strokeWidth="10.6667"/>
              </svg>
            ) : (
              <svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="200" height="200" rx="100" fill="#FFF5F8"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M93.4615 100L67.0632 126.398L74.6057 133.941L101.004 107.543L127.402 133.941L134.945 126.398L108.546 100L134.945 73.6011L127.403 66.0586L101.004 92.4577L74.6049 66.0586L67.0624 73.601L93.4615 100Z" fill="#FF4572"/>
              </svg>
            )
          }
          <div
            dangerouslySetInnerHTML={{
              __html: isSuccess
                ? `Thank you!</br>Your order number is ${orderNumber}.</br>We will deliver it within 2 weeks. The tracking number </br> will be sent to your e-mail 🥳`
                : 'Something went wrong - payment failed. Try again.</br>If it fails, please contact us, we respond very quickly ❤️‍🩹‍'
            }}
            style={{
              width: '100%',
              textAlign: 'center',
              fontFamily: 'Monsterrat-500, serif',
              fontSize: '22px',
              lineHeight: '144%'
            }}
          />
          <StandardButton
            text={isSuccess ? 'Go to catalog' : 'Back to checkout'}
            buttonStyle={{
              height: '60px',
              width: isSuccess ? '280px' : '327px',
              padding: '12px 64px 12px 64px'
            }}
            onClickAction={isSuccess ? () => navigate(RoutePaths.TOBACCO) : onErrorAction}
          />
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return(
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: `${window.innerHeight - 57}px`,
          marginTop: '58px',
          position: 'relative',
          paddingLeft: '16px',
          paddingRight: '16px',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: "column",
            marginBottom: '100px',
            alignItems: "center",
            justifyContent: "center",
            gap: '40px'
          }}
        >
          {
            isSuccess ? (
              <svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="100" height="100" rx="50" fill="#F2FEF8"/>
                <path d="M28.25 52.5003L41.5833 65.8337L72.25 35.167" stroke="#7BECB6" strokeWidth="5.33333"/>
              </svg>
            ) : (
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="50" fill="#FFF5F8"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M46.4772 50.0013L33.2784 63.2002L37.0496 66.9714L50.2484 53.7726L63.4478 66.972L67.2191 63.2008L54.0196 50.0013L67.2195 36.8015L63.4482 33.0303L50.2484 46.2301L37.0492 33.0309L33.2779 36.8021L46.4772 50.0013Z" fill="#FF4572"/>
              </svg>
            )
          }
          <div
            dangerouslySetInnerHTML={{
              __html: isSuccess
                ? `Thank you!</br>Your order number is ${orderNumber}.</br>We will deliver it within 2 weeks. The tracking number </br> will be sent to your e-mail 🥳`
                : 'Something went wrong - </br>payment failed. Try again.</br>If it fails, please contact us,</br> we respond very quickly ❤️‍🩹‍'
            }}
            style={{
              width: '100%',
              textAlign: 'center',
              fontFamily: 'Monsterrat-500, serif',
              fontSize: '16px',
              lineHeight: '144%'
            }}
          />
        </div>
        <StandardButton
          text={isSuccess ? 'Go to catalog' : 'Back to checkout'}
          buttonStyle={{
            height: '48px',
            width: 'calc(100% - 32px)',
            padding: '12px 64px 12px 64px',
            position: "absolute",
            bottom: '32px'
          }}
          onClickAction={isSuccess ? () => navigate(RoutePaths.TOBACCO) : onErrorAction}
          isMobile={true}
        />
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

// @ts-ignore
export default CheckoutResult;
// @ts-ignore
