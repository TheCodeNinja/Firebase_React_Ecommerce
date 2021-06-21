# Create a util function to handle cart product quantity

## 1. Define an util function to handle cart product quantity

[cart.util.js]

```es6
export const handleCartProductQuantity = (cartProducts, cartProductAdded) => {

  // loop the array to find whether the product is added
  const isExisted = cartProducts.find(
    cartProduct => cartProduct.id === cartProductAdded.id
  );

  // if existed
  if (isExisted) {
    // loop the array to increase the quantity of the same added product only
    return cartProducts.map(
      cartProduct => cartProduct.id === cartProductAdded.id 
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct
    );
  }

  // return new state
  return [...cartProducts, { ...cartProductAdded, quantity: 1 }]
};
```

## 2. Use the util function in reducer

[cart.reducer.js]

```es6
import CartActionTypes from './cart.types';
import { handleCartProductQuantity } from './cart.util';

const INITIAL_STATE = {
  cartProducts: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  // handle actions coming from dispatch
  switch(action.type) { 
    // for action type `ADD_PRODUCT_TO_CART`
    case CartActionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProducts: handleCartProductQuantity(state.cartProducts, action.payload)
      };
  }
};
```

## 3. Test in Google Chrome with Redux extension
