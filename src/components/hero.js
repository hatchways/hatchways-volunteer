import PropTypes from "prop-types"
import React from "react"

const Hero = ({ headerText, description }) => (
  <div
    style={{
      margin: `0 auto`,
      padding: `100px 50px`,
      textAlign: `center`,
      backgroundColor: `#46B2A2`,
      color: `white`,
    }}
  >
    <h1 style={{}}>{headerText}</h1>
    <p style={{ fontSize: `1.1rem` }}> {description} </p>
  </div>
)

Hero.propTypes = {
  headerText: PropTypes.string,
  description: PropTypes.string,
}

Hero.defaultProps = {
  headerText: ``,
  description: ``,
}

export default Hero
