export const handleCartProductQuantity = (cartProducts, cartProductAdded) => {

  // loop the array to find whether the product is added
  const isExisted = cartProducts.find(
    cartProduct => cartProduct.id === cartProductAdded.id
  );

  // if existed
  if (isExisted) {
    // loop the array to increase the quantity of the same added product only
    return cartProducts.map(
      cartProduct => cartProduct.id === cartProductAdded.id 
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct
    );
  }

  // return new state
  return [...cartProducts, { ...cartProductAdded, quantity: 1 }]
};
