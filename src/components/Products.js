import React, { useEffect } from 'react';

import { fetchProducts } from '../redux/product/productAction';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-content: center;
`;

const Products = () => {
	const productData = useSelector(state => state.products.item);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	// console.log('Data====>',productData)
	return productData.loading ? (
		<h2>Loading</h2>
	) : (
		<Container>
			{productData.map((product, index) => (
				<div key={index}>
					<ProductCard
						title={product.title}
						image={product.image}
						price={product.price}
						id={product.id}
					/>
				</div>
			))}
		</Container>
	);
};

export default Products;
