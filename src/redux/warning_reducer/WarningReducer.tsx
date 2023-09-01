export interface WarningState {
  isShown: boolean;
}

const WarningActionTypes = {
  TOGGLE: 'TOGGLE'
}

const initialState: WarningState = {
  isShown: true
};

export const toggleWarning = () => ({ type: WarningActionTypes.TOGGLE });

const warningReducer = (
  state = initialState,
  action: ReturnType<typeof toggleWarning>
): WarningState => {
  switch (action.type) {
    case WarningActionTypes.TOGGLE:
      return { ...state, isShown: !state.isShown };
    default:
      return state;
  }
};

export default warningReducer
