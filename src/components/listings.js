import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const Post = styled.li`
  background-color: white;
  list-style-type: none;
  margin: 0 0 16px 0;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`
const PostTitle = styled.h3`
  margin-bottom: 16px;
`

const Listings = ({}) => {
  const data = useStaticQuery(graphql`
    query VolunterListingsQuery {
      allVolunteerListingsJson {
        edges {
          node {
            title
            description
            location
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <ul style={{ margin: `20px 0`, padding: 0 }}>
      {data.allVolunteerListingsJson.edges.map(listing => (
        <Post>
          <PostTitle>{listing.node.title}</PostTitle>
          <p style={{ lineHeight: `1.5rem`, margin: `16px 0` }}>
            {listing.node.description}
          </p>
          <div style={{ color: `#46B2A2` }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {listing.node.location}
          </div>
        </Post>
      ))}
    </ul>
  )
}

// Hero.propTypes = {
//   headerText: PropTypes.string,
//   description: PropTypes.string,
// }

// Hero.defaultProps = {
//   headerText: ``,
//   description: ``,
// }

export default Listings
