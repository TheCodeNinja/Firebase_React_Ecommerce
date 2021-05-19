import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './menu-list.styles.scss';

class MenuList extends Component {

  constructor() {
    super();
    this.state = {
      dummyListData: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'women',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'men',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className="menu-list">
        { this.state.dummyListData.map(({ title, imageUrl, id, size }) => (
          <MenuItem 
            key={id} 
            title={title} 
            imageUrl={imageUrl} 
            size={size} 
          />
        )) }
      </div>
    );
  }

}

export default MenuList;
