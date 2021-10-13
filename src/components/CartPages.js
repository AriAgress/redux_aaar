import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Cart from './Cart';
// import {
// 	addProduct,
// 	removeProduct,
// 	clearItems,
// } from '../redux/cart/cartActions';

const Card = styled.div`
	display: flex;
	flex-flow: column wrap;
`;

const CartPages = ({ title, image, price, id }) => {
	const cartItem = useSelector(state => state.cart.items);
	// const dispatch = useDispatch();
	// const onClick = () => {
	// 	const singleItem = {
	// 		title: title,
	// 		image: image,
	// 		price: price,
	// 		id: id,
	// 	};
	// 	const newItems = [...cartItem, singleItem];
	// 	dispatch(addProduct(newItems));

	// 	const deleteItems = [...cartItem, singleItem];
	// 	dispatch(removeProduct(deleteItems));
	// };
	return (
		<>
			<div>
				{cartItem.map((cart, index) => (
					<div key={index}>
						<Cart
							title={cart.title}
							image={cart.image}
							price={cart.price}
							id={cart.id}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default CartPages;
