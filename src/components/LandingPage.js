import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import {Col, Row} from 'react-bootstrap';
import {graphql} from 'gatsby';

/**
 * Landing page component.
 */
export default class LandingPage extends React.Component {
  /**
   * @inheritDoc
   * @return {JSX.Element}
   */
  render() {
    const {
      pageTitle: title,
      content: columns,
    } = this.props.data.contentfulLandingPage;

    return (<Layout>
      <SEO title={title}/>
      <Row>
        {columns.map((column) => {
          return (
            <Col
              key={column.id}
              xl={column.xl}
              lg={column.lg}
              md={column.sm}
              sm={column.sm}
              xs={column.xs}
            >
              {column.content.map((atomReference) => {
                const atomType = atomReference.sys?.contentType?.sys?.id;
                switch (atomType) {
                  case 'atomMarkup':
                    return <div
                      key={atomReference.id}
                      className={'atom__markup'}
                      dangerouslySetInnerHTML={{
                        __html: atomReference.markup?.childMarkdownRemark?.html,
                      }}
                    />;

                  default:
                    return <div key={atomReference.id}>
                      No template found for "{atomType}" type.
                    </div>;
                }
              })}
            </Col>
          );
        })}
      </Row>
    </Layout>);
  }
}

export const query = graphql`
  query LandingPageQuery($id: String!) {
    contentfulLandingPage(id: {eq: $id}) {
      id
      pageTitle
      content {
        id
        lg
        md
        sm
        xl
        xs
        content {
          id
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
