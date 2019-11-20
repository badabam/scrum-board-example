import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export default function Card({ question, answer }) {
  return (
    <CardWrapper>
      <p>{question}</p>
      <p>{answer}</p>
    </CardWrapper>
  )
}

Card.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

const CardWrapper = styled.section`
  padding: 20px;
  border-radius: 10px;
  background: #efefef;
  box-shadow: 0 10px 10px #0002;
`
