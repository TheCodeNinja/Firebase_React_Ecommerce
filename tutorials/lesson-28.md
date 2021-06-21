# Import `custom-button` component to `category-item` component 

## 1. The `custom-button` component

[src/components/custom-button/custom-button.component.jsx]

```js
import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  // button with class `custom-button` and `inverted` / `google-sign-in` 
  <button 
    className={`
      ${ inverted ? 'inverted' : ''}
      ${ isGoogleSignIn ? 'google-sign-in' : ''} 
      custom-button
    `}
    {...otherProps}>
    { children }
  </button>
);

export default CustomButton;
```

## 2. Import `custom-button` component with class `inverted`

[src/components/collection-item/collection-item.component.jsx]

```js
import CustomButton from '../custom-button/custom-button.component';

const CategoryItem = ({ id, name, price, imageUrl }) => (
  <div className='category-card'>
    ...
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);
```

## 3. The scss styles for `custom-button`

[src/components/collection-item/collection-item.component.jsx]

```scss
.custom-button {
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &.google-sign-in { // button with class `custom-button google-sign-in`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }

  &.inverted { // button with class `custom-button inverted`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
  
}
```

## 4. Apply scss styles for `category-item`

```scss
.category-card {
  // ...
  .custom-button {
     width: 80%;
     opacity: 0.7;
     position: absolute;
     top: 225px;
     display: none;
   }

   &:hover {
     .image {
       opacity: 0.8
     }

     .custom-button {
       opacity: 0.85;
       display: flex;
     }
   }
}
```
