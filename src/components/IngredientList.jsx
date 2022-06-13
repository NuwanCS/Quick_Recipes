import React from 'react'
import Ingredients from './Ingredients'

const IngredientList = ({ingredients}) => {

    const ingredientList = ingredients.map(ingredient =>{
        return (<Ingredients 
        key={ingredient.id}
        {...ingredient}
        />)
    })

  return (
    <div>{ingredientList}</div>
  )
}

export default IngredientList