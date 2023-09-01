import React, {useEffect, useState} from "react";
import './NewsPage.css'
import {News} from "../../../content/News";
import NewsCard from "../../ui_components/news_card/NewsCard";
import {useDispatch} from "react-redux";
import {setShopGridSize} from "../../../redux/shop_grid_size_reducer/ShopGridSizeReducer";

const NewsPage: React.FC = () => {
  const [countCardsInRow, setCountCardsInRow] = useState(Math.floor((window.innerWidth - 80) / 432))
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      const count = Math.floor((window.innerWidth - 80) / 432)
      setCountCardsInRow(count)
      dispatch(setShopGridSize(count * 432 - 32, window.innerWidth, true, 432, 32))
    }

    handleResize()
    dispatch(setShopGridSize(Math.floor((window.innerWidth - 80) / 432) * 432 - 32, window.innerWidth, true, 432, 32))
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch])

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  return(
    <div
      className="news-page-container"
      style={{
        width: 'calc(100% - 80px)',
        margin: '34px 40px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '34px',
        paddingBottom: '128px',
        minHeight: `${window.innerHeight - 500 - 200}px`
      }}
    >
      <span
        className="news-page-header"
        style={{
          maxWidth: `${countCardsInRow * 432 - 32}px`
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
            maxWidth: `${countCardsInRow * 432 - 32}px`
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
