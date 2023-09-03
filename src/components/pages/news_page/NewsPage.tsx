import React, {useState} from "react";
import './NewsPage.css'
import {News} from "../../../content/News";
import NewsCard from "../../ui_components/news_card/NewsCard";

const NewsPage: React.FC = () => {
  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div
      className="news-page-container"
      style={{
        width: 'calc(100% - 176px)',
        margin: '34px 88px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '34px',
        paddingBottom: '128px',
        minWidth: '1264px'
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
            minWidth: '1264px'
          }}
        >
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
    </div>
  )
}

export default NewsPage
