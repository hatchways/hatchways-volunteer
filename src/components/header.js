import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HoverText = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #fd5a25;
  color: #fd5a25;
  border-radius: 5px;
  font-size: 0.9em;
  :hover {
    color: white;
    background-color: #fd5a25;
  }
`

const Header = ({ siteTitle, createProjectText }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
      }}
    >
      <h2 style={{ margin: 0, flexGrow: `2` }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>

      <HoverText to="https://forms.gle/fSbtrp545EuRguyZ7">
        {createProjectText}
      </HoverText>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  createProjectText: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  createProjectText: ``,
}

export default Header
