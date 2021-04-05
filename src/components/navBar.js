import React from 'react';
import logo from '../images/logo.svg';

import {
  Navbar,
  Nav,
  Image,
  NavItem,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const CustomNavbar = ({pageInfo}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar expand={'lg'} variant={'light'}>
            <Navbar.Brand href="/">
              <Image
                className={'navbar-brand-logo'}
                src={logo}
                height={55}
                alt={'Логотип'}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={'ml-auto'}>
                <NavItem>
                  <Nav.Link href="/">Главная</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link href="/catalog">Каталог</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link href="/delivery">Доставка и оплата</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link href="/contact">Контакты</Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomNavbar;
