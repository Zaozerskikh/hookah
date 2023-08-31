import choosingHookahBowlNewsImage from './../assets/icons/news/choosing_hookah_bowl_icon.png'
import guideToCoconutImage from './../assets/icons/news/guide_to_coconut_icon.png'
import howToChooseHookahImage from './../assets/icons/news/how_to_choose_hookah_icon.png'

export interface NewsInfo {
  newsId: string,
  image: string;
  name: string;
  description: string;
}

export const News: NewsInfo[] = [
  {
    newsId: '1',
    image: choosingHookahBowlNewsImage,
    name: "Choosing the Right Hookah Bowl: A Comprehensive Guide",
    description: "Enhance your hookah experience with our guide on choosing the ideal hookah bowl. Explore factors like material, size, and design for a perfect smoking session. \n Materials, size, depth and others"
  },
  {
    newsId: '2',
    image: howToChooseHookahImage,
    name:"How to Choose a Hookah: Tips and Recommendations for True Enthusiasts",
    description: "Discover the perfect hookah for your taste and style. Our guide offers tips on choosing the right type, size, and materials. Enjoy memorable hookah sessions with friends and family. Buy..."
  },
  {
    newsId: '3',
    image: guideToCoconutImage,
    name: "The Ultimate Guide to Coconut Charcoal for Hookahs: Types, Production, and Benefits",
    description: "Discover the best coconut charcoal for hookahs! Enjoy pure tobacco flavors with even heat distribution and long-lasting performance. A hookah lover's ultimate choice."
  }
]
