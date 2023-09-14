export interface BottomHintState {
  isShown: boolean;
  message: string;
}

const BottomHintActionTypes = {
  TOGGLE_BOTTOM_HINT: 'TOGGLE_BOTTOM_HINT'
}

const initialState: BottomHintState = {
  isShown: false,
  message: undefined
};

export const setBottomHintState = (isShown: boolean, message: string) => ({
  type: BottomHintActionTypes.TOGGLE_BOTTOM_HINT ,
  isShown: isShown,
  message: message
});

const bottomHintReducer = (
  state = initialState,
  action: ReturnType<typeof setBottomHintState>
): BottomHintState => {
  switch (action.type) {
    case BottomHintActionTypes.TOGGLE_BOTTOM_HINT:
      return { ...state, isShown: action.isShown, message: action.message};
    default:
      return state;
  }
};

export default bottomHintReducer
