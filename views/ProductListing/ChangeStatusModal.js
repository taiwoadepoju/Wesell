import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
import PropTypes from 'prop-types';
import useUpdateProduct from 'hooks/useUpdateProduct';
import styles from './styles.module.css';

const statusOptions = [
  { value: 'Sold', label: 'Sold' },
  { value: 'Available', label: 'Available' },
  { value: 'Inactive', label: 'Inactive' },
  { value: 'OutOfStock', label: 'Out Of Stock' },
];

const ChangeStatusModal = ({
  closeModal, show, id, selectedStatus,
}) => {
  const [status, setStatus] = useState(selectedStatus);
  const { loading, handleUpdateProduct, updateSuccess } = useUpdateProduct();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('status', status);
    handleUpdateProduct(id, formData);
  };

  useEffect(() => {
    if (updateSuccess) {
      closeModal();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateSuccess]);

  return (
    <Modal
      onHide={closeModal}
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="p-3">
          <h5 className={`${styles.textdetail} text-center pb-4`}>Product Status</h5>
          <p className={`${styles.modalinfo}`}>
            Change the current status of the product in your store by selecting one of these
          </p>
          <p className={`${styles.textdetail} text-center`}>Bags For Women</p>
          <br />
          <div className="row">
            <div className="col-sm-6">
              <p className="text-right">Product status</p>
            </div>
            <div className="col-sm-6">
              <Select
                onChange={(e) => setStatus(e.value)}
                placeholder="Select status"
                options={statusOptions}
                defaultValue={statusOptions.find((i) => i.value === selectedStatus)}
              />
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-sm-3 offset-sm-3">
              <Button
                onClick={handleSubmit}
              >
                {loading ? 'Updating...' : 'Finish'}
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

ChangeStatusModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  selectedStatus: PropTypes.string.isRequired,
};

export default ChangeStatusModal;
