import React from "react";
import './ProductTagsRow.css'
import {ProductTag} from "../../../content/Products";

interface ProductTagsRowProps {
  tags: string[],
  isSoldout : boolean,
  isLast: boolean,
  isDiscount: boolean,
  isMobile ? : boolean,
  optionalWrapperStyle ? : React.CSSProperties,
  optionalOnClickAction ? : () => void,
}
const ProductTagsRow: React.FC<ProductTagsRowProps> = ({ tags, isMobile, isLast, isSoldout, isDiscount, optionalWrapperStyle, optionalOnClickAction}) => {
  return(
    (isSoldout || isLast || (tags?.includes(ProductTag.NEW)) || isDiscount) ? (
      <div
        className="tags-row-wrapper"
        style={{ display: 'flex', flexDirection: 'row', gap: '8px', ...optionalWrapperStyle }}
        onClick={optionalOnClickAction}
      >
        {isSoldout && (
          <span
            className={isMobile ? "soldout-detailed-mobile" : "soldout-detailed"}
          >
            Soldout
          </span>
        )}
        {isLast && (
          <span
            className={isMobile ? "tag-detailed-mobile" : "tag-detailed"}
            style={{ backgroundColor: '#FF8A00'}}
          >
            Last title
          </span>
        )}
        {isDiscount && (
          <span
            className={isMobile ? "tag-detailed-mobile" : "tag-detailed"}
            style={{ backgroundColor: '#22CE5D'}}>
            Sale
          </span>
        )}
        {tags?.includes(ProductTag.NEW) && (
          <span
            className={isMobile ? "tag-detailed-mobile" : "tag-detailed"}
            style={{ backgroundColor: '#BC4FFF'}}
          >
            New
          </span>
        )}
      </div>
    ) : (
      <></>
    )
  )
}

export default ProductTagsRow
