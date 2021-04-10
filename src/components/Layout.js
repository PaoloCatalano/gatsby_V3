import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SEO from "./SEO"

import "../assets/css/normalize.css"
import "../assets/css/main.css"

const Layout = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
