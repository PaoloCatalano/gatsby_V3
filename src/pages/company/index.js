import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const company = () => {
  return (
    <section style={{ width: "70vw", margin: "0 auto" }}>
      <article style={{ border: "2px solid green" }}>
        <h4>constrained / dominantColor (default)</h4>
        <div>
          <StaticImage
            src="../../assets/images/recipe-1.jpeg"
            alt="food"
            height={400}
            // placeholder="dominantColor"
            layout="constrained"
            className="example-img"
            as="section"
          />
        </div>
      </article>
      <article style={{ border: "2px solid green" }}>
        <h4>fixed / blurred</h4>
        <div>
          <StaticImage
            src="../../assets/images/recipe-3.jpeg"
            alt="food"
            height={200}
            placeholder="blurred"
            layout="fixed"
            className="example-img"
            as="pre"
          />
        </div>
      </article>
      <article style={{ border: "2px solid green" }}>
        <h4>full width / tracedSVG</h4>
        <div>
          <StaticImage
            src="../../assets/images/recipe-2.jpeg"
            alt="food"
            placeholder="tracedSVG"
            layout="fullWidth"
            className="example-img"
            as="section"
          />
        </div>
      </article>
    </section>
  )
}

export default company
