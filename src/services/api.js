export async function getCategories() {
  const categories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(categories);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categories = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const response = await fetch(categories);
  const data = await response.json();
  return data;
}
