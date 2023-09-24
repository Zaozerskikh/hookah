import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {News} from "../../../content/News";
import './DetailedNewsPage.css'
import StandardButton from "../../ui_components/standart_button/StandartButton";
import {RoutePaths} from "../../../routes/RoutePaths";
import LoadingIcon from "../../ui_components/loading/LoadingIcon";
import {useMediaQuery} from "react-responsive";

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

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  const renderDesktop = () => {
    return(
      article ? (
        <div className="detailed-news-container" style={{ width: isDesktopOrLaptop ? '1264px' : '948px'}}>
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

  const renderMobile = () => {
    return(
      article ? (
        <div className="detailed-news-container-mobile">
          <div className="date-header-wrapper">
            <div className="article-name-mobile">
              {article.name.replaceAll('</br>', '')}
            </div>
            <div className="article-date-mobile">
              {`${article.date.getDate()}-${article.date.getMonth()}-${article.date.getFullYear()}`}
            </div>
          </div>
          <img
            src={article.image}
            alt={"news-img"}
            className="image-mob"
          />
          <div className="text-mobile" dangerouslySetInnerHTML={{ __html: article.fullText}}/>
          <StandardButton
            text="All news"
            buttonStyle={{
              alignSelf: 'center',
              width: '262px',
              height: '48px',
              marginTop: '24px',
              borderRadius: '8px'
            }}
            isMobile={true}
            onClickAction={() => navigate(RoutePaths.NEWS)}
          />
        </div>
      ) : (
        <div style={{ width: '100%', display: "flex", alignItems: 'center'}}>
          <LoadingIcon/>
        </div>
      )
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

//@ts-ignore
export default DetailedNewsPage
