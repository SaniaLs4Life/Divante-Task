const getItemPrice = (cart, id) => {
  return addDollarSign(cart[id].price);
};

const getTotal = cart => {
  return addDollarSign(
    cart.reduce((total, currentValue) => total + currentValue.price, 0)
  );
};

const getNumberOfItems = cart => {
  return cart.length > 0 && `(${cart.length})`;
};

const addDollarSign = data => {
  return `$ ${data}`;
};

export { getItemPrice, getTotal, getNumberOfItems, addDollarSign };
