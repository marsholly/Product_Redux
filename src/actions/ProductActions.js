export function createProduct(product) {
  console.log('product:', product)
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
