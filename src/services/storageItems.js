export function saveCartItem = (saveItem) => {
  localStorage.setItem('cartItem', JSON.stringify(saveItem));
}

export function getCartItem() {
  const savedItem = localStorage.getItem('cartItem');
  const initialValue = JSON.parse(savedItem);
  return initialValue;
}
