import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const listMenu = [
    {
      name: "Главная",
    },
    {
      name: "О Симпозиуме",
    },
    {
      name: "Докладчики",
    },
    {
      name: "Программа мероприятий",
    },
    {
      name: "Плата",
    },
    {
      name: "Контакты",
    },
    {
      name: "Статьи",
    },
  ];
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-2">
          Лого
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {listMenu.map((menu, index) => (
              <Nav.Link key={index} className="font--heading text-dark" href="">
                {menu.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
