import React from "react";
import './Block.css'
import abouTbullit from './../../../../assets/icons/decorations/about_bullit.png'
import {useMediaQuery} from "react-responsive";

export interface BlockProps {
  headerText: string,
  mainText: string,
  isMobile ? : boolean
}

const Block: React.FC<BlockProps> = ({headerText, mainText, isMobile}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1264px)'
  })
  const renderDesktop = () => {
    return(
      <div
        className="block-container"
        style={{
          width: isDesktopOrLaptop ? '600px' : '450px',
          height: isDesktopOrLaptop ? '245px' : '300px',
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

  const renderMobile = () => {
    return(
      <div className="block-container-mobile">
        <img src={abouTbullit} style={{ width: '32px', height: '32px'}} alt="bullit"/>
        <div className="block-header-mobile">
          {headerText}
        </div>
        <div className="block-text-mobile">
          <div dangerouslySetInnerHTML={{ __html: mainText.replaceAll('</br>', '') }} />
        </div>
      </div>
    )
  }

  return(isMobile ? renderMobile() : renderDesktop())
}

export default Block
