import choosingHookahBowlNewsImage from './../assets/icons/news/choosing_hookah_bowl_icon.png'
import guideToCoconutImage from './../assets/icons/news/guide_to_coconut_icon.png'
import howToChooseHookahImage from './../assets/icons/news/how_to_choose_hookah_icon.png'
import news4Image from './../assets/icons/news/carring_for_hookah_bowl.png'
import news5Image from './../assets/icons/news/news-5.png'

export interface NewsInfo {
  newsId: string,
  image: string;
  name: string;
  description: string;
  date: Date;
}

export const News: NewsInfo[] = [
  {
    newsId: '1',
    date: new Date(),
    image: choosingHookahBowlNewsImage,
    name: "Choosing the Right Hookah Bowl: A Comprehensive Guide",
    description: "Enhance your hookah experience with our guide on choosing the ideal hookah bowl. Explore factors like material, size, and design for a perfect smoking session. \n Materials, size, depth and others"
  },
  {
    newsId: '2',
    date: new Date(),
    image: howToChooseHookahImage,
    name:"How to Choose a Hookah: Tips and Recommendations for True Enthusiasts",
    description: "Discover the perfect hookah for your taste and style. Our guide offers tips on choosing the right type, size, and materials. Enjoy memorable hookah sessions with friends and family. Buy..."
  },
  {
    newsId: '3',
    date: new Date(),
    image: guideToCoconutImage,
    name: "The Ultimate Guide to Coconut Charcoal for Hookahs: Types, Production, and Benefits",
    description: "Discover the best coconut charcoal for hookahs! Enjoy pure tobacco flavors with even heat distribution and long-lasting performance. A hookah lover's ultimate choice."
  },
  {
    newsId: '4',
    date: new Date(),
    image: news4Image,
    name: "Caring for Hookah Bowls: Maintaining Quality and Enjoyment of Hookah Sessions",
    description: "Discover the best coconut charcoal for hookahs! Enjoy pure tobacco flavors with even heat distribution and long-lasting performance. A hookah lover's ultimate choice."
  },
  {
    newsId: '5',
    date: new Date(),
    image: news5Image,
    name: "Additions to the assortment of tobaccos: MustHave, Element, Tangiers, Fumari",
    description: "Discover the best coconut charcoal for hookahs! Enjoy pure tobacco flavors with even heat distribution and long-lasting performance. A hookah lover's ultimate choice."
  },
]
