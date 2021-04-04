import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {Carousel, Col, Row} from 'react-bootstrap';

const ProductPage = ({data, location}) => {
  const {
    id,
    productTitle: title,
    price,
    images,
    description,
  } = data.contentfulProduct;
  return (
    <Layout>
      <SEO title={title} />
      <Row className={`cmsId-${id}`}>
        <Col xs={12} sm={4}>
          {(images.length === 1 &&
            images.map((image) => (
              <img
                src={image.file.url}
                width={'100%'}
                alt={image.file.fileName}
              />
            ))) || (
            <Carousel controls={true} interval={2000}>
              {images.map((image) => (
                <Carousel.Item>
                  <img
                    src={image.file.url}
                    width={'100%'}
                    alt={image.file.fileName}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Col>
        <Col xs={12} sm={8}>
          <h1>{title}</h1>
          <ul>
            <li>
              Цена: <strong>{price}₽</strong>
            </li>
          </ul>
          <div
            dangerouslySetInnerHTML={{
              __html: description?.childMarkdownRemark?.html,
            }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default ProductPage;

export const query = graphql`
  query ProductPageQuery($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      id
      productTitle
      price
      slug
      images {
        file {
          url
          fileName
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
