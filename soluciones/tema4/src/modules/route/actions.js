export const SET_ROUTE = 'SET_ROUTE';

function setRoute(newRoute){
  return {
    type: SET_ROUTE,
    route: newRoute
  }
}

export function goToCatalog(){
  return setRoute('catalog');
}

export function goToCart(){
  return setRoute('cart');
}

export function goToCheckout(){
  return setRoute('checkout');
}

export function goToThankYou(){
  return setRoute('thank-you');
}
