import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

const PrivateNavbar = (props: {email: string}) => {
  return (
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={NavLink} to='/welcome'>
            Welcome
          </Nav.Link>
          <Nav.Link as={NavLink} to='/pricing'>
            Pricing
          </Nav.Link>
        </Nav>
        <Navbar.Collapse className='justify-content-end'>
          <h4>{props.email}</h4>
          <Nav.Link as={NavLink} to='/auth/logout'>
            Logout
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar.Collapse>
  );
};

export default PrivateNavbar;
