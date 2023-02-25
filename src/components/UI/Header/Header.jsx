import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='white' expand='lg' className='sticky-top'>
        <Container>
          <NavbarBrand>Лого</NavbarBrand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
