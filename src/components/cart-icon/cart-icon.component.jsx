import React from 'react';

import { ReactComponent as Svg } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => (
  <div className='cart-icon-container'>
    <Svg className="cart-icon" />
    <span className="num-count">0</span>
  </div>
);

export default CartIcon; 