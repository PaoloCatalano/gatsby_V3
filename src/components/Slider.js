import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import img1 from "../assets/images/recipe-1.jpeg"
import img2 from "../assets/images/recipe-2.jpeg"
import img3 from "../assets/images/recipe-3.jpeg"
import { StaticImage } from "gatsby-plugin-image"

const Slider = () => {
  const thumb = [
    <img src={img1} alt="1" />,
    <img src={img2} alt="2" />,
    <img src={img3} alt="3" />,
  ]

  return (
    <Carousel
      centerMode
      centerSlidePercentage={90}
      //   dynamicHeight
      emulateTouch
      infiniteLoop
      //   autoPlay
      interval={6000}
      //   onClickItem={(index, item) => {
      //     console.log(index)
      //     console.log(item)
      //   }}
      //   renderIndicator={(isShown, func) => {
      //     console.log(isShown)
      //     console.log(func)
      //   }}
      // showThumbs={false}
      renderThumbs={() => {
        return thumb
      }}
      width="70vw"
    >
      <div>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="egs"
          className="hero-img"
          placeholder="tracedSVG"
          layout="constrained"
          height={400}
        ></StaticImage>
        <div className="legend" style={{ bottom: "45%" }}>
          Legend 1
        </div>
      </div>
      <div>
        <StaticImage
          src="../assets/images/recipe-2.jpeg"
          alt="egs"
          className="hero-img"
          placeholder="tracedSVG"
          layout="constrained"
          height={400}
        ></StaticImage>

        <div className="legend">Legend 2</div>
      </div>
      <div>
        <StaticImage
          src="../assets/images/recipe-3.jpeg"
          alt="egs"
          className="hero-img"
          placeholder="tracedSVG"
          layout="constrained"
          height={400}
        ></StaticImage>
        <div className="legend">Legend 3</div>
      </div>
    </Carousel>
  )
}

export default Slider
