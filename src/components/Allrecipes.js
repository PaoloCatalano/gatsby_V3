import React from "react"
import Tagslist from "./Tagslist"
import Recipeslist from "./Recipeslist"
import { useStaticQuery, graphql } from "gatsby"

const Allrecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(graphql`
    {
      allContentfulRecipe(sort: { fields: title, order: ASC }) {
        nodes {
          id
          title
          cookTime
          prepTime
          content {
            tags
          }
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  `)
  return (
    <section className="recipes-container">
      <Tagslist recipes={recipes} />
      <Recipeslist recipes={recipes} />
    </section>
  )
}

export default Allrecipes
