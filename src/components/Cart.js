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
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const onClick = () => {
    const newItems = items.filter(item => item.id !== id);
    dispatch(removeProduct(newItems));
  };

  const addItem = () => {
    const singleItem = {
      title: title,
      image: image,
      price: price,
      id: id,
    };
    const newItems = [...items, singleItem];
    dispatch(addProduct(newItems));
  };

  const deleteItem = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    dispatch(removeProduct(newItems));
  };

  return (
    <Container>
      <Card>
        <p>{id}</p>
        <h1>{title}</h1>

        <img style={{ height: '250px', width: '150px' }} src={image} alt='' />
        <p>{price}</p>

        <button onClick={deleteItem}>remove</button>
      </Card>
    </Container>
  );
};

export default Cart;
