import React from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  NavLink,
} from 'reactstrap';
import { isLogout } from '../../redux/actions';

const logout = () => { localStorage.clear(); };


const Header = (props) => {
  const { auth } = props;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MedicalTODO</NavbarBrand>
        <Nav className="mr-auto" navbar />
        <Nav />
        {
          auth && <NavLink href="/"><Button color="success" onClick={() => { isLogout(); logout(); }}>Выход</Button></NavLink>
        }
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.logIn.auth,
});

const mapDispatchToProps = (dispatch) => ({
  isLogout: () => dispatch(isLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
