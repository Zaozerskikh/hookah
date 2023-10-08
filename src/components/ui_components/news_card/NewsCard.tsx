import React from "react";
import './NewsCard.css'
import MoreButton from "../more_button/MoreButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";

interface NewsCardProps {
  newsId: string;
  image: string;
  name: string;
  date: string;
  description: string;
  shortNameInCard: string;
  isMobile ? : boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({newsId,image, name, description, date, shortNameInCard, isMobile}) => {
  const navigate = useNavigate();
  const formattedDate = new Date(date)

  const openNews = () => {
    navigate(RoutePaths.NEWS_DETAILED.replace(':id', newsId));
  }

  const renderDesktop = () => {
    return(
      <div className="news-card-container" onClick={openNews}>
        <div
          style={{
            position: 'absolute',
            top: 256,
            left: 16,
            padding: '0px 8px',
            height: '28px',
            backgroundColor: '#005CCD',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
        <span
          style={{
            fontFamily: 'Monsterrat-500, serif',
            color: 'white',
            fontSize: '16px',
            lineHeight: '144%',
            fontStyle: 'normal'
          }}
        >
          {`${formattedDate.getDate().toString().length === 1 ? '0' + formattedDate.getDate() : formattedDate.getDate()}-${formattedDate.getMonth().toString().length === 1 ? '0' + formattedDate.getMonth() : formattedDate.getMonth()}-${formattedDate.getFullYear()}`}
        </span>
        </div>
        <img
          src={image}
          alt={name}
          className="news-image"
          onClick={openNews}
        />
        <div className="news-card-text-container">
          <span className="news-card-header" onClick={openNews} dangerouslySetInnerHTML={{ __html:  shortNameInCard}}/>
          <div className="news-card-description-wrapper">
            {description.split('\\n').map((line, idx) => (
              <div key={idx} className="news-card-description-line">
                {line}
              </div>
            ))}
          </div>
        </div>
        <div className="read-more-button-container">
          <MoreButton
            showText={true}
            buttonStyle={{
              width: '210px',
              height: '48px',
              padding: '12px 0px 12px 20px',
              color: '#EAEBF0',
              borderRadius: '24px',
            }}
            onClickAction={openNews}
          />
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return(
      <div
        className="news-card-container-mobile"
        onClick={openNews}
      >
        <div style={{position: 'relative', display: "flex", width: '100%'}}>
          <img
            src={image}
            alt={name}
            className="news-image-mobile"
            // onClick={openNews}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              padding: '2px 8px',
              backgroundColor: '#005CCD',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'Monsterrat-500, serif',
                color: 'white',
                fontSize: '12px',
                lineHeight: '144%',
                fontStyle: 'normal'
              }}
            >
              {`${formattedDate.getDate().toString().length === 1 ? '0' + formattedDate.getDate() : formattedDate.getDate()}-${formattedDate.getMonth().toString().length === 1 ? '0' + formattedDate.getMonth() : formattedDate.getMonth()}-${formattedDate.getFullYear()}`}
            </span>
          </div>
        </div>
        <div className="news-card-text-container-mobile">
          <span
            className="news-card-header-mobile"
          >
            {shortNameInCard.replaceAll('</br>', ' ')}
          </span>
          <div className="news-card-description-line-mobile">
            {description.replaceAll('\\n', ' ')}
          </div>
        </div>
      </div>
    )
  }

  return(isMobile? renderMobile() : renderDesktop())
}

export default NewsCard;
