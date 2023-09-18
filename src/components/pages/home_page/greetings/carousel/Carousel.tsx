import React, {useCallback, useEffect, useState} from "react";
import "./Carousel.css";
import Boop from "../boop/Boop";

export interface CarouselItem {
  item: string;
  key: number;
}
interface CarouselProps {
  items: CarouselItem[];
  isMobile ? : boolean;
  longestKey ? : number;
}

const Carousel: React.FC<CarouselProps> = ({ items , isMobile, longestKey}) => {
  const [xPos, setXPos] = useState([0, 1000, 2000, 3000]);
  const [isSwipingPaused, setIsSwipingPaused] = useState(false);
  const [textCarouselWidth, setTextCarouselWidth] = useState(window.innerWidth - 64);

  useEffect(() => {
    const updateWidth = () => {
      if (isMobile) {
        setTextCarouselWidth(document.getElementById("greetings-container-mobile")?.offsetWidth)
      }
    };

    window.addEventListener('resize', updateWidth);
    updateWidth();
    console.log(window.devicePixelRatio + 'xcefvrg')

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [isMobile]);

  const moveNext = () => {
    let newPositions = xPos.slice();
    newPositions.push(newPositions.shift());
    setXPos(newPositions);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwipingPaused) {
        moveNext();
      }
    }, 8000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  useEffect(() => {
    if (isMobile) {
      setIsSwipingPaused(false)
    }
  }, [isMobile]);


  const determineStyle = useCallback((index: number, showAnimation: boolean) => {
    const transition = showAnimation
      ? {
        transition: 'transform 300ms linear',
        WebkitTransition: 'transform 300ms linear',
        MozTransition: 'transform 300ms linear',
        msTransition: 'transform 300ms linear',
        OTransition: 'transform 300ms linear',
        opacity: 1,
      }
      : {};

    return {
      transform: `translate3d(${-xPos[index]}px, 0px, 0px)`,
      ...transition,
    };
  }, [xPos]);

  return (
    <div
      className="carousel-wrapper"
      id="carousel-wrapper"
      style={{
        top: isMobile ? '0' : '64px',
        right: isMobile ? undefined : '-1186px',
        left: !isMobile ? undefined : '1002px'
      }}
      onMouseEnter={() => {
        if (!isMobile) {
          setIsSwipingPaused(true)}
        }
      }
      onMouseLeave={() => {
        if (!isMobile) {
          setIsSwipingPaused(false)}
        }
      }
      onMouseDown={() => {
        if (isMobile) {
          setIsSwipingPaused(true)}
        }
      }
      onMouseUp={() => {
        if (isMobile) {
          setIsSwipingPaused(false)}
        }
      }
    >
      {items.map((item, index) => {
        return (
          <div
            onClick={moveNext}
            className="carousel-item"
            key={item.key}
          >
            <div
              style={{...determineStyle(index, (xPos[index] > 0))}}
              className="carousel-item"
            >
              <div
                id={`carousel-item-text-wrapper-${item.key === longestKey ? item.key.toString() : ''}`}
                style={{
                  transition: "all .5s ease",
                  WebkitTransition: "all .5s ease",
                  MozTransition: "all .5s ease",
                  width: isMobile ? `${textCarouselWidth - 32}px` : '784px'
                }}
              >
                <Boop
                  rotation={6}
                  isMobile={isMobile}
                >
                  <p
                    className="greetings-text"
                    style={isMobile ? {
                      color: 'var(--main-white)',
                      fontFamily: 'Monsterrat-400, serif',
                      fontSize: '16px',
                      lineHeight: '144%',
                      padding: 0,
                      margin: 0,
                    } :{}}
                    dangerouslySetInnerHTML={{
                      __html: item.item
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
