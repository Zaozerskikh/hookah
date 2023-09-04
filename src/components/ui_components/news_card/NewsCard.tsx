import React from "react";
import './NewsCard.css'
import MoreButton from "../more_button/MoreButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../routes/RoutePaths";

interface NewsCardProps {
  newsId: string;
  image: string;
  name: string;
  description: string;
  shortNameInCard: string,
}

const NewsCard: React.FC<NewsCardProps> = ({newsId,image, name, description, shortNameInCard}) => {
  const navigate = useNavigate();

  const openNews = () => {
    navigate(RoutePaths.NEWS_DETAILED.replace(':id', newsId));
  }

  return(
    <div className="news-card-container" onClick={openNews}>
      <img src={image} alt={name} className="news-image" onClick={openNews}/>
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

export default NewsCard;
