import React from "react"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
const Tags = ({
  data: {
    allContentfulRecipe: { nodes },
  },
}) => {
  const newTags = setupTags(nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
        <h3 style={{ fontWeight: "bold", marginTop: "2rem" }}>
          <span style={{ color: "blue" }}>Simply</span>Gallery
        </h3>

        <Gallery />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
