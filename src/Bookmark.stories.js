import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Bookmark from './Bookmark'

export default {
  title: 'Bookmark',
  decorators: [withKnobs],
}

export const defaultVersion = () => (
  <Bookmark onClick={action('onClick')} active={boolean('Active', false)} />
)

defaultVersion.story = {
  name: 'Default',
}

export const active = () => (
  <Bookmark onClick={action('onClick')} active={boolean('Active', true)} />
)
