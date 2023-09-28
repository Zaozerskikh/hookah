export interface LastProductWarningState {
  isShown: boolean;
  productId: string;
}

const LastProductWarningActionTypes = {
  SET_LAST_PRODUCT_WARNING_VISIBLE: 'SET_LAST_PRODUCT_WARNING_VISIBLE'
}

const initialState: LastProductWarningState = {
  isShown: false,
  productId: '0',
};

export const setIsLastProductWarningShown = (isShown: boolean, productId: string) => ({
  type: LastProductWarningActionTypes.SET_LAST_PRODUCT_WARNING_VISIBLE ,
  isShown: isShown,
  productId: productId
});

const lastProductWarningReducer = (
  state = initialState,
  action: ReturnType<typeof setIsLastProductWarningShown>
): LastProductWarningState => {
  switch (action.type) {
    case LastProductWarningActionTypes.SET_LAST_PRODUCT_WARNING_VISIBLE:
      return { ...state, isShown: action.isShown, productId: action.productId};
    default:
      return state;
  }
};

export default lastProductWarningReducer
