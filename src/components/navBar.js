import React from "react"
import logo from "../images/logo.svg"

import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
  NavItem,
} from "react-bootstrap"

const CustomNavbar = ({pageInfo}) => {

  return (
    <Navbar expand={"lg"} variant={"light"}>
      <Navbar.Brand href="/">
        <Image src={logo} height={55} alt={'Логотип'}/>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav>
          <NavItem>
            <Nav.Link href="/">Главная</Nav.Link>
          </NavItem>
          <NavItem>
            <NavDropdown title="Каталог" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Табак</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/">Кальяны</NavDropdown.Item>
              <NavDropdown.Item href="/">Колбы</NavDropdown.Item>
              <NavDropdown.Item href="/">Чаши для кальяна</NavDropdown.Item>
              <NavDropdown.Item href="/">Калауд и колпаки</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/">Уголь, кадило и щипцы</NavDropdown.Item>
            </NavDropdown>
          </NavItem>
          <Nav.Link href="/">Доставка и оплата</Nav.Link>
          <Nav.Link href="/">Контакты</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
