import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Svg } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon-container' onClick={toggleCartHidden}>
    <Svg className="cart-icon" />
    <span className="num-count">0</span>
  </div>
);

// when invoke the toggleCartHidden,

const mapDispatchToProps = dispatch => ({
  // (this component props): (arrow function for dispatching action to reducer)
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
