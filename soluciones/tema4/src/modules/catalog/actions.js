import { SAVE_PRODUCTS } from './actionTypes';

export function saveProducts(products){
  return {
    type: SAVE_PRODUCTS,
    payload: products
  }
}
