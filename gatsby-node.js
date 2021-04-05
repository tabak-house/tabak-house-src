/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.onPostBuild = ({reporter}) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return graphql(`
    query loadPagesQuery {
      allContentfulEntry {
        edges {
          node {
            ... on ContentfulBasicPage {
              id
              slug
              sys {
                contentType {
                  sys {
                    id
                  }
                }
              }
            }
            ... on ContentfulProduct {
              id
              slug
              sys {
                contentType {
                  sys {
                    id
                  }
                }
              }
            }
            ... on ContentfulLandingPage {
              id
              slug
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
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allContentfulEntry.edges.forEach((edge) => {
      // Do not create page for homepage.
      if (edge.node.slug === 'home') {
        return;
      }

      switch (edge.node?.sys?.contentType?.sys?.id) {
        case 'basicPage':
          createPage({
            // Path for this page — required
            path: `${edge.node.slug}`,
            component: path.resolve('./src/components/BasicPage.js'),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
            },
          });
          break;

        case 'product': {
          createPage({
            // Path for this page — required
            path: `/products/${edge.node.slug}`,
            component: path.resolve('./src/components/ProductPage.js'),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
            },
          });
          break;
        }
        case 'landingPage': {
          createPage({
            // Path for this page — required
            path: `/${edge.node.slug}`,
            component: path.resolve('./src/components/LandingPage.js'),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
            },
          });
          break;
        }

        default:
          break;
      }
    });
  });
};
