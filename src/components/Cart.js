import React from 'react';

import {
	addProduct,
	removeProduct,
	clearItems,
} from '../redux/cart/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-content: center;
	width: 100vw;
	height: 20vh;
`;
const Card = styled.div`
	display: flex;
	flex-flow: column wrap;
`;
const Cart = ({ title, image, price, id }) => {
	const cartItem = useSelector(state => state.cart.items);
	const dispatch = useDispatch();
	const onClick = () => {
		const singleItem = {
			title: title,
			image: image,
			price: price,
			id: id,
		};
		// const newItems = [...cartItem, singleItem];
		// dispatch(addProduct(newItems));

		const deleteItems = [...cartItem, singleItem];
		dispatch(removeProduct(cartItem.item));
	};

	return (
		<Container>
			<Card>
				<p>{id}</p>
				<h1>{title}</h1>

				<img style={{ height: '250px', width: '150px' }} src={image} alt='' />
				<p>{price}</p>

				<button onClick={onClick}>remove</button>
			</Card>
		</Container>
	);
};

export default Cart;
