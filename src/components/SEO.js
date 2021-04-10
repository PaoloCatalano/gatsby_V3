import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDesc = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{ lang: "en-US" }}
      title={`${metaTitle} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDesc }]}
    ></Helmet>
  )
}

export default SEO
