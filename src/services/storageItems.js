export function saveCartItem(saveItem) {
  localStorage.setItem('cartItems', JSON.stringify(saveItem));
}

export function getCartItem() {
  const getItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'));
  return getItemsFromStorage;
}
