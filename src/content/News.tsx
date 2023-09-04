import choosingHookahBowlNewsImage from './../assets/icons/news/choosing_hookah_bowl_icon.png'
import guideToCoconutImage from './../assets/icons/news/guide_to_coconut_icon.png'
import howToChooseHookahImage from './../assets/icons/news/how_to_choose_hookah_icon.png'
import news4Image from './../assets/icons/news/carring_for_hookah_bowl.png'
import news5Image from './../assets/icons/news/news-5.png'

export interface NewsInfo {
  newsId: string,
  image: string;
  name: string;
  shortNameInCard: string;
  description: string;
  date: Date;
  fullText: string;
}

export const News: NewsInfo[] = [
  {
    newsId: '1',
    date: new Date(),
    image: choosingHookahBowlNewsImage,
    name: "Choosing the Right Hookah Bowl:</br>  A Comprehensive Guide",
    shortNameInCard: "Choosing the Right Hookah Bowl:</br>  A Comprehensive Guide",
    description: "Enhance your hookah experience with our guide on choosing the ideal hookah bowl. Explore factors like material, size, and design for a perfect smoking session. \n Materials, size, depth and others",
    fullText:   'The hookah, also known as a water pipe or shisha, has been a popular method of smoking flavored tobacco for centuries. One of the key components of a hookah setup is the bowl, where the tobacco mixture is placed and heated. Choosing the right hookah bowl is essential for an enjoyable and smooth smoking experience. In this guide, we’ll walk you through the factors to consider when selecting the perfect hookah bowl.</p>' +
      '<p><b>1. Material:</b> Hookah bowls are commonly made from various materials, including clay, ceramic, glass, and silicone. Each material offers a different smoking experience. Clay and ceramic bowls are known for their heat retention, which helps distribute heat evenly to the tobacco. Glass bowls provide a visually appealing smoking experience and are easy to clean. Silicone bowls are durable and heat-resistant, making them a great option for frequent use.</p>' +
      '<p><b>2. Size:</b> Hookah bowls come in different sizes, typically categorized as small, medium, and large. The size of the bowl affects the smoking session\'s duration and intensity. A small bowl is ideal for solo or shorter sessions, while a larger bowl is better suited for group sessions. Keep in mind that a larger bowl might require more tobacco to fill, so consider your preferences and the number of participants when selecting the size.</p>' +
      '<p><b>3. Depth and Shape:</b> The depth and shape of the bowl influence how the tobacco is heated and the overall smoking experience. Shallow bowls heat the tobacco faster and can result in stronger flavors and thicker smoke. Deeper bowls provide a longer-lasting session and a milder flavor profile. Experimenting with different depths and shapes can help you find the bowl that suits your taste preferences.</p>' +
      '<p><b>4. Heat Management:</b> Effective heat management is crucial for preventing the tobacco from burning. Some bowls come with built-in heat management systems, like raised spire or grooves that help regulate the heat distribution. These features can be particularly useful for beginners or those who want to simplify their hookah setup.</p>' +
      '<p><b>5. Bowl Design:</b> Hookah bowls can have various designs, from traditional to modern. Traditional designs often have intricate patterns and reflect the cultural origins of hookah smoking. Modern designs may prioritize aesthetics and innovative features. Choose a bowl design that resonates with your style and preferences.</p>' +
      '<p>Conclusion:</b> Selecting the right hookah bowl is a personal journey that involves considering factors like material, size, depth, shape, heat management, design, compatibility, and budget. Experimentation is key to finding the bowl that suits your smoking preferences and enhances your overall hookah experience. By taking the time to explore different options and understanding how each factor contributes to the smoking session, you\'ll be able to make an informed decision and enjoy countless enjoyable hookah sessions.</p>'
  },
  {
    newsId: '2',
    date: new Date(),
    image: howToChooseHookahImage,
    name: "How to Choose a Hookah:</br> Tips and Recommendations for True Enthusiasts",
    shortNameInCard: "How to Choose a Hookah:</br> Tips and Recommendations for True Enthusiasts",
    description: "Discover the perfect hookah for your taste and style. Our guide offers tips on choosing the right type, size, and materials. Enjoy memorable hookah sessions with friends and family. Buy...",
    fullText: '<p><b>Introduction:</b> The hookah, also known as a water pipe or shisha, is an ancient Arabic invention that has gained popularity in many countries and cultures worldwide. With its unique flavors and social appeal, the hookah attracts a diverse community of enthusiasts. However, amidst the multitude of hookah options available in the market, selecting the right one can be a challenging task. In this article, we will provide you with a guide on choosing the perfect hookah that will cater to your needs and preferences.</p>' +
      '<p><b>1) Type of Hookah:</b> The first decision you need to make is the type of hookah you want to purchase. There are various types of hookahs, such as the classic hookah, single-hose or multi-hose models, portable hookahs, and more. The classic hookah remains the most popular and traditional choice, but if you plan to enjoy hookah sessions with friends, multi-hose models might be worth considering.</p>' +
      '<p><b>2) Size and Portability:</b> Consider the size and portability of the hookah, especially if you intend to smoke in different locations. A large and heavy hookah can be cumbersome to transport, so portable models with compact dimensions might be a more practical choice for active individuals.</p>' +
      '<p><b>3) Materials:</b> Hookahs are available in various materials, including glass, metal, ceramics, and more. Each material has its own advantages and disadvantages. For example, glass hookahs offer an elegant appearance and allow you to observe the smoking process, but they are more fragile. Metal hookahs are sturdier but can get hot to the touch. Choose a material that aligns with your lifestyle and taste.</p>' +
      '<p><b>4) Quality and Brand:</b> When selecting a hookah, pay attention to its quality and the reputation of the brand. Well-known and reputable brands often offer high-quality products made from safe materials. To avoid counterfeit products and unscrupulous sellers, purchase your hookah from trusted and reliable sources.</p>' +
      '<p><b>5) Additional Accessories:</b> After choosing the main hookah, don\'t forget about additional accessories that can enhance your smoking experience. These may include extra hoses, comfortable mouthpieces, a variety of flavored additives, mouthpieces, and cleaning tools. Find out what accessories come with the hookah and consider purchasing any additional items separately.</p>' +
      '<p><b>Conclusion:</b> Selecting the right hookah is a personal process that depends on your preferences and needs. We hope that our tips will assist you in making an informed decision and enjoying delightful hookah sessions with friends or in solitude. Remember, a quality hookah can not only be a pleasurable pastime but also a great tool for social gatherings and connecting with loved ones.</p>'
  },
  {
    newsId: '3',
    date: new Date(),
    image: guideToCoconutImage,
    name: "The Ultimate Guide to Coconut Charcoal for Hookahs: Types, Production, and Benefits",
    shortNameInCard: "The Ultimate Guide to Coconut Charcoal for Hookahs: Types, Production, and Benefits",
    description: "Discover the best coconut charcoal for hookahs! Enjoy pure tobacco flavors with even heat distribution and long-lasting performance. A hookah lover's ultimate choice.",
    fullText: '<p>Imagine sitting outdoors with your friends, enjoying a hookah session, savoring the delightful taste of tobacco, and engaging in a serene conversation. But have you ever wondered where the coal for your hookah actually comes from or how it\'s made? Today, we\'ll delve into that fascinating process.</p>' +
      '<p>Specialized shops offer a wide array of tobacco, charcoal, and hookah accessories, providing hundreds of options that might overwhelm beginners. If you desire a clean and enjoyable hookah experience, it\'s essential not only to invest in high-quality tobacco but also to gain some basic knowledge about hookahs. One crucial aspect that significantly influences the pipe\'s taste is the choice of charcoal.</p>' +
      '<p>Types of Charcoal for Hookahs: </p>' +
      '<p>When it comes to charcoal for hookahs, several varieties are available, including coconut charcoal, traditional charcoal, walnut shell charcoal, grapevine charcoal, and olive pit charcoal. These charcoals are available in the form of sticks, tablets, or cubes, each boasting distinct characteristics and a loyal fan base. However, the undisputed favorite among them is coconut shell charcoal, prized for its absence of unwanted aftertastes and harmful substances, even heat distribution, and extended heat retention. With coconut charcoal, you can fully savor the pure taste of your chosen tobacco flavors, whether they be fruity, sour, or dessert-inspired.</p>' +
      '<p>The Ingredients of Coconut Charcoal</p>' +
      '<p>The primary component of coconut charcoal is, unsurprisingly, coconut shells. Although cooking techniques might vary, the overall composition of the charcoal remains relatively consistent. While some elements can be substituted, the core building block always revolves around coconut shells. The essential ingredients include:</p>' +
      '<ol><li>Quality coconut shells: Ensure they are completely dry, without any moisture content.</li>' +
      '<li>Water: Used to create shape and form.</li>' +
      '<li>Extract of cassava root starch: This is the most crucial and, often, the most expensive ingredient. The extract enables the cube to maintain its shape even at high temperatures, preventing it from breaking down after a short period of heating. It acts as the binding agent that holds the charcoal together. While some manufacturers may resort to other substitutes like sulfur for cost-cutting, the quality of the coconut charcoal significantly diminishes in such cases.</li></ol>' +
      '<p>The Process of Making Coconut Charcoal</p>' +
      '<p>Although the composition of coconut charcoal is relatively simple, the production process is complex and time-consuming. Not all regions can provide high-quality raw materials, and using wet coconut shells can lead to foul odors, poor heating, and crumbling. The process for making coconut cubes typically unfolds as follows:</p>' +
      '<ol><li>Hand-picking coconut shells: Skilled workers remove the coconut flesh entirely from the shells.</li>' +
      '<li>Air-drying the shells: The goal here is to eliminate all moisture from within the nuts. Established manufacturers employ special dryers for this purpose.</li>' +
      '<li>Grinding the shells: The shells are ground into a fine powder, which is then mixed with water and cassava root extract to form a slurry.</li>' +
      '<li>Pressing the mixture: The slurry is pressed to remove excess moisture and air.</li>' +
      '<li>Cutting into cubes: The pressed material is sent to cutting machines, which form the familiar cube shapes of coconut charcoal.</li>' +
      '<li>Drying and firing: The pieces are left to dry thoroughly, and firing is conducted to solidify the components, creating dense and high-quality charcoal cubes.</li></ol>' +
      '<p>It\'s worth noting that reputable coconut charcoal producers avoid adding ordinary wood to the process. While some low-quality manufacturers may attempt to cut costs by incorporating such additives, discerning consumers will notice the difference, and such products won\'t stay in the market for long.</p>' +
      '<p>Indonesia is a hub for most coconut charcoal factories due to its abundant raw materials and a climate conducive to air-drying. Consequently, a substantial portion of modern charcoal production occurs in this country.</p>' +
      '<p>In conclusion, coconut charcoal stands as the top choice for hookah enthusiasts seeking a superb, flavorful, and enjoyable smoking experience. Understanding its production process and ingredients empowers hookah users to make informed decisions and ensures they get the most out of their hookah sessions. So, go ahead and enjoy your hookah with the finest coconut charcoal, reveling in its pure taste and long-lasting performance.</p>'
  },
  {
    newsId: '4',
    date: new Date(),
    image: news4Image,
    shortNameInCard: "Caring for Hookah Bowls: Maintaining Quality </br> and Enjoyment of Hookah Sessions",
    name: "Caring for Hookah Bowls: Maintaining Quality and Enjoyment of Hookah Sessions",
    description: "Enhance hookah enjoyment with proper care. Learn how to clean and preserve hookah bowls for fresh, unforgettable smoking sessions. Expert tips and maintenance techniques.",
    fullText: '<p>A hookah is not only about pleasure but also an art. To ensure each hookah session brings you unparalleled enjoyment, it is essential to properly care for your hookah bowls. In this article, we will share some valuable tips on how to best care for your bowls, preserving their quality and infusing unique aromas into your smoking experience.</p>' +
      '<p><b>Regular Cleaning - Key to Fresh Taste</b></p>' +
      '<p>After each hookah session, make sure to thoroughly clean the hookah bowl from tobacco residue and ash. Use a soft sponge or a designated dishwashing brush for this task. Cleaning the bowl with natural flavor enhancers, such as lemon or mint leaves, will also help maintain freshness and pure taste.</p>' +
      '<p><b>Packing Technique - Ensuring Even Tobacco Burn</b></p>' +
      '<p>Properly packing tobacco in the hookah bowl is crucial for even burning and rich smoke. Load the tobacco gradually, ensuring an even distribution across the bowl\'s surface. Avoid dense packing to allow sufficient airflow.</p>' +
      '<p><b>Gentle Handling - Preventing Damage</b></p>' +
      '<p>Handle your hookah bowl with care to prevent damages or deformations. Avoid sharp impacts and store the bowl in a safe place, shielded from potential knocks or drops. Gradually cool the bowl before cleaning to prevent temperature-related damage.</p>' +
      '<p><b>Selecting the Right Bowl - A Personal Choice</b></p>' +
      '<p>A diverse selection of hookah bowls allows you to find the perfect match for your smoking preferences. Consider your hookah\'s size and shape when choosing a bowl to ensure optimal compatibility between the devices. Remember that the right bowl significantly impacts the taste and quality of your hookah session.</p>' +
      '<p><b>Replacement When Needed - Refreshing Your Smoking Experience</b></p>' +
      '<p>If you notice any signs of wear or damage on your hookah bowl, don\'t hesitate to replace it with a new one. Regularly updating your bowls will ensure you enjoy the finest smoking quality and explore new aromas.</p>' +
      '<p>Caring for your hookah bowls is a vital aspect of preserving the high standards and uniqueness of the hookah culture. By following simple tips for bowl maintenance, you will uncover new facets of the hookah experience and transform each session into a sensory journey of captivating aromas and flavors. Remember to show tenderness and attention to your hookah accessories, and they will reward you with rich emotions and pleasure for many years to come.</p>'
  },
  {
    newsId: '5',
    date: new Date(),
    image: news5Image,
    shortNameInCard: "Additions to the assortment </br>of tobaccos: MustHave, Element, Tangiers, Fumari",
    name: "Additions to the assortment </br>of tobaccos: MustHave, Element, Tangiers, Fumari",
    description: "New flavors and tobaccos now available at Hookah PT online store! Discover MustHave, Fumari, DarkSide, Element, and Tangiers for unique and indulgent hookah experiences.",
    fullText: '<p>Great news for all hookah enthusiasts! Hookah PT online store is excited to announce the arrival of new exciting flavors and tobaccos. We now proudly offer a range of renowned brands including MustHave, Fumari, DarkSide, Element, and Tangiers.</p>' +
      '<p>MustHave represents the epitome of quality and unique flavor combinations. They offer a wide spectrum of aromas that are sure to captivate your taste buds.</p>' +
      '<p>Fumari, a global leader in the hookah tobacco industry, is known for its distinctive and complex flavors. They provide rich and indulgent aromas that will keep you coming back for more.</p>' +
      '<p>DarkSide is a unique brand known for its exceptional blends and exclusive flavors. They will deliver unparalleled sensations and an unforgettable hookah smoking experience.</p>' +
      '<p>Element is a brand recognized for its natural ingredients and commitment to environmentally friendly production. Their tobaccos offer vibrant and fresh flavors that will delight you and your friends.</p>' +
      '<p>Tangiers represents the pinnacle of craftsmanship in producing hookah tobacco. Their unique blends will make your smoking session truly remarkable and exceed all expectations.</p>' +
      '<p>Don\'t miss the opportunity to try these exciting new additions! Visit the Hookah PT online store and explore our wide selection of flavors and tobaccos from MustHave, Fumari, DarkSide, Element, and Tangiers. Choose your perfect flavor and indulge in amazing hookah sessions with us!</p>'
  },
]

//@ts-ignore
