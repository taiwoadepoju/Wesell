import { Navbar, Nav } from 'react-bootstrap';
import styles from './styles.module.css';

const Header = () => (
  <Navbar expand="lg" className={styles.headernav}>
    <Navbar.Brand href="/" className="text-white">Wesell</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className="text-white">Sell on Wesell</Nav.Link>
        <Nav.Link href="/auth" className="text-white">My Account</Nav.Link>
        <Nav.Link className="text-white">Message</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
