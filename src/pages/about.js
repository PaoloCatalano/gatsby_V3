import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import Recipeslist from "../components/Recipeslist"
const About = ({
  data: {
    all: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Morty, don't morty me next time!</h2>
            <p>
              success write out requires - 0.003s warn
              C:\Users\Samsung\JavaScript\GatsbyJS\gatsby_V3\src\pages\about.js
            </p>
            <p>
              {" "}
              3:10 warning 'StaticImge' is defined but never used no-unused-vars
            </p>
            <p>
              {" "}
              4:10 warning 'Link' is defined but never used no-unused-vars ✖ 2
              problems (0 errors, 2 warnings)
            </p>
            <Link to="/" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="food"
            className="about-img"
            // about-img applica una grandezza 100% al wrapper quando lo schermo é grande e non al img
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>GRande GIove!!!</h5>
          <Recipeslist recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    all: allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
