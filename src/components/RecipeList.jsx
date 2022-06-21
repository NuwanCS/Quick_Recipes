import React, { useContext } from 'react'
import Recipe from './Recipe'
import styled from  'styled-components'
import { RecipeContext } from '../App'

const AddNewButton = styled.button`
    
`
const RecipeList = ({recipes, handleRecipeDelete}) => {

    const {handleRecipeAdd} = useContext(RecipeContext)
  return (
      <>
      <div>
        {recipes?.map(recipe=>(
            <Recipe 
                key={recipe.id} 
                {...recipe}
            />))}
      </div>
      <AddNewButton onClick={handleRecipeAdd}>Add New Recipe</AddNewButton>
      </>
      
     
    
  )
}

export default RecipeList