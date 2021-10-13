import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_ITEMS } from './cartTypes';

const initialState = {
	items: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				items: action.payload,
			};
		case REMOVE_PRODUCT:
			return {
				...state,
				items: [...state.items.filter(items => items !== action.payload)],
			};
		case CLEAR_ITEMS:
			return {
				items: [],
			};
		default:
			return state;
	}
};

export default cartReducer;
