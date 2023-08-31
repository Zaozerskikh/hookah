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
        <span className="header-text">{article.name}</span>
        <span className="header-date">{`${article.date.getDate()}-${article.date.getMonth()}-${article.date.getFullYear()}`}</span>
      </div>
      <img src={article.image} alt={"news-img"} className="image"/>
      <p className="detailed_news_text">
        TODO - разобраться с хранением текста новостей<br/>
        The hookah, also known as a water pipe or shisha, has been a popular method of smoking flavored tobacco for centuries. One of the key components of a hookah setup is the bowl, where the tobacco mixture is placed and heated. Choosing the right hookah bowl is essential for an enjoyable and smooth smoking experience. In this guide, we’ll walk you through the factors to consider when selecting the perfect hookah bowl.
        1. Material: Hookah bowls are commonly made from various materials, including clay, ceramic, glass, and silicone. Each material offers a different smoking experience. Clay and ceramic bowls are known for their heat retention, which helps distribute heat evenly to the tobacco. Glass bowls provide a visually appealing smoking experience and are easy to clean. Silicone bowls are durable and heat-resistant, making them a great option for frequent use.
        2. Size: Hookah bowls come in different sizes, typically categorized as small, medium, and large. The size of the bowl affects the smoking session's duration and intensity. A small bowl is ideal for solo or shorter sessions, while a larger bowl is better suited for group sessions. Keep in mind that a larger bowl might require more tobacco to fill, so consider your preferences and the number of participants when selecting the size.
        3. Depth and Shape: The depth and shape of the bowl influence how the tobacco is heated and the overall smoking experience. Shallow bowls heat the tobacco faster and can result in stronger flavors and thicker smoke. Deeper bowls provide a longer-lasting session and a milder flavor profile. Experimenting with different depths and shapes can help you find the bowl that suits your taste preferences.
        4. Heat Management: Effective heat management is crucial for preventing the tobacco from burning. Some bowls come with built-in heat management systems, like raised spire or grooves that help regulate the heat distribution. These features can be particularly useful for beginners or those who want to simplify their hookah setup.
        5. Bowl Design: Hookah bowls can have various designs, from traditional to modern. Traditional designs often have intricate patterns and reflect the cultural origins of hookah smoking. Modern designs may prioritize aesthetics and innovative features. Choose a bowl design that resonates with your style and preferences.
        Conclusion: Selecting the right hookah bowl is a personal journey that involves considering factors like material, size, depth, shape, heat management, design, compatibility, and budget. Experimentation is key to finding the bowl that suits your smoking preferences and enhances your overall hookah experience. By taking the time to explore different options and understanding how each factor contributes to the smoking session, you'll be able to make an informed decision and enjoy countless enjoyable hookah sessions.
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

export default DetailedNewsPage
