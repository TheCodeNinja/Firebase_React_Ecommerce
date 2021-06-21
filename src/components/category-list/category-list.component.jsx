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