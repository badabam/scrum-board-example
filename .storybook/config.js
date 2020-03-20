import { withInfo } from '@storybook/addon-info'
import { addDecorator, configure } from '@storybook/react'
import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../src/GlobalStyles'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)
addDecorator(withInfo)
addDecorator(storyFn => (
  <>
    <GlobalStyles />
    <Wrapper>{storyFn()}</Wrapper>
  </>
))

const Wrapper = styled.div`
  max-width: 240px;
  max-height: 320px;
  border: 1px solid #ddd;
  padding: 20px;
  position: relative;
  margin: 20px;
`
