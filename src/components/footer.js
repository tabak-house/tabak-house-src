import React from "react"
import {Col, Container, Image, Navbar, Row} from "react-bootstrap";
import logo from "../images/logo.svg"
import {Link} from "gatsby";

const Footer = () => {
  return (
    <Container>
      <footer className={'py-5'}>

        <Row noGutters>
          <Col xs={12} sm={4}>
            <Link to={'/'}>
              <Image src={logo} height={55} alt={'Логотип'}/>
            </Link>
          </Col>
          <Col xs={12} sm={8}>
            <span>© {new Date().getFullYear()}, <a
              href="https://tabak.house">Tabak.house</a></span>
          </Col>
        </Row>
      </footer>
    </Container>
  )
}

export default Footer
