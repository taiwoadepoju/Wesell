/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import PlusIcon from '@/icons/PlusIcon';
import { useRef, useState, useEffect } from 'react';
import useUpdateProduct from 'hooks/useUpdateProduct';
import { useRouter } from 'next/router';
import _ from 'lodash';
import useAuth from 'hooks/useAuth';
import styles from './styles.module.css';

const options = [
  { value: true, label: 'Negotiable' },
  { value: false, label: 'Non-Negotiable' },
];

const ProductImageForm = ({
  payload, creatingProduct, handleSubmit, data = {},
}) => {
  const router = useRouter();
  const { id } = router.query;
  const { userId } = useAuth();
  const {
    price: currentPrice, negotiable: selectedNegotiation, frontImage, backImage, sideImage,
  } = data;
  const { handleUpdateProduct, loading: updating, updateSuccess } = useUpdateProduct();
  const frontImageRef = useRef(null);
  const backImageRef = useRef(null);
  const sideImageRef = useRef(null);
  const [selectedFrontImage, setFrontImage] = useState(null);
  const [selectedBackImage, setBackImage] = useState(null);
  const [selectedSideImage, setSideImage] = useState(null);
  const [price, setPrice] = useState('');
  const [negotiable, setNegotiation] = useState('');

  const handleCreateProduct = () => {
    const {
      categories, state, lga, description, status,
    } = payload;
    const formData = new FormData();
    if (selectedFrontImage) {
      formData.append('frontImage', selectedFrontImage);
    }
    if (selectedBackImage) {
      formData.append('backImage', selectedBackImage);
    }
    if (selectedSideImage) {
      formData.append('sideImage', selectedSideImage);
    }
    formData.append('price', price);
    formData.append('negotiable', negotiable);
    formData.append('categories', categories);
    formData.append('state', state);
    formData.append('lga', lga);
    formData.append('description', description);
    formData.append('itemState', status);
    formData.append('name', description);
    if (_.isEmpty(data)) {
      formData.append('sellerId', userId);
    }

    if (!_.isEmpty(data)) {
      handleUpdateProduct(id, formData);
    } else {
      handleSubmit(formData);
    }
  };

  useEffect(() => {
    if (!data || _.isEmpty(data)) return;
    if (!_.isEmpty(data)) {
      setPrice(currentPrice);
      setNegotiation(selectedNegotiation);
    }

    if (updateSuccess) {
      router.push('/product/list');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, updateSuccess]);

  return (
    <div>
      <p>Upload product image</p>
      <div className="row justify-content-center">
        <div
          className={`${styles.imageselect} col-sm-3`}
          onClick={() => frontImageRef.current.click()}
        >
          {(selectedFrontImage || frontImage)
            && (
            <img
              src={selectedFrontImage ? URL.createObjectURL(selectedFrontImage) : frontImage}
              alt="front-view"
              className={`${styles.imgpreview} img-fluid`}
            />
            )}
          <input type="file" onChange={(e) => setFrontImage(e.target.files[0])} ref={frontImageRef} className={styles.hidefileinput} />
          {(!frontImage) && <PlusIcon />}
        </div>
        <div
          className={`${styles.imageselect} col-sm-3 offset-sm-1`}
          onClick={() => backImageRef.current.click()}
        >
          {(selectedBackImage || backImage)
            && (
            <img
              src={selectedBackImage ? URL.createObjectURL(selectedBackImage) : backImage}
              alt="back-view"
              className={`${styles.imgpreview} img-fluid`}
            />
            )}
          <input type="file" onChange={(e) => setBackImage(e.target.files[0])} ref={backImageRef} className={styles.hidefileinput} />
          {(!backImage) && <PlusIcon />}
        </div>
        <div
          className={`${styles.imageselect} col-sm-3 offset-sm-1`}
          onClick={() => sideImageRef.current.click()}
        >
          {(selectedSideImage || sideImage)
            && (
            <img
              src={selectedSideImage ? URL.createObjectURL(selectedSideImage) : sideImage}
              alt="side-view"
              className={`${styles.imgpreview} img-fluid`}
            />
            )}
          <input type="file" onChange={(e) => setSideImage(e.target.files[0])} ref={sideImageRef} className={styles.hidefileinput} />
          {(!sideImage) && <PlusIcon />}
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-sm-6">
          <Form.Group controlId="productDescription">
            <Form.Label>Product Price</Form.Label>
            <Form.Control value={price} type="number" onChange={(e) => setPrice(e.target.value)} placeholder="NGN" />
          </Form.Group>
        </div>
        <div className="col-sm-6">
          <Form.Label>Negotiation</Form.Label>
          {!_.isEmpty(data) && (
          <Select
            onChange={(e) => setNegotiation(e.value)}
            options={options}
            value={options.filter((i) => i.value === selectedNegotiation)}
          />
          )}

          {_.isEmpty(data) && (
          <Select
            onChange={(e) => setNegotiation(e.value)}
            options={options}
          />
          )}
        </div>
      </div>

      <div className="row pt-4 pl-3">
        <div className="col-sm-3">
          <div className="row justify-content-center">
            <button
              onClick={() => handleCreateProduct()}
              disabled={creatingProduct}
              type="button"
              className={`${styles.offerbutton} btn btn-primary btn-block w-2`}
            >
              {(creatingProduct || updating) ? 'Submitting...' : 'Finish'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageForm;
