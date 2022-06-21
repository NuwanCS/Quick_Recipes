import React, { useContext } from 'react'
import styled from 'styled-components'
import { RecipeContext } from '../App'
import RecipeIngredientEdit from './RecipeIngredientEdit'


const RecipeEditContianer = styled.div`
    position: absolute;
    top: 0;
    height: 80vh;
    width: 80%;
    background-color: #fff;
`

const CloseButton = styled.button`
    
`
const Label = styled.label`
    
`

const Input = styled.input`
    
`

const Textarea = styled.textarea`
    resize: none;
`

const IngredientGrid = styled.div`
    
`

const Container = styled.div`
    
`

const ButtonContainer = styled.div`
    
`

const AddButton = styled.button`
    

`

const RecipeEdit = ({recipe}) => {

    const {setPopup, handleRecipeChange} = useContext(RecipeContext);

    const handleChange = (changes) => {
        handleRecipeChange(recipe.id, {...recipe, ...changes})
    }

  return (
   
    <RecipeEditContianer>

        <CloseButton onClick={()=>setPopup(false)}>&times;</CloseButton>
        <Label htmlFor="name">Name</Label>
        <input 
            type="text" 
            name="name" 
            id = "name" 
            value={recipe.name}
            onInput={e => handleChange({name: e.target.value})}
        />
        <Label htmlFor="cookTime">Cook Time</Label>
        <Input 
            name="cookTime" 
            id = "cookTime" 
            type="text" 
            value={recipe.cookTime}
            onInput={e => handleChange({cookTime: e.target.value})}></Input>
        <Label htmlFor="servings">Servings</Label>
        <Input 
            name="servings" 
            id = "servings" 
            type="number" 
            min='1' 
            value={recipe.servings}
            onInput={e => handleChange({servings: e.target.value})}></Input>
        <Label htmlFor='instructions'>Instructions</Label>
        <Textarea 
            name="instructions" 
            id = "instructions" 
            value={recipe.instructions}
            onInput={e => handleChange({instructions: e.target.value})}></Textarea>
        <br/>
        <Label >Ingredients</Label>
        <IngredientGrid>
            <Container>Name</Container>
            <Container>Amount</Container>   
            <Container>
            {recipe.ingredients.map(ingredient => <RecipeIngredientEdit key={ingredient.id} ingredient = {ingredient}/> )}
            </Container>
        </IngredientGrid>
        <ButtonContainer>
           
            <AddButton>Add Ingredients</AddButton>
        </ButtonContainer>
    </RecipeEditContianer>
  )
}

export default RecipeEdit