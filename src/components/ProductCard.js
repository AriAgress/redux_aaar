import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux/cart/cartActions';
import styled from 'styled-components';
import { connect } from 'react-redux';
const Card = styled.div`
	display: flex;
	flex-flow: column wrap;
`;

const CardText = styled.div``;

const ProductCard = ({ title, image, price, id }) => {
	const cartItem = useSelector(state => state.cart.items);
	const dispatch = useDispatch();
	const onClick = () => {
		const singleItem = {
			title: title,
			image: image,
			price: price,
			id: id,
		};
		const newItems = [...cartItem, singleItem];
		dispatch(addProduct(newItems));
	};

	return (
		<Card>
			<p>{id}</p>
			<h1>{title}</h1>
			<CardText>
				<img style={{ height: '250px', width: '150px' }} src={image} alt='' />
				<p>{price}</p>
			</CardText>
			<button onClick={onClick}>add</button>
		</Card>
	);
};

export default connect()(ProductCard);
