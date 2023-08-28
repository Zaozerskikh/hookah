import React from "react";
import './NewsCard.css'
import moreIcon from './../../../assets/icons/product_card/more_icon.png'


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
        <button className="read-more-button">
          <span className="read-more-text">Read more</span>
          <img className="more-icon" src={moreIcon} alt="more-icon"/>
        </button>
      </div>
    </div>
  )
}

export default NewsCard;
