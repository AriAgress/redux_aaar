import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyProduct, removeProduct } from '../redux/cart/cartActions';

const Cart = () => {
	const add = useSelector(state => state.cart.buyProduct);
	const remove = useSelector(state => state.cart.removeProduct);

	const dispatch = useDispatch();

	return (
		<>
			<div>
				<button onClick={() => dispatch(buyProduct())}>Add Product</button>
			</div>
			<div>
				<button onClick={() => dispatch(removeProduct())}>
					Remove Product
				</button>
			</div>
		</>
	);
};

export default Cart;
