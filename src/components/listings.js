import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import Hero from "./hero"

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
            id
            title
            description
            location
          }
        }
      }
    }
  `)

  return (
    <div>
      <Hero
        headerText={"COVID-19 projects looking for volunteers."}
        description={`New or established projects helping with the COVID-19 crisis that need help. Volunteer yourself or create a new one.`}
      />

      <ul
        style={{
          margin: `20px auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          padding: 0,
        }}
      >
        {data.allVolunteerListingsJson.edges.map(listing => (
          <Post>
            <PostTitle>{listing.node.title}</PostTitle>
            <p style={{ lineHeight: `1.5rem`, margin: `16px 0` }}>
              {listing.node.description}
            </p>
            <div style={{ color: `#46B2A2` }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {listing.node.location}
              <Link
                to={`/project/${listing.node.id}`}
                style={{ paddingLeft: 10 }}
              >
                Read more
              </Link>
            </div>
          </Post>
        ))}
      </ul>
    </div>
  )
}

export default Listings
