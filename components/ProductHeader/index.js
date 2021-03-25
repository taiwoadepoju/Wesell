import { Navbar, Nav } from 'react-bootstrap';
import styles from './styles.module.css';

const ProductHeader = () => (
  <Navbar className={`${styles.headernav} border-top border-dark`}>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="#home" className="text-white">Electronics</Nav.Link>
        <Nav.Link href="#link" className="text-white">Appliances</Nav.Link>
        <Nav.Link href="#link" className="text-white">Arts and Craft</Nav.Link>
        <Nav.Link href="#link" className="text-white">Baby &amp; Kids</Nav.Link>
        <Nav.Link href="#link" className="text-white">Health &amp; Beauty</Nav.Link>
        <Nav.Link href="#link" className="text-white">Game &amp; Toys</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default ProductHeader;
