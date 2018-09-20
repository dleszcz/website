import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1> {currentPage.title} </h1>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
