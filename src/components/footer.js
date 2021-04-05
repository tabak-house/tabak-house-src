import React from 'react';
import {Container, Image} from 'react-bootstrap';
import logo from '../images/logo.svg';
import {Link} from 'gatsby';

const Footer = () => {
  return (
    <Container>
      <footer className={'py-5 text-center'}>
        <p>
          <Link className={'footer-brand-link'} to={'/'} >
            <Image
              className={'footer-brand-logo'}
              src={logo}
              height={55}
              alt={'Логотип'}
            />
          </Link>
        </p>
        <p>
          <span>
            © {new Date().getFullYear()},{' '}
            <a href="https://tabak.house">Tabak.house</a>
          </span>
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
