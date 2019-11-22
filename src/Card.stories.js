import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Card from './Card'
import styled from 'styled-components/macro'

export default {
  title: 'Card',
  decorators: [withKnobs],
}

export const standard = () => (
  <Card
    question={text('Question', 'Is this my question?')}
    answer={text('Answer', 'Yes, this is my answer.')}
    onBookmarkClick={action('onBookmarkClick')}
    isBookmarked={boolean('isBookmarked', false)}
  />
)
