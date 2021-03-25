import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const MenuButton = ({ text, selected }) => (
  <Button variant={selected ? 'primary' : 'outline-dark'} className={styles.menubutton}>{text}</Button>
);

MenuButton.defaultProps = {
  selected: false,
};

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default MenuButton;
