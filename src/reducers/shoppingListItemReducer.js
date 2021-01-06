export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  
  switch(action.type) {

    case 'INCREASE_COUNT':
    
      return Object.assign({}, {
        items: state.items.concat(state.items.length)
      });

    default:
    
      return state;
  }
};
