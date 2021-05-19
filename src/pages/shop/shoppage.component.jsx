import React, { Component } from 'react';

import CategoryList from '../../components/category-list/category-list.component';
import SHOP_DATA from './shop.data.js';

class ShopPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dummyListData: SHOP_DATA
    }
  }

  render() { 
    const { dummyListData } = this.state;
    return (
      <div>
        {
          dummyListData.map(({ id, ...otherProps }) => (
            <CategoryList key={id} { ...otherProps } />
          ))
        }
      </div> 
    );
  };
}

export default ShopPage;