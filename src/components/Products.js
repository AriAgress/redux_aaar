import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/product/productAction';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
`;

const ProductContainer = styled.div`
  margin: 1rem;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
`;

const Products = ({ fetchProducts, productData }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return productData.loading ? (
    <h2>Loading</h2>
  ) : (
    <Container>
      {productData &&
        productData.item &&
        productData.item.map(map_item => (
          <ProductContainer key={map_item.id}>
            <Image src={map_item.image} />
          </ProductContainer>
        ))}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    productData: state.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
