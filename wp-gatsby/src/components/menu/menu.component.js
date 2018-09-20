import React, { Component } from "react";
import Link from 'gatsby-link'


class Menu extends Component {
  render() {
    return (
      <ul css = {
        {
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center'
        }
      }>
        {
          this.props.items.map((item) =>
            <li
              key={item.object_slug}
              css = {
              {
                margin: '0 10px',
              }
            }>
              <Link
                to={`${item.object_slug}`}
                css={
                  {
                    color: `#fff`,
                    ":hover": {
                      color: `rgb(224,203,144)`,
                      textDecoration: `none`,
                    },
                  }
                }>
                {item.title}
              </Link>
            </li>
        )}
      </ul>
    )
  }
}

export default Menu;