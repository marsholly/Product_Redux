export function loadState() {
  try {
    const serializedState = localStorage.getItem('products');
    if (!serializedState) throw new Error();
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveState(products) {
  const serializedState = JSON.stringify(products);
  localStorage.setItem('products', serializedState);
}
