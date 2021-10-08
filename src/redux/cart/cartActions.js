import { INCREMENT } from './cartTypes';
import { DECREMENT } from './cartTypes';

export const buyProduct = id => {
	return {
		type: INCREMENT,
		payload: id,
	};
};

export const removeProduct = id => {
	return {
		type: DECREMENT,
		payload: id,
	};
};
