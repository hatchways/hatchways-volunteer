import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Listings from "../components/listings"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <Listings />
    </div>
  </Layout>
)

export default IndexPage
