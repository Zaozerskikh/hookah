import React from "react";
import StandardButton from "../../../ui_components/standart_button/StandartButton";

interface NotFoundModalProps {
  onClearFiltersAction: (...args: any) => any
}

const NotFoundModal: React.FC<NotFoundModalProps> = ({ onClearFiltersAction }) => {
  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        alignItems: "center",
        marginTop: '50px',
        marginBottom: '80px'
      }}
    >
      <svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_552_1440)">
          <rect x="0.5" width="200" height="200" rx="100" fill="#CFD5DB"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M174.92 167.349C191.121 149.578 201 125.943 201 100C201 44.7715 156.228 0 101 0C45.7715 0 1 44.7715 1 100C1 155.228 45.7715 200 101 200C126.688 200 150.114 190.314 167.824 174.395L178.964 185.536L186.036 178.464L174.92 167.349ZM174.92 167.349L147.4 139.829C156.609 129.01 162.166 114.987 162.166 99.6665C162.166 65.4249 134.408 37.6665 100.166 37.6665C65.9244 37.6665 38.166 65.4249 38.166 99.6665C38.166 133.908 65.9244 161.667 100.166 161.667C115.487 161.667 129.51 156.109 140.329 146.901L167.824 174.395C170.305 172.166 172.673 169.814 174.92 167.349ZM152.166 99.6665C152.166 128.385 128.885 151.667 100.166 151.667C71.4472 151.667 48.166 128.385 48.166 99.6665C48.166 70.9477 71.4472 47.6665 100.166 47.6665C128.885 47.6665 152.166 70.9477 152.166 99.6665ZM90.5 83C90.5 87.9706 86.4706 92 81.5 92C76.5294 92 72.5 87.9706 72.5 83C72.5 78.0294 76.5294 74 81.5 74C86.4706 74 90.5 78.0294 90.5 83ZM118.5 92C123.471 92 127.5 87.9706 127.5 83C127.5 78.0294 123.471 74 118.5 74C113.529 74 109.5 78.0294 109.5 83C109.5 87.9706 113.529 92 118.5 92ZM100 121C94.456 121 88.7466 122.099 80.9914 124.522L78.0086 114.978C86.2534 112.401 93.044 111 100 111C106.956 111 113.747 112.401 121.991 114.978L119.009 124.522C111.253 122.099 105.544 121 100 121Z" fill="#EAEBF0"/>
        </g>
        <defs>
          <clipPath id="clip0_552_1440">
            <rect x="0.5" width="200" height="200" rx="100" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <span
        style={{
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Monsterrat-500, serif',
          fontSize: '22px',
          fontStyle: 'normal',
          lineHeight: '144%',
        }}
        dangerouslySetInnerHTML={{ __html: ' We didn\'t have that, but we\'ll try </br> to add it as soon as possible 😤'}}
      />
      <StandardButton
        text="Clear all filters"
        buttonStyle={{
          display: 'flex',
          height: '60px',
          padding: '12px 64px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClickAction={onClearFiltersAction}
      />
    </div>
  )
}

//@ts-ignore
export default NotFoundModal
//@ts-ignore
