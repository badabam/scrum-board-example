import React from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

export default function Home({ cards, toggleBookmark }) {
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
