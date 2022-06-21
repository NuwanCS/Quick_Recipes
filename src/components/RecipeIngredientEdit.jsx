import React from 'react'

const RecipeIngredientEdit = ({ingredient}) => {
  return (
    <>
        <input type="text" value={ingredient.name}/>
        <input type="text" value={ingredient.amount}/>
        <button>&times;</button>

    </>
  )
}

export default RecipeIngredientEdit