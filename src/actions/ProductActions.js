export function createProduct(product) {
  return {
    type: 'CREATE_PRODUCT',
    payload: { product },
  };
}

export function getAllProducts(products) {
  return {
    type: 'RECEIVE_ALL_PRODUCTS',
    payload: { products },
  };
}
