import React from 'react';
import ProductListing from 'containers/ProductListing/ViewProducts';
import WithHomeHeader from 'components/layout/WithHomeHeader';

const ProductListingPage = () => (
  <WithHomeHeader>
    <ProductListing />
  </WithHomeHeader>
);

export default ProductListingPage;
