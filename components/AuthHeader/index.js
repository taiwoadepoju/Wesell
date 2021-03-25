import {
  Navbar, Nav, Dropdown, NavItem, NavLink,
} from 'react-bootstrap';
import NotificationIcon from '@/icons/NotificationIcon';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import SearchInputs from './SearchInputs';

const AuthHeader = () => {
  const { firstname, lastname } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
    localStorage.removeItem('USER_INFO');
  };

  return (
    <Navbar expand="lg" className={`${styles.headernav}`}>
      <Navbar.Brand href="/" className="text-white">Wesell</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-5">
          <SearchInputs />
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="text-white">Sell on Wesell</Nav.Link>
          <Nav.Link href="#home" className="text-white px-5">
            <NotificationIcon />
          </Nav.Link>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink} className="text-white">
              {firstname}
              {' '}
              {lastname}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/myoffers">My Offer</Dropdown.Item>
              <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
              <Dropdown.Item href="/product/list">My Store</Dropdown.Item>
              <Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AuthHeader;
