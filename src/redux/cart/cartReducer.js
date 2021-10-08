import { INCREMENT } from './cartTypes';
import { DECREMENT } from './cartTypes';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        items: action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
