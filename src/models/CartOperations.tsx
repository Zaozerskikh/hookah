import {Products} from "../content/Products";

export const getProductsCountInCart = (cart: Record<string, number>): number => {
  return Object.values(cart).reduce((acc, value) => acc + value, 0)
}

export const getProductCountInCartById = (cart: Record<string, number>, productId: string): number => {
  return cart[productId] || 0;
}

export const getActualCart = (cart: Record<string, number>): [string, number][] => {
  return Object
    .entries(cart)
    .filter(([, countInCart]) => countInCart !== 0)
}
export const getFullAmountWithoutDiscount = (cart: Record<string, number>) => {
  return getActualCart(cart).reduce((accumulator, [productId, count]) => {
    const product = Products.find((p) => p.productId === productId);
    if (product) {
      const productValue = count * product.price;
      return accumulator + productValue;
    }
    return accumulator;
  }, 0)
}

export const getFullAmountWithDiscount = (cart: Record<string, number>): number => {
  return getActualCart(cart).reduce((accumulator, [productId, count]) => {
    const product = Products.find((p) => p.productId === productId);
    if (product) {
      const productValue = count * (product.discountPrice ? product.discountPrice : product.price);
      return accumulator + productValue;
    }
    return accumulator;
  }, 0)
}
