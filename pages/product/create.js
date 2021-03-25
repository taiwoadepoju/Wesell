import React from 'react';
import ProductListing from 'containers/ProductListing';
import WithHomeHeader from 'components/layout/WithHomeHeader';

const ProductCreationPage = () => (
  <WithHomeHeader>
    <ProductListing />
  </WithHomeHeader>
);

export default ProductCreationPage;
