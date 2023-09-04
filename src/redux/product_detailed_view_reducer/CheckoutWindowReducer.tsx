export interface CheckoutWindowState {
  isVisible: boolean;
}

const ProductDetailedViewActionTypes = {
  SET_CHECKOUT_WINDOW_VISIBLE: 'SET_CHECKOUT_WINDOW_VISIBLE'
}

const initialState: CheckoutWindowState = {
  isVisible: false
};

export const setIsCheckoutWindowShown = (isVisible: boolean) => ({
  type: ProductDetailedViewActionTypes.SET_CHECKOUT_WINDOW_VISIBLE ,
  payload: isVisible
});

const checkoutWindowReducer = (
  state = initialState,
  action: ReturnType<typeof setIsCheckoutWindowShown>
): CheckoutWindowState => {
  switch (action.type) {
    case ProductDetailedViewActionTypes.SET_CHECKOUT_WINDOW_VISIBLE:
      return { ...state, isVisible: action.payload};
    default:
      return state;
  }
};

export default checkoutWindowReducer
