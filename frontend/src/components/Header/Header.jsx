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
import './Header.css'


const logout = () => { localStorage.clear(); };


const Header = (props) => {
  const { auth, statusUser } = props;
  const url = `/personal/${statusUser}`;
  return (
    <div>
      <Navbar className='navBar' light expand="md">
        <NavbarBrand href="/"><h3>MedicalTODO</h3></NavbarBrand>
        
        
        <Nav className="mr-auto" navbar />
        <Nav />
        {
          statusUser === 'doctor' && (
            <Nav defaultActiveKey="/" className="nav nav-pills nav-fill">
              <PatientModalCreateMethod />
&nbsp;&nbsp;&nbsp;
            </Nav>
          )
        }

        {
          statusUser === 'doctor' && <Link to={url}><Button >Личный кабинет</Button></Link>
        }
        {
          auth && (
            <NavLink href="/">
              <Button onClick={() => { isLogout(); logout(); }}>Выход</Button>
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
