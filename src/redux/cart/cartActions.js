import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_ITEMS } from './cartTypes';

export const addProduct = id => {
	return{
	type: ADD_PRODUCT,
	payload: id,
		}
}

export const removeProduct = id => {
	return {
		type: REMOVE_PRODUCT,
		payload: id,
	};
};

export const clearItems = () => {
	return{
		type: CLEAR_ITEMS,
		payload: '',
	}
}