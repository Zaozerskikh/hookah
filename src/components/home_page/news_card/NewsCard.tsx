import React from "react";
import './NewsCard.css'
import MoreButton from "../../ui_components/more_button/MoreButton";

interface NewsCardProps {
  image: string;
  name: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({image, name, description}) => {
  return(
    <div className="news-card-container">
      <img src={image} alt={name} className="news-image" />
      <div className="news-card-text-container">
        <span className="news-card-header">{name}</span>
        <div className="news-card-description-wrapper">
          {description.split('\\n').map((line, idx) => (
            <div key={idx} className="news-card-description-line">
              {line}
            </div>
          ))}
        </div>
      </div>
      <div className="read-more-button-container">
        <MoreButton showText={true} buttonStyle={{
          width: '210px',
          height: '48px',
          padding: '12px 20px 12px 20px',
          color: '#EAEBF0',
          borderRadius: '24px',
        }}/>
      </div>
    </div>
  )
}

export default NewsCard;
