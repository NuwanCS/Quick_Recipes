import RecipeList from "./components/RecipeList";
import {sampleRecipes} from './data';
import React, { useEffect, useState } from "react";
import RecipeEdit from "./components/RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'qucikRecipies.recipes'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [popup, setPopup] = useState(false);

  const selectedRecipe = recipes.find(recipe=> recipe.id === selectedRecipeId)


  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])
  
 
  const handleRecipeAdd = () =>{
    const newRecipe = {
      id: Date.now().toString(),
      name: 'New Recipe',
      cookTIme: '0:00',
      servings: '0',
      instructions: 'instructions',
      ingredients: [
        {id: Date.now().toString(), name: 'Name', amount: 1}]
  
    }
    setRecipes([...recipes, newRecipe])
  }

  const handleRecipeDelete = (id)=>{
    setRecipes(recipes.filter(recipe=> recipe.id!==id))
  }

  const handleRecipieEditID = (id)=>{
    setSelectedRecipeId(id);
    setPopup(!popup)
  }

  const handleRecipeChange = (id, recipe)=>{
    const newRecipe = [...recipes]
    const index = newRecipe.findIndex(r=> r.id === id)
    newRecipe[index] = recipe
  }
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipieEditID,
    selectedRecipe,
    popup,
    setPopup,
    handleRecipeChange
  }

  return (
   <RecipeContext.Provider value={recipeContextValue}>
    <RecipeList recipes = {recipes} />
    {popup && selectedRecipeId &&  <RecipeEdit recipe= {selectedRecipe}/>}
   </RecipeContext.Provider>
  );
}

export default App;
