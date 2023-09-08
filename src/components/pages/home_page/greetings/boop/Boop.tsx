import { animated, useSpring } from 'react-spring';
import React, {useState} from "react";
const Boop = ({ rotation = 4, timing = 150, children }) => {
  const [isBooped, setIsBooped] = useState(false);
  const [isHovered,setHovered] = useState(false)
  const s = useSpring({
    display: 'inline-block',
    transform: isBooped
      ? `rotate(${rotation}deg)`
      : isHovered
        ? `rotate(-2deg)`
        : `rotate(0deg)`,
    config: {
      tension: 1000,
      friction: 10,
      duration: timing
    },
  });

  const trigger = () => {
    setIsBooped(true)
    setTimeout(() => {
      setIsBooped(false)
      setHovered(true)
    }, 1)
  };

  return (
    <animated.span
      onMouseEnter={trigger}
      onMouseLeave={() => setHovered(false)}
      style={s}
    >
      {children}
    </animated.span>
  );
};

export default Boop
