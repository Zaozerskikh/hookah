import React from "react";

interface ImageWrapperProps extends React.PropsWithChildren {
  xRatio: number;
  yRatio: number;
  additionalStyle ? : React.CSSProperties;
}
const ImageWrapper: React.FC<ImageWrapperProps> = ({ children, xRatio, yRatio, additionalStyle}) => {
  return(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        aspectRatio: `${xRatio}/${yRatio}`,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        ...additionalStyle
      }}
    >
      {children}
    </div>
  )
}

export default ImageWrapper;
