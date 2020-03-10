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
import PatientModalCreateMethod from '../NavBarDoc/PatientModalCreateMethod';


const logout = () => { localStorage.clear(); };


const Header = (props) => {
  const { auth, statusUser } = props;
  const url = `/personal/${statusUser}`;
  return (
    <div>
      <Navbar style={{ background: '#FFCCBC' }} light expand="md">
        <NavbarBrand href="/"><h3 style={{ color: '#00887A' }}>MedicalTODO</h3></NavbarBrand>
        <Nav className="mr-auto" navbar />
        <Nav />
        {
          statusUser === 'doctor' && (
            <Nav defaultActiveKey="/" className="nav nav-pills nav-fill" >
              <PatientModalCreateMethod />&nbsp;&nbsp;&nbsp;
            </Nav>)
        }

        {
          statusUser === 'doctor' && <Link to={url}><Button style={{ background: '#00887A' }}>Личный кабинет</Button></Link>
        }
        {
          auth && (
            <NavLink href="/">
              <Button style={{ background: '#00887A' }} onClick={() => { isLogout(); logout(); }}>Выход</Button>
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
