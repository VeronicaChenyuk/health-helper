import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
} from 'reactstrap';


const Header = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">MedicalTODO</NavbarBrand>
      <Nav className="mr-auto" navbar />
      <Nav />
      <Button color="success">Выход</Button>
    </Navbar>
  </div>
);

export default Header;
