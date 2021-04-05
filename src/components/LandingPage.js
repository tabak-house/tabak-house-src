import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {Col, Row} from 'react-bootstrap';

const LandingPage = ({data, location}) => {
  console.log(data);

  const {
    pageTitle: title,
    content: columns,
  } = data.contentfulLandingPage;

  return (<Layout>
    <SEO title={title} />
    <Row>
      { columns.map((column) => {
        console.log('column:', column);
        console.log('column.xs:', column.xs);
        return (
          <Col
            xl={column.xl}
            lg={column.lg}
            md={column.sm}
            sm={column.sm}
            xs={column.xs}
          >
            {column.content.map((atomReference) => {
              console.log('atomReference:', atomReference);
              const atomType = atomReference.sys?.contentType?.sys?.id;
              switch (atomType) {
                case 'atomMarkup':
                  return (
                    <div
                      className={'atom__markup'}
                      dangerouslySetInnerHTML={{
                        __html: atomReference.markup?.childMarkdownRemark?.html,
                      }}
                    />);

                default:
                  return (
                    <div>
                      No template found for "{atomType}" type.
                    </div>
                  );
              }
            })}
          </Col>
        );
      })}
    </Row>
  </Layout>);
};

export default LandingPage;

export const query = graphql`
  query LandingPageQuery($id: String!) {
    contentfulLandingPage(id: {eq: $id}) {
      id
      pageTitle
      content {
        lg
        md
        sm
        xl
        xs
        content {
          markup {
            childMarkdownRemark {
              html
            }
          }
          sys {
            contentType {
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
`;
