import React from "react";
import './NewsSection.css'
import NewsCard from "../../../ui_components/news_card/NewsCard";
import {RoutePaths} from "../../../../routes/RoutePaths";
import {Link} from "react-router-dom";
import StandardButton from "../../../ui_components/standart_button/StandartButton";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";

interface NewsSectionProps {
  isMobile ? : boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ isMobile }) => {
  const News = useSelector((state: RootState) => state.newsArray)

  const renderDesktop = () => {
    return(
      <div className="news-section-container">
        <div className="news-section-cards-wrapper">
          {
            News.map((news, idx) => (
              <NewsCard
                shortNameInCard={news.name}
                key={idx}
                newsId={news.newsId}
                image={news.image}
                name={news.name.replaceAll("</br>", '')}
                description={news.description}
                date={news.date}
              />
            ))
          }
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

  const renderMobile = () => {
    return(
      <div className="news-section-container-mobile">
        <div className="news-section-cards-wrapper-mobile">
          {
            News.slice(0, 2).map((news, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  justifyContent: 'flex-start'
                }}
              >
                <NewsCard
                  isMobile={true}
                  shortNameInCard={news.name}
                  newsId={news.newsId}
                  image={news.image}
                  name={news.name.replaceAll("</br>", '')}
                  description={news.description}
                  date={news.date}
                />
              </div>
            ))
          }
        </div>
        <div className="button-wrapper-mobile">
          <Link to={RoutePaths.NEWS} className="news-link-mobile">
            <StandardButton
              text="All news"
              buttonStyle={{
                width: '262px',
                height: '48px',
                borderRadius: '8px'
              }}
              isMobile={true}
            />
          </Link>
        </div>
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

export default NewsSection;
