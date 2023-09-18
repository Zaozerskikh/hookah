import React, {useEffect, useRef, useState} from "react";
import './AutoscrollButtonsSection.css'
import StandardButton from "../../../../ui_components/standart_button/StandartButton";
import {useNavigate} from "react-router-dom";
import {RoutePaths} from "../../../../../routes/RoutePaths";

const autoscrollSpeed = {
  STATIC: 0,
  MOVING: 1
}

const scrollDirections = {
  RIGHT: 'RIGHT',
  LEFT: "LEFT"
}

const AutoscrollButtonsSection : React.FC = () => {
  const containerRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(autoscrollSpeed.MOVING);
  const [scrollDirection, setScrollDirection] = useState(scrollDirections.RIGHT);
  const navigate = useNavigate()

  useEffect(() => {
    const container = containerRef.current;
    const speed = scrollSpeed
    const currDirection = scrollDirection

    const scrollContent = () => {
      if (currDirection === scrollDirections.RIGHT) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= 630) {
          setScrollDirection(scrollDirections.LEFT);
        }
      } else {
        container.scrollLeft = 0;
        if (container.scrollLeft <= 0) {
          setScrollDirection(scrollDirections.RIGHT);
        }
      }
    };

    const scrollInterval = setInterval(scrollContent, 35);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [scrollDirection, scrollSpeed]);

  return (
    <div
      className="scrollable-container"
      ref={containerRef}
      onTouchStart={() => setScrollSpeed(autoscrollSpeed.STATIC)}
      onTouchEnd={() => setScrollSpeed(autoscrollSpeed.MOVING)}
      onTouchCancel={() => setScrollSpeed(autoscrollSpeed.MOVING)}
      style={{
        scrollBehavior: scrollDirection === scrollDirections.RIGHT ? 'smooth' : 'auto',
      }}
    >
      <div className="scroll-content">
        <StandardButton
          text="Darkside"
          buttonStyle={{
            height: '40px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'white',
            borderRadius: '24px',
            padding: '8px 22px',
          }}
          isMobile={true}
          onHoverColor="white"
          onClickAction={() => navigate(RoutePaths.DARKSIDE)}
        />
        <StandardButton
          text="Musthave"
          buttonStyle={{
            height: '40px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'white',
            borderRadius: '24px',
            padding: '8px 22px',
          }}
          isMobile={true}
          onHoverColor="white"
          onClickAction={() => navigate(RoutePaths.MUSTHAVE)}
        />
        <StandardButton
          text="Element"
          buttonStyle={{
            height: '40px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'white',
            borderRadius: '24px',
            padding: '8px 22px',
          }}
          isMobile={true}
          onHoverColor="white"
          onClickAction={() => navigate(RoutePaths.ELEMENT)}
        />
        <StandardButton
          text="Tangiers"
          buttonStyle={{
            height: '40px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'white',
            borderRadius: '24px',
            padding: '8px 22px',
          }}
          isMobile={true}
          onHoverColor="white"
          onClickAction={() => navigate(RoutePaths.TANGIERS)}
        />
        <StandardButton
          text="Fumari"
          buttonStyle={{
            height: '40px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'white',
            borderRadius: '24px',
            padding: '8px 22px',
          }}
          isMobile={true}
          onHoverColor="white"
          onClickAction={() => navigate(RoutePaths.FUMARI)}
        />
        {window.innerWidth < 700 && (
          <StandardButton
            text="Darkside"
            buttonStyle={{
              height: '40px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'white',
              borderRadius: '24px',
              padding: '8px 22px',
            }}
            isMobile={true}
            onHoverColor="white"
            onClickAction={() => navigate(RoutePaths.DARKSIDE)}
          />
        )}
        {window.innerWidth < 700 && (
          <StandardButton
            text="Musthave"
            buttonStyle={{
              height: '40px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'white',
              borderRadius: '24px',
              padding: '8px 22px',
            }}
            isMobile={true}
            onHoverColor="white"
            onClickAction={() => navigate(RoutePaths.MUSTHAVE)}
          />
        )}
        {window.innerWidth < 700 && (
          <StandardButton
            text="Element"
            buttonStyle={{
              height: '40px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'white',
              borderRadius: '24px',
              padding: '8px 22px',
            }}
            isMobile={true}
            onHoverColor="white"
            onClickAction={() => navigate(RoutePaths.ELEMENT)}
          />
        )}
      </div>
    </div>
  );
}

export default AutoscrollButtonsSection
