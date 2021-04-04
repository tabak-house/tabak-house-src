import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const seoTitle = data.contentfulBasicPage?.slug
  const markup = data.contentfulBasicPage?.markup?.childMarkdownRemark?.html
  return (
    <Layout>
      <SEO title={seoTitle} />
      <div dangerouslySetInnerHTML={{__html: markup}} />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    contentfulBasicPage(slug: {eq: "404"}) {
      id
      slug
      markup {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
