import React, {useEffect} from "react";
import axios from "axios";
import {updateProductArray} from "../../redux/product_array_reducer/ProductArrayReducer";
import {
  ContentfulAllNewsResponseJson,
  ContentfulAllProductsResponseJson, convertContentfulAllNewsJsonToProductInfoArray,
  convertContentfulAllProductsJsonToProductInfoArray
} from "../../models/ContentfulDataFetcher";
import {useDispatch, useSelector} from "react-redux";
import {updateNewsArray} from "../../redux/news_reducer/NewsReducer";
import {RootState} from "../../redux/Store";
import {ProductsMock} from "../../content/Products";
import {NewsMock} from "../../content/News";
import {CONTENTFUL_SPACE_ID, CONTENTFUL_TOKEN} from "../../env/env";

interface ContentfulDataFetcherComponentProps {
  dev: boolean
}
const ContentfulDataFetcherComponent: React.FC<ContentfulDataFetcherComponentProps> = ({ dev }) => {
  const dispatch = useDispatch()
  const productArr = useSelector((state: RootState) => state.productArray)
  const newsArr = useSelector((state: RootState) => state.newsArray)

  useEffect(() => {
    console.log(productArr)
  }, [productArr]);

  useEffect(() => {
    console.log(newsArr)
  }, [newsArr]);

  useEffect(() => {
    if (!dev) {
      axios
        .get<ContentfulAllProductsResponseJson>(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_TOKEN}&content_type=productInfo&select=fields.productId,fields.name,fields.brand,fields.weight,fields.stock,fields.description,fields.fullDescription,fields.price,fields.image,fields.line,fields.discountPrice,fields.tags`)
        .then(x => dispatch(updateProductArray(convertContentfulAllProductsJsonToProductInfoArray(x.data))))
    } else {
      dispatch(updateProductArray(ProductsMock))
    }
  }, [dev]);

  useEffect(() => {
    if (!dev) {
      axios
        .get<ContentfulAllNewsResponseJson>(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_TOKEN}&content_type=news&select=fields.newsId,fields.name,fields.description,fields.date,fields.fullText,fields.image`)
        .then(x => dispatch(updateNewsArray(convertContentfulAllNewsJsonToProductInfoArray(x.data))))
    } else {
      dispatch(updateNewsArray(NewsMock))
    }
  }, [dev]);

  return(
    <></>
  )
}

export default ContentfulDataFetcherComponent
