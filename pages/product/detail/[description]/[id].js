import React from 'react';
import ProductListing from 'views/ProductListing/Detail';
import WithHomeHeader from 'components/layout/WithHomeHeader';

const ProductDetailPage = () => (
  <WithHomeHeader>
    <ProductListing />
  </WithHomeHeader>
);

export default ProductDetailPage;
