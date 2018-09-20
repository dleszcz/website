import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from 'react-helmet';

import { Link, StaticQuery } from "gatsby";

import Menu from "../components/menu/menu.component";

import { rhythm, scale } from "../utils/typography";

const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
  padding: rhythm(1 / 2),
}

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div
          css={{
            background: `rgb(207, 58, 62)`,
            padding: `${rhythm(1)} 0px`,
            "@media screen and (min-width: 500px)": {
              padding: `${rhythm(2)} 0px`,
            },
          }}
        >
          <div css={containerStyle}>
            <h1 css={{
                margin: 0,
                fontSize: scale(1.5).fontSize,
                lineHeight: 1,
                textAlign: 'center',
                "@media screen and (min-width: 500px)": {
                  fontSize: scale(1.9).fontSize,
                  lineHeight: 1,
                },
              }}
            >
              <Link to = "/"
                css = {
                  {
                  color: `rgb(224,203,144)`,
                  ":hover": {
                    color: `rgb(224,203,144)`,
                    textDecoration: `none`,
                  },
                }}
              >
                Hello Gatsby
              </Link>
            </h1>
          </div>
          <StaticQuery
          query={graphql`
            query mainMenuQuery {
              wordpressWpApiMenusMenusItems(slug: { eq: "main-menu" }) {
                items {
                  title
                  url
                  object_slug
                }
              }
            }
          `}
          render={({ wordpressWpApiMenusMenusItems: { items } }) => (
            <Menu items={items} />
          )}
        />
        </div>

        <div css={containerStyle}>{this.props.children}</div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object,
}

export default DefaultLayout;
