export interface BurgerState {
  isOpened: boolean;
}

const BirgerActionTypes = {
  TOGGLE_BURGER: 'TOGGLE_BURGER'
}

const initialState: BurgerState = {
  isOpened: false
};

export const setIsBurgerShown = (isShown: boolean) => ({
  type: BirgerActionTypes.TOGGLE_BURGER ,
  payload: isShown
});

const burgerReducer = (
  state = initialState,
  action: ReturnType<typeof setIsBurgerShown>
): BurgerState => {
  switch (action.type) {
    case BirgerActionTypes.TOGGLE_BURGER:
      return { ...state, isOpened: action.payload};
    default:
      return state;
  }
};

export default burgerReducer
