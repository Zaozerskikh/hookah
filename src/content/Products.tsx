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

export const ProductBrand = {
  DARKSIDE: 'DarkSide',
  FUMARI: 'Fumari',
  ELEMENTS: 'Elements',
  MUSTHAVE : 'MustHave',
  TANGIERS: 'Tangiers',
}

export interface ProductInfo {
  productId: string,
  name: string;
  brand: string;
  line ? : string;
  weight: number;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
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
    image: darkSide_FallingStar_base
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
    image: darkSide_IGranny_base
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
    image: darkSide_BnPapa_base
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
    image: darkSide_Supernova_base
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
    image: darkSide_SpaceIchi_base
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
    image: darkSide_KaleeGrap_base
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
    image: darkSide_Hola_base
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
    image: darkSide_Skyline_base
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
    image: musthaveSpaceForce
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
    image: musthaveSpaceInviders
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
    image: musthaveFrosty
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
    image: musthaveMirlic
  },
]

export const productsOnTheMain: string[] = ['1', '2', '4', '5', '9', '10', '11', '12']
