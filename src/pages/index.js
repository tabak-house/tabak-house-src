import {graphql} from 'gatsby';
import LandingPage from '../components/LandingPage';

/**
 * Index page component.
 */
export default class Index extends LandingPage {};

export const query = graphql`
  query HomePageQuery {
    contentfulLandingPage(slug: {eq: "home"}) {
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
