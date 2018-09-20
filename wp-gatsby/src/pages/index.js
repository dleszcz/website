import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts"

import { rhythm } from "../utils/typography"

class Home extends Component {
  render() {
    const data = this.props.data

    console.log('home props', this.props);

    return (
      <Layout>
        <div css={{ marginBottom: rhythm(1) }}>
          <h1>Homepage</h1>
        </div>
      </Layout>
    )
  }
}

export default Home;
