import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const SliderAPI = () => {
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
    }
  `)
  const preview = recipes.map(recipe => {
    return (
      <img
        src={getImage(recipe.image).images.fallback.src}
        alt={getImage(recipe.title)}
      />
    )
  })

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <Carousel
        centerMode
        centerSlidePercentage={100}
        //   dynamicHeight
        emulateTouch
        infiniteLoop
        // autoPlay
        interval={6000}
        renderThumbs={() => {
          return preview
        }}
        // .carousel-root{width: 100% !important;}
      >
        {recipes.map((recipe, index) => {
          const { title, image } = recipe
          return (
            <div key={index}>
              <GatsbyImage
                image={getImage(image)}
                className="recipe-img "
                style={{ height: "70vh" }}
                alt={title}
              />
              <div
                className="legend opacity"
                style={{
                  marginLeft: "-50%",
                  //   height: "97.9%",
                  height: "100%",
                  width: "100%",
                  fontSize: "2rem",
                  background: "rgba(0, 0, 0, 0.3)",
                  top: 0,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 5,
                  //   maxWidth
                }}
              >
                {title}
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default SliderAPI
