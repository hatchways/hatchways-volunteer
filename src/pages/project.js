import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }) => {
  console.log(location)
  const { hash } = location
  let projectId = ""

  if (hash) {
    projectId = hash.substr(1).split("=")[1]
  }

  console.log(projectId)

  const { data } = graphql`
    query VolunterListingQuery {
      allVolunteerListingsJson(filter: { id: { eq: "giving-tree" } }) {
        edges {
          node {
            title
            description
            location
          }
        }
      }
    }
  `

  console.log(data)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
