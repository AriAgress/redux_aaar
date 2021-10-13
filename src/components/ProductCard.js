import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux/cart/cartActions';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
`;

const Text = styled.div``;

const ProductCard = ({ title, image, price, id }) => {
  const items = useSelector(state => state.products.item);
  const dispatch = useDispatch();
  const onClick = () => {
    const singleItem = {
      title: title,
      image: image,
      price: price,
      id: id,
    };
    const newItems = [...items, singleItem];
    dispatch(addProduct(newItems));
  };

  return (
    <Container>
      <Text>
        <p>{title}</p>
        <img src={image} />
        <p>{price}</p>
        <p>{id}</p>
      </Text>
      <button onClick={onClick}>add</button>
    </Container>
  );
};

export default ProductCard;
