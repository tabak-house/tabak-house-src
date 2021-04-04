import React from "react"
import { Col, Container, Image, Navbar, Row } from "react-bootstrap"
import logo from "../images/logo.svg"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Container>
      <footer className={"py-5 text-center"}>
        <p>
          <Link to={"/"}>
            <Image src={logo} height={55} alt={"Логотип"} />
          </Link>
        </p>
        <p>
          <span>
            © {new Date().getFullYear()},{" "}
            <a href="https://tabak.house">Tabak.house</a>
          </span>
        </p>
      </footer>
    </Container>
  )
}

export default Footer
