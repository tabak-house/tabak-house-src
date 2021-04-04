import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data, location }) => {
  const seoTitle = data.contentfulBasicPage?.pageTitle
  const markup = data.contentfulBasicPage?.markup?.childMarkdownRemark?.html
  return (
    <Layout>
      <SEO title={seoTitle} />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    contentfulBasicPage(slug: { eq: "home" }) {
      id
      slug
      pageTitle
      markup {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
