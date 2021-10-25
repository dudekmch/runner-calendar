import { Navbar } from "react-bootstrap";
import { RootStateOrAny, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ICurrentUser } from "../../store/auth";
import Logo from "../common/logo/Logo";

import styles from './Navbar.module.css'
import PrivateNavbar from "./PrivateNavbar";
import PublicNavbar from "./PublicNavbar";

const NavbarWrapper = () => {
    const user: ICurrentUser = useSelector(
        (state: RootStateOrAny) => state.authUser.currentUser
      );

      return(
        <Navbar className={styles['navbar-header']}>
        <Navbar.Brand as={NavLink} to='/welcome'>
          <Logo />
          Runner Calendar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        {!user && <PublicNavbar />}
        {user && <PrivateNavbar email={user.email ? user.email : 'email missing'}/>}
        </Navbar>
      )
}

export default NavbarWrapper