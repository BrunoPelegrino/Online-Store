export async function getCategories() {
  const categories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(categories);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = '';
  if (categoryId && query) url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  if (categoryId && !query) url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  if (!categoryId && query) url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProduct(id) {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;
}
