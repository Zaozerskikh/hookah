import { ProductInfo, Products } from "../../content/Products";

export const LocalStorageCartFields = {
  CART_STATE: 'CART_STATE'
}

const storedState = JSON.parse(localStorage.getItem(LocalStorageCartFields.CART_STATE) || '{}');

const initialProductMap: Record<string, number> = Products.reduce(
  (acc, product: ProductInfo) => {
    acc[product.productId] = 0;
    return acc;
  },
  {}
);

const initialState = storedState || initialProductMap;

const CartActions = {
  INCREMENT_PRODUCT_COUNT: 'INCREMENT_PRODUCT_COUNT',
  DECREMENT_PRODUCT_COUNT: 'DECREMENT_PRODUCT_COUNT',
  RESET_PRODUCT_COUNT: 'RESET_PRODUCT_COUNT'
}

export const incrementProductCount = (productId: string) => ({
  type: CartActions.INCREMENT_PRODUCT_COUNT,
  productId: productId,
});

export const decrementProductCount = (productId: string) => ({
  type: CartActions.DECREMENT_PRODUCT_COUNT,
  productId: productId,
});

export const resetProductCount = (productId: string) => ({
  type: CartActions.RESET_PRODUCT_COUNT,
  productId: productId,
});

type ProductActionTypes =
  | ReturnType<typeof incrementProductCount>
  | ReturnType<typeof decrementProductCount>
  | ReturnType<typeof resetProductCount>;


const cartReducer = (
  state: Record<string, number> = initialState,
  action: ProductActionTypes
): Record<string, number> => {
  let newState = { ...state };

  switch (action.type) {
    case CartActions.INCREMENT_PRODUCT_COUNT:
      newState[action.productId] = (newState[action.productId] || 0) + 1;
      break;
    case CartActions.DECREMENT_PRODUCT_COUNT:
      newState[action.productId] = Math.max((newState[action.productId] || 0) - 1, 0);
      break;
    case CartActions.RESET_PRODUCT_COUNT:
      newState[action.productId] = 0;
      break;
    default:
      break;
  }

  localStorage.setItem(LocalStorageCartFields.CART_STATE, JSON.stringify(newState));
  return newState;
};

export default cartReducer;
