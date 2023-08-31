import React, {useEffect, useState} from "react";
import './NewsSection.css'
import NewsCard from "../news_card/NewsCard";
import {RoutePaths} from "../../../routes/RoutePaths";
import {Link} from "react-router-dom";
import StandardButton from "../../ui_components/standart_button/StandartButton";
import {News} from "../../../content/News";

const NewsSection: React.FC = () => {
  const [padding, setPadding] = useState(88)
  useEffect(() => {
    const handleResize = () => {
        setPadding(Math.max((window.innerWidth - 1248 - 178) / 2, 88))
    }

    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])


  return(
    <div className="news-section-container">
      <div
        style={{
          maxHeight: '592px',
          overflow: 'hidden',
          paddingLeft: padding,
          paddingRight: padding
        }}
      >
        <div className="news-section-cards-wrapper">
          {
            News.map((news, idx) => (
              <NewsCard
                key={idx}
                newsId={news.newsId}
                image={news.image}
                name={news.name}
                description={news.description}
              />
            ))
          }
        </div>
      </div>
      <div className="button-wrapper">
        <Link to={RoutePaths.NEWS} className="news-link">
          <StandardButton
            text="All news"
            buttonStyle={{
              width: '224px',
              height: '60px',
            }}
          />
        </Link>
      </div>
    </div>
  )
}

export default NewsSection;
