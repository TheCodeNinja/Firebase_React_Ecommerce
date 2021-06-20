# Destructuring redux state

[src/components/header/header.component.jsx]

Original:

```js
const mapStateToProps = state => ({
  // (this component props): (redux state)
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});
```

Using destructuring:

```js
const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({
  currentUser, // this component props
  hidden // this component props
});
```
