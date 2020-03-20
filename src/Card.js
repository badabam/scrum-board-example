import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import styled from 'styled-components/macro'
import Bookmark from './Bookmark'
import useAnswerHeight from './hooks/useAnswerHeight'

Card.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
}

export default function Card({
  question,
  answer,
  onBookmarkClick,
  isBookmarked,
}) {
  const [isHidden, setIsHidden] = useState(true)
  const buttonText = isHidden ? 'Show answer' : 'Hide answer'
  const answerRef = useRef()
  const maxHeight = useAnswerHeight(answerRef)

  return (
    <CardWrapper>
      <Bookmark
        active={isBookmarked}
        onClick={onBookmarkClick} // guard
      />
      <p>{question}</p>
      <Answer maxHeight={maxHeight} ref={answerRef} active={!isHidden}>
        {answer}
      </Answer>
      <button onClick={toggleAnswer}>{buttonText}</button>
    </CardWrapper>
  )

  function toggleAnswer() {
    setIsHidden(!isHidden)
  }
}

const Answer = styled.p`
  transition: height 0.3s ease-in-out;
  height: ${props => (props.active ? props.maxHeight + 'px' : '0')};
  overflow-y: hidden;
  word-break: break-all;
`

const CardWrapper = styled.section`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #eee;
  box-shadow: 0 10px 10px #0002;
  position: relative;
`
