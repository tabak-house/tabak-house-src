/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
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
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulEntry.edges.forEach(edge => {
      switch (edge.node.sys.contentType.sys.id) {
        case "basicPage":
          // Do not create page for homepage.
          if(edge.node.slug === 'home') {
            break;
          }

          createPage({
            // Path for this page — required
            path: `${edge.node.slug}`,
            component: path.resolve('./src/components/BasicPage.js'),
            context: {
              slug: edge.node.slug,
            },
          })
          break;
      }
    })
  })
}
