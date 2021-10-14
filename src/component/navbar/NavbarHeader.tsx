import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';

import styles from './NavbarHeader.module.css';
import Logo from '../common/logo/Logo';

const NavbarHeader = () => {
  return (
    <Navbar className={styles['navbar-header']}>
      <Navbar.Brand as={NavLink} to='/welcome'>
         <Logo />
        Runner Calendar
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={NavLink} to='/welcome'>
            Welcome
          </Nav.Link>
          <Nav.Link as={NavLink} to='/pricing'>
            Pricing
          </Nav.Link>
          <NavDropdown title='Support' id='basic-nav-dropdown'>
            <NavDropdown.Item as={NavLink} to='/support/rules'>
              Rules
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='support/faq'>
              FAQ
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to='/support/contact'>
              Contact
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className='justify-content-end'>
          <Nav.Link as={NavLink} to='/login'>
            Login
          </Nav.Link>
          or
          <Nav.Link as={NavLink} to='/createAccount'>
            Create account
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeader;
