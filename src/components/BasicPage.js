import React from "react"
import { graphql } from 'gatsby';


import Layout from "../components/layout"
import SEO from "../components/seo"

const BasicPage = ({ data, location }) => {
  const seoTitle = data.contentfulBasicPage?.pageTitle
  const markup = data.contentfulBasicPage?.markup?.childMarkdownRemark?.html
  return (
    <Layout>
      <SEO title={seoTitle} />
      <div dangerouslySetInnerHTML={{__html: markup}} />
    </Layout>
  )
}

export default BasicPage

export const query = graphql`
  query BasicPageQuery($slug: String!) {
    contentfulBasicPage(slug: {eq: $slug}) {
      id
      pageTitle
      markup {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
