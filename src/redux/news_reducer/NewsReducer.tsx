import {NewsInfo} from "../../content/News";

export const LocalStorageNewsArrayFields = {
  NEWS_ARRAY_STATE: 'NEWS_ARRAY_STATE'
}

const initialState = JSON.parse(localStorage.getItem(LocalStorageNewsArrayFields.NEWS_ARRAY_STATE) || '[]');

const NewsArrayActions = {
  UPDATE_NEWS_ARRAY: 'UPDATE_NEWS_ARRAY',
}

export const updateNewsArray = (productArray: NewsInfo[]) => ({
  type: NewsArrayActions.UPDATE_NEWS_ARRAY,
  productArray: productArray,
});

const newsArrayReducer = (
  state: NewsInfo[] = initialState,
  action: ReturnType<typeof updateNewsArray>
): NewsInfo[] => {
  switch (action.type) {
    case NewsArrayActions.UPDATE_NEWS_ARRAY:
      let newState = JSON.parse(JSON.stringify(action.productArray))
      localStorage.setItem(LocalStorageNewsArrayFields.NEWS_ARRAY_STATE, JSON.stringify(newState));
      return newState
    default:
      break;
  }

  return state;
};

export default newsArrayReducer;
