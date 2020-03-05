import React from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
} from 'reactstrap';


const Header = (props) => {
  const { auth } = props;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MedicalTODO</NavbarBrand>
        <Nav className="mr-auto" navbar />
        <Nav />
        {
      auth && <Button color="success">Выход</Button>
      }
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.logIn.auth,
});

export default connect(
  mapStateToProps,
)(Header);
