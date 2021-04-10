import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          relativeDirectory: { eq: "images" }
          extension: { ne: "svg" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: BLURRED
              blurredOptions: { width: 5 }
              width: 500
              height: 400
            )
          }
        }
      }
    }
  `)
  const n = data.allFile.nodes
  return (
    <Wrapper>
      {n.map((image, index) => {
        const pathToImage = getImage(image) //controlla se l'immgine c'é e crea il path all'immagine (gatsbyImageData)
        return (
          <article key={index} className="item">
            <div>{image.name}</div>
            <GatsbyImage
              image={pathToImage}
              alt={image.name}
              className="gallery-img"
            />
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 2rem 1rem 1rem 0;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
