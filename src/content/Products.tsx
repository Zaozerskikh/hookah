import darkSide_FallingStar_base from '../assets/icons/products/darkside/darkSide_FallingStar_base.png'
import darkSide_IGranny_base from '../assets/icons/products/darkside/darkSide_Igranny_base.png'
import darkSide_BnPapa_base from '../assets/icons/products/darkside/darkSide_BnPapa_base.png'
import darkSide_Supernova_base from '../assets/icons/products/darkside/darkSide_SuperNova_base.png'
import darkSide_SpaceIchi_base from '../assets/icons/products/darkside/darkSide_SpaceIchi_base.png'
import darkSide_KaleeGrap_base from '../assets/icons/products/darkside/darkSide_KaleeGrap_base.png'
import darkSide_Hola_base from '../assets/icons/products/darkside/darkSide_Hola_base.png'
import darkSide_Skyline_base from '../assets/icons/products/darkside/darkSide_Skyline_base.png'
import musthaveFrosty from '../assets/icons/products/musthave/musthave_frosty.jpg'
import musthaveMirlic from '../assets/icons/products/musthave/musthave_mirlic.jpg'
import musthaveSpaceForce from '../assets/icons/products/musthave/musthave_space_force.jpg'
import musthaveSpaceInviders from '../assets/icons/products/musthave/musthave_space_invaders.jpg'
import fumariCaramel from '../assets/icons/products/fumari/fumari_caramella_kiss.jpg'
import placeholder from '../assets/icons/products/tobacco_placeholder.png'

export const ProductBrand = {
  DARKSIDE: 'DarkSide',
  FUMARI: 'Fumari',
  ELEMENTS: 'Element',
  MUSTHAVE : 'MustHave',
  TANGIERS: 'Tangiers',
}

export const ProductTag = {
  NEW: 'New',
  SALE: 'Sale',
  LAST: 'Last',
  SOLDOUT: 'Soldout'
}

export interface ProductInfo {
  productId: string,
  name: string;
  brand: string;
  weight: number;
  stock: number;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  line ? : string;
  discountPrice ? : number;
  tags ? : string[]
}

export const Products: ProductInfo[] = [
  {
    productId: '1',
    name: 'Falling star',
    brand: ProductBrand.DARKSIDE,
    line: 'Base',
    weight: 30,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     fullDescription: \'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 7.99,
    image: darkSide_FallingStar_base,
    stock: 0,
    tags: [ProductTag.NEW, ProductTag.SALE]
  },
  {
    productId: '2',
    name: 'I Granny',
    brand: ProductBrand.DARKSIDE,
    line: 'Base',
    weight: 30,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     fullDescription: \'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 7.99,
    image: darkSide_IGranny_base,
    stock: 1,
    tags: [ProductTag.NEW]
  },
  {
    productId: '3',
    name: 'Bnpapa',
    brand: ProductBrand.DARKSIDE,
    line: 'Base',
    weight: 30,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     fullDescription: \'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 7.99,
    image: darkSide_BnPapa_base,
    stock: 5,
  },
  {
    productId: '4',
    name: 'Supernova',
    brand: ProductBrand.DARKSIDE,
    line: 'Base',
    weight: 30,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     fullDescription: \'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 7.99,
    discountPrice: 5.99,
    image: darkSide_Supernova_base,
    stock: 5,
  },
  {
    productId: '5',
    name: 'Space Ichi',
    brand: ProductBrand.DARKSIDE,
    line: 'Base',
    weight: 30,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 7.99,
    image: darkSide_SpaceIchi_base,
    stock: 5,
    discountPrice: 5.99,
  },
  {
    productId: '6',
    name: 'Kalee grap',
    brand: ProductBrand.DARKSIDE,
    line: 'Base',
    weight: 30,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 7.99,
    image: darkSide_KaleeGrap_base,
    stock: 5,
  },
  {
    productId: '7',
    name: 'Hola',
    brand: ProductBrand.DARKSIDE,
    line: 'Base',
    weight: 30,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 7.99,
    image: darkSide_Hola_base,
    stock: 5,
  },
  {
    productId: '8',
    name: 'Skyline',
    brand: ProductBrand.DARKSIDE,
    line: 'Base',
    weight: 30,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 7.99,
    image: darkSide_Skyline_base,
    stock: 5,
  },
  {
    productId: '9',
    name: 'Space Force',
    brand: ProductBrand.MUSTHAVE,
    line: 'Base',
    weight: 200,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 39.99,
    image: musthaveSpaceForce,
    stock: 5,
  },
  {
    productId: '10',
    name: 'Space Invaders',
    brand: ProductBrand.MUSTHAVE,
    line: 'Base',
    weight: 200,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 39.99,
    image: musthaveSpaceInviders,
    stock: 5,
  },
  {
    productId: '11',
    name: 'Frosty',
    brand: ProductBrand.MUSTHAVE,
    line: 'Base',
    weight: 200,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 39.99,
    image: musthaveFrosty,
    stock: 5,
  },
  {
    productId: '12',
    name: 'Mirlic',
    brand: ProductBrand.MUSTHAVE,
    line: 'Base',
    weight: 200,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 39.99,
    image: musthaveMirlic,
    stock: 5,
  },
  {
    productId: '13',
    name: 'Caramella Kiss',
    brand: ProductBrand.FUMARI,
    line: 'Base',
    weight: 50,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 11.99,
    image: fumariCaramel,
    stock: 5,
  },
  {
    productId: '14',
    name: 'C96 Cane Mint',
    brand: ProductBrand.TANGIERS,
    line: 'noir',
    weight: 250,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 79.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '15',
    name: ' C78 Horchata',
    brand: ProductBrand.TANGIERS,
    line: 'Noir',
    weight: 250,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 79.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '16',
    name: 'C38 Kashmir Peach',
    brand: ProductBrand.TANGIERS,
    line: 'Noir',
    weight: 250,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 79.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '17',
    name: 'C87 Kiwi',
    brand: ProductBrand.TANGIERS,
    line: 'Noir',
    weight: 250,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 79.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '18',
    name: 'C34 It\'s Like That One Breakfast Cereal',
    brand: ProductBrand.TANGIERS,
    line: 'Noir',
    weight: 250,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 79.99,
    image: darkSide_BnPapa_base,
    stock: 5,
  },
  {
    productId: '19',
    name: 'C34 Breakfast Cereal',
    brand: ProductBrand.TANGIERS,
    line: 'Noir',
    weight: 250,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 79.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '20',
    name: 'Amazon',
    brand: ProductBrand.ELEMENTS,
    line: 'Agua',
    weight: 40,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 12.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '21',
    name: 'Mississippi',
    brand: ProductBrand.ELEMENTS,
    line: 'Agua',
    weight: 40,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 12.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '22',
    name: 'Amazon',
    brand: ProductBrand.ELEMENTS,
    line: 'Agua',
    weight: 40,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 12.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '23',
    name: 'Mississippi',
    brand: ProductBrand.ELEMENTS,
    line: 'Agua',
    weight: 40,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 12.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '24',
    name: 'Amazon',
    brand: ProductBrand.ELEMENTS,
    line: 'Amur',
    weight: 40,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 12.99,
    image: placeholder,
    stock: 5,
  },
  {
    productId: '25',
    name: 'Mississippi',
    brand: ProductBrand.ELEMENTS,
    line: 'Mekong',
    weight: 40,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 12.99,
    image: placeholder,
    stock: 5,
  },
]

export const productsOnTheMain: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '18', '20']
