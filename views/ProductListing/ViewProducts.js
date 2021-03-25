import { useState } from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import ChangeStatusModal from './ChangeStatusModal';
import _ from 'lodash';
import { useRouter } from 'next/router';

const ViewProducts = ({ products }) => {
  const router = useRouter();
  const [showChangeStatusModal, setShowChangeStatusModal] = useState(false);
  const [id, setid] = useState('');
  const [status, setStatus] = useState({});

  const handleOpenModal = (productId, productStatus) => {
    setid(productId);
    setShowChangeStatusModal(true);
    setStatus(productStatus);
  }

  const handleClickProduct = (productId, description) => {
    router.push(`/product/detail/${_.kebabCase(description)}/${productId}`);
  };

  return (
    <div className="container pt-5">
      {showChangeStatusModal && <ChangeStatusModal
        id={id}
        selectedStatus={status}
        show={showChangeStatusModal}
        closeModal={() => setShowChangeStatusModal(false)}
      />}
      <p className="pb-3">Showing results for all listed products</p>
      <div className="row">
        <div className="col-sm-3 offset-sm-9 mb-5">
          <Button
            onClick={() => router.push('/product/create')}
            className="btn btn-primary px-4"
          >
            List New Product
          </Button>
        </div>
      </div>
      <Table hover borderless>
        <tbody>
          {products?.map((item) => (
            <tr className={styles.productrow} key={item._id}>
              <td>
                <img src={item.frontImage} alt="product name" />
              </td>
              <td>
                <p className={styles.productname}><a>{item.description}</a></p>
                <p className={styles.productdate}>
                  Date posted:&nbsp;
                  {item.createdAt}
                </p>
              </td>
              <td className="text-center">
                <h5>
                  <Badge pill variant="light">
                    Price
                  </Badge>
                </h5>
                <p className={styles.textdetail}>
                  NGN&nbsp;
                  {item.price}
                </p>
              </td>
              <td className="text-center">
                <h5>
                  <Badge pill variant="light">
                    Offers
                  </Badge>
                </h5>
                <p>-</p>
              </td>
              <td className="text-center">
                <h5>
                  <Badge pill variant="light">
                    Sold
                  </Badge>
                </h5>
                <p>-</p>
              </td>
              <td className="text-center">
                <Button
                  onClick={() => handleClickProduct(item._id, item.description)}
                  className="btn btn-primary px-4"
                >
                  Edit
                </Button>
              </td>
              <td className="text-center">
                <Button
                  className={`${styles.statusbtn} btn`}
                  variant="outline-primary"
                  onClick={() => handleOpenModal(item._id, item.status)}
                >
                  Change Status
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewProducts;
