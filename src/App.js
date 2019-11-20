import React, { useState } from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

import cardsData from './cards.json'

function App() {
  const [cards, setCards] = useState(cardsData)

  function toggleBookmark(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
  }

  return (
    <Grid>
      {cards.map(({ question, answer, id, isBookmarked }, index) => (
        <Card
          onBookmarkClick={() => toggleBookmark(index)}
          isBookmarked={isBookmarked}
          key={id}
          question={question}
          answer={answer}
        />
      ))}
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
`

export default App
