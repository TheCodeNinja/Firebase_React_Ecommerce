import React from 'react';

import './category-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CategoryItem = ({ id, name, price, imageUrl }) => (
  <div className='category-card'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='category-card-footer'>
      <span className='name'>{ name }</span>
      <span className='price'>{ price }</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);

export default CategoryItem;
