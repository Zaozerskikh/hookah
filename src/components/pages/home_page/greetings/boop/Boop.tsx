import { animated, useSpring } from 'react-spring';
import React, {useEffect, useState} from "react";
import {useDrag} from "@use-gesture/react";
import {ReactDOMAttributes} from "@use-gesture/react/dist/declarations/src/types";
import boop from './he.mp3';

interface BoopProps {
  rotation: number;
  children: any;
  isMobile ? : boolean;
}
const Boop: React.FC<BoopProps> = ({ rotation , children, isMobile }) => {
  const [audio] = useState(new Audio(boop));
  const [isBooped, setIsBooped] = useState(false);
  const [isHovered,setHovered] = useState(false);
  const [isInclined, setInclined] = useState(false)

  const s = useSpring({
    display: 'inline-block',
    transform: isBooped
      ? `rotate(${-rotation}deg)`
        : isInclined ? `rotate(-1deg)`
        : `rotate(0deg)`,
    config: {
      tension: 400,
      friction: 10,
    },
  });

  useEffect(() => {
    if (!isHovered && isInclined){
      setInclined(false)
    }
  }, [isHovered, isInclined]);

  const trigger = () => {
    setHovered(true)
    setIsBooped(true)
    setTimeout(() => {
      setIsBooped(false)
    }, 50)

    if (!isMobile) {
      setTimeout(() => {
        setInclined(true)
      }, 200)
    }
  };

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (mx > 5) {
      audio
        .play()
        .then(() => trigger())

    }
  }) as unknown as (...args: any[]) => ReactDOMAttributes;

  return (
    <animated.span {...bind()}
      onMouseEnter={trigger}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => {
        if (isMobile) {
          trigger()
        }
      }}
      onTouchEnd={() => setHovered(false)}
      style={s}
    >
      {children}
    </animated.span>
  );
};

export default Boop
