import React from 'react'
import styled from 'styled-components'
import IngredientList from './IngredientList'

const Container = styled.div`
    
`

const TopContainer = styled.div`
    
`

const TitleContainer = styled.h3`
    
`

const ButtonConatiner = styled.div`
    
`

const EditButton = styled.button`
    
`

const DeleteButton = styled.button`
    
`

const CookTimeContianer = styled.div`
    
`

const CookTimeSpan = styled.span`
    
`

const TimeSpan = styled.span`
    
`

const ServingsContainer = styled.div`
    
`

const ServingsSpan = styled.span`
    
`

const Servings = styled.span`
    
`

const InstructionsContainer = styled.div`
    
`

const InstructionsSpan = styled.div`
    
`

const IngredientsContainer = styled.div`
    
`
const Recipe = (props) => {
    const {
        name,
        cookTIme,
        servings,
        instructions,
        ingredients
    } = props

  return (
    <Container>
        <TopContainer>
            <TitleContainer>
                {name}
            </TitleContainer>
            <ButtonConatiner>
                <EditButton>Edit</EditButton>
                <DeleteButton>Delete</DeleteButton>
            </ButtonConatiner>
        </TopContainer>
        <CookTimeContianer>
            <CookTimeSpan>
                CookTime: 
            </CookTimeSpan>
            <TimeSpan>
                {cookTIme}
            </TimeSpan>
        </CookTimeContianer>   
        <ServingsContainer>
        <ServingsSpan>
                Servings:
            </ServingsSpan>
            <Servings>
                {servings}
            </Servings>
        </ServingsContainer> 
        <InstructionsContainer>
            <InstructionsSpan>
            {instructions}
            </InstructionsSpan>

        </InstructionsContainer>
        <IngredientsContainer>
            <IngredientList ingredients={ingredients}/>    
        </IngredientsContainer>   
        
        
    </Container>
  )
}

export default Recipe 