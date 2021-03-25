import { useState } from 'react';
import styles from './styles.module.css';
import ProductDetailsForm from './ProductDetailsForm';
import ProductImageForm from './ProductImageForm';

const ProductForm = ({ handleSubmit, creatingProduct }) => {
  const [showImageForm, setShowImageForm] = useState(false);
  const [payload, setPayload] = useState({});

  const handleShowImageForm = (formPayload) => {
    setPayload(formPayload);
    setShowImageForm(true);
  };

  return (
    <div className="container pt-5">
      <h3 className={`${styles.title}`}>List a product on Wesell</h3>
      <div className="row justify-content-center p-3">
        <div className={`${styles.formcontainer} col-md-8 col-sm-12 p-5`}>
          <span>Product Details</span>
          <span> &gt; </span>
          <span>Product Image</span>
          <hr />
          {showImageForm
            ? (
              <ProductImageForm
                payload={payload}
                creatingProduct={creatingProduct}
                handleSubmit={handleSubmit}
              />
            )
            : <ProductDetailsForm showImageForm={handleShowImageForm} />}
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
