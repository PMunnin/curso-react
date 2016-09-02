import { SAVE_PRODUCTS } from './actionTypes';
export * from './actions';

export default function catalog(state=[], action){
  switch(action.type){
    case SAVE_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
