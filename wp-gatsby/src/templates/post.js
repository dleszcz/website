import React, { Component } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import PostIcons from "../components/postIcons/postIcons.component";
import Layout from "../layouts";

import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    console.log(this.props.data);
    console.log(post);

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <PostIcons node={post} css={{ marginBottom: rhythm(1 / 2) }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        {
          post.acf && post.acf.some &&
          <div> { post.acf.some } </div> }
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql `
  query postQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      ...PostIcons
      acf {
        some,
        hello
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`