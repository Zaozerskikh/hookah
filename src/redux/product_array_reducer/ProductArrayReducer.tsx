import { ProductInfo } from "../../content/Products";

export const LocalStorageProductArrayFields = {
  PRODUCT_ARRAY_STATE: 'PRODUCT_ARRAY_STATE'
}

const initialState = JSON.parse(localStorage.getItem(LocalStorageProductArrayFields.PRODUCT_ARRAY_STATE) || '[]');

const ProductArrayActions = {
  UPDATE_PRODUCT_ARRAY: 'UPDATE_PRODUCT_ARRAY',
}

export const updateProductArray = (productArray: ProductInfo[]) => ({
  type: ProductArrayActions.UPDATE_PRODUCT_ARRAY,
  productArray: productArray,
});

const productArrayReducer = (
  state: ProductInfo[] = initialState,
  action: ReturnType<typeof updateProductArray>
): ProductInfo[] => {
  switch (action.type) {
    case ProductArrayActions.UPDATE_PRODUCT_ARRAY:
      let newState = JSON.parse(JSON.stringify(action.productArray))
      localStorage.setItem(LocalStorageProductArrayFields.PRODUCT_ARRAY_STATE, JSON.stringify(newState));
      return newState
    default:
      break;
  }

  return state;
};

export default productArrayReducer;
