const setupTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] += 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  // console.log(allTags)
  const newTags = Object.entries(allTags)
  /* Object.keys(obj) – returns an array of keys.
     Object.values(obj) – returns an array of values.
     Object.entries(obj) – returns an array of [key, value] pairs. 
     Object.entries("String") - return an array of [ key: #index, value: 'char'] Ex: [[0, "S"], [1, "t"], [2, "r"]...] */

  newTags.sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  // console.log(newTags)
  return newTags
}

export default setupTags
