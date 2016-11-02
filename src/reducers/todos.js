export default function todos(state = [], action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return state.concat(action.payload.todo);
      break;
    case 'DELETE_TODO': {
      return state.filter( todo =>{
        return action.payload._id !== todo._id
      })
    }
    case 'UPDATE_TODO': {
      const index = state.findIndex( todo =>{
        return todo._id == action.payload._id;
      });
      const newState = [...state];
      newState[index] = action.payload;
      return newState;
    }
    default:
      return state;
  }
}
