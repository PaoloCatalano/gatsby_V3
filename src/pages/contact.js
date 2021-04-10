import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Recipeslist from "../components/Recipeslist"
const Contact = ({
  data: {
    all: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get in Touch?</h3>
            <p>
              success write out requires - 0.002s success run page queries -
              0.017s - 1/1 59.06/s success onPreExtractQueries - 0.004s success
              extract queries from components - 0.039s success write out
              requires - 0.004s success Re-building development bundle - 0.331s
            </p>
            <p>
              extract queries from components - 0.039s success write out
              requires
            </p>
            <p>
              success write out requires - 0.002s success run page queries -
              0.017s - 1/1 59.06/s success onPreExtractQueries - 0.004s success
              extract queries from components - 0.039s success write out
              requires - 0.004s success Re-building development bundle - 0.331s
            </p>
          </article>
          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea type="text" name="message" id="message"></textarea>
              </div>
              <button className="btn block">submit</button>
            </form>
          </article>
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

export default Contact
