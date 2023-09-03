import React from "react";
import './Block.css'
import abouTbullit from './../../../../assets/icons/decorations/about_bullit.png'

export interface BlockProps {
  headerText: string,
  mainText: string
}

const Block: React.FC<BlockProps> = ({headerText, mainText}) => {
  return(
    <div
      className="block-container"
      style={{
        width: '600px',
        height: '245px',
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
      }}
    >
      <img src={abouTbullit} style={{ width: '32px', height: '32px'}} alt="bullit"/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <div className="block-header">
          {headerText}
        </div>
        <div className="block-text">
          <div dangerouslySetInnerHTML={{ __html: mainText }} />
        </div>
      </div>
    </div>
  )
}

export default Block
