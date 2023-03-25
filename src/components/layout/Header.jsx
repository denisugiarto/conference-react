import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";

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

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-2">
          Лого
        </Navbar.Brand>

        {/* toggler */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick}>
          {click ? (
            <TfiClose size={27} className=" bg-transparent" />
          ) : (
            <GiHamburgerMenu size={27} className=" bg-transparent" />
          )}
        </Navbar.Toggle>

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
