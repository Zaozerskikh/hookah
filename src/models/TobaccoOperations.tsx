import {ProductBrand, ProductInfo, ProductTag} from "../content/Products"
import {TagState} from "../components/pages/tobacco_page/search_tag/price_and_weight_tag/PriceAndWeightTag";

export const getActualPrice = (product: ProductInfo): number => {
  return product.discountPrice ? product.discountPrice : product.price
}

export const getActualTags = (product: ProductInfo): string[] => {
  const tags: string[] = []

  if (product.stock === 0) {
    tags.push(ProductTag.SOLDOUT)
  }

  if (product.stock === 1) {
    tags.push(ProductTag.LAST)
  }

  if (product.discountPrice && product.discountPrice !== product.price) {
    tags.push(ProductTag.SALE)
  }

  return [...tags, ...product.tags]
}

export const isSoldout = (stock: number, cart: Record<string, number>, productId: string): boolean => {
  const countInCart = cart[productId] || 0
  return stock - countInCart <= 0;
}

export const isLast = (stock: number, cart: Record<string, number>, productId: string): boolean => {
  const countInCart = cart[productId] || 0
  return stock - countInCart === 1;
}

export const isDiscount = (price: number,discountPrice: number): boolean => {
  return discountPrice && discountPrice !== price
}

export const filterByOneBrand = (brand: string, productsToApply: ProductInfo[]): ProductInfo[] => {
  return moveSoldoutToEnd(JSON.parse(JSON.stringify(productsToApply.filter(p => p.brand === brand))))
}

export const applyFilteringTags = (darkside: boolean, tangiers: boolean,
                                   elements: boolean, musthave: boolean, fumari: boolean,
                                   productsToApply: ProductInfo[]): ProductInfo[] => {
  const brandsToSearch = []
  if (darkside) {
    brandsToSearch.push(ProductBrand.DARKSIDE)
  }

  if (fumari) {
    brandsToSearch.push(ProductBrand.FUMARI)
  }

  if (elements) {
    brandsToSearch.push(ProductBrand.ELEMENTS)
  }

  if (tangiers) {
    brandsToSearch.push(ProductBrand.TANGIERS)
  }

  if (musthave) {
    brandsToSearch.push(ProductBrand.MUSTHAVE)
  }

  if (brandsToSearch.length === 0) {
    return moveSoldoutToEnd(JSON.parse(JSON.stringify(productsToApply)))
  }

  let filtered: ProductInfo[] = []
  brandsToSearch.map(brand => (
    filtered = [...filtered, ...productsToApply.filter(p => p.brand === brand)]
  ))

  return moveSoldoutToEnd(filtered)
}

export const applySortingTags = (weightTag: string, priceTag: string, productsToApply: ProductInfo[]): ProductInfo[] => {
  let result: ProductInfo[] = []
  if (priceTag) {
    if (priceTag === TagState.ASCENDING) {
      result = JSON.parse(JSON.stringify(productsToApply.sort((x, y) =>
        getActualPrice(x) - getActualPrice(y))))
    } else if (priceTag === TagState.DESCENDING) {
      result = JSON.parse(JSON.stringify(productsToApply.sort((x, y) =>
        getActualPrice(y) - getActualPrice(x))))
    }
  } else {
    if (weightTag === TagState.ASCENDING) {
      result = JSON.parse(JSON.stringify(productsToApply.sort((x, y) =>
        x.weight - y.weight)))
    } else if (weightTag === TagState.DESCENDING) {
      result = JSON.parse(JSON.stringify(productsToApply.sort((x, y) =>
        y.weight - x.weight)))
    }
  }

  return moveSoldoutToEnd(result)
}

export const applySearchString = (searchString: string, productsToApply: ProductInfo[]): ProductInfo[] => {
  const namesMatches = productsToApply
    .filter(product => product.name.toLowerCase().includes(searchString.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  const brandMatches = productsToApply
    .filter(product =>
      product.brand.toLowerCase().includes(searchString.toLowerCase()) &&
      !namesMatches.some(nm => nm.productId === product.productId))
    .sort((a, b) => a.name.localeCompare(b.name));

  const descriptionMatches = productsToApply
    .filter(product =>
      product.description.toLowerCase().includes(searchString.toLowerCase()) &&
      ![...namesMatches, ...brandMatches].some(nm => nm.productId === product.productId))
    .sort((a, b) => a.name.localeCompare(b.name));

  return moveSoldoutToEnd([...namesMatches, ...brandMatches, ...descriptionMatches])
}

export const getSuggestions = (suggestionsCount: number, products: ProductInfo[], currProductId: string): ProductInfo[] => {
  const possibleSuggestions = products.filter(p => p.stock > 0 && p.productId !== currProductId);

  if (possibleSuggestions.length >= suggestionsCount) {
    return possibleSuggestions
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item.value)
      .slice(0, suggestionsCount);
  } else {
    return possibleSuggestions;
  }
}

export const buildTobaccoLink = (productId: string, brand: string, name: string, line: string, weight: number) => {
  return `/product/${productId}-${brand.toLowerCase().replace(' ', '-')}-${name.toLowerCase().replace(' ', '-')}-${line.toLowerCase().replace(' ', '-')}-${weight.toString()}g`;
}

export const buildFullTobaccoPageLink = (productId: string, brand: string, name: string, line: string, weight: number, frontendPrefix: string) => {
  return `${frontendPrefix}/product/${productId}-${brand.toLowerCase().replace(' ', '-')}-${name.toLowerCase().replace(' ', '-')}-${line.toLowerCase().replace(' ', '-')}-${weight.toString()}g`;
}

export const moveSoldoutToEnd = (products: ProductInfo[]): ProductInfo[] => {
  const inStock = products.filter(x => x.stock !== 0)
  const soldout = products.filter(x => x.stock === 0)
  return [...inStock, ...soldout]
}
