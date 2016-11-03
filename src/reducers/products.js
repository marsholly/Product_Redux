const initialState = {
  all: [],
  one: [],
  sort: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_ALL_PRODUCTS': {
      return Object.assign({}, state, {
        all: action.payload.products,
      });
    }
    case 'CREATE_PRODUCT': {
      return Object.assign({}, state, {
        all: [...state.all, action.payload.product],
      });
    }
    case 'REMOVE_PRODUCT': {
      return Object.assign({}, state, {
        all: state.all.filter(product => action.payload.id !== product.id),
      });
    }
    case 'UPDATE_PRODUCT': {
      return Object.assign({}, state, {
        all: state.all.map((product) => {
          if (product.id === action.payload.product.id) {
            return action.payload.product;
          }
          return product;
        }),
      });
    }
    // case 'SORTING_BY_NAME': {
    //   return Object.assign({}, state, {
    //     sort:
    //   }
    // }
    default:
      return state;
  }
}
