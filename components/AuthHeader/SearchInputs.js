import { Form } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';

const SearchInput = () => (
  <div>
    <div className={styles.inputsection}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className={styles.searchlabel}>Goods and Services</Form.Label>
        <Form.Control type="text" placeholder="What are you looking for?" className={styles.input} />
      </Form.Group>
      <span className={styles.divider} />
      <Form.Group controlId="formBasicEmail">
        <Form.Label className={styles.searchlabel}>Search area</Form.Label>
        <Form.Control type="text" placeholder="Whare are you located?" className={styles.input} />
      </Form.Group>
      <div className={styles.searchiconsection}>
        <FontAwesomeIcon icon={faSearch} className={styles.searchicon} />
      </div>
    </div>
  </div>
);

export default SearchInput;
