import React from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

import cards from './cards.json'

function App() {
  return (
    <Grid>
      {cards.map(({ question, answer, id }) => (
        <Card key={id} question={question} answer={answer} />
      ))}
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
`

export default App
