import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {graphql} from 'gatsby';
import {Col, Row} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const Catalog = ({data, location}) => {
  const products = data.allContentfulProduct.edges;

  return (
    <Layout>
      <SEO title={'Каталог'} />
      <h1>Каталог товаров</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={product.node.id}>
              <ProductCard
                contentfulId={product.node.id}
                title={product.node.productTitle}
                price={product.node.price}
                url={`/products/${product.node.slug}`}
                imageUrl={product.node.images[0].fluid.src}
              />
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
};

export default Catalog;

export const query = graphql`
  query CatalogQuery {
    allContentfulProduct(limit: 50, sort: { fields: updatedAt, order: DESC }) {
      edges {
        node {
          id
          price
          slug
          productTitle
          images {
            fluid(
              cropFocus: CENTER
              maxHeight: 250
              maxWidth: 250
              toFormat: JPG
              resizingBehavior: FILL
            ) {
              src
            }
          }
        }
      }
    }
  }
`;
