import React, { useState } from "react";
import "./Carousel.css";
import Boop from "../boop/Boop";

interface CarouselProps {
  items: string[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [xPos, setXPos] = useState([0, 1000, 2000, 3000]);

  const moveNext = () => {
    let newPositions = xPos.slice();
    newPositions.push(newPositions.shift());
    setXPos(newPositions);
  };

  const determineStyle = (index: number, showAnimation: boolean) => {
    const transition = showAnimation
      ? {
        transition: 'transform 200ms linear',
        WebkitTransition: 'transform 200ms linear',
        MozTransition: 'transform 200ms linear',
        msTransition: 'transform 200ms linear',
        OTransition: 'transform 200ms linear',
        opacity: 1,
      }
      : {};

    return {
      transform: `translate3d(${xPos[index]}px, 0px, 0px)`,
      ...transition,
    };
  };

  return (
    <div className="carousel-wrapper">
      {items.map((item, index) => {
        return (
          <div
            onClick={moveNext}
            className="carousel-item"
          >
            <div
              style={determineStyle(index, (xPos[index] > 0))}
              className="carousel-item"
            >
              <div
                style={{
                  transition: "all .5s ease",
                  WebkitTransition: "all .5s ease",
                  MozTransition: "all .5s ease",
                  width: '784px'
                }}
              >
                <Boop>
                  <p className="greetings-text"
                     dangerouslySetInnerHTML={{
                       __html: item
                     }}
                  />
                </Boop>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


//@ts-ignore
export default Carousel;
