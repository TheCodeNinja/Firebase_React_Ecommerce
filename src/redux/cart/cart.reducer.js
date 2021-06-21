import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  cartProducts: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    
    // handle action `ADD_PRODUCT_TO_CART`
    case CartActionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload]
      };
    
    default:
      return state;
  }
};

export default cartReducer;
