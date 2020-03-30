import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Listings from "../components/listings"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <Listings />
    </div>
  </Layout>
)

export default IndexPage
