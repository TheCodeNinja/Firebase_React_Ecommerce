import React from 'react';

import './category-item.styles.scss';

const CategoryItem = ({ id, name, price, imageUrl }) => (
  <div className='category-card'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='category-card-footer'>
      <span className='name'>{ name }</span>
      <span className='price'>{ price }</span>
    </div>
  </div>
);

export default CategoryItem;
