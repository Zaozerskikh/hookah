import darkSide_FallingStar_base from './../assets/icons/products/darkSide_FallingStar_base.png'
import darkSide_IGranny_base from './../assets/icons/products/darkSide_Igranny_base.png'
import darkSide_BnPapa_base from './../assets/icons/products/darkSide_BnPapa_base.png'
import darkSide_Supernova_base from './../assets/icons/products/darkSide_SuperNova_base.png'
import darkSide_SpaceIchi_base from './../assets/icons/products/darkSide_SpaceIchi_base.png'
import darkSide_KaleeGrap_base from './../assets/icons/products/darkSide_KaleeGrap_base.png'
import darkSide_Hola_base from './../assets/icons/products/darkSide_Hola_base.png'
import darkSide_Skyline_base from './../assets/icons/products/darkSide_Skyline_base.png'

export interface ProductInfo {
  productId: string,
  name: string;
  brand: string;
  line: string;
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
    brand: 'DarkSide',
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
    brand: 'DarkSide',
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
    brand: 'DarkSide',
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
    brand: 'DarkSide',
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
    brand: 'DarkSide',
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
    brand: 'DarkSide',
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
    brand: 'DarkSide',
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
    brand: 'DarkSide',
    line: 'Base',
    weight: 30,
    description: 'Mango, joghurt',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 7.99,
    image: darkSide_Skyline_base
  },
]
