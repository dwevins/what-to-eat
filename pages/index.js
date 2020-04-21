import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #49474d;
  border: 2px solid #d1cfd3;
  border-radius: 1rem;
  color: #d1cfd3;
  display: block;
  font-size: 1rem;
  margin: 0 auto 2rem;
  padding: 0.5rem 1rem;
`;

const Heading = styled.h1`
  text-align:center;
  color: #d1cfd3;
`

const MealHeading = styled.h4`
  color: #d1cfd3;
  text-align: center;
`
const MealPart = styled.h2`
  color: #d1cfd3;
  text-align: center;
`

const Wrapper = styled.div`
  background-color: #49474d;
  min-height: 100vh;
  padding: 2rem 1rem;
  width: 100vw;
`

const meats = [
  'beef',
  'chicken',
  'steak',
  'fish',
  'pork'
]

const methods = [
  'grilled',
  'seared',
  'sauteed',
  'baked'
]

const sides = [
  'mashed potatoes',
  'a baked potato',
  'mac & cheese',
  'green beans',
  'peas',
  'asparagus',
  'baked beans',
  'a side salad',
  'broccoli',
  'mixed veggies'
]

const getMeal = () => {
  return {
    meat: pickRandomItem(meats),
    method: pickRandomItem(methods),
    side: pickRandomItem(sides)
  }
}

const pickRandomItem = arr => arr[Math.floor(Math.random() * arr.length)]

export default function Home() {
  const [meal, setMeal] = useState(null);

  return (
    <Wrapper>
      <Heading>What To Eat?</Heading>
      <Button onClick={() => setMeal(getMeal())}>Pick for me</Button>
      {meal && (
        <div>
          <MealHeading>you should eat</MealHeading>
          <MealPart>{meal.method} {meal.meat}</MealPart>
          <MealHeading>with</MealHeading>
          <MealPart>{meal.side}</MealPart>
        </div>
      )}
    </Wrapper>
  )
}
