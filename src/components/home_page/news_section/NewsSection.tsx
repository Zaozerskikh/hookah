import React from "react";
import './NewsSection.css'
import NewsCard from "../news_card/NewsCard";
import choosingHookahBowlNewsImage from './../../../assets/icons/news/choosing_hookah_bowl_icon.png'
import guideToCoconutImage from './../../../assets/icons/news/guide_to_coconut_icon.png'
import howToChooseHookahImage from './../../../assets/icons/news/how_to_choose_hookah_icon.png'
import {RoutePaths} from "../../../routes/RoutePaths";
import {Link} from "react-router-dom";

const NewsSection: React.FC = () => {
  return(
    <div className="news-section-container">
      <div className="news-section-cards-wrapper">
        <NewsCard
          image={choosingHookahBowlNewsImage}
          name="Choosing the Right Hookah Bowl: A Comprehensive Guide"
          description="Enhance your hookah experience with our guide on choosing the ideal hookah bowl. Explore factors like material, size, and design for a perfect smoking session. \n Materials, size, depth and others"
        />
        <NewsCard
          image={howToChooseHookahImage}
          name="How to Choose a Hookah: Tips and Recommendations for True Enthusiasts"
          description="Discover the perfect hookah for your taste and style. Our guide offers tips on choosing the right type, size, and materials. Enjoy memorable hookah sessions with friends and family. Buy..."
        />
        <NewsCard
          image={guideToCoconutImage}
          name="The Ultimate Guide to Coconut Charcoal for Hookahs: Types, Production, and Benefits"
          description="Discover the best coconut charcoal for hookahs! Enjoy pure tobacco flavors with even heat distribution and long-lasting performance. A hookah lover's ultimate choice."
        />
      </div>
      <Link to={RoutePaths.NEWS} className="news-link">
        <button className="all-news-button">
          <span className="link-text">All news</span>
        </button>
      </Link>
    </div>
  )
}

export default NewsSection;
