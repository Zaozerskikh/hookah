export interface WarningState {
  isShown: boolean;
}

const WarningActionTypes = {
  TOGGLE: 'TOGGLE'
}

const initialState: WarningState = {
  isShown: true
};

export const setIsWarningShown = (isShown: boolean) => ({
  type: WarningActionTypes.TOGGLE ,
  payload: isShown
});

const warningReducer = (
  state = initialState,
  action: ReturnType<typeof setIsWarningShown>
): WarningState => {
  switch (action.type) {
    case WarningActionTypes.TOGGLE:
      return { ...state, isShown: action.payload};
    default:
      return state;
  }
};

export default warningReducer
