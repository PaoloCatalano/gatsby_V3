import React from "react"
import Layout from "../components/Layout"
import Allrecipes from "../components/Allrecipes"
import SliderApi from "../components/SliderAPI"

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <SliderApi />
        <Allrecipes />
      </main>
    </Layout>
  )
}

export default Recipes
