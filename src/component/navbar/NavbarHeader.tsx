import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';

import styles from './NavbarHeader.module.css';
import Logo from '../common/logo/Logo';
import {ICurrentUser} from '../../store/auth';
import {RootStateOrAny, useSelector} from 'react-redux';

const NavbarHeader = () => {
  const user: ICurrentUser = useSelector(
    (state: RootStateOrAny) => state.authUser.currentUser
  );

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
          {!user && (
            <>
              <Nav.Link as={NavLink} to='/auth/login'>
                Login
              </Nav.Link>
              or
              <Nav.Link as={NavLink} to='/auth/createAccount'>
                Create account
              </Nav.Link>
            </>
          )}
          {user && (
            <>
            <p>{user.email}</p>
            <Nav.Link as={NavLink} to='/auth/logout'>
              Logout
            </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeader;
