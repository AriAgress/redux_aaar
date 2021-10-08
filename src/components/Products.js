import React from 'react'
import { useEffect, useState } from 'react';
import API from '../routes/apiRouts';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-content: center;
`

const ProductContainer = styled.div`
margin: 1rem;
`

const Image = styled.img`
height: 100px;
width: 100px;
`

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.GetAllProducts()
      .then(res => {
        console.log('PRODUCTS ===>', res);
        setProducts([...products, ...res]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      {products &&
        products.map(item => (
          <ProductContainer key={item.id}>
            <Image src={item.image} />
          </ProductContainer>
        ))}
    </Container>
  );
}

export default Products
