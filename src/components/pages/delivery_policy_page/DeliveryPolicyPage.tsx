import React, {useState} from "react";
import './DeliveryPolicyPage.css'
import Block, {BlockProps} from "./block/Block";
import StandardButton from "../../ui_components/standart_button/StandartButton";
import {RoutePaths} from "../../../routes/RoutePaths";
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

const Blocks: BlockProps[] = [
  {
    headerText: 'Quick Delivery Times ⏰',
    mainText: 'We understand that waiting for your tobacco is no fun. That’s why we’re dedicated to swift delivery times. On average, your tobacco products will arrive within 3 to 7 working days. For those in more remote areas, we’re committed to ensuring your order reaches you within 14 working days. We value your time and aim to provide a seamless delivery experience.'
  },
  {
    headerText: 'Transparent Pricing ✌️',
    mainText: 'At Hookah PT, we combine premium quality </br> with seamless delivery, making us your ultimate </br> choice for tobacco products in Portugal.</br>Thank you for choosing us as your partner in creating memorable hookah moments'
  },
  {
    headerText: 'Enjoy the Convenience ✨',
    mainText: 'Whether you’re in the vibrant streets of Lisbon, </br> the historic charm of Porto, or the idyllic beauty of Azores, our delivery service extends to every corner of Portugal. Embrace the convenience of having your favorite tobacco products delivered to your door, allowing you to focus on what matters most — enjoying your hookah experience.'
  },
  {
    headerText: 'Order Now 💎',
    mainText: 'With Hookah PT, your tobacco delivery is in safe hands. Our efficient and reliable service ensures your products arrive promptly and intact. Say goodbye to the hassle of visiting physical stores or waiting in lines. Place your order today and elevate your hookah enjoyment to a new level with Hookah PT.'
  },
  {
    headerText: 'CTT Partnership 🚗',
    mainText: 'At Hookah PT, we’ve chosen <a href="https://www.ctt.pt/" target="_blank" rel="noreferrer">CTT</a> as our delivery partner because of their renowned reliability </br>and extensive network. With CTT’s expertise in logistics, your tobacco order is in safe hands </br> from the moment you place it to the moment it arrives at your doorstep.'
  },
  {
    headerText: 'Real-Time Tracking 🔦',
    mainText: 'We understand the anticipation of receiving your tobacco products. That’s why, once your order is dispatched, we provide you with a unique tracking number. With this tracking number, you can monitor the progress of your delivery in real-time. Simply enter the tracking number on our website, and you’ll have instant access to the status of your order.'
  },
]

const DeliveryPolicyPage: React.FC = () => {
  const navigate = useNavigate();

  useState(() => {
    window.scrollTo({ top: 0 });
  })

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })

  return(
    <div className="delivery-policy-container">
      <div className="h1">🚚 Our Delivery Policy</div>
      <div style={{ display: "flex", flexDirection: 'column', gap: '8px'}}>
        <div className="h2">⚡ Fast and Reliable Tobacco Delivery Across Portugal</div>
        <div className="common-text">
          Looking for hassle-free tobacco delivery in Portugal? Look no further than Hookah PT! We specialize in delivering premium tobacco products right to your doorstep, whether you're in a bustling city or a tranquil island. Explore our comprehensive delivery service that covers cities like Lisbon, Porto, Vila Nova de Gaia, Faro, Albufeira, Portimao, Sintra, Evora, Cascais, Coimbra and more, as well as picturesque island destinations like Madeira and Azores.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: 'column', gap: '8px'}}>
        <div className="h2">👀 Our Delivery Features</div>
        <div className="common-text">
          At Hookah PT, we combine premium quality with seamless delivery, making us your ultimate choice for tobacco products in Portugal. Thank you for choosing us as your partner in creating memorable hookah moments.
        </div>
      </div>
      <div className="blocks-wrapper">
        {
          Blocks.map((block, idx) => (
            <Block
              headerText={block.headerText}
              mainText={block.mainText}
              key={idx}
            />
          ))
        }
      </div>
      <div style={{ display: 'flex', width: 'TS2528: A module cannot have multiple default exports.', alignItems: 'center', justifyContent: 'center'}}>
        <StandardButton
          text="Open catalog"
          onClickAction={() => navigate(RoutePaths.TOBACCO)}
          buttonStyle={{
            width: '282px',
            height: '60px',
            marginTop: '48px',
            marginBottom: '128px'
          }}
        />
      </div>
    </div>
  )
}

//@ts-ignore [ide bug with default exports]
export default DeliveryPolicyPage;
