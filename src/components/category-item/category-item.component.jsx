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
  addProductToCart: product => dispatch(addProductToCart(product))
});

export default connect(null, mapDispatchToProps)(CategoryItem);
