import { useState } from 'react';
import { useRouter } from 'next/router';
import { Badge } from 'react-bootstrap';
import useProductDetails from 'hooks/useProductDetails';
import styles from './styles.module.css';
import ProductDetailsForm from './ProductDetailsForm';
import ProductImageForm from './ProductImageForm';

const ProductForm = ({ handleSubmit, creatingProduct }) => {
  const router = useRouter();
  const { description, id } = router.query;
  const { data } = useProductDetails(id);

  const [showImageForm, setShowImageForm] = useState(false);
  const [payload, setPayload] = useState({});

  const handleShowImageForm = (formPayload) => {
    setPayload(formPayload);
    setShowImageForm(true);
  };

  const {
    name, sellerId, lga, price, state, frontImage,
  } = data;

  return (
    <div className="container pt-5">
      <div className="row justify-content-center p-3">
        <div className="col-sm-4">
          <img src={frontImage} alt={description} className="img-fluid" />
          <p className={`${styles.textgray} lead`}>{name}</p>
          <p className={styles.shrinklineheight}>
            {`Product listed by ${sellerId?.firstname}, ${lga}`}
          </p>
          <p className={`${styles.shrinklineheight}`}>
            {` NGN ${price}`}
          </p>
          <p className={styles.shrinklineheight}>
            <small>
              {`Posted March 23, ${state} ${lga}`}
            </small>
          </p>
          <p>
            <Badge pill variant="success" className={styles.conditiontext}>
              Product condition:
              {' '}
              <strong>Preowned</strong>
            </Badge>
          </p>
        </div>
        <div className={`${styles.formcontainer} col-md-8 col-sm-8 p-5`}>
          <span>Product Details</span>
          <span> &gt; </span>
          <span>Product Image</span>
          <hr />
          {showImageForm
            ? (
              <ProductImageForm
                data={data}
                payload={payload}
                creatingProduct={creatingProduct}
                handleSubmit={handleSubmit}
              />
            )
            : <ProductDetailsForm data={data} showImageForm={handleShowImageForm} />}
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
