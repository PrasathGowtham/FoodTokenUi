export const order = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
      return { ...state, Item: [...state.Item, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        Item: state.Item.filter((c) => c.id !== action.payload.id),
      };
      default:
        return state;
    
  }}