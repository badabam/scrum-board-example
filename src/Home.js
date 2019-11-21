import React from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

export default function Home({ cards, toggleBookmark }) {
  return (
    <Grid>
      {cards.map(({ question, answer, _id, isBookmarked }, index) => (
        <Card
          onBookmarkClick={() => toggleBookmark(_id)}
          isBookmarked={isBookmarked}
          key={_id}
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
  padding: 10px;
`
