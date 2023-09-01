import {Consts} from "../../content/Consts";

export interface ShopGridSizeState {
  gridWidth: number;
  windowWidth: number;
  cardWidth: number;
  gapWidth: number;
  isEnabled: boolean;
}

const ShopGridSizeActionTypes = {
  SET_SHOP_GRID_WIDTH: 'SET_SHOP_GRID_WIDTH'
}

const initialState: ShopGridSizeState = {
  gridWidth: window.innerWidth - Consts.MIN_SIDE_MARGIN * 2,
  windowWidth: window.innerWidth,
  isEnabled: true,
  cardWidth: 304,
  gapWidth: 16,
};

export const setShopGridSize = (gridWidth: number, windowWidth: number, isEnabled: boolean, cardWidth: number, gapWidth: number) => ({
  type: ShopGridSizeActionTypes.SET_SHOP_GRID_WIDTH,
  gridWidth: gridWidth,
  windowWidth: windowWidth,
  isEnabled: isEnabled,
  cardWidth: cardWidth,
  gapWidth: gapWidth,
});

const shopGridSizeReducer = (
  state = initialState,
  action: ReturnType<typeof setShopGridSize>
): ShopGridSizeState => {
  switch (action.type) {
    case ShopGridSizeActionTypes.SET_SHOP_GRID_WIDTH:
      return {
        ...state,
        gridWidth: action.gridWidth,
        windowWidth: action.windowWidth,
        cardWidth: action.cardWidth,
        gapWidth: action.gapWidth,
        isEnabled: action.isEnabled
      };
    default:
      return state;
  }
};

export default shopGridSizeReducer
