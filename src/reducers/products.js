const initialState = {
  all: [],
  one: [],
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

    // case 'UPDATE_TODO': {
    //   const index = state.findIndex( todo =>{
    //     return todo._id == action.payload._id;
    //   });
    //   const newState = [...state];
    //   newState[index] = action.payload;
    //   return newState;
    // }
    default:
      return state;
  }
}
