/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import {Container, Row, Col} from 'react-bootstrap';

import Navbar from './navBar';
import Footer from './footer';

const Layout = ({children, pageInfo}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Navbar pageInfo={pageInfo} />
        <Container fluid>
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )}
  />
);

export default Layout;
