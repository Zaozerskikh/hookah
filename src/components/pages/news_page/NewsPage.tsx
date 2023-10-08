import React, {useState} from "react";
import './NewsPage.css'
import NewsCard from "../../ui_components/news_card/NewsCard";
import {useMediaQuery} from "react-responsive";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/Store";

const NewsPage: React.FC = () => {
  const News = useSelector((state: RootState) => state.newsArray)
  useState(() => {
    window.scrollTo({ top: 0 });
  })

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  const renderDesktop = () => {
    return(
      <div
        className="news-page-container"
        style={{
          width: isDesktopOrLaptop ? '1264px' : '948px',
          margin: '34px 88px',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '34px',
          paddingBottom: '128px',
        }}
      >
      <span
        className="news-page-header"
        style={{
          maxWidth: `1264px`
        }}
      >
        📰 We publish our latest news, upcoming events and special offers
      </span>
        <div className="news-grid-wrapper">
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              alignContent: 'center',
              gap: '48px 32px',
              flexWrap: 'wrap',
            }}
          >
            {
              News.map((news, idx) => (
                <NewsCard
                  key={idx}
                  newsId={news.newsId}
                  image={news.image}
                  shortNameInCard={news.name}
                  description={news.description}
                  name={news.name.replaceAll("</br>", '')}
                  date={news.date}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }

  const renderMobile = () => {
    return(
      <div className="news-page-container-mobile">
        <div className="news-page-header-mobile">
          📰 We publish our latest news, upcoming events and special offers
        </div>
        <div className="news-page-card-wrapper">
          {
            News.map((news, idx) => (
              <NewsCard
                key={idx}
                newsId={news.newsId}
                image={news.image}
                shortNameInCard={news.name}
                description={news.description}
                name={news.name.replaceAll("</br>", '')}
                date={news.date}
                isMobile={true}
              />
            ))
          }
        </div>
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

export default NewsPage
