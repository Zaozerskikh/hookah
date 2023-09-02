export interface MenuState {
  margin: string,
}

const MenuActionTypes = {
  SET_MARGIN: 'SET_SHOP_GRID_WIDTH'
}

const initialState: MenuState = {
  margin: localStorage.getItem('m') ? localStorage.getItem('m') : '0',
};

export const setMenuMargin = (margin: number) => ({
  type: MenuActionTypes.SET_MARGIN,
  margin: margin
});

const menuReducer = (
  state = initialState,
  action: ReturnType<typeof setMenuMargin>
): MenuState => {
  switch (action.type) {
    case MenuActionTypes.SET_MARGIN:
      if (action.margin !== undefined && !isNaN(action.margin)) {
        localStorage.setItem('m', action.margin.toString())
        return {
          ...state,
          margin: action.margin.toString()
        };
      }

      return state;
    default:
      return state;
  }
};

export default menuReducer
