import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  // no payload for this action
});

export const addProductToCart = product => ({
  type: CartActionTypes.ADD_PRODUCT_TO_CART,
  payload: product
});
