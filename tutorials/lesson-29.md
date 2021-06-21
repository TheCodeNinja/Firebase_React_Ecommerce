# Redux implementation for adding product to cart

## 1. Define action type

[cart.types.js]

```es6
const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART'
}
```

## 2. Define action

[cart.actions.js]

```es6
// action (use dispatch to dispatch this action to reducer)
export const addProductToCard = product => ({
  type: CartActionTypes.ADD_PRODUCT_TO_CART,
  payload: product
});
```

## 3. Define reducer's action handler

[cart.reducer.js]

```es6
import CartActionTypes from './cart.types';

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
        cartProducts: [...state.cartProducts, action.payload]
      };
  }
};
```

## 4. Dispatch action to reducer

[category-item.component.js]

```es6
import React from 'react';
import { connect } from 'react-redux';
import './category-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addProductToCart } from '../../redux/cart/cart.actions';

const CategoryItem = ({ product, addProductToCart }) => {
  const { id, name, price, imageUrl } = product;
  return (
    <div className='category-card'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='category-card-footer'>
        <span className='name'>{ name }</span>
        <span className='price'>{ price }</span>
      </div>
      {/* clicking the button will trigger dispatch function */}
      <CustomButton inverted onClick={() => addProductToCart(product)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  // (this component props): (arrow function for dispatching action to reducer)
  // the reducer will update the state
  addProductToCart: product => dispatch(addProductToCart(product))
});

export default connect(null, mapDispatchToProps)(CategoryItem);
```

## 5. The props of `category-item` from `category-list` (made some changes)

[category-list.component.js]

```es6
import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import './category-list.styles.scss';

const CategoryList = ({ title, items }) => (
  <div className='category-list'>
    <h1 className='title'>{ title.toUpperCase() }</h1>
    <div className='row'>
      {
        items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CategoryItem key={item.id} product={item} />
          )) 
      }
    </div>
  </div>
);

export default CategoryList;
```

## 6. Test in Google Chrome with Redux extension
