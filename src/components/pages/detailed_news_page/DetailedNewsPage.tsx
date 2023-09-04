import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {News} from "../../../content/News";
import './DetailedNewsPage.css'
import StandardButton from "../../ui_components/standart_button/StandartButton";
import {RoutePaths} from "../../../routes/RoutePaths";

const DetailedNewsPage: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const article = News.find(news => news.newsId === id);

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div className="detailed-news-container">
      <div className="header-container">
        <span className="header-text" dangerouslySetInnerHTML={{ __html: article.name }} />
        <span className="header-date">
          {`${article.date.getDate()}-${article.date.getMonth()}-${article.date.getFullYear()}`}
        </span>
      </div>
      <img src={article.image} alt={"news-img"} className="image"/>
      <p className="detailed_news_text">
        <div dangerouslySetInnerHTML={{ __html: article.fullText }} />
      </p>
      <StandardButton
        text="Return to all news"
        buttonStyle={{
          height: '60px',
          width: '334px',
          padding: '12px 64px',
          marginTop: '32px'
        }}
        onClickAction={() => navigate(RoutePaths.NEWS)}
      />
    </div>
)
}

//@ts-ignore
export default DetailedNewsPage
