/* eslint-disable no-underscore-dangle */
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useProductCategories from 'hooks/useProductCategories';
import { useEffect, useState } from 'react';
import notify from 'utils/notify';
import _ from 'lodash';
import styles from './styles.module.css';

const stateOptions = [
  { value: 'Lagos', label: 'Lagos' },
  { value: 'Abuja', label: 'Abuja' },
];

const area = [
  { value: 'Alimosho', label: 'Alimosho' },
  { value: 'Gwarimpa', label: 'Gwarimpa' },
];

const statusOptions = [
  { value: 'new', label: 'New' },
  { value: 'used', label: 'Used' },
];

const ProductDetailsForm = ({ showImageForm, data = {} }) => {
  const {
    categories: selectedCategories,
    state: selectedState,
    lga: selectedLga,
    description: currentDescription,
    itemState: selectedStatus,
  } = data;
  const { data: categoryOptions, loading: loadingCategories } = useProductCategories();
  const [categories, setCategory] = useState([]);
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleNavigateToNext = () => {
    const payload = {
      categories,
      state,
      lga,
      description,
      status,
    };
    console.log(payload);
    if (!state || !lga || !description || !status) {
      notify.error('All fields are required');
      return;
    }
    showImageForm(payload);
  };

  useEffect(() => {
    if (!data || _.isEmpty(data)) return;
    if (!_.isEmpty(data)) {
      setCategory(selectedCategories ?? selectedCategories?.map((i) => i._id));
      setState(selectedState ?? '');
      setLga(selectedLga ?? '');
      setDescription(currentDescription ?? '');
      setStatus(selectedStatus ?? '');
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <div className="row pt-4">
        <div className="col-sm-6">
          <Form.Label>Product Category*</Form.Label>
          {_.isEmpty(data) && (
          <Select
            isMulti
            onChange={(e) => setCategory(e.map(({ value }) => value))}
            placeholder="Select Category"
            options={categoryOptions}
            isLoading={loadingCategories}
          />
          )}
          {!_.isEmpty(data) && (
          <Select
            isMulti
            onChange={(e) => setCategory(e.map(({ value }) => value))}
            placeholder="Select Category-"
            options={categoryOptions}
            isLoading={loadingCategories}
            value={categoryOptions?.filter((i) => categories?.includes(i.value))}
          />
          )}
        </div>
        <div className="col-sm-6">
          <Form.Label>Selection Location*</Form.Label>
          <div className="row">
            <div className="col">
              <Select
                onChange={(e) => setState(e.value)}
                placeholder="State"
                options={stateOptions}
                value={stateOptions.find((i) => i.value === state)}
              />
            </div>
            <div className="col">
              <Select
                onChange={(e) => setLga(e.value)}
                placeholder="Area"
                options={area}
                value={area.find((i) => i.value === lga)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-sm-12">
          <Form.Group controlId="productDescription">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>
        </div>
      </div>

      <div className="row pt-4 pl-3">
        <Form.Label>Product Status</Form.Label>
      </div>
      <div className="row pt-">
        <div className="col-sm-6">
          <Select
            onChange={(e) => setStatus(e.value)}
            placeholder="Product Status"
            options={statusOptions}
            value={statusOptions.find((i) => i.value.toLowerCase() === status?.toLowerCase())}
          />
        </div>
        <div className="col-sm-3 offset-sm-3 pt-xs-5">
          <div className="row justify-content-center">
            <button
              type="button"
              onClick={() => handleNavigateToNext()}
              className={`${styles.offerbutton} btn btn-primary btn-block w-2`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetailsForm.propTypes = {
  showImageForm: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default ProductDetailsForm;
