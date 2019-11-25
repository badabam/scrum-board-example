import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Card from './Card'

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

standard.story = {
  name: 'Default',
}

export const bookmarked = () => (
  <Card
    question={text('Question', 'Is this my question?')}
    answer={text('Answer', 'Yes, this is my answer.')}
    onBookmarkClick={action('onBookmarkClick')}
    isBookmarked={boolean('isBookmarked', true)}
  />
)
