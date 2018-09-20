import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import ClockIcon from "react-icons/lib/fa/clock-o";

import Layout from "../../layouts";
import PostIcons from "../../components/postIcons/postIcons.component";

import { rhythm } from "../../utils/typography";

class PostsTemplate extends Component {
  render() {
    const data = this.props.data

    console.log('posts', this.props);

    return (
      <Layout>
        <h1>Posts</h1>

        {data.allWordpressPost.edges.map(({ node }) => (
          <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <PostIcons node={node} />
          </div>
        ))}
      </Layout>
    )
  }
}

export default PostsTemplate

export const postsQuery = graphql`
  query postsQuery {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          ...PostIcons
        }
      }
    }
  }
`