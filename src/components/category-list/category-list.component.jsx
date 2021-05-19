import React from 'react';

import './category-list.styles.scss';

const CategoryList = ({ title, items }) => (
  <div>
    <h1>{ title.toUpperCase() }</h1>
    <div>
      {
        items.map(item => (
          <div key={item.id}>{ item.name }</div>
        )) 
      }
    </div>
  </div>
);

export default CategoryList;