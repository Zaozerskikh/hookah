import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {News} from "../../../content/News";
import './DetailedNewsPage.css'
import StandardButton from "../../ui_components/standart_button/StandartButton";
import {RoutePaths} from "../../../routes/RoutePaths";
import LoadingIcon from "../../ui_components/loading/LoadingIcon";

const DetailedNewsPage: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(News.find(news => news.newsId === id));

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  useEffect(() => {
    if (!id || !article) {
      navigate(RoutePaths.NOT_FOUND)
    }
  }, [id, article, navigate]);

  return(
    article ? (
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
    ) : (
      <div style={{ minHeight: `${Math.max(window.innerHeight - 500, 300)}px`, display: "flex", alignItems: 'center'}}>
        <LoadingIcon/>
      </div>
    )
  )
}

//@ts-ignore
export default DetailedNewsPage
