import React from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { isLogout } from '../../redux/actions';


const logout = () => { localStorage.clear(); };


const Header = (props) => {
  const { auth, statusUser } = props;
  const url = `/personal/${statusUser}`;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MedicalTODO</NavbarBrand>
        <Nav className="mr-auto" navbar />
        <Nav />
        {
          auth && <Link to={url}><Button>Личный кабинет</Button></Link>
        }
        {
          auth && (
          <NavLink href="/">
            <Button color="success" onClick={() => { isLogout(); logout(); }}>Выход</Button>
          </NavLink>
          )
        }
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    auth: state.logIn.auth,
    statusUser: state.logIn.user.status,
  });

const mapDispatchToProps = (dispatch) => ({
  isLogout: () => dispatch(isLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
